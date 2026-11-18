import { testimonial } from "@/data/content";
import { Eyebrow } from "./ui/Eyebrow";

export function Testimonial() {
  return (
    <section className="section-space">
      <div className="site-container grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <Eyebrow>Testimoni</Eyebrow>
          <h2 className="heading mt-5">
            Kepercayaan yang
            <br />
            kami jaga.
          </h2>
        </div>
        <div>
          <div className="text-[#b49a76]" aria-label="Penilaian 5 dari 5 bintang">
            ★★★★★
          </div>
          <blockquote className="mt-7 max-w-[810px] text-[clamp(1.45rem,3vw,2.3rem)] font-medium leading-[1.45] tracking-[-.03em]">
            “{testimonial.quote}”
          </blockquote>
          <div className="mt-9 flex items-center gap-4 border-t border-black/10 pt-6">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#ded6c8] text-sm font-bold">
              {testimonial.initials}
            </span>
            <div>
              <strong className="block text-sm">{testimonial.name}</strong>
              <span className="text-xs text-[#8a877e]">{testimonial.meta}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
