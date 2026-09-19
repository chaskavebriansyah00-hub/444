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
        border-slate-200
        bg-[#F1F3F5]
        shadow-[0_8px_24px_-12px_rgba(15,23,42,0.25)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#22C55E]/40
        hover:bg-[#F4F6F7]
        hover:shadow-[0_16px_32px_-12px_rgba(34,197,94,0.22)]
      "
    >
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
            bg-[#22C55E]
            px-2.5
            py-1
            text-[10px]
            font-bold
            uppercase
            tracking-wide
            text-white
            shadow-sm
          "
        >
          Populer
        </span>
      )}

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Judul */}
        <h3
          className="
            pr-14
            font-display
            text-base
            font-bold
            leading-snug
            tracking-tight
            text-slate-900
            sm:text-lg
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
              border-slate-300
              bg-white
              px-2.5
              py-1
              text-[11px]
              font-semibold
              text-slate-700
            "
          >
            {card.pk}
          </span>

          <span
            className="
              rounded-[6px]
              bg-[#22C55E]
              px-2.5
              py-1
              text-[11px]
              font-bold
              text-white
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
            mt-3
            text-xs
            leading-relaxed
            text-slate-600
            sm:text-sm
          "
        >
          {card.description}
        </p>

        {/* Checklist */}
        <ul className="mt-4 space-y-2">
          {card.checklist.map((item) => (
            <li
              key={item}
              className="
                flex
                items-start
                gap-2
                text-xs
                leading-relaxed
                text-slate-700
                sm:text-sm
              "
            >
              <span
                className="
                  mt-[2px]
                  flex
                  h-4
                  w-4
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#22C55E]
                "
              >
                <Check
                  className="
                    h-2.5
                    w-2.5
                    text-white
                  "
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
            mt-5
            flex
            items-center
            justify-center
            gap-2
            rounded-[7px]
            bg-gradient-to-r
            from-[#22C55E]
            to-[#4ADE80]
            py-2.5
            text-xs
            font-bold
            text-white
            shadow-[0_6px_14px_-6px_rgba(34,197,94,0.6)]
            transition-all
            duration-200
            hover:from-[#16A34A]
            hover:to-[#22C55E]
            hover:shadow-[0_8px_18px_-6px_rgba(34,197,94,0.7)]
            active:scale-[0.98]
            sm:py-3
            sm:text-sm
          "
        >
          <FaWhatsapp className="h-4 w-4" />
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

        <div
          className="
            mt-8
            grid
            grid-cols-2
            gap-3
            sm:mt-12
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
