import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Halaman tidak ditemukan | Ruang Keramik",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="pt-[74px]">
      <div className="site-container flex min-h-[640px] flex-col justify-center py-20">
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="heading mt-5">
          Halaman yang Anda cari
          <br />
          tidak ditemukan.
        </h1>
        <p className="section-copy mt-6">
          Tautan mungkin salah atau halaman sudah dipindahkan. Kembali ke beranda atau lihat area
          layanan kami.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="button-dark">
            Kembali ke Beranda <ArrowIcon />
          </Link>
          <Link href="/jasa-pasang-keramik" className="button-outline">
            Lihat Area Layanan
          </Link>
        </div>
      </div>
    </section>
  );
}
