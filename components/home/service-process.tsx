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
      'Hubungi Dokter Sejuk untuk menyampaikan kebutuhan dan masalah AC Anda. Ceritakan kondisi AC, keluhan yang terjadi, serta layanan yang Anda butuhkan. Tim kami akan membantu memberikan informasi awal dan mengarahkan layanan yang paling sesuai dengan kondisi AC Anda.',
    image: '/images/konsultasi.jpg',
  },
  {
    icon: ClipboardCheck,
    title: 'Pengecekan',
    description:
      'Teknisi Dokter Sejuk melakukan pemeriksaan AC secara menyeluruh sebelum menentukan tindakan. Kondisi unit indoor dan outdoor akan diperiksa untuk mencari penyebab masalah yang terjadi, sehingga pengerjaan tidak dilakukan secara asal dan tindakan yang diberikan benar-benar sesuai kebutuhan.',
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
      'Setelah pekerjaan selesai, teknisi memastikan kembali kondisi AC dan menjelaskan hasil pengerjaan kepada customer. Dokter Sejuk memberikan garansi 30 hari sesuai ketentuan layanan, sehingga customer mendapatkan rasa aman dan lebih tenang setelah menggunakan jasa service AC kami.',
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
      slider.querySelectorAll<HTMLElement>(
        '[data-process-card]'
      )
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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0756D9] via-[#1268E8] to-[#168AF5] py-12 sm:py-20 lg:py-24">
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute -left-48 top-20 h-[520px] w-[900px] rounded-[50%] border border-white/20"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-56 bottom-0 h-[520px] w-[950px] rounded-[50%] border border-white/20"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/10"
        aria-hidden="true"
      />

      <div className="container-page relative z-10">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-[8px] bg-[#B8F5C8] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#166534] shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
            Proses Mudah & Transparan
          </span>

          <h2 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Bagaimana Proses Service AC di{' '}
            <span className="text-[#67E8F9]">
              Dokter Sejuk?
            </span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base lg:text-lg">
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
                    shadow-[0_18px_45px_-18px_rgba(0,0,0,0.35)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_24px_55px_-18px_rgba(0,0,0,0.4)]

                    sm:w-auto
                    sm:shrink
                    sm:snap-none
                  "
                >
                  {/* Foto */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={step.image}
                      alt={`${step.title} - Proses Service AC Dokter Sejuk`}
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
                      ? 'w-7 bg-white'
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
