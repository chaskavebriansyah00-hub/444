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
      'Dokter Sejuk AC adalah tim teknisi AC profesional yang berpengalaman dalam bidang perawatan, perbaikan, pemasangan, bongkar pasang, pengisian freon, serta troubleshooting berbagai merek AC untuk kebutuhan rumah, apartemen, kantor, hingga tempat usaha.',
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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0756D9] via-[#1268E8] to-[#168AF5] py-12 sm:py-20 lg:py-24">
      {/* Decorative lines */}
      <div
        className="pointer-events-none absolute -left-32 top-32 h-[420px] w-[900px] rounded-[50%] border border-white/30"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-48 bottom-10 h-[400px] w-[900px] rounded-[50%] border border-white/20"
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
          <span className="inline-flex items-center gap-2 rounded-[8px] bg-[#b8f5c8] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#166534]">
            <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
            Tentang Kami
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Lebih dari Sekadar Service AC
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base lg:text-lg">
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
                className="group flex h-full flex-col rounded-[8px] border border-white/50 bg-[#f8fbff] p-6 shadow-[0_18px_45px_-20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_-20px_rgba(0,0,0,0.4)]"
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
