import type { PortfolioItem } from "@/content/site";
import { FEATURED_PROJECTS } from "@/content/projects";
import { withSlugs } from "./slug";

/** Shared order aligns homepage structured data with the visible cards. */
export function featuredPortfolioEntries(items: PortfolioItem[]) {
  return withSlugs(items, (item) => item.title).sort((a, b) => {
    const aRank = FEATURED_PROJECTS.indexOf(a.slug);
    const bRank = FEATURED_PROJECTS.indexOf(b.slug);
    return (
      (aRank < 0 ? FEATURED_PROJECTS.length : aRank) -
      (bRank < 0 ? FEATURED_PROJECTS.length : bRank)
    );
  });
}
