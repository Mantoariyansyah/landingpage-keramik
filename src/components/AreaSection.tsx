import Link from "next/link";
import { cityCards } from "@/data/content";
import { locationPath } from "@/data/locations";
import { waLink } from "@/lib/whatsapp";
import { ArrowIcon } from "./ui/Icons";
import { Eyebrow } from "./ui/Eyebrow";

export function AreaSection() {
  return (
    <section id="area" className="section-space bg-[#f1eee7]">
      <div className="site-container grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <Eyebrow>Area Layanan</Eyebrow>
          <h2 className="heading mt-5">
            Kami hadir lebih
            <br />
            dekat dengan Anda.
          </h2>
          <p className="mt-6 max-w-[430px] text-sm leading-7 text-[#6b6962]">
            Tim kami siap melakukan survei lokasi dan pengerjaan di seluruh wilayah Jabodetabek.
          </p>
          <a
            href={waLink()}
            className="mt-9 inline-flex items-center gap-3 border-b border-[#252521] pb-2 text-sm font-bold"
          >
            Cek jangkauan lokasi <ArrowIcon />
          </a>
        </div>
        <div className="grid border-l border-t border-black/15 sm:grid-cols-2">
          {cityCards.map(({ city, coverage, slug }, i) => (
            <Link
              key={city}
              href={locationPath(slug)}
              className={`block min-h-[150px] border-b border-r border-black/15 p-6 hover:bg-black/[.03] ${i === 4 ? "sm:col-span-2" : ""}`}
            >
              <span className="text-[10px] font-bold text-[#9b8a70]">0{i + 1}</span>
              <h3 className="mt-4 text-xl font-semibold">{city}</h3>
              <p className="mt-2 text-xs text-[#77746b]">{coverage}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}