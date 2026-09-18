'use client';

import { ChevronDown, HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: 'Apakah teknisi Dokter Sejuk AC bersertifikat?',
    answer:
      'Teknisi Dokter Sejuk AC berpengalaman menangani berbagai jenis dan merek AC. Sebelum melakukan pekerjaan, teknisi melakukan pemeriksaan kondisi unit terlebih dahulu agar tindakan yang diberikan sesuai dengan kebutuhan AC Anda.',
  },
  {
    question: 'Apakah ada garansi setelah service?',
    answer:
      'Ya. Setiap layanan Dokter Sejuk AC mendapatkan garansi 30 hari sesuai ketentuan layanan. Jika terjadi kendala yang masih termasuk dalam cakupan garansi, kami siap melakukan pemeriksaan dan penanganan sesuai kondisi pekerjaan sebelumnya.',
  },
  {
    question: 'Berapa lama waktu pengerjaan service AC?',
    answer:
      'Durasi pengerjaan tergantung jenis layanan dan kondisi AC. Cuci AC umumnya membutuhkan sekitar 45–60 menit per unit, perbaikan ringan sekitar 1–2 jam, sedangkan bongkar dan pasang AC dapat membutuhkan waktu sekitar 2–3 jam.',
  },
  {
    question: 'Apakah bisa on-call di hari yang sama?',
    answer:
      'Bisa. Dokter Sejuk AC menyediakan layanan same-day untuk area yang terjangkau dengan jadwal dan slot teknisi yang tersedia. Silakan hubungi kami melalui WhatsApp untuk mengecek ketersediaan jadwal pada hari tersebut.',
  },
  {
    question: 'Bagaimana sistem pembayaran?',
    answer:
      'Pembayaran dilakukan setelah pekerjaan selesai atau sesuai kesepakatan sebelum pengerjaan. Teknisi akan menjelaskan biaya pekerjaan terlebih dahulu sehingga pelanggan mengetahui estimasi biaya dengan jelas dan tidak perlu khawatir terhadap biaya tersembunyi.',
  },
  {
    question: 'Apakah harga sudah termasuk sparepart?',
    answer:
      'Harga jasa dan sparepart dapat berbeda tergantung jenis pekerjaan dan komponen yang diperlukan. Jika AC membutuhkan penggantian sparepart, teknisi akan menjelaskan kebutuhan serta estimasi biayanya terlebih dahulu sebelum penggantian dilakukan.',
  },
  {
    question: 'Merek AC apa saja yang ditangani?',
    answer:
      'Dokter Sejuk AC melayani berbagai merek AC populer, termasuk Daikin, Panasonic, Sharp, Mitsubishi Electric, LG, Samsung, Gree, Midea, Toshiba, Hitachi, Fujitsu, Polytron, Aqua, TCL, dan berbagai merek lainnya.',
  },
  {
    question: 'Apakah ada minimum order untuk area tertentu?',
    answer:
      'Ketentuan minimum order dapat berbeda berdasarkan lokasi, jenis layanan, dan jarak area pengerjaan. Hubungi tim Dokter Sejuk AC untuk mendapatkan informasi terbaru mengenai ketentuan layanan di wilayah Anda.',
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-br from-[#0756D9] via-[#1269E8] to-[#1688F5] py-14 sm:py-20 lg:py-24"
    >
      {/* Dekorasi garis */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden="true"
      >
        <div className="absolute -left-32 top-20 h-72 w-[700px] rotate-[8deg] rounded-[50%] border border-white/60" />
        <div className="absolute -right-40 bottom-10 h-72 w-[700px] -rotate-[8deg] rounded-[50%] border border-white/60" />
      </div>

      <div className="container-page relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-[8px] bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#0756D9] shadow-sm">
            Sering Ditanyakan
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Pertanyaan yang Sering Ditanyakan
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base lg:text-lg">
            Temukan jawaban mengenai layanan, proses pengerjaan, garansi,
            pembayaran, dan berbagai kebutuhan service AC bersama Dokter Sejuk
            AC.
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-10 max-w-4xl space-y-4 sm:mt-12">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group overflow-hidden rounded-[8px] border border-white/70 bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.35)] transition-all duration-300 hover:shadow-lg"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 sm:px-6 sm:py-6 [&::-webkit-details-marker]:hidden">
                {/* Logo FAQ */}
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-[#E8F2FF] text-[#0878E8]">
                  <HelpCircle
                    className="h-7 w-7"
                    strokeWidth={2}
                  />
                </span>

                {/* Pertanyaan */}
                <span className="flex-1 text-left text-sm font-bold leading-relaxed text-[#10233F] sm:text-base lg:text-lg">
                  {item.question}
                </span>

                {/* Arrow */}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-[#E8F2FF] text-[#0878E8] transition-transform duration-300 group-open:rotate-180">
                  <ChevronDown
                    className="h-5 w-5"
                    strokeWidth={2.5}
                  />
                </span>
              </summary>

              <div className="border-t border-[#E5EDF7] px-5 pb-6 pt-4 sm:px-6">
                <p className="pl-16 text-sm leading-7 text-[#64748B] sm:text-base">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* Gambar semua merek */}
        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[8px] bg-white p-2 shadow-lg sm:mt-14 sm:p-3">
          <img
            src="/images/service-ac-semua-merk.png"
            alt="Service AC semua merek Dokter Sejuk AC"
            className="block h-auto w-full rounded-[6px] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
