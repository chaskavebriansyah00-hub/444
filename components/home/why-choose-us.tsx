'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import {
  BadgeCheck,
  Clock3,
  ReceiptText,
  ShieldCheck,
} from 'lucide-react';

const reasons = [
  {
    title: 'Garansi 1 Bulan',
    description:
      'Memberikan rasa tenang kepada pelanggan dengan garansi layanan selama 1 bulan. Kualitas pengerjaan dan kepuasan pelanggan selalu menjadi prioritas utama kami.',
    image: '/images/why-choose-us/garansi-1-bulan.jpg',
    icon: ShieldCheck,
  },
  {
    title: 'Teknisi Berpengalaman',
    description:
      'Didukung teknisi berpengalaman yang mampu menangani berbagai merek dan tipe AC. Setiap layanan dikerjakan secara profesional, teliti, dan terpercaya.',
    image: '/images/why-choose-us/teknisi-berpengalaman.jpg',
    icon: BadgeCheck,
  },
  {
    title: 'Harga Transparan',
    description:
      'Kami memberikan informasi harga yang jelas sebelum pekerjaan dimulai. Tanpa biaya tersembunyi, sehingga pelanggan mengetahui dengan pasti biaya yang harus dibayarkan.',
    image: '/images/why-choose-us/harga-transparan.jpg',
    icon: ReceiptText,
  },
  {
    title: 'Respon Cepat',
    description:
      'Kami merespons setiap permintaan service dengan cepat dan menjadwalkan teknisi secara tepat waktu untuk memberikan bantuan yang cepat dan efisien.',
    image: '/images/why-choose-us/respon-cepat.jpg',
    icon: Clock3,
  },
];

export function WhyChooseUs() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    duration: 60,
    loop: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    let resumeTimer: ReturnType<typeof setTimeout> | undefined;
    let autoplayTimer: ReturnType<typeof setInterval> | undefined;

    const startAutoplay = () => {
      if (autoplayTimer !== undefined) {
        clearInterval(autoplayTimer);
      }

      autoplayTimer = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
    };

    const pauseAutoplay = () => {
      if (autoplayTimer !== undefined) {
        clearInterval(autoplayTimer);
      }

      if (resumeTimer !== undefined) {
        clearTimeout(resumeTimer);
      }

      resumeTimer = setTimeout(() => {
        startAutoplay();
      }, 1800);
    };

    startAutoplay();

    emblaApi.on('pointerDown', pauseAutoplay);

    return () => {
      if (autoplayTimer !== undefined) {
        clearInterval(autoplayTimer);
      }

      if (resumeTimer !== undefined) {
        clearTimeout(resumeTimer);
      }

      emblaApi.off('pointerDown', pauseAutoplay);
    };
  }, [emblaApi]);

  return (
    <section
      id="tentang"
      className="relative overflow-hidden bg-[#030504] py-12 sm:py-20 lg:py-24"
    >
      {/* =====================================================
          GLOSSY BLACK BACKGROUND
          ===================================================== */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 15% 18%, rgba(255,255,255,0.08), transparent 28%), radial-gradient(circle at 85% 75%, rgba(34,197,94,0.10), transparent 30%), linear-gradient(135deg,#020303 0%,#090d0b 45%,#020303 100%)',
        }}
      />

      {/* Corak diagonal putih */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent 0px, transparent 34px, rgba(255,255,255,0.22) 35px, transparent 36px, transparent 72px)',
        }}
      />

      {/* Grid putih sangat tipis */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      {/* Glow putih */}
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

      {/* Glow hijau */}
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

      {/* Garis lengkung putih */}
      <div
        className="pointer-events-none absolute -left-52 top-12 h-[1100px] w-[1100px] rounded-full border border-white/15"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-36 top-28 h-[1100px] w-[1100px] rounded-full border border-white/8"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-60 bottom-[-450px] h-[1100px] w-[1100px] rounded-full border border-white/15"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-44 bottom-[-340px] h-[1100px] w-[1100px] rounded-full border border-white/8"
        aria-hidden="true"
      />

      <div className="container-page relative z-10">
        {/* ===================================================
            HEADING
            =================================================== */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-[#86EFAC] shadow-lg backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
            <span>Kenapa Harus Sabit Jaya Service</span>
          </div>

          <h2 className="mt-5 font-display text-[2rem] font-bold leading-tight tracking-tight text-white sm:text-[2.35rem] lg:text-[2.75rem]">
            Lebih dari Sekadar Service AC
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[0.98rem] leading-7 text-white/80 sm:text-base sm:leading-8">
            Kami membangun kepercayaan pelanggan melalui transparansi,
            keahlian, dan tanggung jawab penuh dalam setiap layanan yang kami
            berikan.
          </p>
        </div>

        {/* ===================================================
            CAROUSEL
            =================================================== */}
        <div
          ref={emblaRef}
          className="mt-9 overflow-hidden sm:mt-12"
        >
          <div className="-ml-5 flex touch-pan-y">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="min-w-0 flex-[0_0_100%] pl-5 sm:flex-[0_0_50%] lg:flex-[0_0_33.333333%]"
                >
                  <motion.article
                    initial={{
                      opacity: 0,
                      y: 20,
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
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group flex h-full min-h-[490px] flex-col overflow-hidden rounded-[8px] border border-slate-200 bg-[#F7FAFF] shadow-[0_18px_45px_-20px_rgba(0,0,0,0.75)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_-20px_rgba(0,0,0,0.85)]"
                  >
                    {/* FOTO */}
                    <div className="relative aspect-video shrink-0 overflow-visible">
                      <img
                        src={reason.image}
                        alt={reason.title}
                        className="h-full w-full rounded-t-[8px] object-cover"
                      />

                      {/* ICON */}
                      <span className="absolute bottom-0 left-1/2 flex h-12 w-12 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-[8px] border-4 border-[#F7FAFF] bg-[#1677E8] text-white shadow-lg">
                        <Icon
                          className="h-5 w-5"
                          strokeWidth={2}
                        />
                      </span>
                    </div>

                    {/* ISI CARD */}
                    <div className="flex flex-1 flex-col items-center px-6 pb-7 pt-10 text-center">
                      <h3 className="font-display text-[1.12rem] font-bold tracking-tight text-[#0F2342]">
                        {reason.title}
                      </h3>

                      <p className="mt-3 min-h-[120px] text-[0.94rem] leading-relaxed text-[#64748B]">
                        {reason.description}
                      </p>
                    </div>
                  </motion.article>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            PAGINATION
            =================================================== */}
        <div
          className="mt-6 flex items-center justify-center gap-2 sm:mt-7"
          aria-label="Carousel pagination"
        >
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={selectedIndex === index}
              onClick={() => {
                emblaApi?.scrollTo(index);
              }}
              className={
                selectedIndex === index
                  ? 'h-2 w-7 rounded-full bg-[#22C55E]'
                  : 'h-2 w-2 rounded-full bg-white/35 hover:bg-white/60'
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
      }
