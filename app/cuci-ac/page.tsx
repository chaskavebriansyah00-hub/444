import type { Metadata } from 'next';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { FloatingContactBar } from '@/components/layout/floating-contact-bar';

import { CuciAcHero } from '@/components/home/cuci-ac-hero';
import { Services } from '@/components/home/services';
import { WhyChooseUs } from '@/components/home/why-choose-us';
import { Process } from '@/components/home/process';
import { PricingTable } from '@/components/pricing/pricing-table';
import { ServiceProcess } from '@/components/home/service-process';
import { CtaBanner } from '@/components/home/cta-banner';
import { Gallery } from '@/components/gallery/gallery';
import { Testimonials } from '@/components/home/testimonials';

const siteUrl = 'https://www.doktersejuk.com';
const pageUrl = `${siteUrl}/cuci-ac`;

const metaDescription =
  'Jasa cuci AC profesional untuk rumah, apartemen, kantor, ruko, dan tempat usaha. Dokter Sejuk AC melayani cuci AC 0,5–2 PK dengan teknisi berpengalaman, pengerjaan rapi, harga transparan, dan garansi 30 hari.';

export const metadata: Metadata = {
  title:
    'Jasa Cuci AC Profesional & Bergaransi | Cuci AC 0,5–2 PK | Dokter Sejuk AC',

  description: metaDescription,

  keywords: [
    'cuci AC',
    'jasa cuci AC',
    'service cuci AC',
    'cuci AC terdekat',
    'cuci AC rumah',
    'cuci AC kantor',
    'cuci AC apartemen',
    'cuci AC 0,5 PK',
    'cuci AC 1 PK',
    'cuci AC 1,5 PK',
    'cuci AC 2 PK',
    'harga cuci AC',
    'teknisi cuci AC',
    'Dokter Sejuk AC',
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
      'Jasa Cuci AC Profesional & Bergaransi | Cuci AC 0,5–2 PK | Dokter Sejuk AC',
    description: metaDescription,
    images: [
      {
        url: '/images/hero/technician-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Teknisi Dokter Sejuk AC sedang melakukan cuci AC',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Jasa Cuci AC Profesional & Bergaransi | Cuci AC 0,5–2 PK | Dokter Sejuk AC',
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
  name: 'Dokter Sejuk AC — Jasa Cuci AC',
  url: pageUrl,
  telephone: '+62-858-8401-1908',
  priceRange: '$$',

  description: metaDescription,

  areaServed: [
    {
      '@type': 'City',
      name: 'Jakarta',
    },
    {
      '@type': 'City',
      name: 'Bekasi',
    },
    {
      '@type': 'City',
      name: 'Depok',
    },
    {
      '@type': 'City',
      name: 'Bogor',
    },
    {
      '@type': 'City',
      name: 'Tangerang',
    },
  ],

  address: {
    '@type': 'PostalAddress',
    addressRegion: 'DKI Jakarta',
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
};

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  serviceType: 'Cuci AC',

  provider: {
    '@type': 'HVACBusiness',
    name: 'Dokter Sejuk AC',
    telephone: '+62-858-8401-1908',
    url: siteUrl,
  },

  areaServed: [
    {
      '@type': 'City',
      name: 'Jakarta',
    },
    {
      '@type': 'City',
      name: 'Bekasi',
    },
    {
      '@type': 'City',
      name: 'Depok',
    },
    {
      '@type': 'City',
      name: 'Bogor',
    },
    {
      '@type': 'City',
      name: 'Tangerang',
    },
  ],

  description: metaDescription,

  offers: {
    '@type': 'OfferCatalog',
    name: 'Harga Cuci AC',

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
    ],
  },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',

  mainEntity: [
    {
      '@type': 'Question',
      name: 'Apakah Dokter Sejuk melayani cuci AC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya. Dokter Sejuk AC melayani jasa cuci AC untuk rumah, apartemen, kantor, ruko, dan tempat usaha.',
      },
    },
    {
      '@type': 'Question',
      name: 'Berapa harga cuci AC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Harga cuci AC mulai dari Rp100.000 untuk AC 0,5–1 PK dan Rp125.000 untuk AC 1,5–2 PK.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah cuci AC termasuk membersihkan unit indoor dan outdoor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pengerjaan cuci AC dilakukan sesuai jenis layanan dan kondisi unit. Teknisi akan menjelaskan cakupan pekerjaan sebelum pengerjaan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Berapa lama proses cuci AC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Durasi cuci AC tergantung kondisi unit dan tingkat kotorannya. Teknisi akan melakukan pemeriksaan terlebih dahulu sebelum pengerjaan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah cuci AC mendapatkan garansi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya. Layanan tertentu mendapatkan garansi 30 hari sesuai ketentuan layanan yang berlaku.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah melayani cuci AC rumah dan kantor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya. Layanan cuci AC tersedia untuk rumah, apartemen, kantor, ruko, toko, dan tempat usaha.',
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
      name: 'Cuci AC',
      item: pageUrl,
    },
  ],
};

const faqItems = [
  {
    question: 'Apakah Dokter Sejuk melayani cuci AC?',
    answer:
      'Ya. Dokter Sejuk AC melayani jasa cuci AC untuk rumah, apartemen, kantor, ruko, dan tempat usaha.',
  },
  {
    question: 'Berapa harga cuci AC?',
    answer:
      'Harga cuci AC mulai dari Rp100.000 untuk AC 0,5–1 PK dan Rp125.000 untuk AC 1,5–2 PK.',
  },
  {
    question:
      'Apakah cuci AC termasuk membersihkan unit indoor dan outdoor?',
    answer:
      'Pengerjaan cuci AC dilakukan sesuai jenis layanan dan kondisi unit. Teknisi akan menjelaskan cakupan pekerjaan sebelum pengerjaan.',
  },
  {
    question: 'Berapa lama proses cuci AC?',
    answer:
      'Durasi cuci AC tergantung kondisi unit dan tingkat kotorannya. Teknisi akan melakukan pemeriksaan terlebih dahulu sebelum pengerjaan.',
  },
  {
    question: 'Apakah cuci AC mendapatkan garansi?',
    answer:
      'Ya. Layanan tertentu mendapatkan garansi 30 hari sesuai ketentuan layanan yang berlaku.',
  },
  {
    question: 'Apakah melayani cuci AC rumah dan kantor?',
    answer:
      'Ya. Layanan cuci AC tersedia untuk rumah, apartemen, kantor, ruko, toko, dan tempat usaha.',
  },
];

export default function CuciAcPage() {
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
        <CuciAcHero />

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
                Pertanyaan seputar cuci AC
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base lg:text-lg">
                Temukan jawaban mengenai harga, proses pengerjaan, garansi,
                dan berbagai kebutuhan cuci AC bersama Dokter Sejuk AC.
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
