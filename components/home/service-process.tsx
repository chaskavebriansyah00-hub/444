'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  PhoneCall,
  ClipboardCheck,
  ReceiptText,
  Wrench,
  ShieldCheck,
} from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: 'Konsultasi',
    description:
      'Hubungi Sabit Jaya Service untuk menyampaikan kebutuhan dan masalah AC Anda. Ceritakan kondisi AC, keluhan yang terjadi, serta layanan yang Anda butuhkan. Tim kami akan membantu memberikan informasi awal dan mengarahkan layanan yang paling sesuai dengan kondisi AC Anda.',
    image: '/images/konsultasi.jpg',
  },
  {
    icon: ClipboardCheck,
    title: 'Pengecekan',
    description:
      'Teknisi Sabit Jaya Service melakukan pemeriksaan AC secara menyeluruh sebelum menentukan tindakan. Kondisi unit indoor dan outdoor akan diperiksa untuk mencari penyebab masalah yang terjadi, sehingga pengerjaan tidak dilakukan secara asal dan tindakan yang diberikan benar-benar sesuai kebutuhan.',
    image: '/images/pengecekan.jpg',
  },
  {
    icon: ReceiptText,
    title: 'Konfirmasi Harga',
    description:
      'Setelah pemeriksaan selesai, teknisi menjelaskan hasil pengecekan, pekerjaan yang diperlukan, serta estimasi biayanya secara transparan. Customer dapat mengetahui dan menyetujui biaya terlebih dahulu sebelum pengerjaan dimulai, tanpa khawatir adanya biaya yang tidak dijelaskan sebelumnya.',
    image: '/images/konfirmasi-harga.jpg',
  },
  {
    icon: Wrench,
    title: 'Pengerjaan',
    description:
      'Setelah customer menyetujui pekerjaan, teknisi mulai melakukan service atau perbaikan menggunakan peralatan yang sesuai. Setiap pekerjaan dilakukan dengan teliti, rapi, dan aman sesuai kondisi AC. Area kerja juga dijaga agar tetap bersih dan tidak mengganggu aktivitas customer.',
    image: '/images/pengerjaan.jpg',
  },
  {
    icon: ShieldCheck,
    title: 'Garansi',
    description:
      'Setelah pekerjaan selesai, teknisi memastikan kembali kondisi AC dan menjelaskan hasil pengerjaan kepada customer. Sabit Jaya Service memberikan garansi 30 hari sesuai ketentuan layanan, sehingga customer mendapatkan rasa aman dan lebih tenang setelah menggunakan jasa service AC kami.',
    image: '/images/garansi.jpg',
  },
];

