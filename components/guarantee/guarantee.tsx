'use client';

import { motion } from 'framer-motion';
import {
  AlertTriangle,
  XCircle,
  FileCheck,
  Phone,
  Mail,
} from 'lucide-react';

import { siteConfig } from '@/lib/site-config';

const ketentuanItems = [
  {
    title: 'Garansi Perbaikan & Penggantian Sparepart',
    description:
      'Garansi berlaku hanya untuk kerusakan yang sama pada komponen yang telah diperbaiki atau diganti oleh teknisi kami. Apabila terjadi kerusakan pada komponen lain, maka tidak termasuk dalam garansi.',
  },
  {
    title: 'Garansi Pengelasan Pipa Freon',
    description:
      'Garansi hanya berlaku apabila terjadi kebocoran pada titik las yang sama. Kebocoran pada titik yang berbeda tidak termasuk dalam garansi.',
  },
  {
    title: 'Garansi Isi Freon',
    description:
      'Garansi berlaku apabila freon berkurang akibat kebocoran pada titik yang telah diperbaiki oleh teknisi kami. Pengisian freon berikutnya di luar ketentuan tersebut tidak termasuk garansi.',
  },
  {
    title: 'Garansi Berlaku Satu Kali Pengerjaan Ulang',
    description:
      'Setiap garansi hanya berlaku untuk satu kali perbaikan ulang terhadap keluhan yang sama. Setelah perbaikan ulang dilakukan, garansi dianggap selesai.',
  },
  {
    title: 'Bukti Transaksi Wajib Ditunjukkan',
    description:
      'Klaim garansi hanya dapat diproses dengan menunjukkan invoice atau kwitansi resmi dari Dokter Sejuk AC.',
  },
  {
    title: 'Tanpa Bukti Pembayaran Garansi Tidak Dapat Diproses',
    description:
      'Apabila pelanggan tidak dapat menunjukkan bukti transaksi resmi, maka klaim garansi tidak dapat dilayani.',
  },
  {
    title: 'Masa Berlaku Garansi',
    description:
      'Garansi mulai berlaku sejak tanggal invoice diterbitkan.',
  },
  {
    title: 'Durasi Garansi',
    description:
      'Masa garansi berlaku selama 30 hari sejak tanggal invoice diterbitkan, kecuali terdapat ketentuan khusus yang disepakati sebelumnya.',
  },
  {
    title: 'Perubahan Ketentuan',
    description:
      'Ketentuan garansi dapat berubah apabila terdapat kesepakatan tertulis antara pelanggan dan teknisi sebelum pekerjaan dilakukan.',
  },
  {
    title: 'Kerusakan Akibat Penggunaan Tidak Sesuai',
    description:
      'Garansi tidak berlaku untuk kerusakan yang disebabkan oleh penggunaan yang tidak sesuai petunjuk, kelalaian pengguna, atau faktor eksternal di luar kendali teknisi kami.',
  },
];

const tidakMencakupItems = [
  'Bencana alam (banjir, petir, gempa, dan sejenisnya).',
  'Instalasi listrik yang tidak stabil.',
  'Kesalahan penggunaan oleh pelanggan.',
  'Perbaikan oleh pihak lain.',
  'Kerusakan pada komponen yang tidak pernah diperbaiki oleh teknisi kami.',
];

const whatsappMessage =
  'Halo Dokter Sejuk AC, saya ingin mengajukan klaim garansi. Mohon bantuan untuk proses klaim garansi layanan saya. Terima kasih.';

function getWhatsappClaimHref() {
  try {
    const url = new URL(siteConfig.whatsappHref);
    url.searchParams.set('text', whatsappMessage);
    return url.toString();
  } catch {
    return siteConfig.whatsappHref;
  }
}

