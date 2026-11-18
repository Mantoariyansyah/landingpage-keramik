import Image from "next/image";
import Link from "next/link";
import { photos } from "@/data/content";
import { ArrowIcon, CheckIcon } from "./ui/Icons";
import { Eyebrow } from "./ui/Eyebrow";

type HeroProps = {
  eyebrow: string;
  /** Isi H1. */
  title: React.ReactNode;
  text: string;
  primaryHref: string;
  secondaryHref?: string;
  checks?: readonly string[];
  cardValue?: string;
  /** Breadcrumb visual (halaman wilayah). */
  breadcrumb?: React.ReactNode;
};

export function Hero({
  eyebrow,
  title,
  text,
  primaryHref,
  secondaryHref = "/#portofolio",
  checks = ["Survei lokasi", "Estimasi transparan"],
  cardValue = "Jakarta & Sekitarnya",
  breadcrumb,
}: HeroProps) {
  return (
    <section id="beranda" className="relative pt-14 lg:pt-[74px]">
      <div className="site-container grid items-stretch lg:min-h-[730px] lg:grid-cols-[.93fr_1.07fr]">
        <div className="flex flex-col justify-center py-10 pr-0 lg:py-24 lg:pr-16">
          {breadcrumb}
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-[700px] text-[clamp(2.8rem,6vw,5.45rem)] font-medium leading-[.98] tracking-[-0.055em] lg:mt-7">
            {title}
          </h1>
          <p className="mt-5 max-w-[570px] text-[16px] leading-7 text-[#69675f] lg:mt-7">
            {text}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-10">
            <a href={primaryHref} target="_blank" rel="noreferrer" className="button-dark">
              Konsultasi Proyek <ArrowIcon />
            </a>
            <Link href={secondaryHref} className="button-outline">
              Lihat Hasil Pekerjaan
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-black/10 pt-6 text-xs font-semibold text-[#55534d] lg:mt-14 lg:gap-7 lg:pt-7">
            {checks.map((c) => (
              <span key={c} className="flex items-center gap-2">
                <CheckIcon /> {c}
              </span>
            ))}
          </div>
        </div>
        <div className="relative min-h-[420px] lg:min-h-full">
          <Image
            src={photos.hero}
            alt="Kamar mandi modern dengan instalasi keramik marmer"
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between bg-[#f7f5f0] p-5 sm:left-auto sm:w-[330px]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#8b887f]">
                Area layanan
              </p>
              <p className="mt-1 text-sm font-bold">{cardValue}</p>
            </div>
            <span className="grid h-10 w-10 place-items-center border border-black/15">
              <ArrowIcon diagonal />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}