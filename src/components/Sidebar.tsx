import { MapPin, Mail, Phone } from "lucide-react";
import type { ProfileData } from "@/content/site";
import { SocialIcon } from "./icons";
import { BrandMark } from "./BrandMark";

export default function Sidebar({
  profile: PROFILE,
}: {
  profile: ProfileData;
}) {
  return (
    <aside
      aria-label={`About ${PROFILE.name}`}
      className="hidden lg:flex fixed left-0 top-0 z-30 h-screen w-[280px] flex-col justify-between gap-6 overflow-y-auto border-r border-border bg-bg-elevated p-7"
    >
      <div>
        {/* Identity: uploaded logo when set, otherwise the built-in mark */}
        <div className="flex flex-col items-center text-center">
          {PROFILE.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={PROFILE.logo}
              alt={`${PROFILE.name} logo`}
              className="h-24 w-auto max-w-[180px] object-contain"
            />
          ) : (
            <BrandMark className="h-24 w-24" />
          )}
          {/* h2, not h1 — the Hero headline is the page's single h1 */}
          <h2 className="mt-5 font-display text-2xl font-bold tracking-tight">
            {PROFILE.name}
          </h2>
          <p className="mt-1 text-sm text-muted">{PROFILE.role}</p>
        </div>

        {/* Contact details */}
        <ul className="mt-8 space-y-4 text-sm">
          <li className="flex items-center gap-3 text-muted">
            <Mail className="h-4 w-4 shrink-0 text-accent" />
            <a
              href={`mailto:${PROFILE.email}`}
              className="break-all hover:text-text"
            >
              {PROFILE.email}
            </a>
          </li>
          <li className="flex items-center gap-3 text-muted">
            <Phone className="h-4 w-4 shrink-0 text-accent" />
            <a href={`tel:+${PROFILE.phoneRaw}`} className="hover:text-text">
              {PROFILE.phone}
            </a>
          </li>
          <li className="flex items-start gap-3 text-muted">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>
              {PROFILE.location}
              <span className="mt-1 block text-xs">
                Remote across Canada · Pacific to Atlantic
              </span>
            </span>
          </li>
        </ul>

        {/* Socials */}
        <div className="mt-8 flex gap-3">
          {PROFILE.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition hover:border-accent hover:text-accent"
            >
              <SocialIcon name={s.icon} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <a
        href="#contact"
        className="mt-8 block rounded-full bg-accent py-3 text-center font-semibold text-[#06150d] transition hover:bg-accent-dim"
      >
        Start a project ↗
      </a>
    </aside>
  );
}
