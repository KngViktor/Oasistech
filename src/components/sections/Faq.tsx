import { FAQS } from "@/content/site";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

/**
 * Visible FAQ. The same questions are emitted as FAQPage structured data in
 * the homepage graph. The markup must describe the same visible answers;
 * it is not a guarantee of search or answer-engine placement.
 */
export default function Faq() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Questions clients ask before we start."
    >
      <div className="space-y-3">
        {FAQS.map((item, i) => (
          <Reveal key={item.question} delay={i * 0.04}>
            <details className="group rounded-2xl border border-border bg-bg-card p-5 open:border-accent/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold">
                <h3 className="text-base font-semibold">{item.question}</h3>
                <span
                  aria-hidden
                  className="shrink-0 text-xl leading-none text-accent transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
