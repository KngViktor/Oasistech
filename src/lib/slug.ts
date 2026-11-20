/**
 * Slugs for the per-project and per-service pages.
 *
 * Derived from the title rather than stored, so a project added through the
 * admin dashboard gets a URL without a migration. Titles are stable in
 * practice; if two ever collide, the second keeps a numeric suffix.
 */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Slugs for a list, de-duplicated in order. */
export function withSlugs<T>(items: T[], titleOf: (item: T) => string) {
  const seen = new Map<string, number>();
  return items.map((item) => {
    const base = slugify(titleOf(item)) || "item";
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    return { item, slug: count === 0 ? base : `${base}-${count + 1}` };
  });
}
