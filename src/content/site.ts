/**
 * Central content layer for the Victor Abah portfolio.
 *
 * Every public section reads from this file. The shape of each export mirrors
 * the planned Supabase tables (see supabase/schema.sql), so migrating to a
 * live CMS is a one-step swap: replace these constants with `await supabase
 * .from('<table>').select()` calls and the components stay untouched.
 *
 * Placeholders Victor needs to supply are marked with `PLACEHOLDER`.
 */

export type NavItem = { id: string; label: string };

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "portfolio", label: "Work" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "about", label: "About" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export const PROFILE = {
  name: "Victor Abah",
  role: "Web & App Developer",
  email: "info@victorabah.com",
  phone: "+234 903 532 7537",
  phoneRaw: "2349035327537", // for tel: and wa.me links
  location: "Lagos, Nigeria",
  handle: "letvicdoit",
  headshot: "/portfolio/victor-headshot.jpg",
  logo: "", // optional brand logo (svg/png); falls back to the text wordmark when empty

  socials: [
    {
      label: "Instagram",
      url: "https://www.instagram.com/letvicdoit",
      icon: "instagram",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/victor-abahh/",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      url: "https://github.com/abahvictor360-sketch",
      icon: "github",
    },
  ],
} as const;

export const HERO = {
  eyebrow: "INDEPENDENT WEB & APP DEVELOPER",
  headline: "Websites that earn trust. Apps that move business forward.",
  subtext:
    "I'm Victor Abah. I help businesses turn a clear idea into a considered website or a useful application. From the first design to launch and ongoing support, you work directly with the person building it.",
  stats: [
    { value: 6, suffix: "+", label: "Years of Experience" },
    { value: 20, suffix: "+", label: "Sites & Apps Shipped" },
  ],
};

export const ABOUT = {
  eyebrow: "YOUR DEVELOPMENT PARTNER",
  headline: "A thoughtful builder. A reliable person to work with.",
  body: "My background spans a creative agency, an IT team, GIZ Nigeria & ECOWAS and independent client work. That range helps me connect the way a product looks with what a business needs it to do. I design and develop websites and applications, explain technical decisions in plain language, and stay involved after launch. Based in Lagos, I collaborate remotely with clients worldwide, with scope, milestones and feedback agreed before the build begins.",
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  dates: string;
  highlights: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Freelance Tech Specialist, Web & App Developer",
    company: "Self-Employed",
    location: "Lagos",
    dates: "Sep 2025 – Present",
    highlights: [
      "Built production websites and web applications end to end for independent clients (Fastora, Energy Conseil Global, Rocabat, Vifug Lyrics, SchoolHub, Deem Hospital), covering build, responsive front end, launch and post-launch fixes.",
      "Shipped product interfaces carrying payment, booking and authentication flows for clients across real estate, hospitality, travel and SaaS.",
      "Handled the technical troubleshooting and hosting support that kept those client sites and tooling running after launch.",
    ],
  },
  {
    role: "Communication Consultant – Digital & Multimedia",
    company: "GIZ Nigeria & ECOWAS",
    location: "Lagos",
    dates: "Feb 2025 – Aug 2025",
    highlights: [
      "Produced 50+ digital and multimedia assets a month across web and social channels, all held to the programme's published standards.",
      "Led digital and multimedia direction for ECOWAS regional communication campaigns, working to deadlines set by programme leads across multiple workstreams.",
      "Built reusable templates and component systems so the wider communications team could produce consistent material without a specialist in the loop.",
    ],
  },
  {
    role: "Communication Intern – Digital Support",
    company: "GIZ Nigeria & ECOWAS",
    location: "Lagos",
    dates: "Apr 2024 – Nov 2024",
    highlights: [
      "Supported the communications team with web updates, social content and event material under live campaign deadlines.",
      "Turned complex programme data into charts and report visuals that non-technical stakeholders could read at a glance.",
    ],
  },
  {
    role: "Digital Specialist",
    company: "Gigamedia Limited",
    location: "Abuja",
    dates: "Aug 2022 – Oct 2023",
    highlights: [
      "Built and maintained websites and digital properties for small and medium businesses, from first setup through to ongoing updates.",
      "Ran delivery for several client accounts at once on agency turnaround times, keeping each to its own schedule.",
      "Produced the digital content those campaigns ran on, including short-form video for social channels.",
    ],
  },
  {
    role: "IT Assistant",
    company: "Fujilla Nigeria Limited",
    location: "Abuja",
    dates: "Jan 2022 – Aug 2022",
    highlights: [
      "Provided first-line technical support across day-to-day operations, from hardware and accounts to software faults.",
      "Maintained the company's digital assets and handled routine website updates.",
    ],
  },
];

export type Education = {
  degree: string;
  institution: string;
  year: string;
};

export const EDUCATION: Education[] = [
  {
    degree: "B.Sc. Mathematics & Computer Science",
    institution: "Joseph Sarwuan Tarka University, Makurdi",
    year: "Graduated 2021",
  },
];

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const SERVICES: Service[] = [
  {
    title: "Tech Specialist",
    description:
      "Technical support for hosting, deployments, integrations and business tools. I trace the issue, explain the fix and document the changes so your team knows how the system is maintained.",
    icon: "cpu",
  },
  {
    title: "App Development",
    description:
      "Custom web and mobile applications for the way your business works. Dashboards, booking flows, payments and management systems, with the interface, API and database designed together.",
    icon: "smartphone",
  },
  {
    title: "Website Development",
    description:
      "A clear, responsive website that helps visitors understand your offer and take the next step. Design, development, content management, search basics and launch, with ongoing support available.",
    icon: "code",
  },
  {
    title: "AI-Powered Product Features",
    description:
      "Useful AI features inside your product: support assistants grounded in your records, internal search and content workflows. We define the data, permissions and fallbacks before choosing what to automate.",
    icon: "bot",
  },
];

export type Skill = { name: string; level: number };

export const SKILLS: Skill[] = [
  { name: "Website Development", level: 85 },
  { name: "React.js", level: 80 },
  { name: "Next.js", level: 82 },
  { name: "React Native", level: 75 },
  { name: "TypeScript", level: 78 },
  { name: "Supabase & Postgres", level: 76 },
  { name: "WordPress", level: 90 },
  { name: "Framer", level: 88 },
  { name: "Technical Support & Hosting", level: 88 },
]; // PLACEHOLDER — Victor: confirm/adjust each %

export type PortfolioCategory = "Websites" | "App Development";

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  "Websites",
  "App Development",
];

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  image: string;
  /** External link to live project, case study, or video. */
  link?: string;
  /** Playable video URL (mp4). When set, the item opens in a video player. */
  video?: string;
  /** true => render as a video placeholder card (upload real file via admin) */
  isVideoPlaceholder?: boolean;
};

