'use client';

import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { priceRows } from '@/lib/data';
import { siteConfig } from '@/lib/site-config';
import { SectionHeading } from '@/components/layout/section-heading';

const formatRupiah = (value: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

function waLink(name: string) {
  const text = encodeURIComponent(
    `Halo Dokter Sejuk AC, saya ingin booking layanan "${name}". Mohon info selengkapnya.`
  );

  return `${siteConfig.whatsappHref}?text=${text}`;
}

export function PricingTable() {
  return (
    <section
      id="harga"
      className="relative overflow-hidden py-12 sm:py-24 lg:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Daftar Harga"
          title="Harga jasa service AC transparan"
          description="Pilih layanan, lalu hubungi kami via WhatsApp untuk konfirmasi dan jadwal pengerjaan."
        />

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-6 flex max-w-3xl items-start gap-3 rounded-[8px] border border-warning/30 bg-warning/10 px-5 py-4 sm:mt-8"
        >
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-warning" />

          <p className="text-sm leading-relaxed text-foreground/80">
            Harga dapat berubah sewaktu-waktu sesuai kondisi di lapangan.
            Hubungi kami untuk konsultasi dan estimasi gratis.
          </p>
        </motion.div>

        {/* Pricing table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-[8px] bg-primary-900 p-3 shadow-elevated sm:mt-12 sm:p-4 lg:p-5"
        >
          <div className="overflow-hidden rounded-[8px] bg-white">
            {/* Header */}
            <div className="grid grid-cols-[1fr_auto] items-center gap-4 bg-[#f5b800] px-4 py-3 sm:px-6 sm:py-3.5">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary-900 sm:text-sm">
                Description
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary-900 sm:text-sm">
                Price
              </span>
            </div>

            {/* Rows */}
            <ul className="divide-y divide-gray-200">
              {priceRows.map((row) => (
                <li
                  key={row.id}
                  className="group grid grid-cols-[1fr_auto] items-center gap-4 px-4 py-3 transition-colors duration-150 hover:bg-gray-50 sm:px-6 sm:py-3.5"
                >
                  {/* Description */}
                  <div className="min-w-0">
                    <span className="block truncate text-sm font-medium text-gray-800 sm:text-[15px]">
                      {row.name}
                    </span>

                    <span className="mt-0.5 block text-[11px] text-gray-400 sm:text-xs">
                      {row.pk}
                      {row.priceNote ? ` · ${row.priceNote}` : ''}
                    </span>
                  </div>

                  {/* Price + WhatsApp */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="whitespace-nowrap text-sm font-bold text-gray-900 sm:text-base">
                      {formatRupiah(row.price)}
                    </span>

                    <a
                      href={waLink(row.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp untuk ${row.name}`}
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-[#25D366] text-white transition-all duration-200 hover:bg-[#1ebe5a] active:scale-95 sm:h-9 sm:w-9"
                    >
                      <FaWhatsapp className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
