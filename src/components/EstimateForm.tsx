"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { materialStatuses, workTypes } from "@/data/content";
import { locations } from "@/data/locations";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./ui/Icons";
import { Eyebrow } from "./ui/Eyebrow";

const OTHER_AREA = "Wilayah Jabodetabek lainnya";
const areaOptions = [...locations.map((l) => l.name), OTHER_AREA];

type Errors = Partial<Record<"name" | "area" | "work" | "size", string>>;

const fieldBase =
  "h-12 w-full border border-black/15 bg-[#f7f5f0] px-4 text-base text-[#252521] outline-none transition-colors placeholder:text-[#a19e94] focus:border-[#252521] sm:text-sm aria-[invalid=true]:border-[#b3261e]";
const labelBase = "mb-2 block text-[11px] font-bold tracking-[.02em] text-[#55534d]";

export function EstimateForm({ defaultArea }: { defaultArea?: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();

    const name = get("name").slice(0, 80);
    const area = get("area");
    const work = get("work");
    const sizeRaw = get("size").replace(",", ".");
    const material = get("material");
    const notes = get("notes").slice(0, 500);

    const next: Errors = {};
    if (name.length < 2) next.name = "Masukkan nama Anda.";
    if (!area) next.area = "Pilih lokasi proyek.";
    if (!work) next.work = "Pilih jenis pekerjaan.";
    if (sizeRaw && !(Number(sizeRaw) > 0 && Number(sizeRaw) <= 100000)) {
      next.size = "Isi luas dengan angka lebih dari 0, atau kosongkan.";
    }
    setErrors(next);

    const firstInvalid = (["name", "area", "work", "size"] as const).find((k) => next[k]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const details = [
      `Nama: ${name}`,
      `Lokasi proyek: ${area}`,
      `Jenis pekerjaan: ${work}`,
      sizeRaw ? `Perkiraan luas: ${sizeRaw} m²` : "",
      material ? `Material: ${material}` : "",
      notes ? `Catatan: ${notes}` : "",
    ].filter(Boolean);
    const lines = ["Halo Ruang Keramik, saya ingin minta estimasi proyek pasang keramik.", "", ...details];

    const url = waLink(lines.join("\n"));
    const win = window.open(url, "_blank");
    if (win) win.opener = null;
    else window.location.href = url; // popup diblokir -> buka di tab yang sama
  }

  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`err-${k}`} role="alert" className="mt-1.5 text-xs font-semibold text-[#b3261e]">
        {errors[k]}
      </p>
    ) : null;
  const aria = (k: keyof Errors) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `err-${k}` : undefined,
  });

  return (
    <section id="estimasi" className="section-space bg-[#f1eee7]">
      <div className="site-container grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <Eyebrow>Estimasi Proyek</Eyebrow>
          <h2 className="heading mt-5">
            Dapatkan estimasi
            <br />
            awal proyek Anda.
          </h2>
          <p className="mt-6 max-w-[430px] text-sm leading-7 text-[#6b6962]">
            Isi detail singkat proyek Anda. Pesan akan terbuka di WhatsApp dan siap dikirim ke tim
            kami untuk dibalas.
          </p>
        </div>

        <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="f-name" className={labelBase}>
              Nama
            </label>
            <input
              id="f-name"
              name="name"
              type="text"
              autoComplete="name"
              maxLength={80}
              placeholder="Nama lengkap"
              className={fieldBase}
              {...aria("name")}
            />
            {err("name")}
          </div>

          <div>
            <label htmlFor="f-area" className={labelBase}>
              Lokasi proyek
            </label>
            <div className="relative">
              <select
                id="f-area"
                name="area"
                defaultValue={defaultArea ?? ""}
                className={`${fieldBase} appearance-none pr-10`}
                {...aria("area")}
              >
                <option value="" disabled>
                  Pilih wilayah
                </option>
                {areaOptions.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#55534d]"
                strokeWidth={1.8}
              />
            </div>
            {err("area")}
          </div>

          <div>
            <label htmlFor="f-work" className={labelBase}>
              Jenis pekerjaan
            </label>
            <div className="relative">
              <select
                id="f-work"
                name="work"
                defaultValue=""
                className={`${fieldBase} appearance-none pr-10`}
                {...aria("work")}
              >
                <option value="" disabled>
                  Pilih pekerjaan
                </option>
                {workTypes.map((w) => (
                  <option key={w} value={w}>
                    {w}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#55534d]"
                strokeWidth={1.8}
              />
            </div>
            {err("work")}
          </div>

          <div>
            <label htmlFor="f-size" className={labelBase}>
              Perkiraan luas (m²), opsional
            </label>
            <input
              id="f-size"
              name="size"
              type="text"
              inputMode="decimal"
              maxLength={7}
              placeholder="Contoh: 40"
              className={fieldBase}
              {...aria("size")}
            />
            {err("size")}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="f-material" className={labelBase}>
              Status material, opsional
            </label>
            <div className="relative">
              <select
                id="f-material"
                name="material"
                defaultValue=""
                className={`${fieldBase} appearance-none pr-10`}
              >
                <option value="">Belum dipilih</option>
                {materialStatuses.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#55534d]"
                strokeWidth={1.8}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="f-notes" className={labelBase}>
              Catatan, opsional
            </label>
            <textarea
              id="f-notes"
              name="notes"
              rows={4}
              maxLength={500}
              placeholder="Misalnya: lantai lama perlu dibongkar, target selesai, kondisi akses."
              className={`${fieldBase} h-auto resize-y py-3 leading-6`}
            />
          </div>

          <div className="sm:col-span-2">
            <button type="submit" className="button-dark w-full sm:w-fit">
              <WhatsAppIcon /> Kirim estimasi via WhatsApp
            </button>
            <p className="mt-4 text-xs leading-5 text-[#77746b]">
              Anda akan diarahkan ke WhatsApp. Data tidak disimpan di server kami.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
