import {
  Wind,
  Droplets,
  Wrench,
  PackageOpen,
  CalendarClock,
  Snowflake,
  ShieldCheck,
  Clock,
  BadgeCheck,
  Wallet,
  Sparkles,
  ThumbsUp,
  MapPin,
  Gauge,
  Award,
  PhoneCall,
  Cog,
} from 'lucide-react';
import type {
  ServiceCard,
  PriceRow,
  PricingPlan,
  ProcessStep,
  Feature,
  Stat,
  Testimonial,
  Guarantee,
  FaqItem,
} from '@/types';

const IMG_CUCI         = '/images/service-cards/cuci.jpg';
const IMG_BONGKAR      = '/images/service-cards/bongkar-pasang.jpg';
const IMG_FREON        = '/images/service-cards/isi-freon.jpg';
const IMG_PENGECEKAN   = '/images/service-cards/pengecekan-ac.jpg';
const IMG_INSTALASI    = '/images/service-cards/perbaikan-instalasi.jpg';
const IMG_VACUUM       = '/images/service-cards/vacuum-flushing.jpg';
const IMG_BOBOK        = '/images/service-cards/bobok-tembok.jpg';
const IMG_KAPASITOR    = '/images/service-cards/ganti-kapasitor.jpg';
const IMG_LAS          = '/images/service-cards/las-pipa.jpg';

