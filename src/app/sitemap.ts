import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://nithya-portfolio-silk.vercel.app", changeFrequency: "monthly", priority: 1 }];
}
