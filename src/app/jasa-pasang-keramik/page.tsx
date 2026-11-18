import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, SITE } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";
import { breadcrumbSchema } from "@/lib/schema";
import { locationPath, priorityOne, priorityTwo, type Location } from "@/data/locations";
import { Hero } from "@/components/Hero";
import { EstimateForm } from "@/components/EstimateForm";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumb } from "@/components/location/LocationSections";

const title = "Area Layanan Jasa Pasang Keramik Jabodetabek | Ruang Keramik";
const description =
  "Area layanan jasa pasang keramik dan granit borongan di Jabodetabek: Gunung Putri, Kota Wisata, Cibubur, Cileungsi, Jatiasih, Bogor, Depok, Bekasi, Jakarta, Tangerang.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/jasa-pasang-keramik" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    title,
    description,
    url: "/jasa-pasang-keramik",
    images: [{ url: absoluteUrl("/og-image.jpg"), width: 1200, height: 630, alt: title }],
  },
};

function LocationGrid({ items, start = 1 }: { items: Location[]; start?: number }) {
  return (
    <ul className="mt-16 grid border-l border-t border-black/15 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((l, i) => (
        <li key={l.slug}>
          <Link
            href={locationPath(l.slug)}
            className="block h-full min-h-[170px] border-b border-r border-black/15 p-6 hover:bg-black/[.03]"
          >
            <span className="text-[10px] font-bold text-[#9b8a70]">
              {String(start + i).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-xl font-semibold">{l.name}</h3>
            <p className="mt-2 text-xs leading-5 text-[#77746b]">
              Jasa pasang keramik {l.name}. {l.region}.
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function AreaHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Area Layanan", path: "/jasa-pasang-keramik" },
        ])}
      />
      <Hero
        eyebrow="Area Layanan"
        breadcrumb={
          <Breadcrumb items={[{ label: "Beranda", href: "/" }, { label: "Area Layanan" }]} />
        }
        title={
          <>
            Jasa Pasang Keramik
            <br />
            di <em className="font-serif font-normal text-[#947e61]">Jabodetabek</em>
          </>
        }
        text="Pilih wilayah proyek Anda untuk melihat layanan, contoh pekerjaan, dan cara meminta estimasi di area tersebut."
        primaryHref={waLink()}
        cardValue="Jabodetabek"
      />

      <section className="section-space">
        <div className="site-container">
          <SectionHeading
            eyebrow="Wilayah Utama"
            lines={["Dekat dengan proyek", "di sisi timur Jabodetabek."]}
            copy="Wilayah yang paling sering kami layani, dengan jadwal survei yang lebih mudah diatur."
          />
          <LocationGrid items={priorityOne} />
        </div>
      </section>

      <section className="section-space bg-[#f1eee7]">
        <div className="site-container">
          <SectionHeading
            eyebrow="Wilayah Lainnya"
            lines={["Jangkauan layanan", "seluruh Jabodetabek."]}
            copy="Tim kami siap melakukan survei lokasi dan pengerjaan di seluruh wilayah Jabodetabek."
          />
          <LocationGrid items={priorityTwo} start={priorityOne.length + 1} />
        </div>
      </section>

      <EstimateForm />
      <CtaBanner />
    </>
  );
}
