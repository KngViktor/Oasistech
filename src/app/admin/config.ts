/**
 * Declarative schema for the config-driven admin editor. Each collection maps
 * to a Supabase table; the generic ResourceEditor + CRUD server actions render
 * and persist these fields, so adding a field is a one-line change here.
 */
export type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "boolean"
  | "array"
  | "select"
  | "image"
  | "video";

export type Field = {
  name: string;
  label: string;
  type: FieldType;
  options?: string[]; // for select
  help?: string;
  accept?: string; // for image upload input
};

export type Resource = {
  key: string; // route segment
  table: string; // supabase table
  label: string; // plural nav label
  singular: string;
  titleField: string; // field used as the row heading
  fields: Field[];
  /**
   * Where a newly added row lands. Portfolio and blog read newest-first on the
   * public site, so a new one belongs at the top; everything else keeps the
   * order the list is arranged in and appends.
   */
  newestFirst?: boolean;
};

export const RESOURCES: Resource[] = [
  {
    key: "experience",
    table: "experience",
    label: "Experience",
    singular: "Role",
    titleField: "role",
    fields: [
      { name: "role", label: "Role", type: "text" },
      { name: "company", label: "Company", type: "text" },
      { name: "location", label: "Location", type: "text" },
      { name: "dates", label: "Dates", type: "text", help: "e.g. Feb 2025 – Aug 2025" },
      { name: "highlights", label: "Highlights", type: "array", help: "One bullet per line" },
    ],
  },
  {
    key: "education",
    table: "education",
    label: "Education",
    singular: "Qualification",
    titleField: "degree",
    fields: [
      { name: "degree", label: "Degree", type: "text" },
      { name: "institution", label: "Institution", type: "text" },
      { name: "year", label: "Year", type: "text" },
    ],
  },
  {
    key: "services",
    table: "services",
    label: "Services",
    singular: "Service",
    titleField: "title",
    fields: [
      { name: "title", label: "Title", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      {
        name: "icon",
        label: "Icon",
        type: "select",
        options: ["cpu", "smartphone", "code", "bot", "sparkles", "film", "palette"],
      },
    ],
  },
  {
    key: "skills",
    table: "skills",
    label: "Skills",
    singular: "Skill",
    titleField: "name",
    fields: [
      { name: "name", label: "Skill", type: "text" },
      { name: "level", label: "Level (0–100)", type: "number" },
    ],
  },
  {
    key: "portfolio",
    table: "portfolio_items",
    label: "Portfolio",
    singular: "Project",
    titleField: "title",
    newestFirst: true,
    fields: [
      { name: "title", label: "Title", type: "text" },
      {
        name: "category",
        label: "Category",
        type: "select",
        options: ["Websites", "App Development"],
      },
      { name: "description", label: "Description", type: "textarea" },
      { name: "image_url", label: "Image / Video poster", type: "image", accept: "image/*" },
      { name: "video_url", label: "Video file (mp4)", type: "video", accept: "video/*", help: "Upload to make this a playable video" },
      { name: "link", label: "External link", type: "text", help: "Live site or video URL" },
      { name: "is_video", label: "Video item", type: "boolean" },
    ],
  },
  {
    key: "blog",
    table: "posts",
    label: "Blog",
    singular: "Post",
    titleField: "title",
    newestFirst: true,
    fields: [
      { name: "title", label: "Title", type: "text" },
      { name: "slug", label: "URL slug", type: "text", help: "e.g. choosing-a-pos-system — leave blank to use the title" },
      { name: "excerpt", label: "Excerpt", type: "textarea", help: "One or two sentences, used on the blog index and in search results" },
      { name: "body", label: "Body", type: "textarea", help: "Blank line between paragraphs. Start a line with ## for a heading." },
      { name: "cover_url", label: "Cover image", type: "image", accept: "image/*" },
      { name: "tags", label: "Tags", type: "array", help: "One per line" },
      { name: "published_at", label: "Date", type: "text", help: "e.g. 7 October 2026" },
      { name: "is_published", label: "Published (visible on the site)", type: "boolean" },
    ],
  },
  {
    key: "testimonials",
    table: "testimonials",
    label: "Testimonials",
    singular: "Testimonial",
    titleField: "name",
    fields: [
      { name: "name", label: "Name", type: "text" },
      { name: "title", label: "Title", type: "text" },
      { name: "company", label: "Company", type: "text" },
      { name: "quote", label: "Quote", type: "textarea" },
      { name: "photo_url", label: "Photo", type: "image", accept: "image/*" },
    ],
  },
  {
    key: "certifications",
    table: "certifications",
    label: "Certifications",
    singular: "Certification",
    titleField: "title",
    fields: [
      { name: "title", label: "Title", type: "text" },
      { name: "issuer", label: "Issuer", type: "text" },
      { name: "date", label: "Date", type: "text", help: "e.g. May 2025" },
      { name: "credential_id", label: "Credential ID", type: "text" },
      { name: "url", label: "Credential URL", type: "text" },
    ],
  },
  {
    key: "clients",
    table: "clients",
    label: "Clients",
    singular: "Client",
    titleField: "name",
    fields: [
      { name: "name", label: "Name", type: "text" },
      { name: "logo_url", label: "Logo", type: "image", accept: "image/*" },
    ],
  },
];

export const getResource = (key: string) => RESOURCES.find((r) => r.key === key);
