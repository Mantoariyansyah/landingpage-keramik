import { SITE, absoluteUrl } from "./site";
import { locations, locationPath, type Location } from "@/data/locations";
import { services } from "@/data/content";

export const BUSINESS_ID = `${SITE.url}/#business`;

/** LocalBusiness: hanya memuat data yang valid. Alamat/rating/harga sengaja tidak dikarang. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": BUSINESS_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    description: SITE.description,
    image: absoluteUrl("/og-image.jpg"),
    logo: absoluteUrl("/icon.png"),
    telephone: SITE.phoneIntl,
    email: SITE.email,
    ...(SITE.address
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE.address.streetAddress,
            ...(SITE.address.postalCode ? { postalCode: SITE.address.postalCode } : {}),
            addressCountry: "ID",
          },
        }
      : {}),
    areaServed: [
      ...locations.map((l) => ({
        "@type": l.schemaType,
        name: l.name,
      })),
      { "@type": "AdministrativeArea", name: "Jabodetabek" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: SITE.phoneIntl,
      availableLanguage: ["id"],
    },
    knowsAbout: ["Pemasangan keramik", "Pemasangan granit", "Homogeneous tile", "Renovasi kamar mandi"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan pemasangan keramik dan granit",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.text },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "id-ID",
    publisher: { "@id": BUSINESS_ID },
  };
}

export function serviceSchema(loc: Location) {
  const url = absoluteUrl(locationPath(loc.slug));
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `${loc.h1Lead} ${loc.name}`,
    serviceType: "Pemasangan keramik dan granit",
    description: loc.heroText,
    url,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": loc.schemaType, name: loc.name },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}
