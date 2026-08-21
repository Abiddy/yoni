import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { workCases } from "@/lib/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...workCases.map((item) => ({
      url: `${siteUrl}/work/${item.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
