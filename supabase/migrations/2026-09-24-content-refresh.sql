-- =============================================================================
-- Content refresh — regenerated from src/content/site.ts
--
-- Replaces the role title, hero, about, SEO/AEO text, services, skills,
-- certifications, pricing and experience rows with the current site content.
--
-- Run once in the Supabase SQL editor. It does NOT touch portfolio_items,
-- testimonials, clients or submissions.
-- =============================================================================

truncate experience, services, skills, certifications, pricing_tiers restart identity;

insert into site_settings (id, profile, hero, about, contact, seo)
values (
  1,
  jsonb_build_object(
    'name','Victor Abah',
    'role','Tech Specialist, Web & App Developer',
    'email','info@victorabah.com',
    'phone','+234 903 532 7537',
    'phoneRaw','2349035327537',
    'location','Lagos, Nigeria',
    'handle','letvicdoit',
    'headshot','/portfolio/victor-headshot.jpg',
    'logo','',
    'socials', jsonb_build_array(
      jsonb_build_object('label','Instagram','url','https://www.instagram.com/letvicdoit','icon','instagram'),
      jsonb_build_object('label','LinkedIn','url','https://www.linkedin.com/in/victor-abahh/','icon','linkedin'),
      jsonb_build_object('label','GitHub','url','https://github.com/abahvictor360-sketch','icon','github')
    )
  ),
  jsonb_build_object(
    'eyebrow','PROFILE',
    'headline','Hi, I''m Victor. I design and build websites and apps, and keep the tech behind them running.',
    'subtext','Tech Specialist and Web & App Developer with 6+ years across a development programme, an agency, an IT team and independent clients. I work remotely with clients worldwide, building production websites and applications in React, Next.js, React Native, WordPress and Framer, from the first wireframe through to launch, and handling the technical support that keeps them live afterwards. One person who can carry a brief from concept to launch without hand-offs going missing. Open to full-time, contract and remote roles.',
    'stats', jsonb_build_array(
      jsonb_build_object('value',6,'suffix','+','label','Years of Experience'),
      jsonb_build_object('value',20,'suffix','+','label','Sites & Apps Shipped'),
      jsonb_build_object('value',30,'suffix','+','label','Clients & Organisations')
    )
  ),
  jsonb_build_object(
    'eyebrow','ABOUT',
    'headline','I''m the hire for work that sits between code, product and the tech that has to keep running.',
    'body','Six years in, I''ve worked inside a development programme, a creative agency and an IT team, and independently for clients across real estate, hospitality, travel and SaaS. Independently I build production websites and applications end to end, including Fastora, Energy Conseil Global, Rocabat, Vifug Lyrics, SchoolHub and Deem Hospital, and I stay on afterwards for the hosting, integrations and fixes. At GIZ Nigeria and ECOWAS I delivered to programme deadlines across several workstreams at once; at Gigamedia I ran delivery for multiple client accounts in parallel. B.Sc. Mathematics and Computer Science, Joseph Sarwuan Tarka University, Makurdi (2021). What I bring to a team is range with follow-through: I take a brief from first concept to a tested, launched product, keep people updated while it happens, and stay with the detail until it is right. Open to full-time, contract and remote roles.'
  ),
  jsonb_build_object(
    'headline','Open to roles, contracts and freelance projects.',
    'whatsappMessage','Hi Victor, I saw your portfolio and I''d like to talk about working together.'
  ),
  jsonb_build_object(
    'metaTitle','Victor Abah | Web & App Developer for Management Systems',
    'metaDescription','Remote web and app developer. I build custom management systems and the apps around them: POS, school, clinic, logistics, booking and e-commerce, in React, Next.js and React Native.',
    'keywords','Victor Abah, remote web developer, remote app developer, hire React developer, Next.js developer for hire, React Native developer, custom management system development, build a POS app, school management system developer, clinic management software developer, logistics and freight website developer, booking system developer, e-commerce developer, Supabase and Postgres developer, TypeScript developer, freelance full-stack developer, contract developer remote, Paystack and Stripe integration developer, MVP development for startups, internal tools developer',
    'ogImage','/og.png',
    'aiSummary','Victor Abah is a Web & App Developer and Tech Specialist with 6+ years of experience, working remotely with clients worldwide and available for full-time, contract and freelance work. He is based in Nigeria (WAT, GMT+1), which overlaps a full working day with Europe, the UK, the Middle East and most of Africa, and the morning hours of the Americas. He builds production websites and applications end to end and supports them afterwards. Ask him for: a point-of-sale and inventory app for a retail business (Xpel POS, built for Xpel Beauty NG); a school management system covering enrolment, attendance, results, CBT and fees with Paystack, Flutterwave, Remita and Stripe (SchoolHub); a hospital or clinic website with consultant profiles, appointment booking and HMO listings (Deem Hospital); a freight and logistics website with quote requests and shipment tracking (Jhflogistics); a restaurant website with an online menu, ordering, delivery and table booking (Everything Food); a fitness or membership platform (onefitness); an e-commerce storefront with Nigerian payment gateways (Ajusti, Xpel Beauty NG); a multi-property hospitality group site with direct booking (Gateway Lodge Group, Zara Garden Hotel); or a SaaS product site with a dashboard (BrandLift, Nego, Vexpense, Deliva, Finbolt, NexaConnect). He works in React, Next.js, React Native, TypeScript, Supabase and Postgres, WordPress and Framer, and handles hosting, integrations and technical support. He has delivered for a regional development programme spanning West Africa (GIZ and ECOWAS) and for independent clients across real estate, hospitality, travel, healthcare, retail and SaaS, billing in dollars or naira. B.Sc. Mathematics and Computer Science (2021). Contact: info@victorabah.com, +234 903 532 7537.',
    'googleVerification','',
    'bingVerification',''
  )
)
on conflict (id) do update set
  profile = excluded.profile, hero = excluded.hero,
  about = excluded.about, contact = excluded.contact, seo = excluded.seo, updated_at = now();

