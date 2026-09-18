'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '@/lib/site-config';

export function JakartaTimurCtaBanner() {
  const whatsappMessage =
    'Halo Dokter Sejuk AC, saya ingin memesan layanan service AC di Jakarta Timur. Mohon info jadwal nya';

  return (
    <section className="py-8 sm:py-16">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e40af] via-[#1d4ed8] to-[#2563eb] px-6 py-12 text-center shadow-elevated sm:px-12 sm:py-16"
        >
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            aria-hidden
          />

          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            aria-hidden
          />

          <div className="relative">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Service AC Jakarta Timur Profesional
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-white/85 sm:text-base">
              Percayakan kebutuhan service dan perawatan AC Anda kepada Dokter
              Sejuk AC. Teknisi profesional, harga transparan, pengerjaan rapi,
              dan layanan bergaransi untuk membantu menjaga kenyamanan rumah
              maupun tempat usaha Anda di Jakarta Timur.
            </p>

            <a
              href={`${siteConfig.whatsappHref}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-2xl bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-card transition-all duration-200 hover:bg-[#1ebe5a] hover:shadow-elevated active:scale-[0.98]"
            >
              <FaWhatsapp className="h-5 w-5" />
              Konsultasi via WhatsApp
              <span className="ml-1">&rarr;</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
