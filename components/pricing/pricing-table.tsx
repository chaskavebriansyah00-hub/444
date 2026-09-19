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
    `Halo Sabit Jaya Service, saya ingin booking layanan "${name}". Mohon info selengkapnya.`
  );

  return `${siteConfig.whatsappHref}?text=${text}`;
}

export function PricingTable() {
  return (
    <section
      id="harga"
      className="relative overflow-hidden bg-[#030504] py-12 sm:py-24 lg:py-28"
    >
      {/* Glossy black background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 15% 20%, rgba(255,255,255,0.06), transparent 28%), radial-gradient(circle at 85% 75%, rgba(34,197,94,0.06), transparent 30%), linear-gradient(135deg, #020303 0%, #090d0b 48%, #020303 100%)',
        }}
      />

      {/* Corak putih */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent 0px, transparent 36px, rgba(255,255,255,0.22) 37px, transparent 38px, transparent 76px)',
        }}
      />

      {/* Grid halus */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      {/* Soft green glow */}
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#22C55E]/[0.06] blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative z-10">
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
          className="mx-auto mt-6 flex max-w-3xl items-start gap-3 rounded-[8px] border border-slate-500/30 bg-slate-700/20 px-5 py-4 backdrop-blur-sm sm:mt-8"
        >
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-slate-300" />

          <p className="text-sm leading-relaxed text-white/75">
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
          className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-[8px] border border-slate-600/70 bg-[#24282A] p-3 shadow-[0_20px_55px_-20px_rgba(0,0,0,0.8)] sm:mt-12 sm:p-4 lg:p-5"
        >
          <div className="overflow-hidden rounded-[8px] border border-slate-500/50 bg-[#151819]">
            {/* Header */}
            <div className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-slate-500/60 bg-gradient-to-r from-[#4B5052] via-[#5A5F61] to-[#44484A] px-4 py-3 sm:px-6 sm:py-3.5">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm">
                Description
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm">
                Price
              </span>
            </div>

            {/* Rows */}
            <ul className="divide-y divide-slate-600/60">
              {priceRows.map((row) => (
                <li
                  key={row.id}
                  className="group grid grid-cols-[1fr_auto] items-center gap-4 bg-[#191D1E] px-4 py-3 transition-colors duration-150 hover:bg-[#252A2B] sm:px-6 sm:py-3.5"
                >
                  {/* Description */}
                  <div className="min-w-0">
                    <span className="block truncate text-sm font-medium text-white sm:text-[15px]">
                      {row.name}
                    </span>

                    <span className="mt-0.5 block text-[11px] text-slate-400 sm:text-xs">
                      {row.pk}
                      {row.priceNote ? ` · ${row.priceNote}` : ''}
                    </span>
                  </div>

                  {/* Price + WhatsApp */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="whitespace-nowrap text-sm font-bold text-white sm:text-base">
                      {formatRupiah(row.price)}
                    </span>

                    <a
                      href={waLink(row.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp untuk ${row.name}`}
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-[#25D366] text-white shadow-[0_4px_14px_rgba(37,211,102,0.25)] transition-all duration-200 hover:bg-[#1ebe5a] hover:shadow-[0_6px_18px_rgba(37,211,102,0.35)] active:scale-95 sm:h-9 sm:w-9"
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
