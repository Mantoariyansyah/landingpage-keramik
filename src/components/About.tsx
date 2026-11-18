import Image from "next/image";
import { advantages, photos } from "@/data/content";
import { Eyebrow } from "./ui/Eyebrow";

export function About() {
  return (
    <section id="tentang" className="bg-[#e9e3d9]">
      <div className="site-container grid lg:grid-cols-2">
        <div className="relative min-h-[500px] lg:min-h-[680px]">
          <Image
            src={photos.process}
            alt="Tenaga profesional memeriksa material keramik"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover grayscale-[20%]"
          />
          <div className="absolute bottom-0 right-0 bg-[#252521] px-7 py-6 text-white">
            <strong className="block text-3xl font-medium">100%</strong>
            <span className="mt-1 block text-[11px] uppercase tracking-[.14em] text-white/55">
              Fokus pada detail
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center py-20 lg:pl-20">
          <Eyebrow>Mengapa Kami</Eyebrow>
          <h2 className="heading mt-5">
            Standar kerja yang
            <br />
            bisa Anda andalkan.
          </h2>
          <p className="mt-6 max-w-[520px] text-sm leading-7 text-[#69675f]">
            Kami memahami bahwa hasil akhir bukan hanya soal keramik terpasang, tetapi tentang
            kualitas ruang yang akan digunakan bertahun-tahun.
          </p>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {advantages.map(([title, text], i) => (
              <div key={title} className="border-t border-black/15 pt-5">
                <span className="text-[11px] font-bold text-[#9b8a70]">0{i + 1}</span>
                <h3 className="mt-3 text-[15px] font-bold">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#737067]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
