import Link from "next/link";
import { SITE } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";
import { locationPath } from "@/data/locations";

export function Footer() {
  return (
    <footer className="bg-[#252521] pt-20 text-white">
      <div className="site-container grid gap-12 pb-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-9 w-9 grid-cols-2 gap-[3px] bg-white p-[7px]">
              <i className="bg-[#252521]" />
              <i className="bg-[#b49a76]" />
              <i className="bg-[#b49a76]" />
              <i className="bg-[#252521]" />
            </span>
            <span className="text-[15px] font-extrabold">
              RUANG<span className="font-medium text-[#bca888]">KERAMIK</span>
            </span>
          </Link>
          <p className="mt-6 max-w-[330px] text-xs leading-6 text-white/45">
            Jasa pemasangan keramik dan granit profesional untuk wilayah Jabodetabek.
          </p>
        </div>
        <div>
          <h2 className="footer-title">Layanan</h2>
          <Link href="/#layanan">Keramik lantai</Link>
          <Link href="/#layanan">Keramik dinding</Link>
          <Link href="/#layanan">Granit & HT</Link>
          <Link href="/#layanan">Bongkar keramik</Link>
        </div>
        <div>
          <h2 className="footer-title">Area Operasional</h2>
          <Link href={locationPath("jakarta")}>Jakarta</Link>
          <Link href={locationPath("bogor")}>Bogor & Depok</Link>
          <Link href={locationPath("tangerang")}>Tangerang</Link>
          <Link href={locationPath("bekasi")}>Bekasi</Link>
        </div>
        <div>
          <h2 className="footer-title">Kontak</h2>
          <a href={waLink()}>{SITE.phoneDisplay}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <span>{SITE.hoursLabel}</span>
        </div>
      </div>
      <div className="site-container flex flex-col gap-3 border-t border-white/10 py-6 text-[10px] text-white/35 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Ruang Keramik. Seluruh hak cipta dilindungi.</span>
        <span>Jasa Pasang Keramik Borongan Jabodetabek</span>
      </div>
    </footer>
  );
}
