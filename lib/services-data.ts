export type ServiceItem = {
  slug: string;
  title: string;
  desc: string; 
  stack: string[];
  summary: string; 
  includes: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "website-development",
    title: "Web Development",
    desc: "Custom web apps, SaaS, e-commerce, and full-stack platforms built on Next.js — fast, scalable, and SEO-optimized.",
    stack: ["Next.js", "Express", "Django", "PostgreSQL"],
    summary:
      "PixelPy Tech builds custom websites, web applications, SaaS products and e-commerce platforms with Next.js and full-stack back ends. Every build is fast, scalable and technically SEO-ready from day one.",
    includes: [
      "Business and marketing websites",
      "Custom web applications and dashboards",
      "SaaS and e-commerce platforms",
      "API and database development",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile apps",
    desc: "Native-feeling iOS and Android apps from a single React Native codebase, shipped straight to the stores.",
    stack: ["React Native", "Expo", "Swift"],
    summary:
      "PixelPy Tech builds iOS and Android apps from a single React Native codebase, then handles App Store and Google Play submission. We have shipped apps such as YatraBus and PlusBook.",
    includes: [
      "iOS and Android apps from one codebase",
      "App Store and Google Play release",
      "Push notifications and in-app payments",
      "Post-launch updates and support",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "Product design",
    desc: "Interfaces designed around how people actually use software — wireframes through pixel-perfect UI kits.",
    stack: ["Figma", "Design systems"],
    summary:
      "PixelPy Tech designs web and mobile interfaces around how people really use software, from wireframes and prototypes to complete UI kits and design systems in Figma.",
    includes: [
      "User flows and wireframes",
      "High-fidelity UI design",
      "Clickable prototypes",
      "Design systems and UI kits",
    ],
  },
  {
    slug: "performance-qa",
    title: "Performance & QA",
    desc: "Load-time audits, accessibility passes, and test coverage so what ships stays fast and stable.",
    stack: ["Lighthouse", "Playwright"],
    summary:
      "PixelPy Tech audits and improves the speed, accessibility and reliability of websites and apps, with automated tests that keep releases stable.",
    includes: [
      "Core Web Vitals and load-time audits",
      "Accessibility review",
      "End-to-end test coverage",
      "Bug fixing and monitoring",
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);