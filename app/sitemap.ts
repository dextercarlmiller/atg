import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://atgfw.com";
  const pages = [
    { path: "/", priority: 1.0, changeFreq: "weekly" as const },
    { path: "/about", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/managed-it", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/cybersecurity", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/co-managed-it", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/voip", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/security-surveillance", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/ai-services", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/support", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/legal", priority: 0.5, changeFreq: "yearly" as const },
    { path: "/contact", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/blog", priority: 0.7, changeFreq: "weekly" as const },
  ];

  return pages.map(({ path, priority, changeFreq }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  }));
}
