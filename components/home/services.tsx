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
        bg-white
        shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#22C55E]/50
        hover:shadow-[0_16px_35px_-12px_rgba(34,197,94,0.25)]
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
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Judul */}
        <h3
          className="
            pr-16
            font-display
            text-lg
            font-bold
            leading-snug
            tracking-tight
            text-slate-900
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
              border-slate-300
              bg-slate-50
              px-3
              py-1.5
              text-xs
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
              px-3
              py-1.5
              text-xs
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
            mt-4
            text-sm
            leading-relaxed
            text-slate-600
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
                text-slate-700
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
                  bg-[#22C55E]
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
            bg-gradient-to-r
            from-[#22C55E]
            to-[#4ADE80]
            py-3
            text-sm
            font-bold
            text-white
            shadow-[0_6px_16px_-6px_rgba(34,197,94,0.65)]
            transition-all
            duration-200
            hover:from-[#16A34A]
            hover:to-[#22C55E]
            hover:shadow-[0_8px_20px_-6px_rgba(34,197,94,0.75)]
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