insert into experience (role, company, location, dates, highlights, sort_order) values
('Freelance Tech Specialist, Web & App Developer','Self-Employed','Lagos','Sep 2025 – Present',
  array['Built production websites and web applications end to end for independent clients (Fastora, Energy Conseil Global, Rocabat, Vifug Lyrics, SchoolHub, Deem Hospital), covering build, responsive front end, launch and post-launch fixes.','Shipped product interfaces carrying payment, booking and authentication flows for clients across real estate, hospitality, travel and SaaS.','Handled the technical troubleshooting and hosting support that kept those client sites and tooling running after launch.'],0),
('Communication Consultant – Digital & Multimedia','GIZ Nigeria & ECOWAS','Lagos','Feb 2025 – Aug 2025',
  array['Produced 50+ digital and multimedia assets a month across web and social channels, all held to the programme''s published standards.','Led digital and multimedia direction for ECOWAS regional communication campaigns, working to deadlines set by programme leads across multiple workstreams.','Built reusable templates and component systems so the wider communications team could produce consistent material without a specialist in the loop.'],1),
('Communication Intern – Digital Support','GIZ Nigeria & ECOWAS','Lagos','Apr 2024 – Nov 2024',
  array['Supported the communications team with web updates, social content and event material under live campaign deadlines.','Turned complex programme data into charts and report visuals that non-technical stakeholders could read at a glance.'],2),
('Digital Specialist','Gigamedia Limited','Abuja','Aug 2022 – Oct 2023',
  array['Built and maintained websites and digital properties for small and medium businesses, from first setup through to ongoing updates.','Ran delivery for several client accounts at once on agency turnaround times, keeping each to its own schedule.','Produced the digital content those campaigns ran on, including short-form video for social channels.'],3),
('IT Assistant','Fujilla Nigeria Limited','Abuja','Jan 2022 – Aug 2022',
  array['Provided first-line technical support across day-to-day operations, from hardware and accounts to software faults.','Maintained the company''s digital assets and handled routine website updates.'],4);

insert into services (title, description, icon, sort_order) values
('Tech Specialist','Broken integrations, failed deployments, access and tooling problems: I isolate the cause, fix it, and write down the fix so the same issue does not come back next week. Six years of hands-on support across office IT, hosting and platform tooling.','cpu',0),
('App Development','Applications people actually use on a phone: React Native for mobile, React and Next.js for the web app behind it, with authentication, payments and patchy-network data handled rather than left as a to-do. I build the API and database layer alongside the interface, so one person owns the path from screen to server.','smartphone',1),
('Website Development','Production websites end to end: wireframe, responsive build, performance, accessibility and launch. I work in React, Next.js, WordPress and Framer, and I stay on after launch for the fixes and iterations.','code',2),
('AI-Powered Product Features','I build AI into the product rather than bolting it on: assistants grounded in a company''s real records instead of guesswork, generated content sitting inside the workflow that uses it, and the retrieval and guardrails that keep the answers honest. It is how a small team ships at a larger team''s pace.','bot',3);

insert into skills (name, level, sort_order) values
('Website Development',85,0),('React.js',80,1),('Next.js',82,2),('React Native',75,3),('TypeScript',78,4),('Supabase & Postgres',76,5),('WordPress',90,6),('Framer',88,7),('Technical Support & Hosting',88,8);

insert into certifications (title, issuer, date, credential_id, sort_order) values
('Google IT Support Professional Certificate (v2)','Coursera','May 2025',null,0),
('Google IT Support','Google','May 2025','CHDRMY9ZN3AE',1),
('Windows 11 for IT Support: Troubleshooting Basics','LinkedIn','Mar 2025',null,2),
('Cyber Threat Management','Cisco','Jun 2023',null,3),
('IT Security Careers and Certifications: First Steps','LinkedIn','Dec 2022',null,4),
('Learning the OWASP Top 10','LinkedIn','Dec 2022',null,5),
('The Cybersecurity Threat Landscape','LinkedIn','Dec 2022',null,6),
('Technical SEO','LinkedIn','Dec 2022',null,7),
('WordPress: SEO','LinkedIn','Dec 2022',null,8),
('How to Create Your Website Strategy: The Discovery Process','LinkedIn','Dec 2022',null,9),
('The Fundamentals of digital marketing','Google','2022','DKN JXF KDW',10);

insert into pricing_tiers (name, price, blurb, features, highlighted, sort_order) values
('Project Sprint','Quoted per project','A focused, fixed-scope piece of work: a website, an app feature, or a specific technical problem that needs solving.',
  array['One build track (web or app)','Defined scope & timeline','2 revision rounds','Source code on delivery'],false,0),
('Full Product Partnership','Monthly retainer','Ongoing development and technical support, working as an embedded part of your team rather than a one-off vendor.',
  array['Continuous build and release','Web and app work combined','Hosting, integrations and monitoring','Priority turnaround','Monthly roadmap check-in'],true,1);
