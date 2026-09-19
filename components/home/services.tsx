'use client';

import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { serviceCards } from '@/lib/data';
import { siteConfig } from '@/lib/site-config';
import { SectionHeading } from '@/components/layout/section-heading';

const formatRupiah = (value: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

type ServiceCardProps = {
  card: (typeof serviceCards)[number];
  index: number;
};

function ServiceCard({
  card,
  index,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = cardRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: '-30px 0px -30px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const waText = encodeURIComponent(
    `Halo Sabit Jaya Service, saya ingin booking layanan "${card.title}". Mohon info selengkapnya.`
  );

  const waHref = `${siteConfig.whatsappHref}?text=${waText}`;

  return (
    <article
      ref={cardRef}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'scale(1)'
          : 'scale(0.88)',
        transition: `
          opacity 550ms cubic-bezier(0.22, 1, 0.36, 1)
            ${(index % 3) * 80}ms,
          transform 550ms cubic-bezier(0.22, 1, 0.36, 1)
            ${(index % 3) * 80}ms
        `,
        willChange: 'opacity, transform',
      }}
      className="
        group
        relative
        flex
        flex-col
        overflow-hidden
        rounded-[8px]
        border
        border-[#CBD5E1]
        bg-gradient-to-br
        from-[#F1F5F9]
        via-[#E2E8F0]
        to-[#CBD5E1]
        shadow-[0_12px_30px_-12px_rgba(0,0,0,0.65)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#2563EB]/60
        hover:shadow-[0_18px_40px_-12px_rgba(37,99,235,0.28)]
      "
    >
      {/* Highlight glossy */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-24
          bg-gradient-to-b
          from-white/70
          via-white/20
          to-transparent
        "
        aria-hidden="true"
      />

      {/* Label Populer */}
      {card.popular && (
        <span
          className="
            absolute
            right-3
            top-3
            z-10
            inline-flex
            items-center
            rounded-[6px]
            border
            border-white/30
            bg-[#2563EB]
            px-2.5
            py-1
            text-[10px]
            font-bold
            uppercase
            tracking-wide
            text-white
            shadow-[0_5px_14px_rgba(37,99,235,0.35)]
          "
        >
          Populer
        </span>
      )}

      {/* Card Body */}
      <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">

        {/* Judul */}
        <h3
          className="
            pr-16
            font-display
            text-lg
            font-bold
            leading-snug
            tracking-tight
            text-[#172033]
            sm:text-xl
          "
        >
          {card.title}
        </h3>

        {/* PK + Harga */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span
            className="
              rounded-[6px]
              border
              border-[#94A3B8]
              bg-white/70
              px-3
              py-1.5
              text-xs
              font-semibold
              text-[#334155]
            "
          >
            {card.pk}
          </span>

          <span
            className="
              rounded-[6px]
              border
              border-[#60A5FA]
              bg-[#2563EB]
              px-3
              py-1.5
              text-xs
              font-bold
              text-white
              shadow-[0_4px_12px_rgba(37,99,235,0.25)]
            "
          >
            {card.priceNote
              ? `${formatRupiah(card.price)} / ${card.priceNote}`
              : formatRupiah(card.price)}
          </span>
        </div>

        {/* Deskripsi */}
        <p
          className="
            mt-4
            text-sm
            leading-relaxed
            text-[#475569]
          "
        >
          {card.description}
        </p>

        {/* Checklist */}
        <ul className="mt-5 space-y-2.5">
          {card.checklist.map((item) => (
            <li
              key={item}
              className="
                flex
                items-start
                gap-2.5
                text-sm
                leading-relaxed
                text-[#334155]
              "
            >
              <span
                className="
                  mt-[2px]
                  flex
                  h-5
                  w-5
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#2563EB]
                  shadow-[0_3px_8px_rgba(37,99,235,0.3)]
                "
              >
                <Check
                  className="h-3 w-3 text-white"
                  strokeWidth={3}
                />
              </span>

              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* WhatsApp Button */}
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-6
            flex
            items-center
            justify-center
            gap-2
            rounded-[7px]
            border
            border-[#60A5FA]
            bg-gradient-to-r
            from-[#1D4ED8]
            via-[#2563EB]
            to-[#3B82F6]
            py-3
            text-sm
            font-bold
            text-white
            shadow-[0_7px_18px_-5px_rgba(37,99,235,0.65)]
            transition-all
            duration-200
            hover:from-[#1E40AF]
            hover:via-[#2563EB]
            hover:to-[#60A5FA]
            hover:shadow-[0_10px_24px_-6px_rgba(37,99,235,0.8)]
            active:scale-[0.98]
          "
        >
          <FaWhatsapp className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section
      id="layanan"
      className="
        relative
        pt-8
        pb-12
        sm:pt-12
        sm:pb-24
        lg:pt-16
        lg:pb-28
      "
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Layanan Kami"
          title="Solusi AC lengkap dengan harga transparan"
          description="Setiap layanan dikerjakan teknisi bersertifikat dengan alat standar dan sparepart original. Pilih layanan, chat langsung via WhatsApp."
        />

        {/* Service Grid */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-4
            sm:mt-12
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-3
          "
        >
          {serviceCards.map((card, index) => (
            <ServiceCard
              key={card.id}
              card={card}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
