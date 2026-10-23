// @ts-nocheck

import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { SITE, SUMMARY } from "@/lib/about-data";
import { CONTACT, PHONE } from "@/lib/contact-data";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: "Pixelpy Tech | Web & Mobile App Development Company in Nepal",
    template: "%s | Pixelpy Tech",
  },
  description:
    "Leading web and mobile app development company based in Kathmandu, Nepal. We engineer scalable Next.js web apps, React Native mobile solutions, and custom software for local and global clients.",

  applicationName: SITE.name,
  icons: { icon: "/logo.png" },

  keywords: [
    "Web and Mobile App Development Company in Nepal",
    "App Development Agency in Kathmandu",
    "Software Development Company Nepal",
    "Offshore Mobile App Developers Nepal",
    "Next.js Web Application Development Services",
    "React Native Cross Platform App Development",
    "Custom Software Engineering Nepal",
    "Pixelpy Tech",
    "Pixelpy",
    "Pixelpytech",
    "pixelpy",
    "pixelpytech",
    "Web Development",
    "Website Development",
    "Mobile App Development",
    "React Development",
    "Next.js Development",
    "Android App Development",
    "iOS App Development",
    "UI UX Design",
    "Software Company",
    "Digital Solutions",
    "Nepal Software Development",
    "Nepal Website Development",
  ],

  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Technology",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Pixelpy Tech | Web & Mobile App Development Company in Nepal",
    description:
      "Empowering businesses in Nepal and worldwide with custom Next.js web platforms, iOS/Android apps, and fullstack digital solutions.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Pixelpy Tech: web and mobile app development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pixelpy Tech | Web & Mobile App Development Company in Nepal",
    description:
      "Scalable web applications, mobile app development, and dedicated engineering teams in Nepal serving global clients.",
    images: ["/og-default.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: SITE.logo,
      image: `${SITE.url}/og-default.png`,
      description: SUMMARY,
      foundingDate: SITE.founded,
      email: CONTACT.email,
      sameAs: SITE.sameAs,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kathmandu",
        addressLocality: "Kathmandu",
        addressRegion: "Bagmati",
        postalCode: "44600",
        addressCountry: "NP",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 27.7172,
        longitude: 85.324,
      },
      areaServed: [
        { "@type": "Country", name: "Nepal" },
        { "@type": "AdministrativeArea", name: "Worldwide" },
      ],
      knowsAbout: [
        "Web development",
        "Mobile app development",
        "Next.js",
        "React Native",
        "FullStack Software Engineering",
        "Software Outsourcing",
        "UI/UX design",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: CONTACT.email,
        telephone: `${PHONE}`,
        url: `${SITE.url}/contact`,
        availableLanguage: ["English", "Nepali"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { "@id": `${SITE.url}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          {children}
          <Footer />
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}