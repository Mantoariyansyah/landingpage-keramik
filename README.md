# Ruang Keramik — Next.js (App Router) + TypeScript + Tailwind CSS v4

Implementasi desain Figma "Jasa Pasang Keramik Borongan" yang siap deploy ke Vercel.

## Menjalankan
```bash
npm install
cp .env.example .env.local   # lalu isi nilai asli
npm run dev                  # http://localhost:3000
npm run build && npm start   # uji produksi
```

## WAJIB diganti sebelum go-live (`.env.local` / Vercel Environment Variables)
| Variabel | Fungsi | Default (placeholder dari Figma) |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Domain produksi: canonical, sitemap, OG, schema | `https://ruangkeramik.id` |
| `NEXT_PUBLIC_WA_NUMBER` | Nomor WhatsApp (`62812...`, tanpa +/0/spasi) | `6281234567890` |
| `NEXT_PUBLIC_EMAIL` | Email bisnis | `halo@ruangkeramik.id` |
| `NEXT_PUBLIC_STREET_ADDRESS`, `NEXT_PUBLIC_POSTAL_CODE` | Opsional. Alamat untuk schema LocalBusiness (isi hanya jika valid) | kosong |

## Struktur
```
src/app/            layout, page (beranda), jasa-pasang-keramik/ (hub + [slug]), sitemap.ts, robots.ts, not-found.tsx
src/components/     Header, Hero, Stats, Services, About, Portfolio, Process, AreaSection, Testimonial,
                    EstimateForm, CtaBanner, Footer, WhatsAppFloat, location/*, ui/*
src/data/content.ts teks & data section dari Figma (dipindahkan apa adanya)
src/data/locations.ts  konten unik 10 halaman wilayah (title, meta, intro, kebutuhan, FAQ)
src/lib/            site.ts (konfigurasi), whatsapp.ts, schema.ts (JSON-LD)
src/fonts/          Manrope & DM Serif Display (WOFF2 subset latin, dari TTF Figma)
```

## Menambah / mengubah halaman wilayah
Edit `src/data/locations.ts`. Halaman, sitemap, schema, form, dan internal link ter-generate otomatis.
Pastikan konten setiap wilayah tetap unik (jangan hanya mengganti nama kota).

## Catatan teknis
- `.container` bawaan export Figma bertabrakan dengan utility `container` Tailwind v4 sehingga di tablet konten menempel ke tepi layar. Diganti `.site-container` (1280px maks, gutter 20px; 32px di mobile). Pada 390px dan 1440px hasilnya identik dengan Figma.
- Seluruh halaman statis (SSG). Gambar memakai `next/image` (AVIF/WebP, `sizes` responsif, hero `priority`).
- Form estimasi tidak memakai backend: pesan disusun lalu dibuka di WhatsApp.
