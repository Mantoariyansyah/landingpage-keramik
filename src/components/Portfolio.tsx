import Image from "next/image";
import { portfolio } from "@/data/content";
import { SectionHeading } from "./ui/SectionHeading";

export function Portfolio() {
  return (
    <section id="portofolio" className="section-space">
      <div className="site-container">
        <SectionHeading
          eyebrow="Proyek Pilihan"
          lines={["Hasil yang berbicara", "melalui setiap detail."]}
          copy="Pilihan proyek pemasangan lantai, kamar mandi, dan granit dari tim kami."
        />
        <div className="portfolio-grid mt-16">
          {portfolio.map((p) => (
            <figure key={p.key} className={`project project-${p.key}`}>
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <figcaption>
                <span>{p.label}</span>
                <strong>{p.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
