import {
  BadgeCheck,
  Wallet,
  ShieldCheck,
  Clock,
  Sparkles,
  MapPin,
} from 'lucide-react';
import type { Feature, Testimonial, FaqItem } from '@/types';

export const jakartaFeatures: Feature[] = [
  {
    title: 'Teknisi Bersertifikat',
    description:
      'Setiap teknisi tersertifikasi dan berpengalaman menangani semua merek dan tipe AC di seluruh wilayah Jakarta.',
    icon: BadgeCheck,
  },
  {
    title: 'Harga Transparan',
    description:
      'Penawaran jelas di muka. Tidak ada biaya tersembunyi setelah pengerjaan dimulai di lokasi Anda di Jakarta.',
    icon: Wallet,
  },
  {
    title: 'Garansi Resmi 90 Hari',
    description:
      'Jika AC bermasalah dalam masa garansi, kami perbaiki gratis tanpa pertanyaan di seluruh Jakarta.',
    icon: ShieldCheck,
  },
  {
    title: 'Respon Cepat 30 Menit',
    description:
      'Konfirmasi pesanan dalam 30 menit. Slot same-day tersedia untuk seluruh wilayah Jakarta.',
    icon: Clock,
  },
  {
    title: 'Sparepart Original',
    description:
      'Kami hanya menggunakan sparepart original dari distributor resmi untuk hasil awet dan tahan lama.',
    icon: Sparkles,
  },
  {
    title: 'Layanan Se-Jakarta',
    description:
      'Tim tersedia di Jakarta Selatan, Timur, Barat, Utara, dan Pusat dengan standar pelayanan yang sama.',
    icon: MapPin,
  },
];

export const jakartaTestimonials: Testimonial[] = [
  {
    id: 'jt1',
    name: 'Rizki Pratama',
    role: 'Pemilik Rumah',
    location: 'Jakarta Selatan',
    rating: 5,
    quote:
      'Teknisi datang tepat waktu, kerja rapi, dan AC langsung dingin lagi. Harga jelas di awal, tidak ada kejutan. Sangat direkomendasikan untuk warga Jakarta Selatan!',
    initials: 'RP',
  },
  {
    id: 'jt2',
    name: 'Dewi Anggraini',
    role: 'Ibu Rumah Tangga',
    location: 'Jakarta Timur',
    rating: 5,
    quote:
      'Sudah langganan cuci AC tiap 3 bulan. Anak-anak tidak batuk lagi karena udara bersih. Timnya ramah dan selalu tepat jadwal ke rumah kami di Jakarta Timur.',
    initials: 'DA',
  },
  {
    id: 'jt3',
    name: 'Hendra Wijaya',
    role: 'Pemilik Kafe',
    location: 'Jakarta Barat',
    rating: 5,
    quote:
      'AC kafe saya tidak pernah down saat ramai. Dokter Sejuk AC respons cepat dan servisnya profesional. Sangat membantu bisnis di Jakarta Barat.',
    initials: 'HW',
  },
  {
    id: 'jt4',
    name: 'Siti Nurhaliza',
    role: 'Property Manager',
    location: 'Jakarta Pusat',
    rating: 5,
    quote:
      'Mengelola 40 unit apartemen jadi mudah. Penjadwalan otomatis dan teknisi sama setiap kali, jadi konsisten. Layanan terbaik di Jakarta Pusat.',
    initials: 'SN',
  },
  {
    id: 'jt5',
    name: 'Budi Santoso',
    role: 'Pemilik Kantor',
    location: 'Jakarta Utara',
    rating: 5,
    quote:
      'AC kantor sempat bermasalah. Tim Dokter Sejuk diagnosa cepat dan selesai dalam sehari. Profesional sekali, recommended untuk Jakarta Utara.',
    initials: 'BS',
  },
  {
    id: 'jt6',
    name: 'Maya Lestari',
    role: 'Pemilik Rumah',
    location: 'Jakarta Selatan',
    rating: 5,
    quote:
      'Bongkar-pasang rapi banget, pipa tersembunyi, bracket kokoh. Estimasi harga pun sesuai. Pasti pakai lagi untuk rumah saya di Jakarta Selatan.',
    initials: 'ML',
  },
];