// Newest additions first. When adding a new item, insert it at the TOP of
// its logical block (or the very top of the array) so the portfolio always
// displays newest-to-oldest.
export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "a-efurniture",
    title: "Efuniture",
    category: "App Development",
    description:
      "Furniture is the hardest thing to sell on a phone: the buyer needs scale, finish and room context before spending serious money, and a grid of thumbnails gives none of it. Efuniture is a furniture shopping app built around that problem, opening on a sign-in that offers Google, Apple or guest browsing rather than a wall, then letting someone shortlist and return to a saved basket. Built as a mobile-first product interface, so the photography does the selling at the size it is actually viewed.",
    image: "/portfolio/apps/efurniture.webp",
    video: "/portfolio/videos/efurniture.mp4",
    link: "https://efuniture.vercel.app/login",
  },
  {
    id: "a-rechx",
    title: "Rechx",
    category: "App Development",
    description:
      "An app people open several times a day lives or dies at the sign-in screen, and a password form alone loses the ones in a hurry. Rechx offers the alternatives a returning user actually wants: email or phone, Face ID, or a one-time code by SMS, with remember-me and recovery sitting where a stuck user looks. The account layer is the product foundation, so it is built first and built properly.",
    image: "/portfolio/apps/rechx.webp",
    video: "/portfolio/videos/rechx.mp4",
    link: "https://rechx-sooty.vercel.app/#/login",
  },
  {
    id: "w-foxyai",
    title: "FoxyAI",
    category: "Websites",
    description:
      "Most AI consultancies sell a pilot that never reaches production, so the buyer has heard the pitch before and discounts it. FoxyAI is positioned against that: systems deployed inside the business, with processes redesigned and data connected so a team can actually use them. The site sells on operators rather than slideware, with workflows deployed and industries served as figures, the method broken into strategy, automation and deployment, and case work carrying the proof.",
    image: "/portfolio/websites/foxyai.webp",
    video: "/portfolio/videos/foxyai.mp4",
    link: "https://foxyai-phi.vercel.app",
  },
  {
    id: "w-leadloop",
    title: "Leadloop",
    category: "Websites",
    description:
      "Outbound sales dies in the gap between sending an email and answering the reply, which is where a small team runs out of hours. Leadloop sells an AI agent that closes that gap: paste a website, it works out the buyer segments, writes each prospect a personal email, answers what comes back and puts the meeting on a calendar. The site has to make an autonomous agent feel safe to hand your pipeline to, so it shows a real reply thread being handled, what is working and where budget goes, and a setup measured in one afternoon rather than a quarter.",
    image: "/portfolio/websites/leadloop.webp",
    link: "https://leadloop-mu.vercel.app",
  },
  {
    id: "w-bizgrowth",
    title: "BizGrowth",
    category: "Websites",
    description:
      "A growing business ends up with analytics in one tool, campaigns in another and automation nobody owns, so nothing can be compared. BizGrowth is the product site for a workspace that puts them together, and it sells on the dashboard rather than the promise: traffic split by source, revenue tracked month on month, leads and ROI as live figures. Plans are priced on the page, the signup is free to start, and every section drives at the same action.",
    image: "/portfolio/websites/bizgrowth.webp",
    video: "/portfolio/videos/bizgrowth.mp4",
    link: "https://bizgrowth-psi.vercel.app",
  },
  {
    id: "w-abujacars",
    title: "Abujacars",
    category: "Websites",
    description:
      "Buying a used car in Nigeria is a trust problem before it is a price problem: is the car sound, are the papers real, and will the seller still answer next week. Abujacars answers all three on the page. Every car carries a 150-point inspection and customs and papers verification, financing and nationwide delivery are stated up front, and sellers get a cash offer within 24 hours. The fleet is browsable by brand and type with real photography, so a buyer shortlists before anyone picks up a phone.",
    image: "/portfolio/websites/abujacars.webp",
    video: "/portfolio/videos/abujacars.mp4",
    link: "https://abujacars-topaz.vercel.app",
  },
  {
    id: "a-fitsx",
    title: "FitsX",
    category: "App Development",
    description:
      "Fashion shoppers abandon an app at the sign-in screen, so that screen has to do more than collect a password. FitsX opens on a one-tap path: email, Google or Apple, a skip for browsing first, and a clear route to sign up rather than a dead end. Behind it sits the shopping app itself, built in React Native with accounts, saved items and checkout, so a returning customer is two taps from the basket they left behind.",
    image: "/portfolio/apps/fitsx.webp",
    video: "/portfolio/videos/fitsx.mp4",
    link: "https://fitsx.vercel.app/login",
  },
  {
    id: "w-foodx",
    title: "Foodx",
    category: "Websites",
    description:
      "A bakery selling through Instagram posts cannot show a menu, take an order or hold a basket, so every sale costs a conversation. Foodx is the storefront for a Lekki Phase 1 bakery and coffee bar: donuts, cheesecakes, shakes and iced coffee photographed properly, priced in naira, added to a cart and ordered. Location and opening details sit where someone deciding on a walk-in looks, and the menu doubles as the thing search engines can actually read.",
    image: "/portfolio/websites/foodx.webp",
    video: "/portfolio/videos/foodx.mp4",
    link: "https://foodx-three.vercel.app",
  },
  {
    id: "w-neotech",
    title: "NeoTech",
    category: "Websites",
    description:
      "Selling immersive technology on a flat web page is its own problem: describe VR in paragraphs and it sounds like every other agency. NeoTech demonstrates instead, with 3D built in React Three Fiber running in the browser, so the capability is the proof. Around it sit the services a buyer is actually choosing between, VR development, AI avatars and gaming, each written plainly enough for the budget holder rather than the engineer.",
    image: "/portfolio/websites/neotech.webp",
    video: "/portfolio/videos/neotech.mp4",
    link: "https://neotech-ruddy-eight.vercel.app",
  },
  {
    id: "w-cryptox",
    title: "Cryptox",
    category: "Websites",
    description:
      "A finance team will not move company money onto a trading platform that was designed for a retail speculator. Cryptox is the product site for one built for businesses, and the page is organised around the objections a treasurer raises: who can approve a trade, whether it passes compliance, what it costs, and who answers at 3am. Role-based permissions and shared wallets, KYC and AML workflows with exportable audit reports, transparent pricing with no hidden spread, a named account manager, and a first-quarter plan laid out week by week from onboarding to scale.",
    image: "/portfolio/websites/cryptox.webp",
    video: "/portfolio/videos/cryptox.mp4",
    link: "https://cryptox-omega-nine.vercel.app",
  },
  {
    id: "w-interiorx",
    title: "InteriorX",
    category: "Websites",
    description:
      "Interior design is bought on evidence that the firm has done it before, and most studio sites bury the work behind a philosophy statement. InteriorX leads with the rooms: completed projects by type, residential through commercial, landscape and renovation, with the process broken into the four stages a client is actually agreeing to, from first consultation to final handover. Named designers with their specialisms, a rated client review, years in business and project count carry the credibility, and the quote request sits in reach of every section.",
    image: "/portfolio/websites/interiorx.webp",
    video: "/portfolio/videos/interiorx.mp4",
    link: "https://interiorx-seven.vercel.app",
  },
  {
    id: "w-cardx",
    title: "Cardx",
    category: "Websites",
    description:
      "Someone paid in three currencies loses money twice: once to the exchange rate and again to fees nobody itemises. Cardx is the product site for a multi-currency account that removes both, and it has to make a stranger trust it with their salary. Every claim is a number rather than an adjective: 150+ currencies at the real rate, zero FX fees, instant virtual cards, spending categorised as it happens, card frozen in a tap. Signup is three steps on the page, and a real customer story carries the proof.",
    image: "/portfolio/websites/cardx.webp",
    link: "https://cardx-chi.vercel.app",
  },
  {
    id: "w-lume",
    title: "Lume",
    category: "Websites",
    description:
      "Lighting is bought on feeling and returned on disappointment, which makes the photography the product. Lume is a storefront for sculptural lamps built around that: every piece shot lit against dark, filtered by ambient or task so a buyer shops by the job the lamp has to do, priced on the card so nothing is hidden, with the warranty, free shipping and 30-day returns stated where the hesitation actually happens.",
    image: "/portfolio/websites/lume.webp",
    link: "https://lume-topaz-six.vercel.app",
  },
  {
    id: "w-travel360",
    title: "Travel360",
    category: "Websites",
    description:
      "Planning a trip means four tabs: one for flights, one for hotels, one for tours, one to check the price was fair. Travel360 puts the search itself at the top of the page, with flights, hotels, tours and packages in one control and real dates, destinations and traveller counts. Below it, destinations priced from, handpicked tours, and the guarantees that settle a nervous first booking: best price, secure payment, and support at any hour.",
    image: "/portfolio/websites/travel360.webp",
    link: "https://travel360-beige.vercel.app",
  },
  {
    id: "w-luxury-watches",
    title: "Luxury Watches",
    category: "Websites",
    description:
      "A single-product seller does not need a shop, it needs one page that closes. This landing page sells one matte black watch: the price up front, the detail shots that justify it, colour chosen on the page, quantity set, and the order handed straight to WhatsApp with the details already filled in, so the buyer taps send instead of typing out what they want. Three steps, stated plainly, for a market that already buys and pays through chat.",
    image: "/portfolio/websites/luxurywatches.webp",
    link: "https://luxurywatches-bay.vercel.app",
  },
  {
    id: "a-xtend",
    title: "Xtend",
    category: "App Development",
    description:
      "Managing staff across multiple stores means knowing who has arrived, where they are working and which issues need attention. Xtend brings GPS-backed attendance, staff movement, store visits, marketer reports and stock counts into one operations app. The admin dashboard shows clock-ins, late arrivals, location coverage and open alerts at a glance, with staff and team management, analytics and an Ask Xtend assistant available from the same workspace.",
    image: "/portfolio/apps/xtend.webp",
    link: "https://xtend-brown.vercel.app",
  },
  {
    id: "w-lume",
    title: "Lume",
    category: "Websites",
    description:
      "Choosing a lamp is as much about the atmosphere it creates as its specifications. Lume is a lighting storefront built around that decision: warm product photography, a sculptural hero piece and a collection organised into ambient and task lighting with prices visible throughout. A dark palette and restrained gold accents let the lamps carry the page, while shopping, account and contact links stay within reach.",
    image: "/portfolio/websites/lume.webp",
    link: "https://lume-topaz-six.vercel.app/",
  },
  {
    id: "w-travel360",
    title: "Travel360",
    category: "Websites",
    description:
      "Planning a trip means comparing destinations, flights, hotels and tours without losing track of the experience you want. Travel360 brings those choices into one travel website, pairing destination photography with a prominent search panel for dates, travellers and travel type. Destination cards show starting prices, while trip inspiration, support information and a newsletter give visitors clear ways to keep exploring.",
    image: "/portfolio/websites/travel360.webp",
    link: "https://travel360-beige.vercel.app/",
  },
  {
    id: "w-luxury-watches",
    title: "Luxury Watches",
    category: "Websites",
    description:
      "A watch buyer wants to see the details, know the price and place an order without a long conversation. Luxury Watches is a product website centred on a matte black unisex watch, with close-up photography, lifestyle images, colour choices and clear naira pricing. The order form collects the buyer's details, colour and quantity, then prepares a WhatsApp message so the seller can confirm the order and arrange delivery.",
    image: "/portfolio/websites/luxury-watches.webp",
    link: "https://luxurywatches-bay.vercel.app/",
  },
  {
    id: "w-cardx",
    title: "Cardx",
    category: "Websites",
    description:
      "A banking product page needs to make everyday benefits easy to understand. Cardx presents its metal card, virtual cards and budgeting tools through a bold monochrome layout with orange accents and a distinctive mechanical hero illustration. Product benefits, a three-step onboarding overview and a customer story lead visitors towards opening an account, with currency support, spending insights and card controls explained along the way.",
    image: "/portfolio/websites/cardx.webp",
    link: "https://cardx-chi.vercel.app/",
  },
  {
    id: "w-bikenation",
    title: "Bikenation",
    category: "Websites",
    description:
      "A superbike buyer decides on the exact machine, the exact colour and the exact price, and most dealer sites show a grid of stock photos with 'call for price'. Bikenation puts the whole decision on the page: every bike priced with its real specs (power, top speed, 0-100, engine and mileage), a colour configurator that prices each option as you pick it, riding gear sold alongside, and a test ride booked from the same page. Each bike is inspected across 130 points, and the site says so where a buyer spending $32,000 needs to read it.",
    image: "/portfolio/websites/bikenation.webp",
    link: "https://bikenation-fawn.vercel.app",
  },
  {
    id: "a-churchx",
    title: "ChurchX",
    category: "App Development",
    description:
      "A church knows roughly how many people came on Sunday and almost nothing else: who the first-timer was, whether anyone called them, which member stopped showing up three months ago. ChurchX is the management app that closes those gaps. A visitor is registered in seconds from a phone at the door, follow-ups are assigned to a real person and recorded, members drifting away surface before they are gone, and Sunday check-in, giving records and the reports leadership asks for all come from the same place.",
    image: "/portfolio/apps/churchx.webp",
    link: "https://churchx-one.vercel.app/login",
  },
  {
    id: "a-obspad",
    title: "OBSpad",
    category: "App Development",
    description:
      "Live production software assumes a laptop, a mouse and a desk, which is not what a church media volunteer or a solo streamer actually has. OBSpad is my own app: it turns an Android tablet or iPad into a full production desk modelled on OBS Studio, rebuilt for fingers with big targets, pinch to scale and long-press menus. Scenes and Studio Mode preview, chroma key and audio filters, USB capture cards and webcams, output to a second screen or NDI, and going live on Facebook, YouTube or Twitch with just a stream key.",
    image: "/portfolio/apps/obspad.webp",
    link: "https://obspad.vercel.app",
  },
  {
    id: "w-airspare",
    title: "Airspare.Ai",
    category: "Websites",
    description:
      "Nobody knows whether today is the right day to book a flight, so people either buy too early or watch the fare climb. Airspare.Ai is the product site for an AI flight platform that answers that question: real-time fare predictions telling you when to book, 200+ airlines compared in seconds, route and seat suggestions, price-drop alerts on favourite routes, and loyalty points tracked live and redeemable at checkout. The page has to make an AI claim credible, so every feature is shown as a real screen with the number it produces.",
    image: "/portfolio/websites/airspare.webp",
    link: "https://airspare.vercel.app",
  },
  {
    id: "w-rentcarsng",
    title: "RentCarsNG",
    category: "Websites",
    description:
      "Renting a car in Nigeria usually means calling around, haggling, and finding out at pickup what the car actually looks like. RentCarsNG replaces that with a booking flow: filter by city, type and dates across Lagos, Abuja, Port Harcourt, Ibadan and Enugu, see the real fleet with daily naira pricing, choose self-drive or chauffeur, and confirm and pay online. Branch locations on a map, customer reviews and an off-road fleet for weddings and long trips do the convincing before anyone picks up a phone.",
    image: "/portfolio/websites/rentcarsng.webp",
    link: "https://rentcars-alpha.vercel.app",
  },
  {
    id: "w-petng",
    title: "PetNG",
    category: "Websites",
    description:
      "Nigerian pet owners buy food and toys from Instagram sellers with no prices, no returns and no way to know a product is safe. PetNG is the e-commerce storefront that fixes it: shop by dog or cat, browse real categories with naira pricing, vet-approved products, free delivery over a threshold, 30-day returns, same-day dispatch and paw points on every order. Reviews from real owners and a care blog carry the trust that a first-time buyer needs before paying online.",
    image: "/portfolio/websites/petng.webp",
    link: "https://petng-kappa.vercel.app",
  },
  {
    id: "w-agricx",
    title: "AgricX",
    category: "Websites",
    description:
      "A farmer considering a spraying drone is comparing a serious capital purchase against a spec sheet he cannot read. AgricX sells it in his terms: cover more ground with less water and less chemical, with each drone listed by payload, flow rate and the job it does, from precision spraying and crop mapping to field scouting and variable-rate application. Pricing, pilot training, dealer locations and support are all on the page, so the buyer can get to a decision without a sales call.",
    image: "/portfolio/websites/agricx.webp",
    link: "https://agricx-five.vercel.app",
  },
  {
    id: "w-finshield",
    title: "Finshield",
    category: "Websites",
    description:
      "People do not hand their money to a new financial app because the copy says it is secure. This product site for a fintech earns it instead: fraud alerts that catch a suspicious charge before the customer notices, real-time monitoring, zero liability, 24,000 partner ATMs and 2% cashback, each stated as a number rather than a promise. Apple Pay, Google Pay and partner logos sit where a cautious visitor looks for proof, and every section drives at one action: open the account.",
    image: "/portfolio/websites/finshield.webp",
    link: "https://finshield-alpha.vercel.app",
  },
  {
    id: "w-contx",
    title: "CONTX",
    category: "Websites",
    description:
      "A shipper choosing a cargo partner wants three answers before enquiring: can you move it, where can you move it, and where is it now. CONTX answers all three on the page. Sea, air and road freight laid out side by side, a world map of locations to buy, sell or lease containers, container specifications with prices, and shipment tracking plus a quote calculator in reach throughout. Twenty-plus years of fleet numbers carry the credibility that a first-time enquiry needs.",
    image: "/portfolio/websites/contx.webp",
    link: "https://contx-theta.vercel.app",
  },
  {
    id: "w-vikhomes",
    title: "Vik Homes",
    category: "Websites",
    description:
      "House hunting falls apart when listings live in agent phone calls and nobody can filter by what actually matters. Vik Homes is the property platform that fixes that: search by city, property type and price, browse villas, houses and cottages with real photography and verified listings, and move from search to viewing to keys in three clear steps. Local agents, upfront pricing with no hidden fees, and a list-your-home path for sellers make it work from both sides of the deal.",
    image: "/portfolio/websites/vikhomes.webp",
    link: "https://vikhomes.vercel.app",
  },
  {
    id: "a-schoolhub-app",
    title: "SchoolHub — School Admin App",
    category: "App Development",
    description:
      "A school's admin staff carry the term in their heads and on paper: who is enrolled, who was present, what each parent still owes. This is the SchoolHub admin app they use instead. Attendance is taken per class arm in one pass, assessments carry CA and exam weighting through to a printable report card, fees show billed against collected with every unsettled invoice named, and enrollment, guardians, staff and messaging sit in the same place. A school admin sees only their own school; a group switches between them from the same login.",
    image: "/portfolio/apps/schoolhub-app.webp",
    link: "https://schoolhub-sigma.vercel.app/login",
  },
  {
    id: "a-xpel-pos",
    title: "Xpel POS",
    category: "App Development",
    description:
      "A beauty retailer running the till on a notebook cannot tell you what sold, what is about to run out, or whether the cash drawer balances at closing. Xpel POS is the app that runs the counter instead: sales rung up in a few taps, inventory and restock alerts tied to every sale, shifts opened and cashed up against counted cash, promotions and customer records, and transfers between shop and warehouse. Cash, transfer and card are each recorded and reconciled, an activity log covers who did what, and it installs to the device and keeps selling when the network drops.",
    image: "/portfolio/apps/xpel-pos.webp",
    link: "https://xpel-pos.vercel.app",
  },
  {
    id: "w-onefitness",
    title: "onefitness",
    category: "Websites",
    description:
      "Most fitness sites sell a membership and leave the person to work out what to actually do on Monday. onefitness starts from the goal instead: a weekly plan built around the member's experience and the equipment they have, meal guidance with vegan, non-vegan and allergy-friendly options costed by calories, six training styles to pick from, and workshops and retreats bookable from the page. The first week is free in exchange for an email, so the visitor tries the programming before deciding on it.",
    image: "/portfolio/websites/onefitness.webp",
    link: "https://onefitness-theta.vercel.app",
  },
  {
    id: "w-schoolhub",
    title: "SchoolHub",
    category: "Websites",
    description:
      "Most schools run on a spreadsheet per teacher, a fee book in the bursary and a WhatsApp group for everything else, so nobody can say what a pupil owes or scored without asking three people. SchoolHub is one system for the whole school: enrolment tied to a class arm and term, an attendance register built for a cheap phone on a bad network, CA and exam weighting that produces a printable report card, computer-based tests marked server-side, invoices paid through Paystack, Flutterwave, Remita or Stripe, and a pupil portal for results and fees. Groups run many schools on one database with row-level security, and every change lands in an audit log.",
    image: "/portfolio/websites/schoolhub.webp",
    link: "https://schoolhub-sigma.vercel.app",
  },
  {
    id: "w-deem-hospital",
    title: "Deem Hospital",
    category: "Websites",
    description:
      "A patient choosing a hospital wants to know three things before they call: can I see the right specialist, will my HMO cover it, and how fast can I be seen. This site for a Lagos multi-specialty hospital answers all three on the way down the page: consultants listed by discipline with direct booking and no referral, the HMOs accepted shown in full, on-site diagnostics with results inside 24 hours, a 24/7 emergency line pinned to the header, and health guidance written by the consultants themselves so the hospital earns the visit before it asks for it.",
    image: "/portfolio/websites/deem-hospital.webp",
    link: "https://deem-hospital.vercel.app",
  },
  {
    id: "w-jhflogistics",
    title: "Jhflogistics",
    category: "Websites",
    description:
      "Freight goes wrong in the handovers, so a shipper who uses one company for sea, another for customs and a third for the last mile spends the week chasing whoever had it last. This site for a Lagos freight company sells the opposite: one partner owning booking, customs, warehousing and final-mile delivery under a single tracked reference. Maritime, land and air services are laid out side by side, a quote form captures the lane and cargo detail needed to price it, real case studies carry the proof, and freight tracking sits in reach of every page.",
    image: "/portfolio/websites/jhflogistics.webp",
    link: "https://jhflogistics.vercel.app",
  },
  {
    id: "w-everything-food",
    title: "Everything Food",
    category: "Websites",
    description:
      "A restaurant that only takes orders by phone loses the customer who wants to see the menu and the price before calling. Everything Food is the site for an Abuja kitchen serving jollof, suya, pepper soup and swallow: a filterable menu with naira prices and ratings up front, weekend deals, a clear order-it-in, eat-it-here or track-your-order path, table booking and a Friday-menu newsletter, so a hungry visitor goes from browsing to ordering without picking up the phone.",
    image: "/portfolio/websites/everything-food.webp",
    link: "https://everything-food-eta.vercel.app",
  },
  {
    id: "w-ajusti",
    title: "Ajusti",
    category: "Websites",
    description:
      "Most Nigerian fashion sellers live in Instagram DMs, so a buyer can't browse the range, check a price or trust the fit before paying. Ajusti is the storefront that fixes that for Ankara, adire, bags and shoes: shop-by-category browsing, clear naira pricing with sale markdowns, made-to-measure tailoring up front, real customer reviews, and checkout through Paystack, Flutterwave, bank transfer or pay on delivery, so a first-time buyer has every reason to order instead of asking.",
    image: "/portfolio/websites/ajusti.webp",
    link: "https://ajusti-ten.vercel.app",
  },
  {
    id: "w-gateway-lodge",
    title: "Gateway Lodge Group",
    category: "Websites",
    description:
      "A hospitality brand with several properties usually ends up as one generic site and a shared inbox, so no guest can tell what makes any single property worth booking. Gateway Lodge Group needed the opposite: one group site for brand and cross-property discovery, plus a dedicated microsite for each property (Lakeside, Tamale, Nova Ridge) with its own gallery, facilities and direct-booking flow, so a guest lands on the exact property they're deciding on and can book it in a few clicks.",
    image: "/portfolio/websites/gateway-lodge-group.webp",
    link: "https://www.gatewaylodgegroup.com",
  },
  {
    id: "w-nexaconnect",
    title: "NexaConnect",
    category: "Websites",
    description:
      "Support inboxes drown in the same three questions: where is my order, how much is delivery, why was I charged twice. NexaConnect answers them instantly, and only from the company's published policies and the customer's real order record, so it never invents a refund promise the business has to honour. The team stops repeating itself and only handles the cases that actually need a human.",
    image: "/portfolio/websites/nexaconnect.webp",
    link: "https://nexaconnect-pi.vercel.app",
  },
  {
    id: "w-finbolt",
    title: "Finbolt",
    category: "Websites",
    description:
      "Nobody hands a stranger their business money because the copy says trust us. This product site for a payments platform earns it on the page: one clear promise up front (invoices, cards, transfers and payouts settled in minutes), proof right under it, and separate paths for start-ups, freelancers and enterprises so each visitor sees their own situation instead of a generic pitch, then signs up.",
    image: "/portfolio/websites/finbolt.webp",
    link: "https://finbolt-nu.vercel.app",
  },
  {
    id: "w-vifug-lyrics",
    title: "Vifug Lyrics",
    category: "Websites",
    description:
      "A product website for a live lyrics and Bible projection app built for churches. Designed to explain a feature-dense, technical product (offline-first, NDI, OBS, multi-language auto-follow) clearly enough for a media volunteer to trust it and download it.",
    image: "/portfolio/websites/vifug-lyrics.webp",
  },
  {
    id: "w-fastora",
    title: "Fastora",
    category: "Websites",
    description:
      "A brand and communications strategy agency website featuring positioning, case studies, and a clear service breakdown designed to make complex brand work easy to understand and trust.",
    image: "/portfolio/websites/fastora.webp",
    link: "https://fastora.africa",
  },
  {
    id: "w-energy",
    title: "Energy Conseil Global",
    category: "Websites",
    description:
      "A corporate website for an energy consultancy whose buyers are institutional. Built around a restrained, authoritative layout that puts credentials and service scope where a procurement reader looks first.",
    image: "/portfolio/websites/energy-conseil.webp",
    link: "https://energyconseilglobal.com",
  },
  {
    id: "w-rocabat",
    title: "Rocabat",
    category: "Websites",
    description:
      "A website for a construction and building-services firm. The project showcase carries the credibility here, so the layout is built around image-led case entries with the services structured underneath.",
    image: "/portfolio/websites/rocabat.webp",
    link: "https://rocabat.com",
  },
  {
    id: "w-brandlift",
    title: "BrandLift",
    category: "Websites",
    description:
      "A brand-building and marketing platform where I built the entire front end: marketing site, authenticated dashboard and the sign-up flow between them. The hard part was keeping one visual language across a bold marketing page and a dense product UI.",
    image: "/portfolio/websites/brandlift.webp",
    link: "https://brandlift-omega.vercel.app",
  },
  {
    id: "w-xpel",
    title: "Xpel Beauty NG",
    category: "Websites",
    description:
      "An e-commerce storefront for a beauty brand, paired with the hub for its social campaigns. Product imagery does the selling, so the build prioritises fast image loading and a checkout path with nothing in the way.",
    image: "/portfolio/websites/xpel-beauty.webp",
    link: "https://xpelbeauty.vercel.app",
  },
  {
    id: "w-oasis",
    title: "Oasis Orchard Technologies",
    category: "Websites",
    description:
      "A marketing website for a VoIP reseller. The challenge was explaining a technical product to non-technical buyers, solved with plain-language tier comparisons and feature breakdowns instead of a spec dump.",
    image: "/portfolio/websites/oasis-orchard.webp",
    link: "https://oasisorchardtech.vercel.app",
  },
  {
    id: "w-nego",
    title: "Nego",
    category: "Websites",
    description:
      "An AI price-negotiation SaaS, landing page and product dashboard. People hesitate to let software negotiate on their behalf, so the interface shows its working: data in view, decisions legible, nothing hidden behind the model.",
    image: "/portfolio/websites/nego.webp",
    link: "https://nego-lac.vercel.app",
  },
  {
    id: "w-deliva",
    title: "Deliva",
    category: "Websites",
    description:
      "A delivery and logistics web app interface. Designed for people working at speed, so order placement, management and tracking each resolve in as few steps as the data allows.",
    image: "/portfolio/websites/deliva.webp",
    link: "https://deliva-web.vercel.app",
  },
  {
    id: "w-vexpense",
    title: "Vexpense",
    category: "Websites",
    description:
      "An expense-tracking dashboard. The design problem is density: charts and tables carrying real financial detail that still read at a glance on a first look.",
    image: "/portfolio/websites/vexpense.webp",
    link: "https://vexpense-client.vercel.app",
  },
  {
    id: "w-dtc",
    title: "DTC Nigeria",
    category: "Websites",
    description:
      "A corporate brand website with a content-led structure, built so the company's own material carries the credibility rather than decoration around it.",
    image: "/portfolio/websites/dtc-nigeria.webp",
    link: "https://dtcnigeria.com",
  },
  {
    id: "w-zara",
    title: "Zara Garden Hotel",
    category: "Websites",
    description:
      "A hospitality website with rooms, an image gallery and a booking-enquiry flow. Guests decide on photography, so the gallery leads and the enquiry form stays one tap away throughout.",
    image: "/portfolio/websites/zara-garden-hotel.webp",
    link: "https://zaragardenhotel.com",
  },
  {
    id: "w-idocxx",
    title: "iDOC X",
    category: "Websites",
    description:
      "An unconscious patient cannot tell the doctor their blood group, their allergies or what they are already taking, and the paper file is at a hospital across town. iDOC X gives every Nigerian a scannable health identity that answers those questions in one scan, with the patient deciding who sees what. The site has to sell that to six audiences at once, so patients, hospitals, HMOs, care gifters, travel agencies and blood donors each get their own entry point, alongside AI drug-interaction alerts, a live waitlist and the funding ask.",
    image: "/portfolio/websites/idocxx.webp",
    link: "https://idocxx.com",
  },
];

