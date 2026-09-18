'use client';

import Image from 'next/image';
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
        transform: visible ? 'scale(1)' : 'scale(0.88)',
        transition: `
          opacity 550ms cubic-bezier(0.22, 1, 0.36, 1)
            ${(index % 3) * 80}ms,
          transform 550ms cubic-bezier(0.22, 1, 0.36, 1)
            ${(index % 3) * 80}ms
        `,
        willChange: 'opacity, transform',
      }}
      className="group relative flex flex-col overflow-hidden rounded-[8px] bg-gradient-to-br from-[#1e40af] via-[#1d4ed8] to-[#2563eb] shadow-[0_18px_40px_-12px_rgba(30,64,175,0.5)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-12px_rgba(30,64,175,0.6)]"
    >
      {card.popular && (
        <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-[8px] bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#1e40af] shadow-soft">
          Populer
        </span>
      )}

      {/* Real AC photo */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading={index < 3 ? 'eager' : 'lazy'}
        />

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1e40af]/70 via-transparent to-transparent"
          aria-hidden
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold tracking-tight text-white">
          {card.title}
        </h3>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="rounded-[8px] bg-white/15 px-3 py-1 text-xs font-semibold text-white">
            {card.pk}
          </span>

          <span className="rounded-[8px] bg-white px-3 py-1 text-xs font-bold text-[#1e40af]">
            {card.priceNote
              ? `${formatRupiah(card.price)} / ${card.priceNote}`
              : formatRupiah(card.price)}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-white/80">
          {card.description}
        </p>

        {/* Checklist */}
        <ul className="mt-4 space-y-2">
          {card.checklist.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-white/90"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#5eead4]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* WhatsApp Button */}
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center justify-center gap-2 rounded-[8px] bg-[#25D366] py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1ebe5a] hover:shadow-soft active:scale-[0.98]"
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
      className="relative pt-8 pb-12 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Layanan Kami"
          title="Solusi AC lengkap dengan harga transparan"
          description="Setiap layanan dikerjakan teknisi bersertifikat dengan alat standar dan sparepart original. Pilih layanan, chat langsung via WhatsApp."
        />

        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
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
