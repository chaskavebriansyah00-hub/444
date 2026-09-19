'use client';

import { ChevronDown, HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: 'Apakah teknisi Sabit Jaya Service bersertifikat?',
    answer:
      'Teknisi Sabit Jaya Service berpengalaman menangani berbagai jenis dan merek AC. Sebelum melakukan pekerjaan, teknisi melakukan pemeriksaan kondisi unit terlebih dahulu agar tindakan yang diberikan sesuai dengan kebutuhan AC Anda.',
  },
  {
    question: 'Apakah ada garansi setelah service?',
    answer:
      'Ya. Setiap layanan Sabit Jaya Service mendapatkan garansi 30 hari sesuai ketentuan layanan. Jika terjadi kendala yang masih termasuk dalam cakupan garansi, kami siap melakukan pemeriksaan dan penanganan sesuai kondisi pekerjaan sebelumnya.',
  },
  {
    question: 'Berapa lama waktu pengerjaan service AC?',
    answer:
      'Durasi pengerjaan tergantung jenis layanan dan kondisi AC. Cuci AC umumnya membutuhkan sekitar 45–60 menit per unit, perbaikan ringan sekitar 1–2 jam, sedangkan bongkar dan pasang AC dapat membutuhkan waktu sekitar 2–3 jam.',
  },
  {
    question: 'Apakah bisa on-call di hari yang sama?',
    answer:
      'Bisa. Sabit Jaya Service menyediakan layanan same-day untuk area yang terjangkau dengan jadwal dan slot teknisi yang tersedia. Silakan hubungi kami melalui WhatsApp untuk mengecek ketersediaan jadwal pada hari tersebut.',
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
      'Sabit Jaya Service melayani berbagai merek AC populer, termasuk Daikin, Panasonic, Sharp, Mitsubishi Electric, LG, Samsung, Gree, Midea, Toshiba, Hitachi, Fujitsu, Polytron, Aqua, TCL, dan berbagai merek lainnya.',
  },
  {
    question: 'Apakah ada minimum order untuk area tertentu?',
    answer:
      'Ketentuan minimum order dapat berbeda berdasarkan lokasi, jenis layanan, dan jarak area pengerjaan. Hubungi tim Sabit Jaya Service untuk mendapatkan informasi terbaru mengenai ketentuan layanan di wilayah Anda.',
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#030504] py-14 sm:py-20 lg:py-24"
    >
      {/* =====================================================
          BLACK GLOSSY BACKGROUND
          Sama dengan Tentang Kami & Proses
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 15% 20%, rgba(255,255,255,0.08), transparent 28%), radial-gradient(circle at 85% 75%, rgba(34,197,94,0.10), transparent 30%), linear-gradient(135deg, #020303 0%, #090d0b 45%, #020303 100%)',
        }}
      />

      {/* =====================================================
          WHITE DIAGONAL PATTERN
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent 0px, transparent 34px, rgba(255,255,255,0.22) 35px, transparent 36px, transparent 72px)',
        }}
      />

      {/* =====================================================
          FINE WHITE GRID
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      {/* =====================================================
          SOFT WHITE GLOW
      ===================================================== */}

      <div
        className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/[0.05] blur-3xl"
        aria-hidden="true"
      />

      {/* =====================================================
          GREEN GLOW
      ===================================================== */}

      <div
        className="pointer-events-none absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full bg-[#22C55E]/[0.08] blur-3xl"
        aria-hidden="true"
      />

      {/* =====================================================
          DECORATIVE WHITE CURVED LINES
      ===================================================== */}

      <div
        className="pointer-events-none absolute -left-48 top-16 h-[520px] w-[900px] rounded-[50%] border border-white/[0.16]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-40 top-28 h-[520px] w-[900px] rounded-[50%] border border-white/[0.08]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-56 bottom-0 h-[520px] w-[950px] rounded-[50%] border border-white/[0.14]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-48 bottom-12 h-[520px] w-[950px] rounded-[50%] border border-white/[0.07]"
        aria-hidden="true"
      />

      {/* =====================================================
          DECORATIVE DOTS
      ===================================================== */}

      <div
        className="pointer-events-none absolute left-[8%] top-[28%] h-2 w-2 rounded-full bg-white/40 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[12%] top-[18%] h-1.5 w-1.5 rounded-full bg-white/30"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[25%] bottom-[20%] h-2 w-2 rounded-full bg-[#4ADE80]/60 shadow-[0_0_18px_rgba(74,222,128,0.6)]"
        aria-hidden="true"
      />

      <div className="container-page relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-[8px] border border-white/10 bg-white/[0.08] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#86EFAC] shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm">
            Sering Ditanyakan
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)] sm:text-4xl lg:text-5xl">
            Pertanyaan yang Sering Ditanyakan
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base lg:text-lg">
            Temukan jawaban mengenai layanan, proses pengerjaan, garansi,
            pembayaran, dan berbagai kebutuhan service AC bersama Sabit Jaya
            Service.
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-10 max-w-4xl space-y-4 sm:mt-12">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group overflow-hidden rounded-[8px] border border-slate-200 bg-[#F8FBFF] shadow-[0_18px_45px_-20px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_55px_-20px_rgba(0,0,0,0.8)]"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 sm:px-6 sm:py-6 [&::-webkit-details-marker]:hidden">
                {/* Icon FAQ */}
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
        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[8px] border border-white/10 bg-white p-2 shadow-[0_18px_45px_-20px_rgba(0,0,0,0.7)] sm:mt-14 sm:p-3">
          <img
            src="/images/service-ac-semua-merk.png"
            alt="Service AC semua merek Sabit Jaya Service"
            className="block h-auto w-full rounded-[6px] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
