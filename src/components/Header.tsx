"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/content";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./ui/Icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const wa = waLink();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/8 bg-[#f7f5f0]/95 backdrop-blur-sm">
      <div className="site-container flex h-[74px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Ruang Keramik">
          <span className="grid h-9 w-9 grid-cols-2 gap-[3px] bg-[#252521] p-[7px]">
            <i className="bg-[#f7f5f0]" />
            <i className="bg-[#b49a76]" />
            <i className="bg-[#b49a76]" />
            <i className="bg-[#f7f5f0]" />
          </span>
          <span className="text-[15px] font-extrabold tracking-[-0.02em]">
            RUANG<span className="font-medium text-[#86745c]">KERAMIK</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigasi utama">
          {navLinks.map(([label, href]) => (
            <Link key={href} href={href} className="nav-link">
              {label}
            </Link>
          ))}
        </nav>
        <a href={wa} target="_blank" rel="noreferrer" className="button-dark hidden lg:flex">
          <WhatsAppIcon />
          Hubungi Kami
        </a>
        <button
          className="grid h-11 w-11 place-items-center lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="flex w-6 flex-col gap-1.5">
            <i className="h-px w-full bg-[#252521]" />
            <i className="h-px w-full bg-[#252521]" />
            <i className="h-px w-full bg-[#252521]" />
          </span>
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Navigasi seluler"
          className="border-t border-black/8 bg-[#f7f5f0] px-5 py-5 lg:hidden"
        >
          {navLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block border-b border-black/8 py-3.5 text-sm font-semibold"
            >
              {label}
            </Link>
          ))}
          <a href={wa} className="button-dark mt-5 w-full justify-center">
            <WhatsAppIcon /> Hubungi via WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