export type Faq = { question: string; answer: string };

// Answers real buying questions, in the words clients use when they search.
// Visible on the page AND emitted as FAQPage structured data in src/app/page.tsx.
export const FAQS: Faq[] = [
  {
    question: "What kind of websites and apps do you build?",
    answer:
      "Management systems and the sites around them: point-of-sale and inventory for retail, school management covering enrolment, attendance, results and fees, hospital and clinic sites with appointment booking, freight and logistics sites with quote requests and tracking, restaurant ordering, e-commerce storefronts, and hotel and property booking. If it has a login, a database and money moving through it, it is the kind of thing I build.",
  },
  {
    question: "Do you build mobile apps as well as websites?",
    answer:
      "Yes. Mobile in React Native, and the web app behind it in React and Next.js, with one database and one API serving both. Xpel POS runs the counter of a beauty retailer on a phone or tablet and keeps selling when the network drops; SchoolHub is used by school admins on cheap phones over bad connections.",
  },
  {
    question: "Can you build a custom management system for my business?",
    answer:
      "That is most of my work. I start from how the business already runs, then build the system around it rather than forcing the business into someone else's software: roles and permissions, the records your staff actually keep, the reports you print, and an audit log of who changed what.",
  },
  {
    question: "Can you integrate payments and other business tools?",
    answer:
      "Yes. Depending on your business and location, I can integrate providers such as Stripe, Paystack, Flutterwave and Remita, along with booking tools, email and other APIs. We confirm availability, account requirements and the workflow during discovery so the integration fits the way your business operates.",
  },
  {
    question: "What does a project cost and how long does it take?",
    answer:
      "Projects are quoted individually, because a one-page site and a school management system are not the same job. Tell me what the system has to do and who uses it, and you get a fixed scope, a timeline and a price before anything starts. For ongoing work there is a monthly retainer covering continuous build, hosting, integrations and support.",
  },
  {
    question: "Do you maintain the site or app after launch?",
    answer:
      "Yes, and it is a large part of what I do. Hosting, integrations, the fixes that surface once real users arrive, and the technical support behind it. Six years of IT and platform support sits behind that, so a broken deployment or a failing integration gets diagnosed rather than guessed at.",
  },
  {
    question: "Do you work with clients in other countries?",
    answer:
      "Yes, that is how most of my work runs. I am remote by default and deliver the same way wherever the client is: a shared backlog, work visible as it lands, and a call when a call is actually needed. I am on WAT (GMT+1), which gives a full overlapping working day with Europe, the UK, the Middle East and Africa, and covers the morning across the Americas. I bill in dollars or naira, whichever suits you.",
  },
  {
    question: "Are you available for full-time or contract roles?",
    answer:
      "Yes. I am open to full-time, contract and remote roles alongside client projects. The quickest route is the contact form on this page or a WhatsApp message.",
  },
];

