/**
 * Konfigurasi pusat bisnis & situs.
 * Nilai bisa di-override lewat environment variable (lihat .env.example) tanpa mengubah kode.
 *
 * PENTING sebelum go-live: ganti nomor WhatsApp, email, dan domain dengan data asli.
 * Nilai default di bawah berasal dari desain Figma (placeholder).
 */

const rawWa = (process.env.NEXT_PUBLIC_WA_NUMBER ?? "6289688087637").replace(/\D/g, "");

/** "6281234567890" -> "+62 812 3456 7890" */
function formatPhone(intl: string): string {
  if (!intl.startsWith("62")) return `+${intl}`;
  const rest = intl.slice(2);
  return `+62 ${rest.slice(0, 3)} ${rest.slice(3, 7)} ${rest.slice(7)}`.trim();
}

export const SITE = {
  name: "Ruang Keramik",
  legalName: "Ruang Keramik",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ruangkeramik.id").replace(/\/$/, ""),
  locale: "id_ID",
  tagline: "Jasa Pasang Keramik Borongan Jabodetabek",
  description:
    "Jasa pasang keramik dan granit borongan di Jabodetabek: Gunung Putri, Kota Wisata, Cibubur, Cileungsi, Jatiasih. Survei lokasi, estimasi transparan, konsultasi via WhatsApp.",
  whatsappNumber: rawWa,
  phoneIntl: `+${rawWa}`,
  phoneDisplay: formatPhone(rawWa),
  email: process.env.NEXT_PUBLIC_EMAIL ?? "halo@ruangkeramik.id",
  hoursLabel: "Sen–Sab, 08.00–17.00",
  /** Alamat fisik hanya dimasukkan ke schema bila benar-benar diisi. */
  address: process.env.NEXT_PUBLIC_STREET_ADDRESS
    ? {
        streetAddress: process.env.NEXT_PUBLIC_STREET_ADDRESS,
        postalCode: process.env.NEXT_PUBLIC_POSTAL_CODE ?? "",
      }
    : null,
  /** Perbarui saat konten berubah signifikan (dipakai sitemap lastmod). */
  contentUpdated: "2026-11-17",
} as const;

export function absoluteUrl(path = "/"): string {
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
