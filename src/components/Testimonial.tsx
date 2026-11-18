import { testimonial } from "@/data/content";
import { Eyebrow } from "./ui/Eyebrow";

/* Fallback: gabungkan testimoni utama + contoh tambahan.
   Kalau nanti `@/data/content` mengekspor `testimonials` (array),
   cukup ganti ke: import { testimonials } from "@/data/content"; */
const testimonials = [
  testimonial,
  {
    quote:
      "Pengerjaan cepat, hasil rapi, dan timnya komunikatif dari survei sampai finishing.",
    name: "Budi Santoso",
    initials: "BS",
    meta: "Renovasi Rumah • Bekasi",
  },
  {
    quote:
      "Harga transparan dan tidak ada biaya kejutan. Keramik terpasang presisi tanpa nat belang.",
    name: "Rina Wijaya",
    initials: "RW",
    meta: "Cluster Modern • Tangerang",
  },
  {
    quote:
      "Sangat puas dengan hasilnya. Area basah dikerjakan detail, tidak ada genangan sama sekali.",
    name: "Andi Pratama",
    initials: "AP",
    meta: "Kamar Mandi • Depok",
  },
];

export function Testimonial() {
  return (
    <section className="section-space">
      <div className="site-container">
        {/* Heading */}
        <div className="max-w-[520px]">
          <Eyebrow>Testimoni</Eyebrow>
          <h2 className="heading mt-5">
            Kepercayaan yang
            <br />
            kami jaga.
          </h2>
        </div>

        {/* Grid kartu testimoni */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-2xl border border-black/10 bg-[#faf8f3] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              <div
                className="text-xs tracking-[.3em] text-[#b49a76]"
                aria-label="Penilaian 5 dari 5 bintang"
              >
                ★★★★★
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-6 text-[#4a4844]">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-black/10 pt-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#ded6c8] text-xs font-bold text-[#252521]">
                  {t.initials}
                </span>
                <div className="min-w-0">
                  <strong className="block truncate text-xs font-semibold text-[#252521]">
                    {t.name}
                  </strong>
                  <span className="block truncate text-[11px] text-[#8a877e]">
                    {t.meta}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}