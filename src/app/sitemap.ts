import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { rooms } from "@/lib/images";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    ...rooms.map((r) => ({
      url: `${base}/rooms/${r.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