/**
 * Long-form content for the standalone /services/[slug] pages. Each one targets
 * the phrase a client actually searches ("school management system developer",
 * "POS app", "hospital website") rather than a job title, and pulls its proof
 * from the portfolio category named here.
 */
export type ServicePage = {
  slug: string;
  service: string; // matches SERVICES[].title
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sells: string[];
  deliverables: string[];
  category?: PortfolioCategory;
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "app-development",
    service: "App Development",
    title: "App development for businesses that run on one",
    metaTitle: "App Development for Business | POS, School & Management Apps",
    metaDescription:
      "Remote React Native and Next.js app developer. POS and inventory apps, school and clinic systems, with payments, offline handling and the database behind them.",
    intro:
      "An app earns its place when the business cannot run the old way any more: the till needs to know what is in stock, the register has to be taken on a phone in a classroom, the shift has to balance at closing. I build those applications end to end, mobile in React Native and web in React and Next.js, on one database and one API.",
    sells: [
      "Point-of-sale and inventory apps for retail, with shifts, cash-up and restock alerts",
      "School management covering enrolment, attendance, assessments, fees and a pupil portal",
      "Clinic and hospital tools: appointments, records and the admin behind them",
      "Internal dashboards and admin panels for teams outgrowing spreadsheets",
      "Customer-facing apps with accounts, payments and order tracking",
    ],
    deliverables: [
      "Mobile app in React Native, installable to the device",
      "Web app and admin in React and Next.js",
      "Database, roles and permissions in Supabase or Postgres, with row-level security",
      "Payments through Paystack, Flutterwave, Remita or Stripe",
      "Handling for patchy networks, so work is not lost when the connection drops",
      "An audit log of who changed what, and the reports your staff print",
    ],
    category: "App Development",
  },
  {
    slug: "website-development",
    service: "Website Development",
    title: "Websites designed around your customers",
    metaTitle: "Website Development | React, Next.js, WordPress & Framer",
    metaDescription:
      "Remote web developer building production websites in React, Next.js, WordPress and Framer: booking, ordering, quotes, e-commerce, plus launch and support after.",
    intro:
      "Most business websites lose the visitor at the same point: the person wants to see a price, check availability, place an order or ask a specific question, and the site sends them to a phone number instead. I build the site that answers them on the page, then stays fast and online afterwards.",
    sells: [
      "Hospitality and property: galleries, availability and direct booking",
      "Restaurants and food: menu, prices, ordering, delivery and table booking",
      "Logistics and services: quote requests with the detail needed to price them, plus tracking",
      "E-commerce storefronts with Nigerian payment gateways and delivery options",
      "Corporate and product sites that explain a technical product to a non-technical buyer",
    ],
    deliverables: [
      "Responsive build, tested on the phones your customers actually use",
      "Performance and accessibility work, not a lighthouse score bolted on at the end",
      "Search and AI-search setup: metadata, structured data, sitemap and copy that targets real queries",
      "A content editor or admin, so you are not paying for every text change",
      "Launch, DNS and hosting handled, then the fixes that surface once real traffic arrives",
    ],
    category: "Websites",
  },
  {
    slug: "web-development-nigeria",
    service: "Nigeria & West Africa",
    title: "Web and app development for Nigerian businesses",
    metaTitle: "Web & App Developer in Lagos, Nigeria | Victor Abah",
    metaDescription:
      "Nigeria-based web and app developer: POS and inventory, school and clinic systems, e-commerce and booking sites, with Paystack, Flutterwave and Remita, priced in naira.",
    intro:
      "I am based in Nigeria and a good part of my work is for businesses here, which changes what gets built. Payments go through the gateways Nigerians actually use, prices are quoted and displayed in naira, and anything with a register or a till has to keep working when the network drops, because sooner or later it will.",
    sells: [
      "Retail and beauty businesses running the counter on a notebook",
      "Schools tracking enrolment, attendance, results and fees across terms",
      "Clinics and hospitals taking appointments by phone alone",
      "Hotels, lodges and short-let properties paying commission on every booking",
      "Restaurants, logistics firms and traders selling through Instagram DMs",
    ],
    deliverables: [
      "Paystack, Flutterwave, Remita and Stripe, plus bank transfer and pay on delivery",
      "Naira pricing, invoicing, part payments and reconciliation built in",
      "Interfaces that work on a cheap Android phone over a weak connection",
      "Hosting, domains and email set up and kept running afterwards",
      "Quotes and invoices in naira, and a person in your timezone when something breaks",
    ],
  },
  {
    slug: "tech-support",
    service: "Tech Specialist",
    title: "Practical technical support, from diagnosis to resolution",
    metaTitle: "Technical Support & IT Specialist | Victor Abah",
    metaDescription:
      "Six years of hands-on technical support, remote: broken integrations, failed deployments, hosting, access and tooling problems diagnosed, fixed and documented.",
    intro:
      "Failed deployments, an integration that stopped posting, email that will not authenticate, accounts and access nobody can untangle. I isolate the cause, fix it, and write down the fix so the same issue does not come back next week.",
    sells: [
      "Sites and apps that have started failing after a change nobody can identify",
      "Businesses with no in-house technical person and a stack they inherited",
      "Teams that need hosting, domains, email and integrations kept running",
      "Handover work: taking over a project from a developer who has gone quiet",
    ],
    deliverables: [
      "Diagnosis of the actual cause, not a reinstall and a guess",
      "Hosting, DNS, email and deployment pipelines put back in working order",
      "Integration and API faults traced through logs to the failing call",
      "Written notes on what was wrong and what was changed",
      "Ongoing support on a retainer where that makes more sense than call-outs",
    ],
  },
  {
    slug: "ai-product-features",
    service: "AI-Powered Product Features",
    title: "AI features built around your data and workflows",
    metaTitle: "AI Features & Assistant Development | Victor Abah",
    metaDescription:
      "AI built into your product rather than bolted on: assistants grounded in your real records, retrieval, guardrails, and generated content inside the workflow that uses it.",
    intro:
      "An assistant that invents a refund policy costs more than it saves. I build AI features that answer from a company's own published policies and records, with retrieval and guardrails around them, so the answers can be trusted and the team stops repeating itself.",
    sells: [
      "Support assistants answering from your policies and a customer's real order",
      "Internal search across documents and records staff currently dig through by hand",
      "Generated drafts inside the workflow that uses them, not in a separate tool",
      "Products that need AI explained to a cautious buyer before they will sign up",
    ],
    deliverables: [
      "Retrieval over your own data, so answers cite something real",
      "Guardrails and fallbacks for the questions it should refuse",
      "The surrounding product work: interface, permissions, logging and cost control",
      "An honest view of what AI will and will not do for your case before we build it",
    ],
  },
];

