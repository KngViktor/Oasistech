import { Award, ExternalLink } from "lucide-react";
import type { Certification } from "@/content/site";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function Certifications({
  certifications: CERTS,
}: {
  certifications: Certification[];
}) {
  if (!CERTS.length) return null;
  return (
    <Section
      id="certifications"
      eyebrow="CERTIFICATIONS"
      title="Certified, and always learning."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((c, i) => (
          <Reveal key={`${c.title}-${i}`} delay={(i % 3) * 0.05}>
            <div className="flex h-full gap-4 rounded-2xl border border-border bg-bg-card p-5 transition hover:border-accent/60">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Award className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-sm font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-xs text-muted">
                  {c.issuer} · {c.date}
                </p>
                {c.credentialId && (
                  <p className="mt-1 break-all text-[11px] text-muted/70">
                    ID: {c.credentialId}
                  </p>
                )}
                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                  >
                    Show credential <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
