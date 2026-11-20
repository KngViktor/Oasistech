/** Editorial context for project pages; the CMS remains the source of project data. */
export type ProjectPresentation = {
  summary: string;
  focus: string;
  deliverables: string[];
};

export const FEATURED_PROJECTS = [
  "xtend",
  "lume",
  "xpel-pos",
  "fastora",
  "churchx",
  "travel360",
];

export const PROJECT_PRESENTATION: Record<string, ProjectPresentation> = {
  xtend: {
    summary:
      "A clearer picture of attendance, store coverage and daily field operations.",
    focus: "Workforce operations",
    deliverables: [
      "Admin dashboard and staff workflows",
      "Attendance and location reporting",
      "Store visits, alerts and stock counts",
    ],
  },
  lume: {
    summary:
      "A warm, image-led storefront for a sculptural lighting collection.",
    focus: "E-commerce & art direction",
    deliverables: [
      "Responsive storefront design",
      "Product collection and category browsing",
      "Product photography presentation",
    ],
  },
  "xpel-pos": {
    summary:
      "Sales, stock and everyday retail operations brought into one workspace.",
    focus: "Retail software",
    deliverables: [
      "Point of sale and inventory interface",
      "Payments, shifts and stock transfers",
      "Reporting and offline workflows",
    ],
  },
  fastora: {
    summary:
      "A clear digital home for a brand and communications strategy agency.",
    focus: "Brand & business website",
    deliverables: [
      "Website design and development",
      "Service and case study presentation",
      "Responsive layouts and launch",
    ],
  },
  churchx: {
    summary:
      "Helping church teams connect attendance, member care and follow-up.",
    focus: "Community management",
    deliverables: [
      "Member and visitor workflows",
      "Attendance and follow-up management",
      "Giving records and leadership reports",
    ],
  },
  travel360: {
    summary:
      "Destination discovery and travel search in an inviting, easy-to-scan experience.",
    focus: "Travel & discovery",
    deliverables: [
      "Travel website design and development",
      "Flight, hotel and tour search interface",
      "Destination cards and inspiration galleries",
    ],
  },
  "luxury-watches": {
    summary:
      "A focused product experience that takes a watch buyer from discovery to a WhatsApp order.",
    focus: "Product commerce",
    deliverables: [
      "Responsive product website",
      "Colour and quantity selection",
      "Order form and WhatsApp handoff",
    ],
  },
  cardx: {
    summary:
      "A distinctive product website that makes everyday banking benefits easy to understand.",
    focus: "Fintech product website",
    deliverables: [
      "Visual direction and responsive build",
      "Card and budgeting feature presentation",
      "Onboarding and customer story sections",
    ],
  },
};
