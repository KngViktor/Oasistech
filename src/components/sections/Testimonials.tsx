import Image from "next/image";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/content/site";
import Section from "@/components/Section";

export default function Testimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const published = testimonials.filter(
    (t) => !t.placeholder && t.quote && t.name && !t.name.startsWith("[Add"),
  );
  if (!published.length) return null;
  const ordered = [...published].sort(
    (a, b) => Number(b.company === "Fastora") - Number(a.company === "Fastora"),
  );
  return (
    <Section
      id="testimonials"
      eyebrow="CLIENT PERSPECTIVES"
      title="The work matters. So does the experience."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {ordered.map((t, i) => (
          <figure
            key={`${t.name}-${i}`}
            className={`flex flex-col rounded-2xl border border-border bg-bg-card p-6 sm:p-8 ${i === 0 ? "md:col-span-2" : ""}`}
          >
            <Quote aria-hidden="true" className="h-7 w-7 text-accent" />
            <blockquote
              className={`mt-5 flex-1 leading-relaxed ${i === 0 ? "max-w-4xl text-lg sm:text-xl" : "text-sm text-muted"}`}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3 border-t border-border pt-5">
              {t.photo ? (
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent"
                >
                  {t.name.charAt(0)}
                </span>
              )}
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="mt-1 text-xs text-muted">
                  {t.title}
                  {t.company ? `, ${t.company}` : ""}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