export type Post = {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  /** Plain text. Blank lines separate paragraphs; a line starting with "## " is a heading. */
  body: string;
  cover?: string;
  tags: string[];
  publishedAt: string;
};

// Posts live in Supabase and are written from /admin/blog. Nothing is seeded
// here: an empty blog is honest, a blog of placeholder posts is not.
export const POSTS: Post[] = [];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Google IT Support Professional Certificate (v2)",
    issuer: "Coursera",
    date: "May 2025",
  },
  {
    title: "Google IT Support",
    issuer: "Google",
    date: "May 2025",
    credentialId: "CHDRMY9ZN3AE",
    url: "https://www.credly.com/badges/a1c32db4-9214-4f67-9317-886cea20eb5a/linked_in_profile",
  },
  {
    title: "Windows 11 for IT Support: Troubleshooting Basics",
    issuer: "LinkedIn",
    date: "Mar 2025",
    url: "https://www.linkedin.com/learning/certificates/9050d3539a47b918956ff3e722f993675dd65f5bd50c8e69db5a8fff88ba6405",
  },
  {
    title: "Cyber Threat Management",
    issuer: "Cisco",
    date: "Jun 2023",
    url: "https://www.credly.com/badges/9a7f594b-08d2-4510-80e6-58b8ff3ab5c2/linked_in_profile",
  },
  {
    title: "IT Security Careers and Certifications: First Steps",
    issuer: "LinkedIn",
    date: "Dec 2022",
  },
  { title: "Learning the OWASP Top 10", issuer: "LinkedIn", date: "Dec 2022" },
  {
    title: "The Cybersecurity Threat Landscape",
    issuer: "LinkedIn",
    date: "Dec 2022",
  },
  {
    title: "Technical SEO",
    issuer: "LinkedIn",
    date: "Dec 2022",
    url: "https://www.linkedin.com/learning/certificates/3e0dfb89cf5703bec733b500ddc413a93c843d497cfb1ea7da931e0d8e329447",
  },
  {
    title: "WordPress: SEO",
    issuer: "LinkedIn",
    date: "Dec 2022",
    url: "https://www.linkedin.com/learning/certificates/56e0f88131926ae2b826da29ce5204832e65d71d083a8534565d92d1addb5092",
  },
  {
    title: "How to Create Your Website Strategy: The Discovery Process",
    issuer: "LinkedIn",
    date: "Dec 2022",
  },
  {
    title: "The Fundamentals of digital marketing",
    issuer: "Google",
    date: "2022",
    credentialId: "DKN JXF KDW",
  },
];