export const serviceCards: ServiceCard[] = [
  {
    id: 'cuci-ac-05-1',
    title: 'Cuci AC 0.5–1 PK',
    description:
      'Pencucian menyeluruh indoor & outdoor unit untuk AC 0.5–1 PK agar dingin maksimal dan hemat listrik.',
    price: 100000,
    pk: '0.5–1 PK',
    checklist: [
      'Cuci indoor unit (evaporator)',
      'Cuci outdoor unit (kondensor)',
      'Pengecekan tekanan freon',
      'Pengecekan arus & performa',
    ],
    image: IMG_CUCI,
    popular: true,
  },
  {
    id: 'cuci-ac-15-2',
    title: 'Cuci AC 1.5–2 PK',
    description:
      'Pencucian menyeluruh untuk AC daya besar 1.5–2 PK, cocok untuk ruangan luas dan kantor.',
    price: 125000,
    pk: '1.5–2 PK',
    checklist: [
      'Cuci indoor unit(evaporator)',
      'Cuci outdor unit (kondensor)',
      'Bersihkan Area Kerja',
      'Tes performa pendinginan',
    ],
    image: IMG_CUCI,
  },
  {
    id: 'cuci-ac-inverter',
    title: 'Cuci AC Inverter',
    description:
      'Perawatan khusus AC inverter dengan prosedur aman untuk menjaga efisiensi dan komponen elektronik.',
    price: 175000,
    pk: 'Semua PK',
    checklist: [
      'Cuci indoor & outdoor inverter',
      'Pengecekan PCB & sensor',
      'Bersihkan Area Kerja',
      'Tes efisiensi & arus',
    ],
    image: IMG_CUCI,
  },
  {
    id: 'cuci-besar-overhaul',
    title: 'Cuci Besar AC (Overhaul)',
    description:
      'Pencucian total dengan bongkar komponen indoor untuk kondisi sangat kotor dan bau tidak sedap.',
    price: 475000,
    pk: 'Semua PK',
    checklist: [
      'Bongkar & cuci blower',
      'Cuci drain pan & housing',
      'Cuci evaporator dengan deterjen khusus',
      'Semprot anti-bakteri',
    ],
    image: IMG_CUCI,
  },
  {
    id: 'pasang-ac-05-1',
    title: 'Pasang AC 0.5–1 PK',
    description:
      'Pemasangan AC baru 0.5–1 PK dengan bracket kokoh, pipa berkualitas, dan pemasangan rapi.',
    price: 375.000,
    pk: '0.5–1 PK',
    checklist: [
      'Pemasangan bracket indoor',
      'Instalasi pipa',
      'Pemasangan outdoor unit',
      'Instalasi kabel',
    ],
    image: IMG_INSTALASI,
  },
  {
    id: 'pasang-ac-15-2',
    title: 'Pasang AC 1.5–2 PK',
    description:
      'Pemasangan AC baru 1.5–2 PK untuk ruangan luas, dengan standar instalasi profesional.',
    price: 475000,
    pk: '1.5–2 PK',
    checklist: [
      'Pemasangan bracket',
      'Instalasi pipa',
      'Pemasangan outdor unit',
      'Instalasi Kabel',
    ],
    image: IMG_INSTALASI,
  },
  {
    id: 'bongkar-pasang-05-1',
    title: 'Bongkar Pasang AC 0.5–1 PK',
    description:
      'Relokasi unit AC 0.5–1 PK ke lokasi baru dengan pembongkaran dan pemasangan ulang rapi.',
    price: 625000,
    pk: '0.5–1 PK',
    checklist: [
      'Bongkar indoor',
      'Bongkar outdoor',
      'Pasang indoor',
      'Pasang outdoor',
    ],
    image: IMG_BONGKAR,
  },
  {
    id: 'bongkar-pasang-15-2',
    title: 'Bongkar Pasang AC 1.5–2 PK',
    description:
      'Relokasi unit AC 1.5–2 PK dengan pembongkaran dan pemasangan ulang profesional.',
    price: 650000,
    pk: '1.5–2 PK',
    checklist: [
      'Bongkar indoor',
      'Bongkar outdoor',
      'Pasang indoor',
      'Pasang outdoor',
    ],
    image: IMG_BONGKAR,
  },
  {
    id: 'bongkar-ac',
    title: 'Bongkar AC',
    description:
      'Pembongkaran unit AC tanpa pemasangan ulang, untuk pindah atau ganti unit baru.',
    price: 325000,
    pk: '0,5-2 PK',
    checklist: [
      'Bongkar indoor unit',
      'Bongkar outdoor unit',
      'Recycle freon dengan aman',
      'Area dibiarkan bersih',
    ],
    image: IMG_BONGKAR,
  },
  {
    id: 'isi-freon',
    title: 'Isi Freon (Pengisian)',
    description:
      'Pengisian freon baru R32/R410A untuk AC yang kehabisan freon agar kembali dingin.',
    price: 450000,
    pk: '0.5–1 PK',
    checklist: [
      'Pengecekan tekanan freon',
      'Mengencangkan Baut Kran AC',
      'Pengisian freon sesuai kapasitas',
      'Tes tekanan & pendinginan',
    ],
    image: IMG_FREON,
  },
  {
    id: 'tambah-freon',
    title: 'Tambah Freon',
    description:
      'Penambahan freon untuk AC yang masih ada sisa tapi kurang optimal. Tekanan presisi.',
    price: 350000,
    pk: '0.5–1 PK',
    checklist: [
      'Cek tekanan freon',
      'Deteksi titik kebocoran',
      'Penambahan freon',
      'Tes performa pendinginan',
    ],
    image: IMG_FREON,
  },
  {
    id: 'pengecekan-ac',
    title: 'Pengecekan AC',
    description:
      'Diagnosa menyeluruh kondisi AC untuk mengetahui masalah dan estimasi perbaikan.',
    price: 150000,
    pk: '0,5-2 PK',
    checklist: [
      'Cek tekanan freon',
      'Cek arus listrik & kapasitor',
      'Cek kebocoran & getaran',
      'Rekomendasi perbaikan',
    ],
    image: IMG_PENGECEKAN,
  },
  {
    id: 'las-pipa-freon',
    title: 'Las Sambungan Pipa Freon',
    description:
      'Pengelasan sambungan pipa freon yang bocor atau putus untuk menutup kebocoran.',
    price: 175000,
    pk: 'Semua PK',
    checklist: [
      'Deteksi titik kebocoran',
      'Las sambungan pipa',
      'Tes tekanan (leak test)',
      'Perbaiki Sambungan Pipa',
    ],
    image: IMG_LAS,
  },
  {
    id: 'ganti-kapasitor',
    title: 'Ganti Kapasitor',
    description:
      'Penggantian kapasitor yang rusak agar kompresor dan blower berfungsi normal kembali.',
    price: 350000,
    pk: '0.5–1 PK',
    checklist: [
      'Diagnosa kapasitor',
      'Ganti kapasitor original',
      'Tes arus & putaran kompresor',
      'Tes performa AC',
    ],
    image: IMG_KAPASITOR,
  },
  {
    id: 'vacuum',
    title: 'Vacuum',
    description:
      'Proses vacuum untuk mengeluarkan udara dan kelembaban dari system pipa AC.',
    price: 300000,
    pk: '0,5-2 PK',
    checklist: [
      'Sambung vacuum pump',
      'Proses vacuum 30–45 menit',
      'Cek tekanan negatif',
      'Release & tes system',
    ],
    image: IMG_VACUUM,
  },
  {
    id: 'flushing-evaporator',
    title: 'Flushing Evaporator',
    description:
      'Pencucian evaporator dengan chemical khusus untuk kotoran membandel dan bau tidak sedap.',
    price: 275000,
    pk: '0,5-2 PK',
    checklist: [
      'Aplikasi chemical cleaner',
      'Flush & bilas evaporator',
      'Bersihkan drain pan',
      'Tes aliran udara & bau',
    ],
    image: IMG_VACUUM,
  },
  {
    id: 'perbaikan-instalasi',
    title: 'Perbaikan Instalasi',
    description:
      'Perbaikan instalasi pipa, kabel, atau bracket yang tidak rapi atau bermasalah.',
    price: 395000,
    pk: '0,5-2 PK',
    checklist: [
      'Audit instalasi existing',
      'Perbaikan pipa & kabel',
      'Rapihkan bracket & drain',
      'Tes performa & kebocoran',
    ],
    image: IMG_INSTALASI,
  },
  {
    id: 'bobok-tembok',
    title: 'Bobok Tembok',
    description:
      'Jasa bobok tembok untuk penempatan pipa AC yang tersembunyi (concealed piping).',
    price: 150000,
    priceNote: 'per lubang',
    pk: 'Per lubang',
    checklist: [
      'Marking jalur pipa',
      'Bobok tembok sesuai ukuran',
      'Bersihkan sisa material',
      'Siap untuk pipa in-wall',
    ],
    image: IMG_BOBOK,
  },
];

