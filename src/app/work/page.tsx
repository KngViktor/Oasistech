import type { Metadata } from "next";
import { getPortfolio } from "@/lib/data";
import Portfolio from "@/components/sections/Portfolio";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { withSlugs } from "@/lib/slug";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";

export const revalidate = 300;

export const metadata: Metadata = pageMetadata({
  title: "Websites & apps built end to end | Victor Abah",
  description:
    "Every website and application I have built end to end: POS and inventory apps, school and hospital systems, logistics, restaurant, e-commerce and booking sites.",
  path: "/work",
});

export default async function WorkIndex() {
  const portfolio = await getPortfolio();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: absoluteUrl("/work"),
    name: "Websites and applications by Victor Abah",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: withSlugs(portfolio, (p) => p.title).map(
        ({ item, slug }, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.title,
          url: absoluteUrl(`/work/${slug}`),
        }),
      ),
    },
  };

  return (
    <PageShell
      eyebrow="WORK"
      title="Different businesses. Considered digital experiences."
      intro="Explore websites, storefronts and applications across retail, travel, healthcare and business operations. Filter by the kind of build you have in mind, then open a project for the brief and live experience."
    >
      <JsonLd value={jsonLd} />
      <Portfolio items={portfolio} featured={false} />
    </PageShell>
  );
}
