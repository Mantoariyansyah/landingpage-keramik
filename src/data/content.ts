/**
 * Seluruh teks & data section yang berasal dari desain Figma (App.tsx).
 * Dipindahkan apa adanya agar copy tidak berubah.
 */

export const photos = {
  hero: "/images/hero-bathroom.jpg",
  process: "/images/tile-craft.jpg",
  floor: "/images/project-floor.jpg",
  bathroom: "/images/project-bathroom.jpg",
  marble: "/images/project-granite.jpg",
  detail: "/images/project-pattern.jpg",
} as const;

export const services = [
  {
    no: "01",
    title: "Keramik Lantai",
    text: "Pemasangan presisi untuk hunian, kantor, ruko, hingga area komersial.",
  },
  {
    no: "02",
    title: "Keramik Dinding",
    text: "Finishing dinding dapur dan area interior dengan nat yang rapi.",
  },
  {
    no: "03",
    title: "Granit & Homogeneous Tile",
    text: "Penanganan material premium berukuran besar dengan teknik khusus.",
  },
  {
    no: "04",
    title: "Kamar Mandi",
    text: "Pemasangan lantai dan dinding yang memperhatikan kemiringan serta detail.",
  },
  {
    no: "05",
    title: "Bongkar Keramik",
    text: "Pembongkaran terkontrol, pembersihan, dan persiapan ulang permukaan.",
  },
] as const;

export const advantages: ReadonlyArray<readonly [string, string]> = [
  ["Tenaga berpengalaman", "Tim terampil dengan standar kerja dan pengawasan yang jelas."],
  ["Pengerjaan rapi", "Presisi pola, level permukaan, dan garis nat menjadi prioritas."],
  ["Estimasi transparan", "Rincian biaya dan lingkup kerja disepakati sebelum proyek dimulai."],
  ["Berbagai skala proyek", "Melayani renovasi satu ruangan hingga bangunan komersial."],
];

export const steps: ReadonlyArray<readonly [string, string, string]> = [
  ["01", "Konsultasi", "Ceritakan kebutuhan, area, dan target waktu proyek Anda."],
  ["02", "Survei lokasi", "Tim menilai kondisi permukaan dan melakukan pengukuran."],
  ["03", "Penawaran", "Anda menerima rincian volume, biaya, dan jadwal kerja."],
  ["04", "Pengerjaan", "Eksekusi oleh tenaga terampil dengan kontrol kualitas."],
  ["05", "Serah terima", "Pemeriksaan akhir bersama sebelum proyek dinyatakan selesai."],
];

export const stats: ReadonlyArray<readonly [string, string]> = [
  ["8+ Tahun", "Pengalaman lapangan"],
  ["250+", "Proyek terselesaikan"],
  ["Jabodetabek", "Jangkauan layanan"],
];

export const navLinks: ReadonlyArray<readonly [string, string]> = [
  ["Beranda", "/#beranda"],
  ["Layanan", "/#layanan"],
  ["Portofolio", "/#portofolio"],
  ["Area Layanan", "/#area"],
  ["Tentang Kami", "/#tentang"],
];

export const portfolio = [
  {
    key: "a",
    src: photos.floor,
    alt: "Pemasangan lantai rumah modern",
    label: "Hunian Residensial",
    title: "Lantai Ruang Utama",
  },
  {
    key: "b",
    src: photos.bathroom,
    alt: "Finishing keramik kamar mandi",
    label: "Renovasi Interior",
    title: "Kamar Mandi Modern",
  },
  {
    key: "c",
    src: photos.marble,
    alt: "Lantai granit di koridor rumah",
    label: "Granit Premium",
    title: "Area Foyer",
  },
  {
    key: "d",
    src: photos.detail,
    alt: "Detail pola material keramik",
    label: "Detail Finishing",
    title: "Pattern Tile",
  },
] as const;

/** Kartu kota pada section "Area Layanan" di desain. `slug` mengarah ke halaman wilayah. */
export const cityCards = [
  { city: "Jakarta", coverage: "Pusat · Selatan · Barat · Timur · Utara", slug: "jakarta" },
  { city: "Bogor", coverage: "Kota Bogor · Cibinong · Sentul", slug: "bogor" },
  { city: "Depok", coverage: "Beji · Sawangan · Cimanggis", slug: "depok" },
  { city: "Tangerang", coverage: "Kota · Selatan · Kabupaten", slug: "tangerang" },
  { city: "Bekasi", coverage: "Kota Bekasi · Cikarang · Tambun", slug: "bekasi" },
] as const;

export const testimonial = {
  quote:
    "Hasil pemasangan granitnya sangat rapi, garis nat lurus dan tim bekerja sesuai jadwal. Penawaran dari awal juga jelas, tidak ada biaya mendadak.",
  initials: "AS",
  name: "Andri Setiawan",
  meta: "Renovasi Rumah · Bekasi",
} as const;

/** Opsi dropdown form estimasi. */
export const workTypes = [
  "Keramik lantai",
  "Keramik dinding",
  "Granit & homogeneous tile",
  "Kamar mandi",
  "Bongkar keramik",
  "Lainnya / belum yakin",
] as const;

export const materialStatuses = [
  "Material sudah tersedia",
  "Belum beli material, butuh saran",
] as const;
