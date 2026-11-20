import type {
  AboutData,
  Education,
  PortfolioItem,
  ProfileData,
  SeoData,
  Service,
  Skill,
} from "@/content/site";
import { FAQS, SERVICE_PAGES } from "@/content/site";
import { PROJECT_PRESENTATION } from "@/content/projects";
import { getSiteUrl } from "./site-url";
import { absoluteUrl } from "./seo";
import { featuredPortfolioEntries } from "./portfolio";

export function homeStructuredData({
  profile,
  about,
  education,
  services,
  skills,
  portfolio,
  seo,
}: {
  profile: ProfileData;
  about: AboutData;
  education: Education[];
  services: Service[];
  skills: Skill[];
  portfolio: PortfolioItem[];
  seo: SeoData;
}) {
  const site = getSiteUrl();
  const personId = `${site}#victor`;
  const person = {
    "@type": "Person",
    "@id": personId,
    name: profile.name,
    jobTitle: profile.role,
    description: about.body,
    url: absoluteUrl("/"),
    email: profile.email,
    telephone: profile.phone,
    image: profile.headshot ? absoluteUrl(profile.headshot) : undefined,
    homeLocation: { "@type": "Place", name: profile.location },
    knowsAbout: [...skills.map((s) => s.name), ...services.map((s) => s.title)],
    alumniOf: education.map((e) => ({
      "@type": "CollegeOrUniversity",
      name: e.institution,
    })),
    sameAs: profile.socials.map((s) => s.url),
    makesOffer: services.map((s) => {
      const page = SERVICE_PAGES.find((page) => page.service === s.title);
      return {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
          url: absoluteUrl(page ? `/services/${page.slug}` : "/#services"),
          provider: { "@id": personId },
          areaServed: "Worldwide (remote)",
        },
      };
    }),
  };
  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        "@id": `${site}#website`,
        name: profile.name,
        url: absoluteUrl("/"),
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site}#profile`,
        url: absoluteUrl("/"),
        name: seo.metaTitle,
        mainEntity: { "@id": personId },
        isPartOf: { "@id": `${site}#website` },
      },
      {
        "@type": "ItemList",
        "@id": `${site}#work`,
        name: "Selected websites and applications",
        itemListElement: featuredPortfolioEntries(portfolio)
          .slice(0, 6)
          .map(({ item, slug }, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "CreativeWork",
              "@id": `${absoluteUrl(`/work/${slug}`)}#project`,
              name: item.title,
              description:
                PROJECT_PRESENTATION[slug]?.summary ?? item.description,
              url: absoluteUrl(`/work/${slug}`),
              creator: { "@id": personId },
            },
          })),
      },
      // FAQ markup describes the visible answers; it does not promise a Google rich result.
      {
        "@type": "FAQPage",
        "@id": `${site}#faq`,
        url: absoluteUrl("/#faq"),
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}
