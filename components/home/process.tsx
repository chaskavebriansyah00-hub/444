'use client';

import { motion } from 'framer-motion';
import {
  Target,
  Rocket,
  Users,
  Heart,
} from 'lucide-react';

const aboutCards = [
  {
    title: 'Visi Kami',
    content:
      'Menjadi penyedia layanan AC terpercaya dan terdepan di Jabodetabek dengan mengutamakan kualitas pekerjaan, inovasi, profesionalisme, serta kepuasan pelanggan sebagai prioritas utama.',
    icon: Target,
  },
  {
    title: 'Misi Kami',
    content:
      'Memberikan layanan AC yang cepat, transparan, berkualitas, bergaransi, dan dengan harga yang terjangkau, sehingga setiap pelanggan mendapatkan solusi terbaik untuk kenyamanan mereka.',
    icon: Rocket,
  },
  {
    title: 'Siapa Kami',
    content:
      'Sabit Jaya Service adalah tim teknisi AC profesional yang berpengalaman dalam bidang perawatan, perbaikan, pemasangan, bongkar pasang, pengisian freon, serta troubleshooting berbagai merek AC untuk kebutuhan rumah, apartemen, kantor, hingga tempat usaha.',
    icon: Users,
  },
  {
    title: 'Dedikasi Kami',
    content:
      'Kami berkomitmen memberikan pelayanan terbaik melalui teknisi yang berpengalaman, pekerjaan yang rapi, komunikasi yang jelas, harga transparan, serta tanggung jawab terhadap setiap layanan yang kami berikan.',
    icon: Heart,
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-[#030504] py-12 sm:py-20 lg:py-24">
      {/* Glossy black background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 15% 20%, rgba(255,255,255,0.08), transparent 28%), radial-gradient(circle at 85% 75%, rgba(34,197,94,0.10), transparent 30%), linear-gradient(135deg, #020303 0%, #090d0b 45%, #020303 100%)',
        }}
      />

      {/* White diagonal pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent 0px, transparent 34px, rgba(255,255,255,0.22) 35px, transparent 36px, transparent 72px)',
        }}
      />

      {/* Fine white grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      {/* Soft white glow - top left */}
      <motion.div
        className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/[0.05] blur-3xl"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
      />

      {/* Green glossy glow - bottom right */}
      <motion.div
        className="pointer-events-none absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full bg-[#22C55E]/[0.08] blur-3xl"
        animate={{
          scale: [1, 1.18, 1],
          x: [0, -25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
      />

      {/* Decorative white curved lines */}
      <div
        className="pointer-events-none absolute -left-48 top-16 h-[360px] w-[850px] rounded-[50%] border border-white/[0.16]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-40 top-28 h-[360px] w-[850px] rounded-[50%] border border-white/[0.08]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-56 bottom-0 h-[420px] w-[900px] rounded-[50%] border border-white/[0.14]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-48 bottom-12 h-[420px] w-[900px] rounded-[50%] border border-white/[0.07]"
        aria-hidden="true"
      />

      {/* Small decorative dots */}
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-[8px] border border-white/10 bg-white/[0.08] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#86EFAC] shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#22C55E] shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
            Tentang Kami
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)] sm:text-3xl lg:text-4xl">
            Lebih dari Sekadar Service AC
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base lg:text-lg">
            Kami membangun kepercayaan pelanggan melalui transparansi,
            keahlian, dan tanggung jawab penuh dalam setiap layanan yang
            kami berikan.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: '-60px',
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                className="group flex h-full flex-col rounded-[8px] border border-slate-200 bg-[#f8fbff] p-6 shadow-[0_18px_45px_-20px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_-20px_rgba(0,0,0,0.8)]"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-[8px] bg-primary/10 transition-transform duration-300 group-hover:scale-105">
                  <Icon
                    className="h-7 w-7 text-primary"
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold tracking-tight text-[#10233F]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-[#64748B]">
                  {card.content}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
                  }
