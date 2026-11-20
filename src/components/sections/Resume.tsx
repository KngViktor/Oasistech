import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import type { Experience, Education } from "@/content/site";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function Resume({
  experience: EXPERIENCE,
  education: EDUCATION,
}: {
  experience: Experience[];
  education: Education[];
}) {
  return (
    <Section id="resume" eyebrow="RESUME" title="Experience & education that backs the work.">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Experience */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-accent" />
            <h3 className="font-display text-xl font-semibold">Experience</h3>
          </div>
          <ol className="relative space-y-8 border-l border-border pl-8">
            {EXPERIENCE.map((exp, i) => (
              <Reveal key={`${exp.company}-${i}`} delay={i * 0.05}>
                <li className="relative">
                  <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {exp.dates}
                  </p>
                  <h4 className="mt-1 font-display text-lg font-semibold">{exp.role}</h4>
                  <p className="mt-0.5 flex items-center gap-2 text-sm text-muted">
                    {exp.company}
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {exp.location}
                    </span>
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Education */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-accent" />
            <h3 className="font-display text-xl font-semibold">Education</h3>
          </div>
          <ol className="relative space-y-8 border-l border-border pl-8">
            {EDUCATION.map((ed, i) => (
              <Reveal key={ed.degree} delay={i * 0.05}>
                <li className="relative">
                  <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {ed.year}
                  </p>
                  <h4 className="mt-1 font-display text-lg font-semibold">{ed.degree}</h4>
                  <p className="mt-0.5 text-sm text-muted">{ed.institution}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
