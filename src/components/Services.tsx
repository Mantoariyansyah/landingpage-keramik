import { services } from "@/data/content";
import { ArrowIcon } from "./ui/Icons";
import { SectionHeading } from "./ui/SectionHeading";

type Props = {
  eyebrow?: string;
  lines?: readonly string[];
  copy?: string;
};

export function Services({
  eyebrow = "Layanan Kami",
  lines = ["Pengerjaan lengkap,", "satu tim terpercaya."],
  copy = "Setiap pekerjaan dimulai dari pengukuran yang akurat dan diakhiri dengan pemeriksaan detail untuk hasil yang tahan lama.",
}: Props) {
  return (
    <section id="layanan" className="section-space">
      <div className="site-container">
        <SectionHeading eyebrow={eyebrow} lines={lines} copy={copy} />
        <div className="mt-16 border-t border-black/15">
          {services.map((service) => (
            <div
              key={service.no}
              className="service-row group grid items-center gap-4 border-b border-black/15 py-7 md:grid-cols-[70px_1fr_1fr_40px]"
            >
              <span className="text-xs font-bold text-[#9b8a70]">{service.no}</span>
              <h3 className="text-xl font-semibold tracking-[-.025em]">{service.title}</h3>
              <p className="max-w-[490px] text-sm leading-6 text-[#77746b]">{service.text}</p>
              <span className="hidden h-9 w-9 place-items-center border border-black/15 transition group-hover:bg-[#252521] group-hover:text-white md:grid">
                <ArrowIcon diagonal />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
