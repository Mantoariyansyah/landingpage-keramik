import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { absoluteUrl, SITE } from "@/lib/site";
import { waLinkForArea } from "@/lib/whatsapp";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { locationBySlug, locationPath, locations } from "@/data/locations";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { EstimateForm } from "@/components/EstimateForm";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  Breadcrumb,
  FaqSection,
  LocalNeeds,
  LocationIntro,
  NearbyAreas,
} from "@/components/location/LocationSections";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const loc = locationBySlug(slug);
  if (!loc) return {};
  const path = locationPath(loc.slug);
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      siteName: SITE.name,
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: path,
      images: [{ url: absoluteUrl("/og-image.jpg"), width: 1200, height: 630, alt: `${loc.h1Lead} ${loc.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: loc.metaTitle,
      description: loc.metaDescription,
      images: [absoluteUrl("/og-image.jpg")],
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const loc = locationBySlug(slug);
  if (!loc) notFound();

  const crumbs = [
    { name: "Beranda", path: "/" },
    { name: "Area Layanan", path: "/jasa-pasang-keramik" },
    { name: loc.name, path: locationPath(loc.slug) },
  ];

  return (
    <>
      <JsonLd data={[serviceSchema(loc), breadcrumbSchema(crumbs)]} />
      <Hero
        eyebrow="Spesialis Keramik & Granit"
        breadcrumb={
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Area Layanan", href: "/jasa-pasang-keramik" },
              { label: loc.name },
            ]}
          />
        }
        title={
          <>
            {loc.h1Lead}{" "}
            <em className="font-serif font-normal text-[#947e61]">{loc.name}</em>
          </>
        }
        text={loc.heroText}
        primaryHref={waLinkForArea(loc.name)}
        cardValue={`${loc.name} & Sekitarnya`}
      />
      <Stats
        items={[
          ["8+ Tahun", "Pengalaman lapangan"],
          ["250+", "Proyek terselesaikan"],
          [loc.name, "Area layanan"],
        ]}
      />
      <LocationIntro loc={loc} />
      <LocalNeeds loc={loc} />
      <Services
        eyebrow="Layanan Kami"
        lines={["Layanan pemasangan keramik", `dan granit di ${loc.name}.`]}
        copy="Setiap pekerjaan dimulai dari pengukuran yang akurat dan diakhiri dengan pemeriksaan detail untuk hasil yang tahan lama."
      />
      <Process />
      <NearbyAreas loc={loc} />
      <FaqSection loc={loc} />
      <EstimateForm defaultArea={loc.name} />
      <CtaBanner
        lines={[`Punya rencana pasang keramik`, `di ${loc.name}? Mari diskusikan.`]}
        href={waLinkForArea(loc.name)}
      />
    </>
  );
}
