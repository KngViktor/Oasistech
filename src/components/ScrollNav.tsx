"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, type ProfileData } from "@/content/site";
import { SocialIcon, NavIcon } from "./icons";

export default function ScrollNav({
  profile: PROFILE,
}: {
  profile: ProfileData;
}) {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDialogElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = menuRef.current;
    if (!dialog) return;
    if (menuOpen) dialog.showModal();
    else dialog.close();
    const previous = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop right rail — icon capsule */}
      <nav
        aria-label="Main navigation"
        className="hidden lg:flex fixed right-4 top-1/2 z-30 -translate-y-1/2 flex-col items-center gap-1 rounded-full border border-border bg-bg-elevated/90 px-2 py-4 backdrop-blur"
      >
        {NAV_ITEMS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={label}
            aria-current={active === id ? "location" : undefined}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full transition"
          >
            <span
              className={`pointer-events-none absolute right-12 whitespace-nowrap rounded-md border border-border bg-bg-card px-2.5 py-1 text-xs font-medium opacity-0 shadow-lg transition group-hover:opacity-100 ${
                active === id ? "text-accent" : "text-text"
              }`}
            >
              {label}
            </span>
            <NavIcon
              name={id}
              className={`h-[18px] w-[18px] transition ${
                active === id
                  ? "text-accent"
                  : "text-muted group-hover:text-text"
              }`}
            />
          </a>
        ))}
      </nav>

      {/* Mobile top bar */}
      <header className="lg:hidden fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border bg-bg-elevated/95 px-5 py-4 backdrop-blur">
        <a href="#home" className="font-display text-lg font-bold">
          {PROFILE.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={PROFILE.logo}
              alt={PROFILE.name}
              className="h-8 w-auto max-w-[150px] object-contain"
            />
          ) : (
            <>
              Victor<span className="text-accent">.</span>
            </>
          )}
        </a>
        <button
          ref={toggleRef}
          aria-label="Open navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-accent"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Mobile slide-in menu */}
      <dialog
        ref={menuRef}
        id="mobile-navigation"
        aria-label="Site navigation"
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto bg-bg p-6 text-text backdrop:bg-black/70"
        onCancel={() => setMenuOpen(false)}
        onClose={() => {
          setMenuOpen(false);
          toggleRef.current?.focus();
        }}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          className="absolute right-5 top-4 flex h-11 w-11 items-center justify-center rounded-lg border border-border"
          aria-label="Close navigation"
        >
          <X className="h-5 w-5" />
        </button>
        <nav
          aria-label="Mobile navigation"
          className="flex min-h-full flex-col items-center justify-center gap-5 py-16"
        >
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className={`font-display text-2xl font-semibold ${
                active === id ? "text-accent" : "text-text"
              }`}
            >
              {label}
            </a>
          ))}
          <div className="mt-6 flex gap-4">
            {PROFILE.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted"
              >
                <SocialIcon name={s.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </nav>
      </dialog>
    </>
  );
}