export const priceRows: PriceRow[] = [
  { id: 'p1', name: 'Cuci AC', price: 100000, pk: '0,5–1 PK', category: 'Cuci AC' },
  { id: 'p2', name: 'Cuci AC', price: 125000, pk: '1,5–2 PK', category: 'Cuci AC' },
  { id: 'p3', name: 'Cuci AC Inverter', price: 175000, pk: 'Semua PK', category: 'Cuci AC' },
  { id: 'p4', name: 'Cuci AC Standing', price: 175000, pk: 'Per PK', category: 'Cuci AC' },
  { id: 'p5', name: 'Cuci AC Cassette', price: 200000, pk: 'Per PK', category: 'Cuci AC' },
  { id: 'p6', name: 'Cuci AC Central', price: 250000, pk: 'Per PK', category: 'Cuci AC' },
  { id: 'p7', name: 'Cuci Besar AC Split (Overhaul)', price: 475000, pk: '0,5–2 PK', category: 'Cuci AC' },
  { id: 'p8', name: 'Jasa Pasang AC', price: 375000, pk: '0,5–1 PK', category: 'Pasang & Bongkar' },
  { id: 'p9', name: 'Jasa Pasang AC', price: 475000, pk: '1,5–2 PK', category: 'Pasang & Bongkar' },
  { id: 'p10', name: 'Bongkar Pasang AC', price: 625000, pk: '0,5–1 PK', category: 'Pasang & Bongkar' },
  { id: 'p11', name: 'Bongkar Pasang AC', price: 725000, pk: '1,5–2 PK', category: 'Pasang & Bongkar' },
  { id: 'p12', name: 'Bongkar AC', price: 325000, pk: '0,5–2 PK', category: 'Pasang & Bongkar' },
  { id: 'p13', name: 'Penambahan Freon', price: 300000, pk: '0,5–1 PK', category: 'Freon' },
  { id: 'p14', name: 'Penambahan Freon', price: 350000, pk: '1,5–2 PK', category: 'Freon' },
  { id: 'p15', name: 'Pengisian Freon', price: 450000, pk: '0,5–1 PK', category: 'Freon' },
  { id: 'p16', name: 'Pengisian Freon', price: 500000, pk: '1,5–2 PK', category: 'Freon' },
  { id: 'p17', name: 'Cairan R11', price: 350000, pk: '0,5–2 PK', category: 'Freon' },
  { id: 'p18', name: 'Las Pipa Freon', price: 175000, pk: '0,5–2 PK', category: 'Perbaikan & Sparepart' },
  { id: 'p19', name: 'Vacuum', price: 300000, pk: '0,5–2 PK', category: 'Perbaikan & Sparepart' },
  { id: 'p20', name: 'Flushing Evaporator', price: 275000, pk: '0,5–2 PK', category: 'Perbaikan & Sparepart' },
  { id: 'p21', name: 'Vacuum & Flushing', price: 500000, pk: '0,5–2 PK', category: 'Perbaikan & Sparepart' },
  { id: 'p22', name: 'Pengecekan AC', price: 125000, pk: '0,5–2 PK', category: 'Perbaikan & Sparepart' },
  { id: 'p23', name: 'Perbaikan Instalasi', price: 395000, pk: '0,5–2 PK', category: 'Perbaikan & Sparepart' },
  { id: 'p24', name: 'Perbaikan Modul PCB', price: 650000, pk: '0,5–2 PK', category: 'Perbaikan & Sparepart' },
  { id: 'p25', name: 'Ganti Kapasitor', price: 350000, pk: '0,5–1 PK', category: 'Perbaikan & Sparepart' },
  { id: 'p26', name: 'Ganti Kapasitor', price: 450000, pk: '1,5–2 PK', category: 'Perbaikan & Sparepart' },
  { id: 'p27', name: 'Oli Kompresor', price: 375000, pk: '0,5–2 PK', category: 'Perbaikan & Sparepart' },
  { id: 'p28', name: 'Jasa Teknisi', price: 175000, pk: '0,5-2 PK', category: 'Lain-lain' },
  { id: 'p29', name: 'Bobok Tembok', price: 150000, priceNote: 'per meter / per lubang', pk: '', category: 'Lain-lain' },
  { id: 'p30', name: 'Biaya Transportasi', price: 35000, pk: '—', category: 'Lain-lain' },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Booking & Konsultasi',
    description:
      'Hubungi via WhatsApp. Tim kami mengkonfirmasi jadwal dan kebutuhan unit Anda.',
    icon: PhoneCall,
  },
  {
    number: '02',
    title: 'Diagnosa & Penawaran',
    description:
      'Teknisi datang tepat waktu, memeriksa unit, dan memberikan penawaran transparan sebelum kerja.',
    icon: Gauge,
  },
  {
    number: '03',
    title: 'Pengerjaan Profesional',
    description:
      'Servis dilakukan dengan alat standar dan sparepart original. Area kerja dibiarkan bersih.',
    icon: Cog,
  },
  {
    number: '04',
    title: 'Tes & Garansi',
    description:
      'Performa AC diuji sebelum ditinggalkan. Setiap layanan dilindungi garansi resmi.',
    icon: ShieldCheck,
  },
];

