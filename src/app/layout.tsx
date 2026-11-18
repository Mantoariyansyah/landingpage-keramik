import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE, absoluteUrl } from "@/lib/site";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { JsonLd } from "@/components/ui/JsonLd";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollTopButton } from "@/components/ScrollTopButton";

const manrope = localFont({
  src: [
    { path: "../fonts/manrope-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/manrope-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/manrope-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/manrope-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/manrope-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-manrope",
  display: "swap",
});

// Desain hanya memakai DM Serif Display versi italic (kata "Borongan" / nama wilayah di H1).
// File regular (dm-serif-regular.woff2) tetap disimpan di src/fonts bila suatu saat dibutuhkan.
const dmSerif = localFont({
  src: [{ path: "../fonts/dm-serif-italic.woff2", weight: "400", style: "italic" }],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.tagline} | ${SITE.name}`,
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    title: `${SITE.tagline} | ${SITE.name}`,
    description: SITE.description,
    url: "/",
    images: [{ url: absoluteUrl("/og-image.jpg"), width: 1200, height: 630, alt: SITE.tagline }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.tagline} | ${SITE.name}`,
    description: SITE.description,
    images: [absoluteUrl("/og-image.jpg")],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f5f0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${manrope.variable} ${dmSerif.variable}`}>
      <body>
        <ScrollToTop />
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:bg-[#252521] focus:px-4 focus:py-2 focus:text-xs focus:font-bold focus:text-white"
        >
          Lewati ke konten utama
        </a>
        <div className="overflow-hidden bg-[#f7f5f0] text-[#252521]">
          <Header />
          <main id="konten">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <ScrollTopButton />
        </div>
      </body>
    </html>
  );
}