export function ServiceProcess() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getCards = () => {
    const slider = sliderRef.current;

    if (!slider) return [];

    return Array.from(
      slider.querySelectorAll<HTMLElement>('[data-process-card]')
    );
  };

  const scrollToCard = (index: number) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const cards = getCards();
    const card = cards[index];

    if (!card) return;

    slider.scrollTo({
      left: card.offsetLeft - slider.offsetLeft,
      behavior: 'smooth',
    });

    setActiveIndex(index);
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const handleScroll = () => {
      const cards = getCards();

      if (!cards.length) return;

      const sliderCenter =
        slider.scrollLeft + slider.clientWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const cardCenter =
          card.offsetLeft + card.offsetWidth / 2;

        const distance = Math.abs(
          cardCenter - sliderCenter
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    slider.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      slider.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /*
   * Auto-slide mobile setiap 4 detik.
   * Timer di-reset setelah card berubah agar
   * perpindahan berikutnya selalu 4 detik kemudian.
   */
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const mediaQuery = window.matchMedia(
      '(max-width: 639px)'
    );

    if (!mediaQuery.matches) return;

    const timer = window.setTimeout(() => {
      const nextIndex =
        activeIndex === steps.length - 1
          ? 0
          : activeIndex + 1;

      scrollToCard(nextIndex);
    }, 4000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeIndex]);

  return (
    <section className="relative overflow-hidden bg-[#030504] py-12 sm:py-20 lg:py-24">
      {/* =====================================================
          BLACK GLOSSY BACKGROUND
          Sama dengan Tentang Kami
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 15% 20%, rgba(255,255,255,0.08), transparent 28%), radial-gradient(circle at 85% 75%, rgba(34,197,94,0.10), transparent 30%), linear-gradient(135deg, #020303 0%, #090d0b 45%, #020303 100%)',
        }}
      />

      {/* =====================================================
          WHITE DIAGONAL PATTERN
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent 0px, transparent 34px, rgba(255,255,255,0.22) 35px, transparent 36px, transparent 72px)',
        }}
      />

      {/* =====================================================
          FINE WHITE GRID
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      {/* =====================================================
          SOFT WHITE GLOW
      ===================================================== */}

      <div
        className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/[0.05] blur-3xl"
        aria-hidden="true"
      />

      {/* =====================================================
          GREEN GLOW
      ===================================================== */}

      <div
        className="pointer-events-none absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full bg-[#22C55E]/[0.08] blur-3xl"
        aria-hidden="true"
      />

      {/* =====================================================
          DECORATIVE WHITE CURVED LINES
      ===================================================== */}

      <div
        className="pointer-events-none absolute -left-48 top-16 h-[520px] w-[900px] rounded-[50%] border border-white/[0.16]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-40 top-28 h-[520px] w-[900px] rounded-[50%] border border-white/[0.08]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-56 bottom-0 h-[520px] w-[950px] rounded-[50%] border border-white/[0.14]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-48 bottom-12 h-[520px] w-[950px] rounded-[50%] border border-white/[0.07]"
        aria-hidden="true"
      />

      {/* =====================================================
          SMALL WHITE / GREEN LIGHT DOTS
      ===================================================== */}

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
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-[8px] border border-white/10 bg-white/[0.08] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#86EFAC] shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E] shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
            Proses Mudah & Transparan
          </span>

          <h2 className="mt-5 text-2xl font-bold tracking-tight text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)] sm:text-3xl lg:text-4xl">
            Bagaimana Proses Service AC di{' '}
            <span className="text-[#4ADE80] drop-shadow-[0_0_16px_rgba(74,222,128,0.18)]">
              Sabit Jaya Service?
            </span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base lg:text-lg">
            Kami memberikan proses service AC yang sederhana,
            jelas, dan transparan mulai dari konsultasi,
            pengecekan, konfirmasi harga, pengerjaan hingga
            garansi.
          </p>
        </div>

        {/* Card Slider */}
        <div className="relative mt-10 sm:mt-14">
          <div
            ref={sliderRef}
            className="
              flex
              snap-x
              snap-mandatory
              gap-5
              overflow-x-auto
              pb-5
              overscroll-x-contain
              scroll-smooth
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden

              sm:grid
              sm:grid-cols-2
              sm:gap-5
              sm:overflow-visible

              lg:grid-cols-5
              lg:gap-4
            "
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  data-process-card
                  className="
                    group
                    w-[88%]
                    shrink-0
                    snap-center
                    overflow-hidden
                    rounded-[8px]
                    border
                    border-white/70
                    bg-[#F8FBFF]
                    shadow-[0_18px_45px_-18px_rgba(0,0,0,0.55)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_24px_55px_-18px_rgba(0,0,0,0.7)]

                    sm:w-auto
                    sm:shrink
                    sm:snap-none
                  "
                >
                  {/* Foto */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={step.image}
                      alt={`${step.title} - Proses Service AC Sabit Jaya Service`}
                      fill
                      sizes="
                        (max-width: 639px) 88vw,
                        (max-width: 1023px) 45vw,
                        20vw
                      "
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                      "
                      priority={index === 0}
                    />

                    {/* Foto overlay */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/35
                        via-transparent
                        to-transparent
                      "
                      aria-hidden="true"
                    />

                    {/* Icon */}
                    <div
                      className="
                        absolute
                        bottom-4
                        left-4
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-[8px]
                        bg-white
                        shadow-md
                      "
                    >
                      <Icon
                        className="h-6 w-6 text-primary"
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  {/* Isi Card */}
                  <div className="flex min-h-[280px] flex-col p-5">
                    <h3 className="text-lg font-bold tracking-tight text-[#10233F]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#64748B]">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Indicator */}
          <div className="mt-3 flex justify-center gap-2">
            {steps.map((step, index) => (
              <button
                key={step.title}
                type="button"
                aria-label={`Lihat proses ${step.title}`}
                onClick={() => scrollToCard(index)}
                className={`
                  h-2
                  rounded-[2px]
                  transition-all
                  duration-300
                  ${
                    activeIndex === index
                      ? 'w-7 bg-[#22C55E]'
                      : 'w-2 bg-white/40'
                  }

                  sm:w-2
                  sm:bg-white/40
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
