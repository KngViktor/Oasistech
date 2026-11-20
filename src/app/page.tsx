import Sidebar from "@/components/Sidebar";
import ScrollNav from "@/components/ScrollNav";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Resume from "@/components/sections/Resume";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Portfolio from "@/components/sections/Portfolio";
import Faq from "@/components/sections/Faq";
import Testimonials from "@/components/sections/Testimonials";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";
import Process from "@/components/sections/Process";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { homeStructuredData } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/seo";
import {
  getSettings,
  getExperience,
  getEducation,
  getServices,
  getSkills,
  getPortfolio,
  getTestimonials,
  getClients,
  getCertifications,
} from "@/lib/data";

// Re-fetch periodically; admin mutations call revalidatePath('/') for instant updates.
export const revalidate = 300;

// SEO — title/description/keywords/OG are editable in /admin → General → SEO & AEO.
export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getSettings();
  const otherVerification: Record<string, string> = {};
  if (seo.bingVerification)
    otherVerification["msvalidate.01"] = seo.bingVerification;
  return {
    ...pageMetadata({
      title: seo.metaTitle,
      description: seo.metaDescription,
      path: "/",
      image: seo.ogImage,
    }),
    keywords: seo.keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    verification: {
      google: seo.googleVerification || undefined,
      other: Object.keys(otherVerification).length
        ? otherVerification
        : undefined,
    },
  };
}

export default async function Home() {
  const [
    settings,
    experience,
    education,
    services,
    skills,
    portfolio,
    testimonials,
    clients,
    certifications,
  ] = await Promise.all([
    getSettings(),
    getExperience(),
    getEducation(),
    getServices(),
    getSkills(),
    getPortfolio(),
    getTestimonials(),
    getClients(),
    getCertifications(),
  ]);

  const { profile, hero, about, contact, seo } = settings;

  const jsonLd = homeStructuredData({
    profile,
    about,
    education,
    services,
    skills,
    portfolio,
    seo,
  });

  return (
    <>
      <JsonLd value={jsonLd} />
      <Sidebar profile={profile} />
      <ScrollNav profile={profile} />
      <main id="main-content" className="lg:ml-[280px] lg:pr-20">
        <div className="pt-[73px] lg:pt-0">
          <Hero
            hero={hero}
            profile={profile}
            project={
              portfolio.find((p) => p.title === "Lume") ??
              portfolio.find((p) => p.image && p.category === "Websites")
            }
            projectCount={portfolio.length}
          />
          <Clients clients={clients} />
          <Portfolio items={portfolio} />
          <Testimonials testimonials={testimonials} />
          <Services services={services} />
          <Process />
          <About about={about} profile={profile} />
          <div className="border-b border-border px-6 pb-16 sm:px-10 lg:px-12">
            <details className="mx-auto max-w-6xl rounded-2xl border border-border bg-bg-card">
              <summary className="cursor-pointer p-6 font-display text-sm font-semibold">
                Explore my experience, tools and qualifications
              </summary>
              <Resume experience={experience} education={education} />
              <Skills skills={skills} />
              <Certifications certifications={certifications} />
            </details>
          </div>
          <Faq />
          <Contact profile={profile} contact={contact} />
          <Footer profile={profile} />
        </div>
      </main>
      <WhatsAppWidget profile={profile} message={contact.whatsappMessage} />
    </>
  );
}
