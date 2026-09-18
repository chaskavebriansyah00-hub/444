import type { Metadata } from 'next';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { FloatingContactBar } from '@/components/layout/floating-contact-bar';

import { Services } from '@/components/home/services';
import { WhyChooseUs } from '@/components/home/why-choose-us';
import { Process } from '@/components/home/process';
import { PricingTable } from '@/components/pricing/pricing-table';
import { ServiceProcess } from '@/components/home/service-process';
import { CtaBanner } from '@/components/home/cta-banner';
import { Gallery } from '@/components/gallery/gallery';
import { Testimonials } from '@/components/home/testimonials';
import { AreaHero } from '@/components/home/area-hero';

const siteUrl = 'https://www.doktersejuk.com';
const pageUrl = `${siteUrl}/bogor`;

const metaDescription =
  'Jasa service AC Bogor profesional untuk rumah, apartemen, kantor, ruko, dan tempat usaha. Melayani cuci AC, perbaikan AC, isi dan tambah freon, bongkar pasang, serta perawatan AC dengan teknisi berpengalaman, harga transparan, dan garansi 30 hari.';

export const metadata: Metadata = {
  title:
    'Jasa Service AC Bogor Profesional & Bergaransi | Dokter Sejuk AC',

  description: metaDescription,

  keywords: [
    'service AC Bogor',
    'jasa service AC Bogor',
    'cuci AC Bogor',
    'isi freon Bogor',
    'bongkar pasang AC Bogor',
    'perbaikan AC Bogor',
    'teknisi AC Bogor',
    'Dokter Sejuk AC Bogor',
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
      'Jasa Service AC Bogor Profesional & Bergaransi | Dokter Sejuk AC',
    description: metaDescription,
    images: [
      {
        url: '/images/hero/technician-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Teknisi Dokter Sejuk AC sedang service unit AC di Bogor',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Jasa Service AC Bogor Profesional & Bergaransi | Dokter Sejuk AC',
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

  name: 'Dokter Sejuk AC — Service AC Bogor',
  url: pageUrl,
  telephone: '+62-858-8401-1908',
  priceRange: '$$',

  areaServed: {
    '@type': 'City',
    name: 'Bogor',
  },

  description: metaDescription,

  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bogor',
    addressRegion: 'Jawa Barat',
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

  serviceType: 'Service AC Bogor',

  provider: {
    '@type': 'HVACBusiness',
    name: 'Dokter Sejuk AC',
    telephone: '+62-858-8401-1908',
    url: siteUrl,
  },

  areaServed: {
    '@type': 'City',
    name: 'Bogor',
  },

  description: metaDescription,

  offers: {
    '@type': 'OfferCatalog',
    name: 'Layanan Service AC Bogor',

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
      name: 'Apakah Dokter Sejuk AC melayani service AC di Bogor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya. Dokter Sejuk AC melayani service AC untuk rumah, apartemen, kantor, ruko, dan tempat usaha di wilayah Bogor dan sekitarnya.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apa saja layanan service AC yang tersedia di Bogor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cuci AC, isi dan tambah freon, perbaikan AC, AC tidak dingin, AC bocor, bongkar pasang, serta perawatan AC.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah tersedia layanan cuci AC di Bogor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya. Dokter Sejuk AC melayani cuci AC untuk berbagai kebutuhan di Bogor.',
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
      name: 'Wilayah Bogor mana saja yang dilayani?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kami melayani Bogor Selatan, Bogor Timur, Bogor Utara, Bogor Barat, Bogor Tengah, Tanah Sareal, serta area Kabupaten Bogor dan sekitarnya.',
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
      name: 'Service AC Bogor',
      item: pageUrl,
    },
  ],
};

const faqItems = [
  {
    question: 'Apakah Dokter Sejuk AC melayani service AC di Bogor?',
    answer:
      'Ya. Dokter Sejuk AC melayani service AC untuk rumah, apartemen, kantor, ruko, dan tempat usaha di wilayah Bogor dan sekitarnya.',
  },
  {
    question: 'Apa saja layanan service AC yang tersedia di Bogor?',
    answer:
      'Cuci AC, isi dan tambah freon, perbaikan AC, AC tidak dingin, AC bocor, bongkar pasang, serta perawatan AC.',
  },
  {
    question: 'Apakah tersedia layanan cuci AC di Bogor?',
    answer:
      'Ya. Dokter Sejuk AC melayani cuci AC untuk berbagai kebutuhan di Bogor.',
  },
  {
    question: 'Apakah Dokter Sejuk menangani AC yang tidak dingin?',
    answer:
      'Ya. Teknisi akan melakukan pengecekan terlebih dahulu untuk mengetahui penyebab AC tidak dingin sebelum menentukan tindakan perbaikan.',
  },
  {
    question: 'Apakah tersedia layanan isi atau tambah freon?',
    answer:
      'Ya. Isi atau tambah freon tersedia setelah teknisi melakukan pengecekan kondisi sistem AC.',
  },
  {
    question: 'Apakah service AC mendapatkan garansi?',
    answer:
      'Ya. Layanan tertentu mendapatkan garansi 30 hari sesuai ketentuan layanan yang berlaku.',
  },
  {
    question: 'Wilayah Bogor mana saja yang dilayani?',
    answer:
      'Kami melayani Bogor Selatan, Bogor Timur, Bogor Utara, Bogor Barat, Bogor Tengah, Tanah Sareal, serta area Kabupaten Bogor dan sekitarnya.',
  },
];

export default function BogorPage() {
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
        <AreaHero
          city="Bogor"
          description="Jasa service AC Bogor profesional untuk rumah, apartemen, kantor, ruko, dan tempat usaha. Dokter Sejuk AC melayani cuci AC, perbaikan AC, isi dan tambah freon, bongkar pasang, serta perawatan AC dengan teknisi berpengalaman, harga transparan, dan pengerjaan rapi."
        />

        <Services />
        <WhyChooseUs />
        <Process />
        <PricingTable />
        <ServiceProcess />

        <CtaBanner />

        <Gallery />
        <Testimonials />

        {/* FAQ */}
        <section
          id="faq"
          className="relative overflow-hidden bg-gradient-to-br from-[#0756D9] via-[#1269E8] to-[#1688F5] py-14 sm:py-20 lg:py-24"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            aria-hidden="true"
          >
            <div className="absolute -left-32 top-20 h-72 w-[700px] rotate-[8deg] rounded-[50%] border border-white/60" />
            <div className="absolute -right-40 bottom-10 h-72 w-[700px] -rotate-[8deg] rounded-[50%] border border-white/60" />
          </div>

          <div className="container-page relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-[8px] bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#0756D9] shadow-sm">
                Sering Ditanyakan
              </span>

              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Pertanyaan seputar service AC Bogor
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base lg:text-lg">
                Temukan jawaban mengenai layanan, proses pengerjaan, garansi,
                pembayaran, dan berbagai kebutuhan service AC bersama Dokter
                Sejuk AC di Bogor.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-4xl space-y-4 sm:mt-12">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group overflow-hidden rounded-[8px] border border-white/70 bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.35)] transition-all duration-300 hover:shadow-lg"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 sm:px-6 sm:py-6 [&::-webkit-details-marker]:hidden">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-[#E8F2FF] text-[#0878E8]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        aria-hidden="true"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M9.75 9.25C9.95 7.95 10.85 7.25 12.15 7.25C13.55 7.25 14.5 8.05 14.5 9.3C14.5 10.45 13.75 11.05 12.7 11.7C11.7 12.3 11.35 12.8 11.35 13.65V14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="11.35"
                          cy="17"
                          r="1"
                          fill="currentColor"
                        />
                      </svg>
                    </span>

                    <span className="flex-1 text-left text-sm font-bold leading-relaxed text-[#10233F] sm:text-base lg:text-lg">
                      {item.question}
                    </span>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-[#E8F2FF] text-[#0878E8] transition-transform duration-300 group-open:rotate-180">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="border-t border-[#E5EDF7] px-5 pb-6 pt-4 sm:px-6">
                    <p className="pl-16 text-sm leading-7 text-[#64748B] sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>

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
