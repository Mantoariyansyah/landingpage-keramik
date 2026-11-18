"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Matikan fitur restore scroll bawaan browser
    // supaya refresh / back-forward tidak kembali ke posisi lama.
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Scroll instan ke atas setiap kali halaman berganti / di-refresh.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}