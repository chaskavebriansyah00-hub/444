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
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
      }

      autoplayTimer = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
    };

    const pauseAutoplay = () => {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
      }

      if (resumeTimer) {
        clearTimeout(resumeTimer);
      }

      resumeTimer = setTimeout(startAutoplay, 1800);
    };

    startAutoplay();

    emblaApi.on('pointerDown', pauseAutoplay);

    return () => {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
      }

      if (resumeTimer) {
        clearTimeout(resumeTimer);
      }

      emblaApi.off('pointerDown', pauseAutoplay);
    };
  }, [emblaApi]);

  return (
    <section
      id="tentang"
      className="
        relative overflow-hidden
        bg-gradient-to-br
        from-[#0756D9]
        via-[#0878F5]
        to-[#1598FF]
        py-12
        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          GARIS SPIRAL / LENGKUNG
          ===================================================== */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Spiral kiri atas */}
        <div className="absolute -left-[520px] -top-[420px] h-[1050px] w-[1050px] rounded-full border-2 border-white/20" />

        <div className="absolute -left-[440px] -top-[340px] h-[1050px] w-[1050px] rounded-full border-2 border-white/14" />

        <div className="absolute -left-[360px] -top-[260px] h-[1050px] w-[1050px] rounded-full border-2 border-white/9" />

        {/* Spiral kanan bawah */}
        <div className="absolute -bottom-[620px] -right-[500px] h-[1050px] w-[1050px] rounded-full border-2 border-white/18" />

        <div className="absolute -bottom-[540px] -right-[420px] h-[1050px] w-[1050px] rounded-full border-2 border-white/12" />

        <div className="absolute -bottom-[460px] -right-[340px] h-[1050px] w-[1050px] rounded-full border-2 border-white/7" />

        {/* Cahaya lembut */}
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="container-page relative z-10">
        {/* ===================================================
            HEADING
            =================================================== */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge hijau muda */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#B8F5D0] px-4 py-2 text-sm font-semibold text-[#075B2A] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#20C76A]" />
            <span>Kenapa Harus Dokter Sejuk</span>
          </div>

          <h2 className="mt-5 font-display text-[2rem] font-bold leading-tight tracking-tight text-white sm:text-[2.35rem] lg:text-[2.75rem]">
            Lebih dari Sekadar Service AC
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[0.98rem] leading-7 text-white sm:text-base sm:leading-8">
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
                  className="
                    min-w-0 flex-[0_0_100%] pl-5
                    sm:flex-[0_0_50%]
                    lg:flex-[0_0_33.333333%]
                  "
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
                    className="
                      group flex h-full min-h-[490px]
                      flex-col overflow-hidden
                      rounded-[8px]
                      border border-white/80
                      bg-[#F7FAFF]
                      shadow-card
                      transition-all duration-300
                      ease-in-out
                      hover:-translate-y-1.5
                      hover:shadow-elevated
                    "
                  >
                    {/* FOTO */}
                    <div className="relative aspect-video shrink-0 overflow-visible">
                      <img
                        src={reason.image}
                        alt={reason.title}
                        className="
                          h-full w-full
                          rounded-t-[8px]
                          object-cover
                        "
                      />

                      {/* ICON */}
                      <span
                        className="
                          absolute bottom-0 left-1/2
                          flex h-12 w-12
                          -translate-x-1/2
                          translate-y-1/2
                          items-center justify-center
                          rounded-[8px]
                          border-4 border-[#F7FAFF]
                          bg-[#1677E8]
                          text-white
                          shadow-card
                        "
                      >
                        <Icon
                          className="h-5 w-5"
                          strokeWidth={2}
                        />
                      </span>
                    </div>

                    {/* ISI CARD */}
                    <div
                      className="
                        flex flex-1
                        flex-col
                        items-center
                        px-6
                        pb-7
                        pt-10
                        text-center
                      "
                    >
                      <h3
                        className="
                          font-display
                          text-[1.12rem]
                          font-bold
                          tracking-tight
                          text-[#0F2342]
                        "
                      >
                        {reason.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          min-h-[120px]
                          text-[0.94rem]
                          leading-relaxed
                          text-[#64748B]
                        "
                      >
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
              onClick={() => emblaApi?.scrollTo(index)}
              className={`
                h-2
                rounded-[2px]
                transition-all duration-300
                ${
                  selectedIndex === index
                    ? 'w-7 bg-white'
                    : 'w-2 bg-white/40 hover:bg-white/70'
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
        }
