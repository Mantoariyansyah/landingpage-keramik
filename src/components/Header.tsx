"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { navLinks } from "@/data/content";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./ui/Icons";

/* ---------- Ikon tab ---------- */
const iconBeranda: ReactNode = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
    <path d="M3 11.2 12 4l9 7.2" />
    <path d="M5.5 9.8V20h13V9.8" />
  </svg>
);

const iconTentang: ReactNode = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
    <path d="M3 21h18" />
    <path d="M5 21V8l7-4 7 4v13" />
    <path d="M9 21v-5h6v5" />
  </svg>
);

const iconPortfolio: ReactNode = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="8.5" cy="9.5" r="1.5" />
    <path d="m21 15-5-5L5 20" />
  </svg>
);

const iconKontak: ReactNode = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

/* Layanan — ikon palu & kuas (jasa pasang / tukang) */
const iconLayanan: ReactNode = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
    <path d="M14.7 6.3a3.2 3.2 0 0 0 4.2 4.2l-8.4 8.4a2.1 2.1 0 0 1-3-3l8.4-8.4-1.2-1.2Z" />
    <path d="M3 21l3.5-3.5" />
  </svg>
);

/* Area Layanan — ikon pin lokasi */
const iconArea: ReactNode = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
    <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

/* Fallback netral (bukan rumah) supaya tidak menipu kalau ada href tak dikenal */
const iconFallback: ReactNode = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
    <circle cx="12" cy="12" r="3.5" />
  </svg>
);

/* ---------- Pilih ikon berdasarkan keyword di href + label ----------
   Urutan penting: Area Layanan dicek DULU sebelum Layanan,
   karena label "Area Layanan" mengandung kata "layanan". */
function getTabIcon(href: string, label: string): ReactNode {
  const key = `${href} ${label}`.toLowerCase();

  if (/(area|lokasi|location|wilayah|jangkauan|coverage)/.test(key)) return iconArea;
  if (/(layanan|service|jasa)/.test(key)) return iconLayanan;
  if (/(tentang|about|profil|profile)/.test(key)) return iconTentang;
  if (/(portfolio|portofolio|karya|proyek|project|galeri|gallery|work)/.test(key))
    return iconPortfolio;
  if (/(kontak|contact|hubungi)/.test(key)) return iconKontak;
  if (href === "/" || /(beranda|home|utama)/.test(key)) return iconBeranda;

  return iconFallback;
}

export function Header() {
  const pathname = usePathname();
  const wa = waLink();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ========== MOBILE : brand bar tipis di atas ========== */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/8 bg-[#f7f5f0]/95 backdrop-blur-sm lg:hidden">
        <div className="site-container flex h-14 items-center justify-center">
          <Link href="/" className="flex items-center gap-2" aria-label="Ruang Keramik">
            <span className="grid h-7 w-7 grid-cols-2 gap-[2px] bg-[#252521] p-[5px]">
              <i className="bg-[#f7f5f0]" />
              <i className="bg-[#b49a76]" />
              <i className="bg-[#b49a76]" />
              <i className="bg-[#f7f5f0]" />
            </span>
            <span className="text-sm font-extrabold tracking-[-0.02em]">
              RUANG<span className="font-medium text-[#86745c]">KERAMIK</span>
            </span>
          </Link>
        </div>
      </header>

      {/* ========== MOBILE : bottom tab bar ========== */}
      <nav
        aria-label="Navigasi utama"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-black/8 bg-[#f7f5f0]/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden"
      >
        <div className="mx-auto flex max-w-lg items-stretch">
          {navLinks.map(([label, href]) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`relative flex flex-1 flex-col items-center justify-center gap-1 py-2.5 transition-colors ${
                  active ? "text-[#252521]" : "text-[#86745c] hover:text-[#252521]"
                }`}
              >
                <span
                  className={`absolute top-0 h-[2px] w-8 rounded-full bg-[#252521] transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
                <span className="h-5 w-5">{getTabIcon(href, label)}</span>
                <span className="text-[10px] font-semibold tracking-wide">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* ========== DESKTOP : floating pill ========== */}
      <header className="pointer-events-none fixed inset-x-0 top-4 z-50 hidden justify-center lg:flex">
        <div
          className={`group pointer-events-auto flex items-center rounded-full border border-black/8 bg-[#f7f5f0]/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-300 ease-out ${
            scrolled ? "px-2 py-1.5" : "px-3 py-2"
          }`}
        >
          {/* Brand */}
          <Link href="/" className="flex items-center" aria-label="Ruang Keramik">
            <span className="grid h-8 w-8 shrink-0 grid-cols-2 gap-[2px] bg-[#252521] p-[6px]">
              <i className="bg-[#f7f5f0]" />
              <i className="bg-[#b49a76]" />
              <i className="bg-[#b49a76]" />
              <i className="bg-[#f7f5f0]" />
            </span>
            <span
              className={`overflow-hidden whitespace-nowrap text-sm font-extrabold tracking-[-0.02em] transition-all duration-300 ${
                scrolled
                  ? "ml-0 max-w-0 opacity-0 group-hover:ml-2 group-hover:max-w-[120px] group-hover:opacity-100"
                  : "ml-2 max-w-[120px] opacity-100"
              }`}
            >
              RUANG<span className="font-medium text-[#86745c]">KERAMIK</span>
            </span>
          </Link>

          <span className="mx-2 h-5 w-px bg-black/10" />

          {/* Nav */}
          <nav className="flex items-center" aria-label="Navigasi utama">
            {navLinks.map(([label, href]) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center rounded-full py-2 transition-colors ${
                    scrolled ? "px-2" : "px-3"
                  } ${
                    active
                      ? "bg-[#252521] text-[#f7f5f0]"
                      : "text-[#252521] hover:bg-black/5"
                  }`}
                >
                  <span className="h-4 w-4 shrink-0">{getTabIcon(href, label)}</span>
                  <span
                    className={`overflow-hidden whitespace-nowrap text-xs font-semibold transition-all duration-300 ${
                      scrolled
                        ? "ml-0 max-w-0 opacity-0 group-hover:ml-2 group-hover:max-w-[100px] group-hover:opacity-100"
                        : "ml-2 max-w-[100px] opacity-100"
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <span className="mx-2 h-5 w-px bg-black/10" />

          {/* WhatsApp */}
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className={`flex items-center rounded-full bg-[#252521] py-2 text-[#f7f5f0] transition-all duration-300 ${
              scrolled ? "px-2.5 group-hover:px-4" : "px-4"
            }`}
          >
            <WhatsAppIcon />
            <span
              className={`overflow-hidden whitespace-nowrap text-xs font-semibold transition-all duration-300 ${
                scrolled
                  ? "ml-0 max-w-0 opacity-0 group-hover:ml-2 group-hover:max-w-[120px] group-hover:opacity-100"
                  : "ml-2 max-w-[120px] opacity-100"
              }`}
            >
              Hubungi Kami
            </span>
          </a>
        </div>
      </header>
    </>
  );
}