export const jakartaFaqs: FaqItem[] = [
  {
    question: 'Apakah Dokter Sejuk AC melayani seluruh wilayah Jakarta?',
    answer:
      'Ya. Kami melayani Jakarta Selatan, Jakarta Timur, Jakarta Barat, Jakarta Utara, dan Jakarta Pusat. Teknisi kami siap datang ke rumah, apartemen, kantor, ruko, dan tempat usaha Anda di seluruh DKI Jakarta.',
  },
  {
    question: 'Berapa lama waktu tunggu teknisi datang ke lokasi saya di Jakarta?',
    answer:
      'Konfirmasi pesanan dalam 30 menit. Untuk seluruh wilayah Jakarta, layanan same-day tersedia dengan slot terbatas. Hubungi kami sebelum jam 14.00 untuk permintaan same-day.',
  },
  {
    question: 'Apakah ada biaya transport tambahan untuk area Jakarta?',
    answer:
      'Tidak ada biaya transport untuk seluruh wilayah DKI Jakarta. Harga yang tertera sudah all-in untuk Jakarta Selatan, Timur, Barat, Utara, dan Pusat.',
  },
  {
    question: 'Apakah teknisi Dokter Sejuk AC bersertifikat?',
    answer:
      'Seluruh teknisi kami bersertifikat dan berpengalaman menangani berbagai merek dan tipe AC, dari split, cassette, hingga central AC yang umum digunakan di Jakarta.',
  },
  {
    question: 'Apakah ada garansi setelah service AC di Jakarta?',
    answer:
      'Ya. Setiap layanan diberikan garansi resmi hingga 90 hari. Jika AC bermasalah dalam masa garansi, teknisi kami akan kembali ke lokasi Anda di Jakarta untuk perbaikan gratis.',
  },
  {
    question: 'Berapa lama waktu pengerjaan service AC?',
    answer:
      'Cuci AC umumnya 45–60 menit per unit. Perbaikan ringan 1–2 jam, sedangkan bongkar-pasang sekitar 2–3 jam tergantung kondisi lokasi di Jakarta.',
  },
  {
    question: 'Bagaimana sistem pembayaran untuk layanan service AC Jakarta?',
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
      'Kami menangani semua merek: Daikin, Panasonic, LG, Samsung, Sharp, Mitsubishi, Midea, Akari, Gree, dan lainnya. Termasuk inverter dan non-inverter yang umum di Jakarta.',
  },
  {
    question: 'Apakah Dokter Sejuk AC melayani apartemen dan kantor di Jakarta?',
    answer:
      'Ya. Kami berpengalaman melayani AC apartemen, kantor, ruko, kafe, restoran, dan tempat usaha di seluruh Jakarta. Teknisi kami memahami aturan akses dan jam operasional gedung.',
  },
];

export const jakartaAreas = [
  { name: 'Jakarta Selatan', areas: 'Kebayoran, Pondok Indah, Lebak Bulus, Cipete, Fatmawati, Bintaro, Kemang' },
  { name: 'Jakarta Timur', areas: 'Cipinang, Pulogadung, Duren Sawit, Matraman, Jatinegara, Klender, Halim' },
  { name: 'Jakarta Barat', areas: 'Kebon Jeruk, Palmerah, Grogol, Tanjung Duren, Taman Sari, Cengkareng, Kalideres' },
  { name: 'Jakarta Utara', areas: 'Kelapa Gading, Sunter, Pluit, Tanjung Priok, PIK, Pademangan, Penjaringan' },
  { name: 'Jakarta Pusat', areas: 'Menteng, Tanah Abang, Kemayoran, Senen, Cempaka Putih, Sawah Besar, Gambir' },
];