export const features: Feature[] = [
  {
    title: 'Teknisi Bersertifikat',
    description:
      'Setiap teknisi tersertifikasi dan berpengalaman menangani semua merek dan tipe AC.',
    icon: BadgeCheck,
  },
  {
    title: 'Harga Transparan',
    description:
      'Penawaran jelas di muka. Tidak ada biaya tersembunyi setelah pengerjaan dimulai.',
    icon: Wallet,
  },
  {
    title: 'Garansi Resmi 30 Hari',
    description:
      'Jika AC bermasalah dalam masa garansi, kami perbaiki gratis tanpa pertanyaan.',
    icon: ShieldCheck,
  },
  {
    title: 'Respon Cepat 30 Menit',
    description:
      'Konfirmasi pesanan dalam 30 menit. Slot same-day tersedia untuk area Jabodetabek.',
    icon: Clock,
  },
  {
    title: 'Sparepart Original',
    description:
      'Kami hanya menggunakan sparepart original dari distributor resmi untuk hasil awet.',
    icon: Sparkles,
  },
  {
    title: 'Layanan Se-Indonesia',
    description:
      'Tim tersedia di kota besar seluruh Indonesia dengan standar pelayanan yang sama.',
    icon: MapPin,
  },
];

export const stats: Stat[] = [
  {
    label: 'Unit terlayani',
    value: '25',
    suffix: '000+',
    icon: Wind,
  },
  {
    label: 'Tahun pengalaman',
    value: '12',
    icon: Award,
  },
  {
    label: 'Rating pelanggan',
    value: '4.9',
    suffix: '/5',
    icon: ThumbsUp,
  },
  {
    label: 'Kota terjangkau',
    value: '28',
    icon: MapPin,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ardian',
    role: 'Pemilik Rumah',
    location: 'Kebon Jeruk',
    rating: 5,
    quote:
      'Teknisi datang tepat waktu, kerja rapi, dan AC langsung dingin lagi. Harga jelas di awal, tidak ada kejutan. Sangat direkomendasikan!',
    initials: 'RP',
  },
  {
    id: 't2',
    name: 'Belvir',
    role: 'Ibu Rumah Tangga',
    location: 'Pondok Gede',
    rating: 5,
    quote:
      'Sudah langganan cuci AC tiap 3 bulan. Anak-anak tidak batuk lagi karena udara bersih. Timnya ramah dan selalu tepat jadwal.',
    initials: 'DA',
  },
  {
    id: 't3',
    name: 'Riansyah',
    role: 'Pemilik Kafe',
    location: 'Ciater',
    rating: 5,
    quote:
      'Pakai paket Business Pro untuk kafe. AC tidak pernah down saat ramai, dan laporan bulanannya membantu saya kontrol biaya.',
    initials: 'HW',
  },
  {
    id: 't4',
    name: 'Fitriani',
    role: 'Property Manager',
    location: 'Cibubur',
    rating: 5,
    quote:
      'Mengelola 40 unit apartemen jadi mudah. Penjadwalan otomatis dan teknisi sama setiap kali, jadi konsisten.',
    initials: 'SN',
  },
  {
    id: 't5',
    name: 'Khaira H',
    role: 'Kantor',
    location: 'Pancoran',
    rating: 5,
    quote:
      'AC central kantor sempat bermasalah. Tim Dokter Sejuk diagnosa cepat dan selesai dalam sehari. Profesional sekali.',
    initials: 'BS',
  },
  {
    id: 't6',
    name: 'Risya',
    role: 'Pemilik Rumah',
    location: 'PIK 2',
    rating: 5,
    quote:
      'Bongkar-pasang rapi banget, pipa tersembunyi, bracket kokoh. Estimasi harga pun sesuai. Pasti pakai lagi.',
    initials: 'ML',
  },
];

