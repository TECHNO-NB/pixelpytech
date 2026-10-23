import type { Metadata } from "next";
import { Contact } from "@/components/contact";
import { SITE } from "@/lib/about-data";
import { CONTACT, CONTACT_FAQS, PHONE } from "@/lib/contact-data";

const TITLE = "Contact PixelPy Tech | Start Your Website or Mobile App Project";
const DESCRIPTION =
  "Contact PixelPy Tech to start a website, web app or mobile app project. Send your idea by form, email or WhatsApp and get a clear scope and estimate within 24 hours.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: {
    type: "website",
    url: `${SITE.url}/contact`,
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE.name,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${SITE.url}/contact`,
      url: `${SITE.url}/contact`,
      name: TITLE,
      description: DESCRIPTION,
      about: { "@id": `${SITE.url}/#organization` },
      isPartOf: { "@type": "WebSite", url: SITE.url, name: SITE.name },
    },
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: SITE.logo,
      email: CONTACT.email,
      sameAs: SITE.sameAs,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: CONTACT.email,
        telephone: `+${PHONE}`,
        url: `${SITE.url}/contact`,
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: CONTACT_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE.url}/contact` },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Contact />
    </>
  );
}