import Link from "next/link";
import { SERVICE_PAGES, type ProfileData } from "@/content/site";
import { SocialIcon } from "./icons";

export default function Footer({ profile: PROFILE }: { profile: ProfileData }) {
  return (
    <footer className="border-t border-border bg-bg-elevated px-6 py-10 sm:px-10 lg:px-16">
      {/* Links to every service and the work index: how crawlers reach those
          pages from the single-page site, and how a visitor does too. */}
      <nav
        aria-label="Services and work"
        className="mx-auto mb-8 flex max-w-5xl flex-wrap justify-center gap-x-5 gap-y-2 text-sm sm:justify-start"
      >
        {SERVICE_PAGES.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="text-muted transition hover:text-accent"
          >
            {s.service}
          </Link>
        ))}
        <Link href="/work" className="text-muted transition hover:text-accent">
          All work
        </Link>
      </nav>

      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {PROFILE.name}. Designed &amp; built
          with care.
        </p>
        <div className="flex gap-3">
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
    </footer>
  );
}
