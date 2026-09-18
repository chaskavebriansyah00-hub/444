'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/layout/section-heading';

const PHOTOS = [
  '/images/gallery/file_0000000019a8820680677d07731a4a48.png',
  '/images/gallery/file_00000000640c82308f7f1f2acc83b6da.png',
  '/images/gallery/IMG_20200304_174707.jpg',
  '/images/gallery/IMG_20200304_174736.jpg',
  
  '/images/gallery/file_00000000ce308209af7df4b1257c4e30.png',
];

export function Gallery() {
  return (
    <section id="galeri" className="relative overflow-hidden py-12 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-secondary/40" aria-hidden />
      <div className="pointer-events-none absolute -left-24 top-1/4 -z-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl" aria-hidden />

      <div className="container-page">
        <SectionHeading
          eyebrow="Galeri Pengerjaan"
          title="Hasil kerja yang berbicara sendiri"
          description="Dokumentasi nyata dari tim teknisi kami di lapangan."
        />

        <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-5 sm:mt-12 sm:gap-8">
          {PHOTOS.map((src, i) => (
            <motion.figure
              key={src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="gallery-item relative w-full overflow-hidden rounded-[8px] shadow-card"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Galeri pengerjaan ${i + 1}`}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="select-none h-[320px] w-full object-cover object-center sm:h-[340px] lg:h-[380px]"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
