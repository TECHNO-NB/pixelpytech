import type { MetadataRoute } from "next";
import { SITE } from "@/lib/about-data";

const routes = [
  {
    path: "",
    priority: 1.0,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/about",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/services",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },

  {
    path: "/projects",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/contact",
    priority: 0.8,
    changeFrequency: "yearly" as const,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE.url.replace(/\/$/, "")}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}