export type Testimonial = {
  name: string;
  title: string;
  company: string;
  quote: string;
  photo?: string;
  placeholder?: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "WISDOM EKONG",
    title: "Diagnostic Radiographer & Professional Resume Writer",
    company: "",
    quote:
      "He is a great web designer and creator and his prices are affordable. He is highly recommended.",
  },
  {
    name: "Edidiong Sunday Udoh",
    title: "Brand Communication & Content Marketing",
    company: "",
    quote:
      "Victor is super creative when it comes to creating attractive visual designs. His designs are top-notch and professional. Over time he has lived up to expectations.",
  },
  {
    name: "Kator Tarkaa",
    title: "Founder",
    company: "Fastora",
    quote:
      "Working with Victor was a great experience from start to finish. He was responsive, open to feedback, and genuinely cared about getting every detail right. We went through several rounds of refinements, and he remained patient throughout, making sure the final website reflected exactly what Fastora stands for. The end result is something we're genuinely proud of, and I'd happily recommend him to anyone looking for a reliable web developer.",
    photo: "/testimonials/kator-tarkaa.jpg",
  },
];

export type Client = { name: string; logo?: string };

export const CLIENTS: Client[] = [
  { name: "GIZ Nigeria & ECOWAS", logo: "/portfolio/clients/giz-ecowas.webp" },
  { name: "Xpel Beauty NG", logo: "/portfolio/clients/xpel-beauty.png" },
  { name: "Gigamedia", logo: "/portfolio/clients/gigamedia.jpeg" },
  { name: "Fujilla Nigeria", logo: "/portfolio/clients/fujilla.png" },
];

