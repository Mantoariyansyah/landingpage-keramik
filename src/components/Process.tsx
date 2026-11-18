import { steps } from "@/data/content";
import { ArrowIcon } from "./ui/Icons";
import { SectionHeading } from "./ui/SectionHeading";

export function Process() {
  return (
    <section className="section-space bg-[#252521] text-white">
      <div className="site-container">
        <SectionHeading
          dark
          eyebrow="Proses Kerja"
          lines={["Dari konsultasi", "hingga serah terima."]}
          copy="Alur kerja sederhana dan terarah agar proyek berjalan sesuai ekspektasi."
        />
        <div className="mt-16 grid md:grid-cols-5">
          {steps.map(([no, title, text], i) => (
            <div key={no} className="relative border-t border-white/20 py-7 md:pr-6">
              <span className="absolute -top-[5px] left-0 h-2.5 w-2.5 rounded-full bg-[#b59a74]" />
              <span className="text-[11px] font-bold text-[#bda989]">{no}</span>
              <h3 className="mt-7 text-[17px] font-semibold">{title}</h3>
              <p className="mt-3 text-xs leading-5 text-white/45">{text}</p>
              {i < 4 && (
                <span className="absolute right-6 top-7 hidden text-white/25 md:block">
                  <ArrowIcon />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
