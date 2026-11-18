"use client";

import { useEffect, useRef, useState } from "react";
import { steps } from "@/data/content";
import { ArrowIcon } from "./ui/Icons";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Process() {
  const listRef = useRef<HTMLDivElement>(null);
  const [grow, setGrow] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    // Hormati preferensi "reduce motion" → garis langsung penuh.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGrow(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGrow(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section-space bg-[#252521] text-white">
      <div className="site-container">
        <SectionHeading
          dark
          eyebrow="Proses Kerja"
          lines={["Dari konsultasi", "hingga serah terima."]}
          copy="Alur kerja sederhana dan terarah agar proyek berjalan sesuai ekspektasi."
        />

        <div ref={listRef} className="relative mt-16 grid md:grid-cols-5">
          {/* Garis dasar abu (desktop) — pengganti border-t per kartu */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-px bg-white/20 md:block"
          />

          {/* Garis emas yang tumbuh dari kiri ke kanan (desktop) */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-px origin-left bg-[#b59a74] transition-transform duration-[1600ms] ease-out md:block"
            style={{ transform: `scaleX(${grow ? 1 : 0})` }}
          />

          {steps.map(([no, title, text], i) => (
            <Reveal key={no} delay={i * 120}>
              <div className="group relative border-t border-white/20 py-7 md:border-t-0 md:pr-6">
                {/* Dot emas — menyala saat hover */}
                <span
                  className="absolute -top-[5px] left-0 h-2.5 w-2.5 rounded-full bg-[#b59a74] transition-all duration-500 group-hover:scale-150 group-hover:shadow-[0_0_0_6px_rgba(181,154,116,.15)]"
                />
                <span className="text-[11px] font-bold text-[#bda989]">{no}</span>
                <h3 className="mt-7 text-[17px] font-semibold">{title}</h3>
                <p className="mt-3 text-xs leading-5 text-white/45">{text}</p>
                {i < 4 && (
                  <span className="absolute right-6 top-7 hidden text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white/50 md:block">
                    <ArrowIcon />
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}