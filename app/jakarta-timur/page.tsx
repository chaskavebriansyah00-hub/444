import type { Metadata } from 'next';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { FloatingContactBar } from '@/components/layout/floating-contact-bar';

import { JakartaTimurHero } from '@/components/jakarta-timur/jakarta-hero';

import { Services } from '@/components/home/services';
import { WhyChooseUs } from '@/components/home/why-choose-us';
import { Process } from '@/components/home/process';
import { PricingTable } from '@/components/pricing/pricing-table';
import { ServiceProcess } from '@/components/home/service-process';
import { CtaBanner } from '@/components/home/cta-banner';
import { Gallery } from '@/components/gallery/gallery';
import { Testimonials } from '@/components/home/testimonials';

const siteUrl = 'https://www.doktersejuk.com';
const pageUrl = `${siteUrl}/jakarta-timur`;

const metaDescription =
  'Jasa service AC Jakarta Timur profesional untuk rumah, apartemen, kantor, ruko, dan tempat usaha. Melayani cuci AC, perbaikan AC, isi dan tambah freon, bongkar pasang, serta perawatan AC dengan teknisi berpengalaman, harga transparan, dan garansi.';

export const metadata: Metadata = {
  title:
    'Jasa Service AC Jakarta Timur Profesional & Bergaransi | Dokter Sejuk AC',

  description: metaDescription,

  keywords: [
    'service AC Jakarta Timur',
    'jasa service AC Jakarta Timur',
    'cuci AC Jakarta Timur',
    'isi freon Jakarta Timur',
    'bongkar pasang AC Jakarta Timur',
    'perbaikan AC Jakarta Timur',
    'teknisi AC Jakarta Timur',
    'Dokter Sejuk AC Jakarta Timur',
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: pageUrl,
    siteName: 'Dokter Sejuk AC',
    title:
      'Jasa Service AC Jakarta Timur Profesional & Bergaransi | Dokter Sejuk AC',
    description: metaDescription,
    images: [
      {
        url: '/images/hero/technician-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Teknisi Dokter Sejuk AC sedang service unit AC di Jakarta Timur',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Jasa Service AC Jakarta Timur Profesional & Bergaransi | Dokter Sejuk AC',
    description: metaDescription,
    images: ['/images/hero/technician-hero.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  '@id': `${pageUrl}/#localbusiness`,

  name: 'Dokter Sejuk AC — Service AC Jakarta Timur',
  url: pageUrl,
  telephone: '+62-858-8401-1908',
  priceRange: '$$',

  areaServed: {
    '@type': 'City',
    name: 'Jakarta Timur',
  },

  description: metaDescription,

  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Sejuk Makmur No. 88',
    addressLocality: 'Jakarta Timur',
    addressRegion: 'DKI Jakarta',
    postalCode: '12345',
    addressCountry: 'ID',
  },

  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '08:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],

  sameAs: [
    'https://www.instagram.com/doktersejukac',
    'https://www.facebook.com/doktersejukac',
    'https://wa.me/6285884011908',
  ],

  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '1280',
  },
};

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  serviceType: 'Service AC Jakarta Timur',

  provider: {
    '@type': 'HVACBusiness',
    name: 'Dokter Sejuk AC',
    telephone: '+62-858-8401-1908',
    url: siteUrl,
  },

  areaServed: {
    '@type': 'City',
    name: 'Jakarta Timur',
  },

  description: metaDescription,

  offers: {
    '@type': 'OfferCatalog',
    name: 'Layanan Service AC Jakarta Timur',

    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cuci AC 0,5–1 PK',
        },
        priceCurrency: 'IDR',
        price: '100000',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cuci AC 1,5–2 PK',
        },
        priceCurrency: 'IDR',
        price: '125000',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Jasa Pasang AC 0,5–1 PK',
        },
        priceCurrency: 'IDR',
        price: '375000',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bongkar Pasang AC 0,5–1 PK',
        },
        priceCurrency: 'IDR',
        price: '625000',
      },
    ],
  },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',

  mainEntity: [
    {
      '@type': 'Question',
      name: 'Apakah Dokter Sejuk AC melayani service AC di Jakarta Timur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya. Dokter Sejuk AC melayani service AC untuk rumah, apartemen, kantor, ruko, dan tempat usaha di wilayah Jakarta Timur dan sekitarnya.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apa saja layanan service AC yang tersedia di Jakarta Timur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cuci AC, isi dan tambah freon, perbaikan AC, AC tidak dingin, AC bocor, bongkar pasang, serta perawatan AC.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah tersedia layanan cuci AC di Jakarta Timur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya. Dokter Sejuk AC melayani cuci AC untuk berbagai kebutuhan di Jakarta Timur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah Dokter Sejuk menangani AC yang tidak dingin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya. Teknisi akan melakukan pengecekan terlebih dahulu untuk mengetahui penyebab AC tidak dingin sebelum menentukan tindakan perbaikan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah tersedia layanan isi atau tambah freon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya. Isi atau tambah freon tersedia setelah teknisi melakukan pengecekan kondisi sistem AC.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah service AC mendapatkan garansi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya. Layanan tertentu mendapatkan garansi 30 hari sesuai ketentuan layanan yang berlaku.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wilayah Jakarta Timur mana saja yang dilayani?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kami melayani Matraman, Jatinegara, Duren Sawit, Kramat Jati, Makasar, Pasar Rebo, Ciracas, Cipayung, Pulo Gadung, Cakung, dan area sekitarnya.',
      },
    },
  ],
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',

  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Beranda',
      item: siteUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Service AC Jakarta Timur',
      item: pageUrl,
    },
  ],
};

