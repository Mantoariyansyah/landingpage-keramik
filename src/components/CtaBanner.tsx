import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./ui/Icons";

export function CtaBanner({
  lines = ["Punya rencana pasang keramik?", "Mari kita diskusikan."],
  href = waLink(),
}: {
  lines?: readonly string[];
  href?: string;
}) {
  return (
    <section className="px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="relative overflow-hidden bg-[#b39b79] px-6 py-20 text-center text-[#252521] sm:py-24">
        <p className="text-[11px] font-bold uppercase tracking-[.2em]">Mulai proyek Anda</p>
        <h2 className="mx-auto mt-6 max-w-[850px] text-[clamp(2.3rem,5vw,4.6rem)] font-medium leading-[1.05] tracking-[-.05em]">
          {lines.map((l, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {l}
            </span>
          ))}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-black/60">
          Konsultasikan kebutuhan proyek Anda dan dapatkan estimasi awal tanpa biaya.
        </p>
        <a href={href} target="_blank" rel="noreferrer" className="button-dark mx-auto mt-9 w-fit">
          <WhatsAppIcon /> Konsultasi via WhatsApp
        </a>
      </div>
    </section>
  );
}