export const guarantees: Guarantee[] = [
  {
    title: 'Garansi 30 Hari',
    description:
      'Setiap layanan dilindungi garansi resmi. Jika masalah kembali dalam masa garansi, kami perbaiki gratis.',
    icon: ShieldCheck,
  },
  {
    title: 'Garansi Dingin Kembali',
    description:
      'Setelah cuci & isi freon, AC dijamin kembali dingin. Jika tidak, kami servis ulang tanpa biaya.',
    icon: Snowflake,
  },
  {
    title: 'Garansi Sparepart Original',
    description:
      'Semua sparepart bergaransi resmi distributor. Anda menerima kartu garansi untuk setiap komponen.',
    icon: BadgeCheck,
  },
  {
    title: 'Garansi Kepuasan',
    description:
      'Jika Anda tidak puas dengan hasil pengerjaan, kami kembali untuk memperbaiki tanpa biaya tambahan.',
    icon: ThumbsUp,
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'Apakah teknisi Dokter Sejuk AC bersertifikat?',
    answer:
      'Seluruh teknisi kami bersertifikat dan telah berpengalaman menangani berbagai merek dan tipe AC, dari split, cassette, hingga central AC.',
  },
  {
    question: 'Apakah ada garansi setelah service?',
    answer:
      'Ya. Setiap layanan diberikan garansi resmi hingga 30 hari. Jika AC bermasalah dalam masa garansi, kami perbaiki gratis.',
  },
  {
    question: 'Berapa lama waktu pengerjaan service AC?',
    answer:
      'Cuci AC umumnya 45–60 menit per unit. Perbaikan ringan 1–2 jam, sedangkan bongkar-pasang sekitar 2–3 jam tergantung kondisi lokasi.',
  },
  {
    question: 'Apakah bisa on-call di hari yang sama?',
    answer:
      'Bisa. Untuk area Jabodetabek kami menyediakan layanan same-day dengan slot terbatas. Hubungi kami sebelum jam 14.00 untuk permintaan same-day.',
  },
  {
    question: 'Bagaimana sistem pembayaran?',
    answer:
      'Pembayaran dilakukan setelah pengerjaan selesai dan AC dinyatakan berfungsi normal. Kami menerima transfer bank, e-wallet (GoPay, OVO, DANA), dan tunai.',
  },
  {
    question: 'Apakah harga sudah termasuk sparepart?',
    answer:
      'Biaya cuci AC dan isi freon sudah all-in. Untuk perbaikan yang memerlukan sparepart, teknisi memberikan penawaran terlebih dahulu sebelum penggantian.',
  },
  {
    question: 'Merek AC apa saja yang ditangani?',
    answer:
      'Kami menangani semua merek: Daikin, Panasonic, LG, Samsung, Sharp, Mitsubishi, Midea, Akari, Gree, dan lainnya. Termasuk inverter dan non-inverter.',
  },
  {
    question: 'Apakah ada minimum order untuk area tertentu?',
    answer:
      'Untuk area di luar radius 15 km dari pusat kota, berlaku biaya transport yang akan diinformasikan saat booking. Minimum 2 unit untuk layanan di luar kota.',
  },
];

export const brands = [
  'Daikin',
  'Panasonic',
  'LG',
  'Samsung',
  'Sharp',
  'Mitsubishi',
  'Midea',
  'Akari',
  'Gree',
  'Polytron',
];
