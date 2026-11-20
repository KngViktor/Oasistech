import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();

// Site-wide fallback metadata. The homepage (src/app/page.tsx) overrides
// title/description/OG/robots from the admin-editable SEO & AEO settings —
// these values only apply if that fetch fails or on non-homepage routes.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Victor Abah | Websites, Business Apps & Thoughtful Design",
  description:
    "Victor Abah builds custom management systems, apps and the websites around them, working remotely with clients worldwide. React, Next.js, React Native and Supabase.",
  keywords: [
    "Victor Abah",
    "remote app developer",
    "custom management system",
    "React developer for hire",
    "React Native",
    "Next.js",
  ],
  authors: [{ name: "Victor Abah" }],
  // llms.txt is supplementary; it is not an alternate representation of every page.
  openGraph: {
    title: "Victor Abah | Websites, Business Apps & Thoughtful Design",
    description:
      "6+ years building the systems businesses run on, and replacing the manual workflows and outdated sites that quietly cost them customers.",
    url: siteUrl,
    siteName: "Victor Abah",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Abah | Websites, Business Apps & Thoughtful Design",
    description:
      "6+ years building production websites and applications. Remote, worldwide.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="en"
      className={`${display.variable} ${body.variable} antialiased`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
