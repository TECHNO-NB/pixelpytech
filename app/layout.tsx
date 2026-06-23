import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelpytech.com"), 

  title: {
    default: "Pixelpy Tech | Web & Mobile App Development Company",
    template: "%s | Pixelpy Tech",
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },


  description:
    "Pixelpy Tech specializes in custom web development, mobile app development, UI/UX design, and digital solutions that help businesses grow online.",

  keywords: [
    "Pixelpy Tech",
    "Pixelpy",
    "Web Development",
    "WebSite Development",
    "Website",
    "Mobile App Development",
    "React Development",
    "Next.js Development",
    "Android App Development",
    "iOS App Development",
    "UI UX Design",
    "Software Company",
    "Digital Solutions",
    "Nepal Software Development",
    "Nepal Website Development"
  ],

  authors: [
    {
      name: "Pixelpy Tech",
      url: "https://pixelpytech.com",
    },
  ],

  creator: "Pixelpy Tech",
  publisher: "Pixelpy Tech",

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

  alternates: {
    canonical: "https://pixelpytech.com",
  },

  openGraph: {
    title: "Pixelpy Tech | Web & Mobile App Development Company",
    description:
      "Transform your ideas into powerful web and mobile applications with Pixelpy Tech.",
    url: "https://pixelpytech.com",
    siteName: "Pixelpy Tech",
    images: [
      {
        url: "/logo.png", 
        width: 1200,
        height: 630,
        alt: "Pixelpy Tech",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pixelpy Tech | Web & Mobile App Development",
    description:
      "Professional web and mobile app development services for startups and businesses.",
    images: ["/logo.png"],
  },

  category: "Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
