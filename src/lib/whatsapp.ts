import { SITE } from "./site";

export const DEFAULT_WA_MESSAGE = "Halo Ruang Keramik, saya ingin konsultasi proyek.";

/** Bangun tautan wa.me dengan pesan terisi otomatis. */
export function waLink(message: string = DEFAULT_WA_MESSAGE): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Pesan konsultasi khusus halaman wilayah (membantu melacak asal lead). */
export function waLinkForArea(areaName: string): string {
  return waLink(`Halo Ruang Keramik, saya ingin konsultasi pasang keramik di ${areaName}.`);
}
