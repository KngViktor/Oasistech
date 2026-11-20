import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const routeSource = readFileSync(
  new URL("../src/app/api/contact/route.ts", import.meta.url),
  "utf8",
);
const valid = {
  name: "Test Client",
  email: "client@example.com",
  projectType: "Website Development",
  message: "A new website for our business.",
};

function route({
  database = false,
  databaseError = null,
  email = false,
  emailError = null,
  emailId = "email-test-id",
  sender = "Portfolio <enquiries@example.com>",
} = {}) {
  const saved = [];
  const mailed = [];
  const imports = {
    "next/server": {
      NextResponse: { json: (body, options) => Response.json(body, options) },
    },
    "@/content/site": {
      PROJECT_TYPES: ["Website Development", "App Development"],
    },
    "@/lib/supabase": {
      isSupabaseConfigured: database,
      createServerSupabase: async () => ({
        from: () => ({
          insert: async (row) => {
            saved.push(row);
            return { error: databaseError };
          },
        }),
      }),
    },
    "@/lib/site-url": {
      getSiteUrl: () => "https://www.victorabah.com",
    },
    resend: {
      Resend: class {
        emails = {
          send: async (message) => {
            mailed.push(message);
            return { data: emailId ? { id: emailId } : null, error: emailError };
          },
        };
      },
    },
  };
  const context = {
    exports: {},
    require: (id) => {
      if (!(id in imports)) throw new Error(`Unexpected import ${id}`);
      return imports[id];
    },
    process: {
      env: email
        ? {
            RESEND_API_KEY: "test-key",
            CONTACT_NOTIFY_EMAIL: "owner@example.com",
            CONTACT_FROM_EMAIL: sender,
          }
        : {},
    },
    console: { error() {} },
  };
  vm.runInNewContext(
    ts.transpileModule(routeSource, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
      },
    }).outputText,
    context,
  );
  const send = (body) =>
    context.exports.POST(
      new Request("http://localhost/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }),
    );
  return { send, saved, mailed };
}

test("an enquiry without a phone is saved and accepted", async () => {
  const { send, saved } = route({ database: true });
  assert.equal((await send(valid)).status, 200);
  assert.equal(saved.length, 1);
  assert.equal(saved[0].phone, "");
  assert.equal(saved[0].email, valid.email);
});

test("a provided invalid phone is rejected before saving", async () => {
  const { send, saved } = route({ database: true });
  assert.equal((await send({ ...valid, phone: "not-a-phone" })).status, 422);
  assert.equal(saved.length, 0);
});

test("no delivery mechanism returns an honest failure", async () => {
  const response = await route().send(valid);
  assert.equal(response.status, 503);
  assert.match((await response.json()).error, /has not been sent/);
});

test("email-only delivery must be accepted by the provider", async () => {
  const accepted = route({ email: true });
  assert.equal((await accepted.send(valid)).status, 200);
  assert.equal(accepted.mailed[0].replyTo, valid.email);
  const rejected = route({
    email: true,
    emailError: { message: "Provider rejected email" },
  });
  assert.equal((await rejected.send(valid)).status, 503);
});

test("saved enquiries survive optional notification failure", async () => {
  const { send, saved } = route({
    database: true,
    email: true,
    emailError: { message: "Notification unavailable" },
  });
  assert.equal((await send(valid)).status, 200);
  assert.equal(saved.length, 1);
});

test("email alerts include safe enquiry details, reply-to and a private inbox link", async () => {
  const { send, mailed } = route({ email: true });
  assert.equal((await send({ ...valid, name: '<b>Client</b>', message: 'Please build <script>alert(1)</script>' })).status, 200);
  assert.equal(mailed[0].to, "owner@example.com");
  assert.equal(mailed[0].from, "Portfolio <enquiries@example.com>");
  assert.equal(mailed[0].replyTo, valid.email);
  assert.match(mailed[0].html, /&lt;script&gt;/);
  assert.doesNotMatch(mailed[0].html, /<script>/);
  assert.match(mailed[0].text, /https:\/\/www\.victorabah\.com\/admin\/submissions/);
});

test("email-only delivery requires a sender and a provider receipt", async () => {
  const noSender = route({ email: true, sender: "" });
  assert.equal((await noSender.send(valid)).status, 503);
  assert.equal(noSender.mailed.length, 0);
  assert.equal((await route({ email: true, emailId: null }).send(valid)).status, 503);
});

test("database write failure never claims a successful submission", async () => {
  assert.equal(
    (
      await route({
        database: true,
        databaseError: { message: "Unavailable" },
      }).send(valid)
    ).status,
    500,
  );
});

test("null and array JSON bodies are rejected without crashing", async () => {
  const { send } = route();
  assert.equal((await send(null)).status, 400);
  assert.equal((await send([])).status, 400);
});

test("unknown services are rejected and honeypots are not saved", async () => {
  const { send, saved } = route({ database: true });
  assert.equal((await send({ ...valid, projectType: "invalid" })).status, 422);
  assert.equal((await send({ ...valid, website: "spam" })).status, 200);
  assert.equal(saved.length, 0);
});
