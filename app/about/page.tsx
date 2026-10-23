import type { Metadata } from "next";
import { About } from "@/components/about";
import { FAQS, SITE, SUMMARY } from "@/lib/about-data";

const TITLE = "About PixelPy Tech | Website & Mobile App Studio";
const DESCRIPTION =
  "PixelPy Tech is a product studio building fast websites and mobile apps with Next.js and React Native. 15+ products shipped, 4.9/5 client rating.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    type: "website",
    url: `${SITE.url}/about`,
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE.name,
    images: [{ url: `${SITE.url}/og-about.png`, width: 1200, height: 630 }], 
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: SITE.logo,
      description: SUMMARY,
      foundingDate: SITE.founded,
      email: SITE.email,
      sameAs: SITE.sameAs,
      knowsAbout: ["Web development", "Mobile app development", "Next.js", "React Native", "Product design"],
    },
    {
      "@type": "AboutPage",
      "@id": `${SITE.url}/about#webpage`,
      url: `${SITE.url}/about`,
      name: TITLE,
      description: DESCRIPTION,
      about: { "@id": `${SITE.url}/#organization` },
      isPartOf: { "@type": "WebSite", url: SITE.url, name: SITE.name },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "About", item: `${SITE.url}/about` },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <About />
    </>
  );
}