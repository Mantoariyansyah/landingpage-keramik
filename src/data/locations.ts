/**
 * Data halaman wilayah (Local SEO). Setiap wilayah memiliki konten unik.
 * Prioritas 1 = Gunung Putri, Kota Wisata, Cibubur, Cileungsi, Jatiasih.
 * Prioritas 2 = Bogor, Depok, Bekasi, Jakarta, Tangerang.
 *
 * CATATAN: nama kelurahan/kawasan di `subareas` adalah contoh wilayah layanan;
 * mohon diverifikasi pemilik bisnis sebelum go-live.
 */

export type Location = {
  slug: string;
  name: string;
  tier: 1 | 2;
  /** Awalan H1; nama wilayah ditampilkan dengan gaya serif italic seperti kata "Borongan" di hero. */
  h1Lead: string;
  metaTitle: string;
  metaDescription: string;
  region: string;
  schemaType: "City" | "AdministrativeArea" | "Place";
  heroText: string;
  headline: [string, string];
  intro: [string, string];
  needs: { title: string; text: string }[];
  subareas: string[];
  nearby: string[];
  faqs: { q: string; a: string }[];
};

export const locations: Location[] = [
  // ───────────── PRIORITAS 1 ─────────────
  {
    slug: "gunung-putri",
    name: "Gunung Putri",
    tier: 1,
    h1Lead: "Jasa Pasang Keramik Borongan",
    metaTitle: "Jasa Pasang Keramik Borongan Gunung Putri | Ruang Keramik",
    metaDescription:
      "Jasa pasang keramik borongan Gunung Putri, Bogor: lantai, dinding, granit, kamar mandi. Survei lokasi & estimasi transparan. Konsultasi via WhatsApp.",
    region: "Kabupaten Bogor, Jawa Barat",
    schemaType: "AdministrativeArea",
    heroText:
      "Tukang keramik berpengalaman untuk rumah, cluster, ruko, dan area usaha di Gunung Putri. Survei lokasi dulu, penawaran jelas, lalu dikerjakan rapi sampai serah terima.",
    headline: ["Pasang keramik borongan", "yang rapi di Gunung Putri."],
    intro: [
      "Gunung Putri adalah kecamatan di Kabupaten Bogor dengan hunian dan area usaha yang terus berkembang. Perumahan cluster, rumah tapak, ruko, dan ruang usaha berdampingan, sehingga kebutuhan pasang keramik di sini sangat beragam: dari satu kamar mandi sampai seluruh lantai satu rumah.",
      "Dengan sistem borongan, Anda tidak perlu mengatur tukang harian satu per satu. Kami menghitung volume dari hasil pengukuran, menyepakati biaya dan jadwal di awal, lalu mengerjakan sampai pemeriksaan akhir bersama Anda.",
    ],
    needs: [
      {
        title: "Lantai rumah baru atau serah terima",
        text: "Sebagian pemilik unit di perumahan baru mengganti atau menambah keramik sebelum pindah. Kami bantu dari pengukuran, pola pemasangan, sampai pembersihan akhir.",
      },
      {
        title: "Ruko dan area usaha",
        text: "Area dengan lalu lintas tinggi butuh permukaan rata dan pengerjaan yang tidak berlarut. Jadwal kami susun agar aktivitas usaha tetap bisa berjalan.",
      },
      {
        title: "Granit dan homogeneous tile ukuran besar",
        text: "Material berukuran besar memerlukan bidang dasar yang rata dan teknik pemasangan khusus agar tidak mudah retak atau berongga.",
      },
    ],
    subareas: ["Wanaherang", "Bojong Nangka", "Tlajung Udik", "Cicadas", "Ciangsana", "Nagrak", "Karanggan", "Cikeas Udik"],
    nearby: ["kota-wisata", "cileungsi", "cibubur"],
    faqs: [
      {
        q: "Apakah borongan di Gunung Putri sudah termasuk material?",
        a: "Itu tergantung kesepakatan. Anda bisa menyediakan material sendiri atau berkonsultasi dulu soal pilihannya. Lingkup pekerjaan, termasuk bahan pendukung seperti perekat dan nat, kami tuangkan dalam penawaran sebelum proyek dimulai.",
      },
      {
        q: "Apa yang terjadi saat survei lokasi?",
        a: "Tim mengukur area, memeriksa kondisi lantai atau dinding, dan mencatat kebutuhan Anda. Hasilnya menjadi dasar rincian volume, biaya, dan jadwal. Waktu kunjungan dikonfirmasi lewat WhatsApp.",
      },
      {
        q: "Apakah bisa mengerjakan proyek kecil seperti satu kamar mandi?",
        a: "Bisa. Kami melayani dari renovasi satu ruangan hingga bangunan komersial.",
      },
    ],
  },
  {
    slug: "kota-wisata",
    name: "Kota Wisata",
    tier: 1,
    h1Lead: "Tukang Pasang Keramik",
    metaTitle: "Tukang Pasang Keramik Kota Wisata Cibubur | Ruang Keramik",
    metaDescription:
      "Tukang pasang keramik Kota Wisata untuk rumah cluster dan ruko: keramik, granit, kamar mandi. Survei lokasi, estimasi transparan, konsultasi via WhatsApp.",
    region: "Gunung Putri, Kabupaten Bogor",
    schemaType: "Place",
    heroText:
      "Tukang pasang keramik untuk rumah cluster, townhouse, dan ruko di kawasan Kota Wisata dan sekitarnya. Pengerjaan rapi, jadwal jelas, hasil tahan lama.",
    headline: ["Tukang keramik untuk hunian", "di Kota Wisata."],
    intro: [
      "Kota Wisata di Gunung Putri adalah kawasan hunian terpadu dengan banyak cluster, area niaga, dan ruko. Rumah di kawasan seperti ini lazim direnovasi berkala, dari mengganti keramik lantai yang modelnya sudah ketinggalan hingga menata ulang kamar mandi dan dapur.",
      "Perumahan cluster umumnya punya aturan renovasi dan jam kerja tersendiri. Kami bantu menyesuaikan jadwal, akses material, dan kebersihan area sekitar rumah Anda agar pengerjaan berjalan tertib.",
    ],
    needs: [
      {
        title: "Ganti keramik lantai lama",
        text: "Bongkar terkontrol, perataan permukaan, lalu pemasangan baru dengan pola dan garis nat yang konsisten antar ruangan.",
      },
      {
        title: "Renovasi kamar mandi dan dapur",
        text: "Kemiringan lantai ke arah saluran dan detail sudut menjadi perhatian utama agar tidak ada genangan.",
      },
      {
        title: "Teras, carport, dan area luar",
        text: "Pilihan material untuk area yang terkena hujan dan panas, termasuk keramik dengan permukaan anti-slip.",
      },
    ],
    subareas: ["Kota Wisata", "Legenda Wisata", "Cibubur Country", "Wanaherang", "Cikeas Udik", "Nagrak"],
    nearby: ["gunung-putri", "cibubur", "cileungsi"],
    faqs: [
      {
        q: "Apakah perlu izin ke pengelola cluster sebelum renovasi?",
        a: "Banyak cluster mensyaratkan pemberitahuan atau izin renovasi. Sebaiknya Anda menanyakannya ke pengelola lingkungan; kami bantu menyesuaikan jadwal dan cara kerja dengan ketentuan tersebut.",
      },
      {
        q: "Apakah keramik lama harus dibongkar semua?",
        a: "Tidak selalu. Setelah survei kami menilai apakah keramik lama masih menempel kuat dan rata. Jika ada bagian yang berongga, pembongkaran biasanya lebih aman untuk hasil jangka panjang.",
      },
      {
        q: "Bagaimana cara meminta estimasi dari Kota Wisata?",
        a: "Kirim foto area dan perkiraan luas lewat formulir di halaman ini atau WhatsApp. Kami memberi estimasi awal tanpa biaya, lalu menjadwalkan survei untuk angka yang lebih pasti.",
      },
    ],
  },
  {
    slug: "cibubur",
    name: "Cibubur",
    tier: 1,
    h1Lead: "Jasa Pasang Keramik",
    metaTitle: "Jasa Pasang Keramik Cibubur, Borongan Rapi | Ruang Keramik",
    metaDescription:
      "Jasa pasang keramik Cibubur: keramik lantai, dinding, granit, kamar mandi untuk rumah dan ruko. Survei lokasi & estimasi transparan via WhatsApp.",
    region: "Jakarta Timur, Kabupaten Bogor, Depok, dan Bekasi",
    schemaType: "Place",
    heroText:
      "Pasang keramik dan granit untuk rumah lama maupun perumahan baru di kawasan Cibubur. Satu tim mengurus survei, pengukuran, hingga pengerjaan.",
    headline: ["Keramik dan granit presisi", "untuk rumah di Cibubur."],
    intro: [
      "Cibubur bukan satu wilayah administratif, melainkan kawasan yang membentang di perbatasan Jakarta Timur, Kabupaten Bogor, Depok, dan Bekasi. Karena itu rumah di Cibubur sangat beragam: dari rumah lama di permukiman mapan hingga perumahan baru berdesain modern.",
      "Kami melayani pekerjaan keramik dan granit di titik mana pun di kawasan ini. Satu tim mengurus survei, pengukuran, hingga pengerjaan, sehingga Anda cukup berkomunikasi dengan satu pihak.",
    ],
    needs: [
      {
        title: "Rumah lama yang direnovasi",
        text: "Permukaan lantai yang tidak rata atau keramik berongga perlu diperbaiki lebih dulu sebelum pemasangan baru.",
      },
      {
        title: "Rumah dua lantai dan tangga",
        text: "Pemasangan tangga dan bordes membutuhkan potongan presisi serta material dengan permukaan yang aman dipijak.",
      },
      {
        title: "Granit untuk ruang tamu",
        text: "Granit berukuran besar memberi kesan lapang, tetapi perlu perataan dasar dan nat tipis yang rapi.",
      },
    ],
    subareas: ["Harjamukti", "Cimanggis", "Ciracas", "Jatisampurna", "Jatikarya", "Cibubur Country", "Cikeas Udik"],
    nearby: ["kota-wisata", "gunung-putri", "depok"],
    faqs: [
      {
        q: "Apakah layanan mencakup Cibubur sisi Jakarta Timur dan Depok?",
        a: "Ya. Kami melayani Cibubur di sisi Jakarta Timur, Kabupaten Bogor, Depok, maupun Bekasi. Kirim titik lokasi lewat WhatsApp agar jadwal survei bisa diatur.",
      },
      {
        q: "Berapa lama pasang keramik satu rumah?",
        a: "Durasi bergantung pada luas area, jenis material, dan kondisi permukaan. Perkiraan jadwal kami sampaikan dalam penawaran setelah survei, bukan angka umum yang belum tentu cocok untuk rumah Anda.",
      },
      {
        q: "Apakah bisa memasang granit untuk tangga?",
        a: "Bisa. Tangga memerlukan pemotongan presisi dan pertimbangan keamanan, misalnya permukaan anti-slip pada pijakan. Pilihan material dan detailnya kami diskusikan saat survei.",
      },
    ],
  },
  {
    slug: "cileungsi",
    name: "Cileungsi",
    tier: 1,
    h1Lead: "Borongan Pasang Keramik",
    metaTitle: "Borongan Pasang Keramik Cileungsi, Bogor | Ruang Keramik",
    metaDescription:
      "Borongan pasang keramik Cileungsi untuk rumah, ruko, dan kantor: keramik, granit, kamar mandi. Biaya & jadwal disepakati di awal. Konsultasi via WhatsApp.",
    region: "Kabupaten Bogor, Jawa Barat",
    schemaType: "AdministrativeArea",
    heroText:
      "Borongan pasang keramik dan granit untuk rumah, perumahan baru, ruko, dan kantor di Cileungsi. Ukur dulu, sepakati biaya, kerja sesuai jadwal.",
    headline: ["Borongan keramik tuntas", "untuk hunian dan usaha di Cileungsi."],
    intro: [
      "Cileungsi memadukan perumahan, area niaga, dan kawasan pergudangan di sisi timur Kabupaten Bogor. Ragam bangunan ini membuat kebutuhan pemasangannya berbeda-beda: rumah tinggal mengutamakan estetika, sementara ruko dan ruang kerja menuntut permukaan yang kuat dan rata.",
      "Pekerjaan borongan membantu Anda mengendalikan anggaran. Biaya, volume, dan jadwal dituangkan dalam penawaran sebelum pengerjaan, jadi tidak ada kejutan di tengah proyek.",
    ],
    needs: [
      {
        title: "Perumahan baru",
        text: "Unit baru sering membutuhkan finishing lantai dan dinding sebelum ditempati. Kami bantu merapikan pola dan nat agar hasilnya konsisten.",
      },
      {
        title: "Ruko dan kios",
        text: "Lantai area usaha harus rata, kuat, dan cepat selesai. Kami atur tahapan kerja agar gangguan operasional sekecil mungkin.",
      },
      {
        title: "Showroom dan kantor",
        text: "Tampilan bersih dengan granit atau homogeneous tile menuntut garis nat yang lurus dan permukaan dasar yang benar-benar rata.",
      },
    ],
    subareas: ["Cileungsi", "Limusnunggal", "Mekarsari", "Pasir Angin", "Gandoang", "Harvest City", "Metland Transyogi"],
    nearby: ["gunung-putri", "kota-wisata", "bekasi"],
    faqs: [
      {
        q: "Apakah melayani proyek ruko dan kantor kecil di Cileungsi?",
        a: "Ya. Kami melayani dari renovasi satu ruangan hingga bangunan komersial. Skala dan jadwal dibahas saat survei supaya aktivitas usaha Anda tetap berjalan.",
      },
      {
        q: "Bagaimana jika permukaan lantai tidak rata?",
        a: "Ketidakrataan kami catat saat survei, dan perbaikannya (misalnya perataan dengan screed) dimasukkan ke rincian penawaran sehingga biayanya jelas sejak awal.",
      },
      {
        q: "Bisakah hanya jasa pasang tanpa material?",
        a: "Bisa dibicarakan. Anda boleh membeli material sendiri; kami bantu menghitung kebutuhan agar jumlah keramik cukup, termasuk cadangan untuk potongan dan sisa.",
      },
    ],
  },
  {
    slug: "jatiasih",
    name: "Jatiasih",
    tier: 1,
    h1Lead: "Jasa Pasang Keramik",
    metaTitle: "Jasa Pasang Keramik Jatiasih, Bekasi | Ruang Keramik",
    metaDescription:
      "Jasa pasang keramik Jatiasih, Bekasi: renovasi lantai, kamar mandi, granit. Survei lokasi, rincian biaya jelas, pengerjaan rapi. Konsultasi via WhatsApp.",
    region: "Kota Bekasi, Jawa Barat",
    schemaType: "AdministrativeArea",
    heroText:
      "Jasa pasang keramik dan granit untuk rumah, ruko, dan renovasi di Jatiasih, Bekasi. Survei lokasi, penawaran jelas, dan pengerjaan yang rapi.",
    headline: ["Keramik rapi untuk rumah", "di Jatiasih, Bekasi."],
    intro: [
      "Jatiasih adalah kecamatan di bagian selatan Kota Bekasi. Banyak rumah di kawasan ini sudah lama dihuni, sehingga renovasi lantai, kamar mandi, dan dapur menjadi kebutuhan yang sering muncul, selain pembangunan rumah baru.",
      "Kami datang untuk survei, mengukur ulang, dan membahas kondisi permukaan lebih dulu. Dari situ Anda mendapat rincian volume, biaya, dan jadwal sebelum satu keramik pun dipasang.",
    ],
    needs: [
      {
        title: "Renovasi rumah lama",
        text: "Keramik lama yang retak, berongga, atau licin diganti material baru setelah permukaan dasar dirapikan.",
      },
      {
        title: "Kamar mandi tanpa genangan",
        text: "Kemiringan lantai ke arah saluran dan detail pertemuan dinding-lantai kami perhatikan agar air mengalir tuntas.",
      },
      {
        title: "Penambahan lantai atau ruangan",
        text: "Rumah yang dikembangkan ke atas atau ke samping perlu pola keramik yang menyambung rapi dengan area lama.",
      },
    ],
    subareas: ["Jatiasih", "Jatikramat", "Jatimekar", "Jatiluhur", "Jatirasa", "Jatisari"],
    nearby: ["bekasi", "cibubur", "gunung-putri"],
    faqs: [
      {
        q: "Apakah layanan di Jatiasih termasuk survei langsung ke lokasi?",
        a: "Ya. Survei lokasi adalah langkah awal kami: pengukuran dan pemeriksaan kondisi permukaan dilakukan sebelum penawaran dibuat.",
      },
      {
        q: "Apa yang perlu disiapkan sebelum tukang datang?",
        a: "Kosongkan area kerja sebisa mungkin, siapkan akses air dan listrik, serta tentukan model dan jumlah keramik. Jika belum yakin, kami bantu menghitung kebutuhan dari hasil pengukuran.",
      },
      {
        q: "Apakah bisa sekaligus membongkar keramik lama?",
        a: "Bisa. Pembongkaran dilakukan terkontrol, diikuti pembersihan dan perataan permukaan sebelum pemasangan baru. Pekerjaan ini masuk ke rincian penawaran.",
      },
    ],
  },

  // ───────────── PRIORITAS 2 ─────────────
  {
    slug: "bogor",
    name: "Bogor",
    tier: 2,
    h1Lead: "Jasa Pasang Keramik",
    metaTitle: "Jasa Pasang Keramik Bogor, Borongan Rapi | Ruang Keramik",
    metaDescription:
      "Jasa pasang keramik Bogor (Kota & Kabupaten): lantai, dinding, granit, kamar mandi. Survei lokasi & estimasi transparan via WhatsApp.",
    region: "Kota dan Kabupaten Bogor, Jawa Barat",
    schemaType: "City",
    heroText:
      "Pemasangan keramik dan granit untuk rumah, vila, dan bangunan komersial di Bogor, dikerjakan tenaga terampil dengan estimasi biaya yang transparan.",
    headline: ["Pasang keramik dan granit", "di Kota dan Kabupaten Bogor."],
    intro: [
      "Bogor memiliki karakter bangunan yang beragam: rumah lama di pusat kota, perumahan baru di Cibinong dan Sentul, hingga vila di wilayah yang lebih sejuk. Curah hujan yang tinggi membuat pilihan material dan nat yang tahan lembap patut diperhatikan.",
      "Kami menawarkan survei lokasi di wilayah Bogor yang dijangkau dalam layanan Jabodetabek. Dari hasil survei, Anda mendapat rincian volume, biaya, dan jadwal kerja.",
    ],
    needs: [
      {
        title: "Area lembap dan kamar mandi",
        text: "Wilayah dengan curah hujan tinggi menuntut nat yang rapat dan kemiringan lantai yang benar di area basah.",
      },
      {
        title: "Rumah dan vila bertingkat",
        text: "Lahan berkontur dan bangunan bertingkat membutuhkan pengukuran teliti agar pola keramik tetap lurus antar-area.",
      },
      {
        title: "Renovasi hunian di Cibinong dan Sentul",
        text: "Pekerjaan lantai dan dinding untuk perumahan yang sedang berkembang, dari satu ruangan hingga seluruh unit.",
      },
    ],
    subareas: ["Kota Bogor", "Cibinong", "Sentul", "Citeureup", "Cilebut", "Sukaraja"],
    nearby: ["depok", "gunung-putri", "cileungsi"],
    faqs: [
      {
        q: "Apakah melayani Kota Bogor dan Kabupaten Bogor?",
        a: "Ya, keduanya. Kirim titik lokasi proyek lewat WhatsApp agar kami bisa mengatur jadwal survei.",
      },
      {
        q: "Apakah ada perhatian khusus untuk area lembap?",
        a: "Kami menyarankan material dan nat yang sesuai untuk area basah serta memeriksa kemiringan lantai. Rekomendasi spesifik diberikan setelah survei kondisi bangunan.",
      },
      {
        q: "Kapan survei bisa dijadwalkan?",
        a: "Jam layanan kami Senin sampai Sabtu pukul 08.00–17.00. Jadwal survei dikonfirmasi lewat WhatsApp sesuai ketersediaan tim.",
      },
    ],
  },
  {
    slug: "depok",
    name: "Depok",
    tier: 2,
    h1Lead: "Jasa Pasang Keramik",
    metaTitle: "Jasa Pasang Keramik Depok, Keramik & Granit | Ruang Keramik",
    metaDescription:
      "Jasa pasang keramik Depok untuk rumah, kos, dan ruko: lantai, dinding, granit, kamar mandi. Estimasi transparan, konsultasi via WhatsApp.",
    region: "Kota Depok, Jawa Barat",
    schemaType: "City",
    heroText:
      "Pasang keramik, granit, dan renovasi kamar mandi untuk rumah dan ruko di Depok. Survei lokasi dan estimasi transparan sebelum pengerjaan dimulai.",
    headline: ["Keramik dan granit presisi", "untuk rumah di Depok."],
    intro: [
      "Depok didominasi permukiman yang padat dan perumahan yang sudah mapan, termasuk kawasan sekitar Margonda, Sawangan, dan Cimanggis. Pada lahan yang tidak terlalu luas, ketepatan pola keramik sangat memengaruhi kesan lapang sebuah ruangan.",
      "Pada rumah dengan akses jalan sempit, pengiriman dan penyimpanan material perlu direncanakan. Kami membahas hal praktis ini sejak survei agar pengerjaan tidak terhambat.",
    ],
    needs: [
      {
        title: "Rumah tapak berlahan terbatas",
        text: "Keramik berukuran besar dengan nat tipis membantu ruangan terasa lebih lapang. Kami bantu menilai pilihan pola dari hasil pengukuran.",
      },
      {
        title: "Kos dan rumah sewa",
        text: "Penggantian lantai untuk beberapa kamar bisa dikerjakan bertahap agar penghuni tetap nyaman.",
      },
      {
        title: "Ruko di jalan utama",
        text: "Pengerjaan area usaha dapat kami diskusikan, termasuk pengaturan tahapan agar operasional tidak terganggu.",
      },
    ],
    subareas: ["Beji", "Sawangan", "Cimanggis", "Pancoran Mas", "Sukmajaya", "Cinere", "Tapos"],
    nearby: ["cibubur", "bogor", "jakarta"],
    faqs: [
      {
        q: "Apakah bisa mengerjakan beberapa kamar kos sekaligus?",
        a: "Bisa. Pekerjaan beberapa unit dapat dijadwalkan bertahap. Detailnya kami bahas saat survei dan dituangkan dalam penawaran.",
      },
      {
        q: "Bagaimana jika akses menuju rumah sempit?",
        a: "Sampaikan kondisi akses saat konsultasi. Kami akan merencanakan cara pengiriman dan penyimpanan material agar tidak menghambat pengerjaan.",
      },
      {
        q: "Apakah melayani Sawangan dan Cinere?",
        a: "Ya, seluruh wilayah Depok termasuk dalam jangkauan layanan Jabodetabek kami. Kirim lokasi proyek lewat WhatsApp untuk mengatur survei.",
      },
    ],
  },
  {
    slug: "bekasi",
    name: "Bekasi",
    tier: 2,
    h1Lead: "Jasa Pasang Keramik",
    metaTitle: "Jasa Pasang Keramik Bekasi, Borongan | Ruang Keramik",
    metaDescription:
      "Jasa pasang keramik Bekasi (Kota, Tambun, Cikarang): lantai, dinding, granit, kamar mandi. Survei lokasi & estimasi transparan via WhatsApp.",
    region: "Kota dan Kabupaten Bekasi, Jawa Barat",
    schemaType: "City",
    heroText:
      "Pemasangan keramik dan granit untuk rumah tinggal, ruko, dan kantor di Bekasi. Rincian pekerjaan jelas sebelum proyek berjalan.",
    headline: ["Pasang keramik dan granit", "di Kota dan Kabupaten Bekasi."],
    intro: [
      "Bekasi mencakup Kota Bekasi yang padat serta Kabupaten Bekasi dengan kawasan industri dan perumahan berskala besar, seperti di Tambun dan Cikarang. Kebutuhan pemasangan keramik di sini mencakup rumah tinggal, ruko, kantor, hingga area komersial.",
      "Satu penawaran memuat rincian pekerjaan, sehingga Anda bisa memeriksa dan menyetujui lingkup, biaya, dan jadwal sebelum proyek berjalan.",
    ],
    needs: [
      {
        title: "Rumah tinggal di Kota Bekasi",
        text: "Penggantian lantai, renovasi kamar mandi, dan finishing dapur untuk rumah yang sudah lama dihuni.",
      },
      {
        title: "Perumahan di Tambun dan Cikarang",
        text: "Finishing lantai dan dinding unit baru. Untuk beberapa unit sekaligus, jadwal dapat dibahas saat survei.",
      },
      {
        title: "Kantor dan area komersial",
        text: "Permukaan yang rata dan tahan pakai dengan garis nat yang konsisten untuk area berlalu lintas tinggi.",
      },
    ],
    subareas: ["Bekasi Barat", "Bekasi Timur", "Bekasi Selatan", "Pondok Gede", "Pondok Melati", "Jatiasih", "Tambun", "Cikarang"],
    nearby: ["jatiasih", "cileungsi", "jakarta"],
    faqs: [
      {
        q: "Apakah melayani Cikarang dan Tambun?",
        a: "Ya, Kota maupun Kabupaten Bekasi masuk jangkauan layanan kami. Kirim lokasi proyek lewat WhatsApp untuk menjadwalkan survei.",
      },
      {
        q: "Bagaimana cara membandingkan penawaran?",
        a: "Penawaran kami memuat volume, biaya, dan jadwal. Anda bisa membandingkannya dengan penawaran lain berdasarkan lingkup pekerjaan yang sama.",
      },
      {
        q: "Apakah bisa mengerjakan kantor di luar jam kerja?",
        a: "Pengaturan jam pengerjaan dapat didiskusikan saat survei, sesuai kebutuhan operasional dan ketersediaan tim.",
      },
    ],
  },
  {
    slug: "jakarta",
    name: "Jakarta",
    tier: 2,
    h1Lead: "Jasa Pasang Keramik",
    metaTitle: "Jasa Pasang Keramik Jakarta, Borongan Rapi | Ruang Keramik",
    metaDescription:
      "Jasa pasang keramik Jakarta untuk rumah, apartemen, dan kantor: lantai, dinding, granit, kamar mandi. Estimasi transparan via WhatsApp.",
    region: "DKI Jakarta",
    schemaType: "City",
    heroText:
      "Pemasangan keramik dan granit untuk rumah, apartemen, dan ruang komersial di Jakarta. Pengerjaan tertib, jadwal jelas, hasil rapi.",
    headline: ["Pasang keramik dan granit", "di seluruh wilayah Jakarta."],
    intro: [
      "Jakarta memiliki ragam bangunan paling lengkap: rumah tapak di permukiman padat, apartemen, kantor, hingga ruko. Setiap jenis bangunan membawa aturan dan tantangan pengerjaan yang berbeda.",
      "Untuk apartemen dan gedung, pengelola umumnya mengatur jam kerja, akses lift barang, dan izin renovasi. Kami menyesuaikan jadwal dan cara kerja dengan ketentuan tersebut agar proyek berjalan tanpa melanggar aturan gedung.",
    ],
    needs: [
      {
        title: "Apartemen dan hunian vertikal",
        text: "Pengerjaan mengikuti aturan pengelola gedung, dengan material dibawa dan limbah dibersihkan sesuai ketentuan.",
      },
      {
        title: "Rumah tapak di permukiman padat",
        text: "Akses sempit dan ruang kerja terbatas membutuhkan perencanaan material dan urutan kerja yang matang.",
      },
      {
        title: "Kantor dan ruang komersial",
        text: "Lantai granit atau homogeneous tile dengan permukaan rata untuk tampilan profesional.",
      },
    ],
    subareas: ["Jakarta Pusat", "Jakarta Selatan", "Jakarta Barat", "Jakarta Timur", "Jakarta Utara"],
    nearby: ["bekasi", "depok", "tangerang"],
    faqs: [
      {
        q: "Apakah bisa mengerjakan unit apartemen?",
        a: "Bisa. Sebaiknya Anda menanyakan aturan renovasi ke pengelola gedung lebih dulu, lalu kami menyesuaikan jadwal dan cara kerja dengan aturan tersebut.",
      },
      {
        q: "Apakah melayani seluruh wilayah Jakarta?",
        a: "Ya, Jakarta Pusat, Selatan, Barat, Timur, dan Utara termasuk jangkauan layanan kami. Kirim lokasi proyek untuk mengatur survei.",
      },
      {
        q: "Bagaimana cara meminta estimasi awal?",
        a: "Isi formulir estimasi atau kirim foto area dan perkiraan luas lewat WhatsApp. Estimasi awal diberikan tanpa biaya.",
      },
    ],
  },
  {
    slug: "tangerang",
    name: "Tangerang",
    tier: 2,
    h1Lead: "Jasa Pasang Keramik",
    metaTitle: "Jasa Pasang Keramik Tangerang, BSD & Serpong | Ruang Keramik",
    metaDescription:
      "Jasa pasang keramik Tangerang, Tangsel, BSD, Serpong: keramik, granit, kamar mandi untuk rumah dan ruko. Estimasi transparan via WhatsApp.",
    region: "Kota Tangerang, Tangerang Selatan, dan Kabupaten Tangerang",
    schemaType: "City",
    heroText:
      "Pemasangan keramik dan granit berukuran besar untuk rumah modern dan ruko di Tangerang Raya, dengan perataan dasar yang teliti.",
    headline: ["Keramik dan granit besar", "untuk rumah di Tangerang."],
    intro: [
      "Tangerang Raya mencakup kota-kota mandiri dan perumahan berskala besar, seperti kawasan BSD, Serpong, Gading Serpong, dan Alam Sutera, selain permukiman lama di Kota Tangerang.",
      "Rumah modern di kawasan ini sering memakai keramik dan granit berukuran besar. Kami menangani material tersebut dengan teknik khusus dan perataan dasar yang teliti.",
    ],
    needs: [
      {
        title: "Rumah modern bermaterial besar",
        text: "Granit dan homogeneous tile berukuran besar memerlukan dasar yang benar-benar rata agar hasilnya presisi.",
      },
      {
        title: "Ruko dan area komersial",
        text: "Lantai area usaha dikerjakan bertahap agar aktivitas bisnis tetap berjalan sebisa mungkin.",
      },
      {
        title: "Renovasi kamar mandi dan dapur",
        text: "Pemasangan lantai dan dinding dengan perhatian pada kemiringan serta detail sudut.",
      },
    ],
    subareas: ["Kota Tangerang", "Tangerang Selatan", "BSD", "Serpong", "Gading Serpong", "Alam Sutera", "Pamulang", "Ciputat"],
    nearby: ["jakarta", "depok", "bogor"],
    faqs: [
      {
        q: "Apakah melayani BSD, Serpong, dan Gading Serpong?",
        a: "Ya, wilayah Tangerang Raya masuk jangkauan layanan kami. Kirim lokasi proyek lewat WhatsApp untuk menjadwalkan survei.",
      },
      {
        q: "Apakah bisa memasang keramik ukuran besar?",
        a: "Bisa. Material berukuran besar kami pasang dengan teknik khusus, didahului pemeriksaan dan perataan permukaan.",
      },
      {
        q: "Bagaimana alur dari konsultasi sampai selesai?",
        a: "Konsultasi, survei lokasi, penawaran, pengerjaan, lalu serah terima dengan pemeriksaan akhir bersama Anda.",
      },
    ],
  },
];

export const locationBySlug = (slug: string) => locations.find((l) => l.slug === slug);
export const priorityOne = locations.filter((l) => l.tier === 1);
export const priorityTwo = locations.filter((l) => l.tier === 2);
export const locationPath = (slug: string) => `/jasa-pasang-keramik/${slug}`;
