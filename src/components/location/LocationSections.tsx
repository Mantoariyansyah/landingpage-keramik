import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { Location } from "@/data/locations";
import { locationBySlug, locationPath } from "@/data/locations";
import { ArrowIcon } from "../ui/Icons";
import { Eyebrow } from "../ui/Eyebrow";
import { SectionHeading } from "../ui/SectionHeading";

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-[11px] font-semibold text-[#8b887f]">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {it.href ? (
              <Link href={it.href} className="hover:text-[#252521]">
                {it.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-[#55534d]">
                {it.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function LocationIntro({ loc }: { loc: Location }) {
  return (
    <section className="section-space">
      <div className="site-container">
        <SectionHeading
          eyebrow={`Layanan di ${loc.name}`}
          lines={loc.headline}
          copy={`Wilayah layanan: ${loc.region}.`}
        />
        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-16">
          {loc.intro.map((p, i) => (
            <p key={i} className="max-w-[560px] text-[15px] leading-8 text-[#69675f]">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocalNeeds({ loc }: { loc: Location }) {
  return (
    <section className="section-space bg-[#e9e3d9]">
      <div className="site-container">
        <SectionHeading
          eyebrow="Kebutuhan Umum"
          lines={["Yang biasa kami kerjakan", `di ${loc.name}.`]}
          copy="Contoh pekerjaan yang sering diminta di wilayah ini, dari renovasi satu ruangan hingga proyek komersial."
        />
        <div className="mt-16 grid gap-x-10 gap-y-8 md:grid-cols-3">
          {loc.needs.map((n, i) => (
            <div key={n.title} className="border-t border-black/15 pt-5">
              <span className="text-[11px] font-bold text-[#9b8a70]">0{i + 1}</span>
              <h3 className="mt-3 text-[17px] font-bold leading-snug">{n.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#737067]">{n.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NearbyAreas({ loc }: { loc: Location }) {
  const nearby = loc.nearby.map((s) => locationBySlug(s)).filter((l): l is Location => Boolean(l));
  return (
    <section className="section-space bg-[#f1eee7]">
      <div className="site-container grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <Eyebrow>Cakupan Wilayah</Eyebrow>
          <h2 className="heading mt-5">
            Wilayah sekitar
            <br />
            {loc.name} yang kami layani.
          </h2>
          <p className="mt-6 max-w-[430px] text-sm leading-7 text-[#6b6962]">
            Selain {loc.name}, tim kami juga mengerjakan proyek di wilayah berikut dan seluruh
            Jabodetabek.
          </p>
          <Link
            href="/jasa-pasang-keramik"
            className="mt-9 inline-flex items-center gap-3 border-b border-[#252521] pb-2 text-sm font-bold"
          >
            Lihat semua area layanan <ArrowIcon />
          </Link>
        </div>
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[.18em] text-[#8b887f]">
            Contoh wilayah layanan
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {loc.subareas.map((s) => (
              <li key={s} className="border border-black/15 px-3.5 py-2 text-xs font-semibold">
                {s}
              </li>
            ))}
          </ul>

          <h3 className="mt-12 text-[10px] font-bold uppercase tracking-[.18em] text-[#8b887f]">
            Jasa pasang keramik di wilayah terdekat
          </h3>
          <div className="mt-4 grid border-l border-t border-black/15 sm:grid-cols-3">
            {nearby.map((n) => (
              <Link
                key={n.slug}
                href={locationPath(n.slug)}
                className="block min-h-[130px] border-b border-r border-black/15 p-6 hover:bg-black/[.03]"
              >
                <h4 className="text-xl font-semibold">{n.name}</h4>
                <p className="mt-2 text-xs text-[#77746b]">Jasa pasang keramik {n.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqSection({ loc }: { loc: Location }) {
  return (
    <section className="section-space">
      <div className="site-container grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <Eyebrow>Pertanyaan Umum</Eyebrow>
          <h2 className="heading mt-5">
            Seputar pasang
            <br />
            keramik di {loc.name}.
          </h2>
        </div>
        <div className="border-t border-black/15">
          {loc.faqs.map((f) => (
            <details key={f.q} className="group border-b border-black/15 py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                <h3 className="text-[17px] font-semibold leading-snug tracking-[-.02em]">{f.q}</h3>
                <ChevronDown
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-[#55534d] transition-transform group-open:rotate-180"
                  strokeWidth={1.8}
                />
              </summary>
              <p className="mt-4 max-w-[640px] text-sm leading-7 text-[#69675f]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
