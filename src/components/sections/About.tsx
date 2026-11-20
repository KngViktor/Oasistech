import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import type { AboutData, ProfileData } from "@/content/site";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

const HIGHLIGHTS = [
  "6+ years building for the web",
  "One point of contact for design and development",
  "Clear scope and visible progress",
  "Launch, handover and ongoing support",
];

export default function About({
  about: ABOUT,
  profile,
}: {
  about: AboutData;
  profile: ProfileData;
}) {
  return (
    <Section id="about" eyebrow={ABOUT.eyebrow} title={ABOUT.headline}>
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">{ABOUT.body}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-bg-card p-6">
            <div className="mb-6 flex items-center gap-4 border-b border-border pb-6">
              <Image
                src={profile.headshot}
                alt={profile.name}
                width={64}
                height={64}
                className="h-16 w-16 rounded-xl object-cover"
              />
              <div>
                <p className="font-display font-semibold">{profile.name}</p>
                <p className="mt-1 text-xs text-muted">{profile.role}</p>
              </div>
            </div>
            <ul className="space-y-4">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
