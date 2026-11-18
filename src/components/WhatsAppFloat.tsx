import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./ui/Icons";

/** Tombol WhatsApp mengambang (mobile/tablet), diposisikan di atas bottom tab bar. */
export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Konsultasi WhatsApp"
      className="fixed right-4 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] z-40 grid h-14 w-14 place-items-center rounded-full bg-[#1f9d59] text-white shadow-lg transition hover:scale-105 lg:hidden"
    >
      <WhatsAppIcon />
    </a>
  );
}