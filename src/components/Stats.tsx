import { stats as defaultStats } from "@/data/content";

export function Stats({ items = defaultStats }: { items?: ReadonlyArray<readonly [string, string]> }) {
  // Duplikasi item supaya animasi -50% kembali ke titik awal tanpa lompatan.
  const loop = [...items, ...items];

  return (
    <section
      aria-label="Statistik"
      className="relative overflow-hidden border-y border-white/10 bg-[#252521] py-6 text-[#f7f5f0]"
    >
      <div className="group">
        <div
          className="flex w-max animate-[marquee_35s_linear_infinite] will-change-transform group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          {loop.map(([value, label], i) => (
            <div
              key={`${value}-${i}`}
              aria-hidden={i >= items.length ? true : undefined}
              className="flex shrink-0 items-center gap-3 pr-10 sm:pr-14"
            >
              <strong className="text-xl font-medium tracking-tight">{value}</strong>
              <span className="text-xs text-white/50">{label}</span>
              <span className="ml-3 h-4 w-px bg-white/15" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}