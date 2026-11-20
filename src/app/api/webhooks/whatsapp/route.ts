import { createHmac, timingSafeEqual } from "node:crypto";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 1024 * 1024;

function equal(left: string, right: string) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  return a.length === b.length && timingSafeEqual(a, b);
}

/** Meta's one-time callback verification handshake. */
export async function GET(req: Request) {
  const expected = process.env.WHATSAPP_VERIFY_TOKEN;
  if (!expected) return new Response("Webhook is not configured", { status: 503 });

  const params = new URL(req.url).searchParams;
  const token = params.get("hub.verify_token") ?? "";
  const challenge = params.get("hub.challenge");
  if (
    params.get("hub.mode") !== "subscribe" ||
    !challenge ||
    challenge.length > 1024 ||
    !equal(token, expected)
  ) {
    return new Response("Verification failed", { status: 403 });
  }

  return new Response(challenge, {
    headers: { "Content-Type": "text/plain", "Cache-Control": "no-store" },
  });
}

/** Accept authentic delivery callbacks without logging private message content. */
export async function POST(req: Request) {
  const appSecret = process.env.META_APP_SECRET;
  if (!appSecret) return new Response("Webhook is not configured", { status: 503 });

  const signature = req.headers.get("x-hub-signature-256") ?? "";
  if (!/^sha256=[a-f0-9]{64}$/i.test(signature)) {
    return new Response("Invalid signature", { status: 401 });
  }
  if (Number(req.headers.get("content-length")) > MAX_BODY_BYTES) {
    return new Response("Payload too large", { status: 413 });
  }

  const body = await req.text();
  if (Buffer.byteLength(body) > MAX_BODY_BYTES) {
    return new Response("Payload too large", { status: 413 });
  }
  const expected = createHmac("sha256", appSecret).update(body).digest();
  const supplied = Buffer.from(signature.slice(7), "hex");
  if (!timingSafeEqual(supplied, expected)) {
    return new Response("Invalid signature", { status: 401 });
  }

  let event: unknown;
  try {
    event = JSON.parse(body);
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }
  if (
    !event ||
    typeof event !== "object" ||
    !("object" in event) ||
    event.object !== "whatsapp_business_account"
  ) {
    return new Response("Invalid event", { status: 400 });
  }

  // This endpoint acknowledges callbacks. It does not act on inbound messages
  // or enable outbound enquiry alerts; those need separate sender credentials.
  return Response.json({ received: true });
}
