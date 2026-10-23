import type { MetadataRoute } from "next";
import { SITE } from "@/lib/about-data";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE.url.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-SearchBot",
          "Google-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
