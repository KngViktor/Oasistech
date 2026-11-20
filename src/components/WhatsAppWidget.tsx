import { MessageCircle } from "lucide-react";
import type { ProfileData } from "@/content/site";

export default function WhatsAppWidget({
  profile,
  message,
}: {
  profile: ProfileData;
  message: string;
}) {
  return (
    <a
      href={`https://wa.me/${profile.phoneRaw}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuss your project on WhatsApp (opens in a new tab)"
      className="fixed bottom-5 right-5 z-30 inline-flex h-12 items-center gap-2 rounded-full border border-accent/40 bg-bg-elevated px-4 text-accent shadow-lg shadow-black/30 transition hover:border-accent hover:bg-bg-card"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-xs font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}