const jakartaTimurFaq = [
  {
    question:
      'Apakah Dokter Sejuk AC melayani service AC di Jakarta Timur?',
    answer:
      'Ya. Dokter Sejuk AC melayani service AC untuk rumah, apartemen, kantor, ruko, dan tempat usaha di wilayah Jakarta Timur dan sekitarnya.',
  },
  {
    question:
      'Apa saja layanan service AC yang tersedia di Jakarta Timur?',
    answer:
      'Kami melayani cuci AC, perbaikan AC, AC tidak dingin, AC bocor, isi freon, tambah freon, bongkar pasang AC, pemasangan AC, dan perawatan AC di Jakarta Timur.',
  },
  {
    question: 'Berapa harga cuci AC di Jakarta Timur?',
    answer:
      'Harga cuci AC menyesuaikan kapasitas dan jenis AC. Untuk harga terbaru, pelanggan dapat melihat daftar harga atau menghubungi Dokter Sejuk AC melalui WhatsApp untuk mendapatkan informasi sesuai kebutuhan.',
  },
  {
    question:
      'Apakah Dokter Sejuk menangani AC yang tidak dingin di Jakarta Timur?',
    answer:
      'Ya. Teknisi akan melakukan pemeriksaan terlebih dahulu untuk mengetahui penyebab AC tidak dingin, kemudian menjelaskan tindakan yang diperlukan sebelum pekerjaan dilakukan.',
  },
  {
    question:
      'Apakah tersedia layanan isi dan tambah freon di Jakarta Timur?',
    answer:
      'Ya. Layanan isi dan tambah freon tersedia di Jakarta Timur. Teknisi akan melakukan pengecekan kondisi sistem AC terlebih dahulu sebelum menentukan tindakan yang diperlukan.',
  },
  {
    question:
      'Apakah service AC di Jakarta Timur mendapatkan garansi?',
    answer:
      'Ya. Layanan tertentu mendapatkan garansi 30 hari sesuai ketentuan layanan yang berlaku.',
  },
  {
    question: 'Wilayah Jakarta Timur mana saja yang dilayani?',
    answer:
      'Kami melayani Matraman, Jatinegara, Duren Sawit, Kramat Jati, Makasar, Pasar Rebo, Ciracas, Cipayung, Pulo Gadung, Cakung, dan area sekitarnya.',
  },
];

export default function JakartaTimurPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLd),
        }}
      />

      <Header />

      <main>
        {/* HERO */}
        <JakartaTimurHero />

        {/* SAMA DENGAN BERANDA */}
        <Services />

        <WhyChooseUs />

        <Process />

        <PricingTable />

        <ServiceProcess />

        {/* BANNER SAMA DENGAN BERANDA */}
        <CtaBanner />

        <Gallery />

        <Testimonials />

        {/* FAQ - DESAIN MENGIKUTI BERANDA */}
        <section
          id="faq"
          className="relative overflow-hidden bg-gradient-to-br from-[#0756D9] via-[#1269E8] to-[#1688F5] py-14 sm:py-20 lg:py-24"
        >
          {/* Dekorasi garis */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            aria-hidden="true"
          >
            <div className="absolute -left-32 top-20 h-72 w-[700px] rotate-[8deg] rounded-[50%] border border-white/60" />

            <div className="absolute -right-40 bottom-10 h-72 w-[700px] -rotate-[8deg] rounded-[50%] border border-white/60" />
          </div>

          <div className="container-page relative z-10">
            {/* Heading */}
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-[8px] bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#0756D9] shadow-sm">
                FAQ Jakarta Timur
              </span>

              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Pertanyaan Seputar Service AC Jakarta Timur
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base lg:text-lg">
                Temukan jawaban mengenai layanan, harga, freon, garansi, dan
                wilayah service AC Dokter Sejuk AC di Jakarta Timur.
              </p>
            </div>

            {/* FAQ */}
            <div className="mx-auto mt-10 max-w-4xl space-y-4 sm:mt-12">
              {jakartaTimurFaq.map((item) => (
                <details
                  key={item.question}
                  className="group overflow-hidden rounded-[8px] border border-white/70 bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.35)] transition-all duration-300 hover:shadow-lg"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 sm:px-6 sm:py-6 [&::-webkit-details-marker]:hidden">
                    {/* Ikon FAQ */}
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-[#E8F2FF] text-[#0878E8]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-7 w-7"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                      </svg>
                    </span>

                    {/* Pertanyaan */}
                    <span className="flex-1 text-left text-sm font-bold leading-relaxed text-[#10233F] sm:text-base lg:text-lg">
                      {item.question}
                    </span>

                    {/* Arrow */}
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-[#E8F2FF] text-[#0878E8] transition-transform duration-300 group-open:rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </summary>

                  {/* Jawaban */}
                  <div className="border-t border-[#E5EDF7] px-5 pb-6 pt-4 sm:px-6">
                    <p className="pl-16 text-sm leading-7 text-[#64748B] sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>

            {/* SERVICE AC SEMUA MEREK - SATU KALI */}
            <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[8px] bg-white p-2 shadow-lg sm:mt-14 sm:p-3">
              <img
                src="/images/service-ac-semua-merk.png"
                alt="Service AC semua merek Dokter Sejuk AC"
                className="block h-auto w-full rounded-[6px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <FloatingContactBar />
    </>
  );
                }
