'use client';

import { motion } from 'framer-motion';

export function CtaBanner() {
  return (
    <section className="py-8 sm:py-16">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[8px] bg-[#0756D9] shadow-elevated"
        >
          <img
            src="/images/hero/service-ac-banner.png"
            alt="Spesialis layanan service AC Dokter Sejuk"
            className="block h-auto w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
