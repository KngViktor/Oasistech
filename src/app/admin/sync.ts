/**
 * Finds portfolio items that exist in src/content/site.ts but not yet in
 * Supabase, so the admin can import new projects without re-running seed.sql.
 * Matching is by link (when present) or title, case-insensitive, so rows the
 * admin has edited in the dashboard are never duplicated or overwritten.
 */
import "server-only";
import { PORTFOLIO, type PortfolioItem } from "@/content/site";

type ExistingRow = { title?: unknown; link?: unknown };

const norm = (v: unknown) =>
  String(v ?? "")
    .trim()
    .toLowerCase()
    .replace(/\/+$/, "");

export function missingPortfolioItems(existing: ExistingRow[]): PortfolioItem[] {
  const titles = new Set(existing.map((r) => norm(r.title)).filter(Boolean));
  const links = new Set(existing.map((r) => norm(r.link)).filter(Boolean));
  return PORTFOLIO.filter(
    (item) => !titles.has(norm(item.title)) && !(item.link && links.has(norm(item.link)))
  );
}
