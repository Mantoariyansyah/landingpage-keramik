import type { MetadataRoute } from "next";
import { SITE, absoluteUrl } from "@/lib/site";
import { locationPath, locations } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE.contentUpdated);
  return [
    { url: absoluteUrl("/"), lastModified, priority: 1 },
    { url: absoluteUrl("/jasa-pasang-keramik"), lastModified, priority: 0.9 },
    ...locations.map((l) => ({
      url: absoluteUrl(locationPath(l.slug)),
      lastModified,
      priority: l.tier === 1 ? 0.9 : 0.7,
    })),
  ];
}