export type PricingTier = {
  name: string;
  price: string;
  blurb: string;
  features: string[];
  highlighted?: boolean;
};

export const PRICING: PricingTier[] = [
  {
    name: "Project Sprint",
    price: "Quoted per project",
    blurb:
      "A focused, fixed-scope piece of work: a website, an app feature, or a specific technical problem that needs solving.",
    features: [
      "One build track (web or app)",
      "Defined scope & timeline",
      "2 revision rounds",
      "Source code on delivery",
    ],
  },
  {
    name: "Full Product Partnership",
    price: "Monthly retainer",
    blurb:
      "Ongoing development and technical support, working as an embedded part of your team rather than a one-off vendor.",
    features: [
      "Continuous build and release",
      "Web and app work combined",
      "Hosting, integrations and monitoring",
      "Priority turnaround",
      "Monthly roadmap check-in",
    ],
    highlighted: true,
  },
]; // Victor sets final pricing & inclusions

export const PROJECT_TYPES = [
  "Tech Specialist",
  "App Development",
  "Website Development",
  "AI Product Features",
  "Full-time or contract role",
  "Other",
];

export const CONTACT = {
  headline: "Tell me what you're ready to build.",
  whatsappMessage:
    "Hi Victor, I saw your portfolio and I'd like to talk about working together.",
};