export function Guarantee() {
  const whatsappClaimHref = getWhatsappClaimHref();

  return (
    <section id="garansi" className="bg-[#f7f8fa] py-8 sm:py-10 lg:py-12">
      <div className="container-page">
        <div className="mx-auto max-w-6xl overflow-hidden border border-slate-300 bg-[#fffefb] shadow-[0_8px_30px_rgba(15,27,45,0.08)]">
          <div className="h-1 bg-[#0f1b2d]" />

          <div className="px-5 pb-6 pt-6 sm:px-8 sm:pb-7 sm:pt-8 lg:px-10">
            <div className="grid gap-7 lg:grid-cols-[1fr_270px] lg:items-center">
              <div>
                <p className="font-serif text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-600">
                  Dokter Sejuk AC
                </p>

                <h1 className="mt-2 max-w-3xl font-serif text-[30px] font-bold leading-[1.08] tracking-tight text-[#10254a] sm:text-4xl lg:text-[42px]">
                  Syarat &amp; Ketentuan
                  <span className="block text-blue-600">
                    Garansi Layanan
                  </span>
                </h1>

                <p className="mt-4 font-serif text-sm font-semibold text-[#10254a] sm:text-base">
                  Komitmen kami untuk kualitas dan kepuasan Anda
                </p>

                <div className="mt-4 h-px w-28 bg-blue-500" />

                <p className="mt-4 max-w-2xl font-serif text-sm leading-6 text-slate-600 sm:text-[15px]">
                  Garansi diberikan sebagai bentuk komitmen kami terhadap
                  kualitas pengerjaan. Dengan melakukan pemesanan layanan,
                  pelanggan dianggap telah membaca, memahami, dan menyetujui
                  seluruh syarat dan ketentuan garansi berikut.
                </p>
              </div>

              <div className="mx-auto w-full max-w-[270px] overflow-hidden border border-[#10254a] bg-white shadow-[0_5px_18px_rgba(15,27,45,0.08)] lg:mx-0 lg:ml-auto">
                <div className="bg-[#10254a] px-5 py-2.5 text-center">
                  <p className="font-serif text-[10px] font-bold uppercase tracking-[0.22em] text-white">
                    Jaminan Layanan
                  </p>
                </div>

                <div className="px-5 py-5 text-center">
                  <p className="font-serif text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Garansi Resmi
                  </p>

                  <div className="mt-2 flex items-baseline justify-center gap-2">
                    <span className="font-serif text-[68px] font-bold leading-none tracking-tight text-[#10254a]">
                      30
                    </span>

                    <span className="font-serif text-2xl font-bold uppercase text-blue-600">
                      Hari
                    </span>
                  </div>

                  <div className="mx-auto mt-3 h-[2px] w-20 bg-blue-500" />

                  <p className="mt-3 font-serif text-xs leading-5 text-slate-500">
                    Perlindungan garansi
                    <br />
                    pasca-layanan
                  </p>
                </div>

                <div className="border-t border-slate-200 bg-[#f8fbff] px-4 py-2 text-center">
                  <p className="font-serif text-[9px] uppercase tracking-[0.16em] text-[#10254a]">
                    Dokter Sejuk AC
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-300 px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
            <div className="flex items-end justify-between gap-4 border-b border-slate-300 pb-4">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#10254a] sm:text-3xl">
                  Ketentuan Garansi
                </h2>

                <p className="mt-1 font-serif text-xs text-slate-500 sm:text-sm">
                  Syarat dan ketentuan garansi layanan Dokter Sejuk AC.
                </p>
              </div>

              <span className="hidden font-serif text-[10px] uppercase tracking-widest text-slate-400 sm:block">
                01 — 10
              </span>
            </div>

            <div className="mt-5 grid gap-x-8 lg:grid-cols-2">
              {ketentuanItems.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(i * 0.03, 0.2),
                  }}
                  className="border-b border-slate-200 py-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-blue-200 bg-blue-50 font-serif text-sm font-bold text-blue-700">
                      {i + 1}
                    </span>

                    <div className="min-w-0">
                      <h3 className="font-serif text-[14px] font-bold leading-5 text-[#10254a] sm:text-[15px]">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 font-serif text-[12px] leading-5 text-slate-600 sm:text-[13px] sm:leading-[1.55]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-7 grid gap-4 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="border border-amber-200 bg-[#fffaf0] p-5"
              >
                <div className="flex items-center gap-3">
                  <AlertTriangle
                    className="h-5 w-5 shrink-0 text-amber-600"
                    strokeWidth={1.8}
                  />

                  <h3 className="font-serif text-base font-bold text-[#10254a]">
                    Perhatian
                  </h3>
                </div>

                <div className="mt-3 h-px w-12 bg-amber-400" />

                <p className="mt-3 font-serif text-sm font-bold leading-5 text-[#10254a]">
                  Layanan Cuci AC Tidak Mendapatkan Garansi
                </p>

                <p className="mt-2 font-serif text-xs leading-5 text-slate-600">
                  Setelah proses pencucian selesai, pelanggan diharapkan
                  langsung melakukan pengecekan bersama teknisi sebelum
                  teknisi meninggalkan lokasi.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="border border-red-200 bg-[#fff8f8] p-5"
              >
                <div className="flex items-center gap-3">
                  <XCircle
                    className="h-5 w-5 shrink-0 text-red-600"
                    strokeWidth={1.8}
                  />

                  <h3 className="font-serif text-base font-bold text-[#10254a]">
                    Garansi Tidak Mencakup
                  </h3>
                </div>

                <div className="mt-3 h-px w-12 bg-red-400" />

                <p className="mt-3 font-serif text-xs leading-5 text-slate-600">
                  Garansi tidak berlaku apabila kerusakan disebabkan oleh:
                </p>

                <ul className="mt-2 space-y-1.5">
                  {tidakMencakupItems.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 font-serif text-xs leading-5 text-slate-600"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-red-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="border border-emerald-200 bg-[#f7fcf9] p-5"
              >
                <div className="flex items-center gap-3">
                  <FileCheck
                    className="h-5 w-5 shrink-0 text-emerald-600"
                    strokeWidth={1.8}
                  />

                  <h3 className="font-serif text-base font-bold text-[#10254a]">
                    Bentuk Garansi
                  </h3>
                </div>

                <div className="mt-3 h-px w-12 bg-emerald-400" />

                <p className="mt-3 font-serif text-xs leading-5 text-slate-600">
                  Garansi hanya berupa perbaikan ulang atau penggantian
                  komponen sesuai hasil pemeriksaan teknisi. Garansi tidak
                  dapat diuangkan dan tidak mencakup kompensasi dalam bentuk
                  apa pun.
                </p>

                <p className="mt-4 font-serif text-xs italic leading-5 text-slate-500">
                  “Kami berkomitmen memberikan layanan terbaik dan hasil kerja
                  yang terpercaya.”
                </p>

                <p className="mt-2 font-serif text-xs font-bold text-[#10254a]">
                  — Dokter Sejuk AC
                </p>
              </motion.div>
            </div>

            <div className="mt-6 border border-blue-200 bg-[#f8fbff] p-4 sm:p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-serif text-base font-bold text-[#10254a]">
                    Masih ada pertanyaan?
                  </p>

                  <p className="mt-1 font-serif text-xs text-slate-500">
                    Hubungi kami untuk informasi lebih lanjut mengenai
                    ketentuan garansi.
                  </p>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <a
                    href={siteConfig.phoneHref}
                    className="flex items-center justify-center gap-2 border border-blue-200 bg-white px-4 py-2.5 font-serif text-xs font-semibold text-blue-700 transition-colors hover:bg-blue-50"
                  >
                    <Phone className="h-4 w-4" />
                    0858 8401 1908
                  </a>

                  <a
                    href={siteConfig.emailHref}
                    className="flex items-center justify-center gap-2 border border-blue-200 bg-white px-4 py-2.5 font-serif text-xs font-semibold text-blue-700 transition-colors hover:bg-blue-50"
                  >
                    <Mail className="h-4 w-4" />
                    halo@doktersejukac.id
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-5 flex justify-center">
              <a
                href={whatsappClaimHref}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#10254a] bg-[#10254a] px-6 py-3 text-center font-serif text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-blue-700 sm:px-8"
              >
                Hubungi Kami untuk Klaim Garansi
              </a>
            </div>

            <div className="mt-7 flex items-center justify-center gap-3">
              <span className="hidden h-px w-16 bg-slate-300 sm:block" />

              <p className="text-center font-serif text-xs italic text-slate-500">
                Terima kasih telah mempercayakan perawatan AC Anda kepada
                Dokter Sejuk AC.
              </p>

              <span className="hidden h-px w-16 bg-slate-300 sm:block" />
            </div>
          </div>

          <div className="h-1 bg-[#0f1b2d]" />
        </div>
      </div>
    </section>
  );
                  }
