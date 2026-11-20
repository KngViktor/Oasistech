"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Play } from "lucide-react";
import {
  PORTFOLIO_CATEGORIES,
  type PortfolioItem,
  type PortfolioCategory,
} from "@/content/site";
import { PROJECT_PRESENTATION } from "@/content/projects";
import { withSlugs } from "@/lib/slug";
import { featuredPortfolioEntries } from "@/lib/portfolio";

type Filter = "All" | PortfolioCategory;
const FILTERS: Filter[] = ["All", ...PORTFOLIO_CATEGORIES];

export default function Portfolio({
  items,
  featured = true,
}: {
  items: PortfolioItem[];
  featured?: boolean;
}) {
  const [filter, setFilter] = useState<Filter>("All");
  const entries = withSlugs(items, (p) => p.title);
  const ordered = featured ? featuredPortfolioEntries(items) : entries;
  const filtered = ordered.filter(
    ({ item }) => filter === "All" || item.category === filter,
  );
  const visible = featured ? filtered.slice(0, 6) : filtered;

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className={
        featured
          ? "scroll-mt-24 border-b border-border px-6 py-20 sm:px-10 lg:px-12 lg:py-24"
          : "scroll-mt-24"
      }
    >
      <div className="mx-auto max-w-6xl">
        {featured && (
          <>
            <span className="section-eyebrow">SELECTED WORK</span>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
              <h2
                id="portfolio-heading"
                className="max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Good design. Useful products.
                <br />
                <span className="text-muted">
                  Built for the people using them.
                </span>
              </h2>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 py-2 text-sm font-medium text-accent"
              >
                All {items.length} projects <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              A selection of brand websites, storefronts and business
              applications. Open a project to explore the brief, the interface
              and the live product.
            </p>
          </>
        )}
        {!featured && (
          <h2 id="portfolio-heading" className="sr-only">
            Browse projects
          </h2>
        )}
        <div aria-label="Filter projects" className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2.5 text-sm font-medium transition ${filter === f ? "border-accent bg-accent text-[#06150d]" : "border-border text-muted hover:border-accent hover:text-text"}`}
            >
              {f}
            </button>
          ))}
        </div>
        <p role="status" className="mt-4 text-xs text-muted">
          {featured
            ? `${visible.length} selected projects`
            : `${visible.length} projects`}
          {filter !== "All" ? ` · ${filter}` : ""}
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {visible.map(({ item, slug }) => {
            const presentation = PROJECT_PRESENTATION[slug];
            return (
              <article
                key={slug}
                className="group min-w-0 overflow-hidden rounded-2xl border border-border bg-bg-card transition hover:border-accent/50"
              >
                <Link
                  href={`/work/${slug}`}
                  className="block"
                  aria-label={`Explore ${item.title}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-bg-elevated">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={`${item.title} project preview`}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 36vw"
                        className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Play className="h-10 w-10 text-accent" />
                      </div>
                    )}
                    {item.video && (
                      <span className="absolute bottom-4 left-4 rounded-full bg-black/80 p-3">
                        <Play className="h-4 w-4 text-white" />
                      </span>
                    )}
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                      {presentation?.focus ?? item.category}
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <h3 className="font-display text-xl font-semibold">
                        {item.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition group-hover:text-accent" />
                    </div>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
                      {presentation?.summary ?? item.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold">
                      Explore project <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
        {featured && (
          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-border px-6 py-5">
            <p className="text-sm text-muted">
              Looking for something closer to your industry?
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              Explore the full portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