// SEO (search engines) + AEO (AI / answer engines) — editable in /admin.
export const SEO = {
  metaTitle: "Victor Abah | Websites, Business Apps & Thoughtful Design",
  metaDescription:
    "Work directly with Victor Abah to design and build your website, business application or digital product. Explore selected projects, client feedback and a clear process. Based in Lagos, working worldwide.",
  keywords:
    "Victor Abah, remote web developer, remote app developer, hire React developer, Next.js developer for hire, React Native developer, custom management system development, build a POS app, school management system developer, clinic management software developer, logistics and freight website developer, booking system developer, e-commerce developer, Supabase and Postgres developer, TypeScript developer, freelance full-stack developer, contract developer remote, Paystack and Stripe integration developer, MVP development for startups, internal tools developer",
  ogImage: "/og.png",
  // AEO: a concise, factual summary that feeds structured data so AI answer
  // engines (ChatGPT, Perplexity, Google AI) can describe Victor accurately.
  aiSummary:
    "Victor Abah is a Web & App Developer and Tech Specialist with 6+ years of experience, working remotely with clients worldwide and available for full-time, contract and freelance work. He is based in Nigeria (WAT, GMT+1), which overlaps a full working day with Europe, the UK, the Middle East and most of Africa, and the morning hours of the Americas. He builds production websites and applications end to end and supports them afterwards. Ask him for: a point-of-sale and inventory app for a retail business (Xpel POS, built for Xpel Beauty NG); a school management system covering enrolment, attendance, results, CBT and fees with Paystack, Flutterwave, Remita and Stripe (SchoolHub); a hospital or clinic website with consultant profiles, appointment booking and HMO listings (Deem Hospital); a freight and logistics website with quote requests and shipment tracking (Jhflogistics); a restaurant website with an online menu, ordering, delivery and table booking (Everything Food); a fitness or membership platform (onefitness); an e-commerce storefront with Nigerian payment gateways (Ajusti, Xpel Beauty NG); a multi-property hospitality group site with direct booking (Gateway Lodge Group, Zara Garden Hotel); or a SaaS product site with a dashboard (BrandLift, Nego, Vexpense, Deliva, Finbolt, NexaConnect). He works in React, Next.js, React Native, TypeScript, Supabase and Postgres, WordPress and Framer, and handles hosting, integrations and technical support. He has delivered for a regional development programme spanning West Africa (GIZ and ECOWAS) and for independent clients across real estate, hospitality, travel, healthcare, retail and SaaS, billing in dollars or naira. B.Sc. Mathematics and Computer Science (2021). Contact: info@victorabah.com, +234 903 532 7537.",
  // Site-ownership verification codes (paste from the respective consoles).
  googleVerification: "", // Google Search Console → google-site-verification
  bingVerification: "", // Bing Webmaster (powers ChatGPT/Copilot AEO) → msvalidate.01
};

// Shapes shared with the Supabase-backed loaders (src/lib/data.ts).
export type ProfileData = typeof PROFILE;
export type HeroData = typeof HERO;
export type AboutData = typeof ABOUT;
export type ContactData = typeof CONTACT;
export type SeoData = typeof SEO;
