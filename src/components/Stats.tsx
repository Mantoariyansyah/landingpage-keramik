import { stats as defaultStats } from "@/data/content";

export function Stats({ items = defaultStats }: { items?: ReadonlyArray<readonly [string, string]> }) {
  return (
    <section className="bg-[#252521] py-6 text-[#f7f5f0]">
      <div className="site-container grid gap-5 text-center sm:grid-cols-3 sm:text-left">
        {items.map(([value, label], i) => (
          <div
            key={value}
            className={`flex items-center justify-center gap-4 sm:justify-start ${i ? "sm:border-l sm:border-white/15 sm:pl-8" : ""}`}
          >
            <strong className="text-xl font-medium tracking-tight">{value}</strong>
            <span className="text-xs text-white/50">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
