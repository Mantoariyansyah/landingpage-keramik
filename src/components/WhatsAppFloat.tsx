import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./ui/Icons";

/** Tombol WhatsApp mengambang (mobile/tablet), sesuai desain. */
export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Konsultasi WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-13 w-13 place-items-center rounded-full bg-[#1f9d59] text-white shadow-lg transition hover:scale-105 lg:hidden"
    >
      <WhatsAppIcon />
    </a>
  );
}
