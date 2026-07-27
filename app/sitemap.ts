import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fortivex.ai";
  return [
    { url: base, lastModified: new Date(), priority: 1 },
    { url: `${base}/privacy-policy`, lastModified: new Date() },
    { url: `${base}/terms-of-use`, lastModified: new Date() },
  ];
}
