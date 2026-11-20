/**
 * Server-side data loaders. Each reads from Supabase and falls back to the
 * static content in src/content/site.ts when the backend is unconfigured,
 * empty, or errors — so the public site is never broken by a backend issue.
 */
import "server-only";
import { cache } from "react";
import { createPublicClient } from "./supabase";
import * as fallback from "@/content/site";
import { LEGACY_COPY, LEGACY_SERVICE_COPY } from "@/content/legacy-copy";
import { mergeContentDefaults } from "./content-defaults";
import type {
  Experience,
  Education,
  Service,
  Skill,
  PortfolioItem,
  Testimonial,
  Client,
  PricingTier,
  Certification,
  Post,
} from "@/content/site";

type Settings = {
  profile: typeof fallback.PROFILE;
  hero: typeof fallback.HERO;
  about: typeof fallback.ABOUT;
  contact: typeof fallback.CONTACT;
  seo: typeof fallback.SEO;
};

export const getSettings = cache(async (): Promise<Settings> => {
  const sb = createPublicClient();
  const base: Settings = {
    profile: fallback.PROFILE,
    hero: fallback.HERO,
    about: fallback.ABOUT,
    contact: fallback.CONTACT,
    seo: fallback.SEO,
  };
  if (!sb) return base;
  try {
    const { data } = await sb
      .from("site_settings")
      .select("*")
      .eq("id", 1)
      .single();
    if (!data) return base;
    return {
      profile: mergeContentDefaults(
        base.profile,
        data.profile,
        LEGACY_COPY.profile,
      ),
      hero: mergeContentDefaults(base.hero, data.hero, LEGACY_COPY.hero),
      about: mergeContentDefaults(base.about, data.about, LEGACY_COPY.about),
      contact: mergeContentDefaults(
        base.contact,
        data.contact,
        LEGACY_COPY.contact,
      ),
      seo: mergeContentDefaults(base.seo, data.seo, LEGACY_COPY.seo),
    };
  } catch {
    return base;
  }
});

async function loadList<T>(
  table: string,
  map: (row: Record<string, unknown>) => T,
  fallbackData: T[],
): Promise<T[]> {
  const sb = createPublicClient();
  if (!sb) return fallbackData;
  try {
    const { data, error } = await sb
      .from(table)
      .select("*")
      .order("sort_order");
    if (error || !data || data.length === 0) return fallbackData;
    return data.map(map);
  } catch {
    return fallbackData;
  }
}

export const getExperience = () =>
  loadList<Experience>(
    "experience",
    (r) => ({
      role: r.role as string,
      company: r.company as string,
      location: r.location as string,
      dates: r.dates as string,
      highlights: (r.highlights as string[]) ?? [],
    }),
    fallback.EXPERIENCE,
  );

export const getEducation = () =>
  loadList<Education>(
    "education",
    (r) => ({
      degree: r.degree as string,
      institution: r.institution as string,
      year: r.year as string,
    }),
    fallback.EDUCATION,
  );

export const getServices = () =>
  loadList<Service>(
    "services",
    (r) => {
      const title = r.title as string;
      const current = fallback.SERVICES.find(
        (service) => service.title === title,
      );
      const stored = (r.description as string) ?? "";
      return {
        title,
        description:
          current && stored === LEGACY_SERVICE_COPY[title]
            ? current.description
            : stored,
        icon: r.icon as string,
      };
    },
    fallback.SERVICES,
  );

export const getSkills = () =>
  loadList<Skill>(
    "skills",
    (r) => ({ name: r.name as string, level: r.level as number }),
    fallback.SKILLS,
  );

export const getPortfolio = () =>
  loadList<PortfolioItem>(
    "portfolio_items",
    (r) => ({
      id: String(r.id),
      title: r.title as string,
      category: r.category as PortfolioItem["category"],
      description: (r.description as string) ?? "",
      image: (r.image_url as string) ?? "",
      link: (r.link as string) ?? undefined,
      video: (r.video_url as string) ?? undefined,
      isVideoPlaceholder: Boolean(r.is_video) && !r.video_url && !r.image_url,
    }),
    fallback.PORTFOLIO,
  );

/** Published posts, newest first. Drafts never reach the public site. */
export const getPosts = async (): Promise<Post[]> => {
  const rows = await loadList<Post & { isPublished: boolean }>(
    "posts",
    (r) => ({
      id: String(r.id),
      title: r.title as string,
      slug: (r.slug as string) || "",
      excerpt: (r.excerpt as string) ?? "",
      body: (r.body as string) ?? "",
      cover: (r.cover_url as string) ?? undefined,
      tags: (r.tags as string[]) ?? [],
      publishedAt: (r.published_at as string) ?? "",
      isPublished: Boolean(r.is_published),
    }),
    fallback.POSTS.map((p) => ({ ...p, isPublished: true })),
  );
  return rows
    .filter((r) => r.isPublished)
    .map((r) => {
      const post: Post = {
        id: r.id,
        title: r.title,
        slug: r.slug,
        excerpt: r.excerpt,
        body: r.body,
        cover: r.cover,
        tags: r.tags,
        publishedAt: r.publishedAt,
      };
      return post;
    });
};

export const getCertifications = () =>
  loadList<Certification>(
    "certifications",
    (r) => ({
      title: r.title as string,
      issuer: r.issuer as string,
      date: r.date as string,
      credentialId: (r.credential_id as string) ?? undefined,
      url: (r.url as string) ?? undefined,
    }),
    fallback.CERTIFICATIONS,
  );

export const getTestimonials = () =>
  loadList<Testimonial>(
    "testimonials",
    (r) => ({
      name: r.name as string,
      title: (r.title as string) ?? "",
      company: (r.company as string) ?? "",
      quote: r.quote as string,
      photo: (r.photo_url as string) ?? undefined,
      placeholder: String(r.name ?? "").startsWith("[Add"),
    }),
    fallback.TESTIMONIALS,
  );

export const getClients = () =>
  loadList<Client>(
    "clients",
    (r) => ({
      name: r.name as string,
      logo: (r.logo_url as string) ?? undefined,
    }),
    fallback.CLIENTS,
  );

export const getPricing = () =>
  loadList<PricingTier>(
    "pricing_tiers",
    (r) => ({
      name: r.name as string,
      price: (r.price as string) ?? "",
      blurb: (r.blurb as string) ?? "",
      features: (r.features as string[]) ?? [],
      highlighted: Boolean(r.highlighted),
    }),
    fallback.PRICING,
  );
