import Script from 'next/script';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/layout/theme-provider';

const sans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Inter({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const siteUrl = 'https://www.doktersejuk.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Jasa Service AC Terdekat | Profesional & Bergaransi',
    template: '%s | Sabit Jaya Service',
  },

  description:
    'Sabit Jaya Service adalah jasa service AC profesional di Indonesia. Cuci AC, isi freon, perbaikan, bongkar-pasang, dan perawatan berkala dengan teknisi profesional, harga transparan, dan garansi 30 hari.',

  keywords: [
    'jasa service AC terdekat',
    'service AC terdekat',
    'service AC Jakarta',
    'cuci AC',
    'isi freon',
    'perbaikan AC',
    'bongkar pasang AC',
    'Sabit Jaya Service',
    'teknisi AC profesional',
    'maintenance AC',
  ],

  authors: [{ name: 'Sabit Jaya Service' }],
  creator: 'Sabit Jaya Service',
  publisher: 'Sabit Jaya Service',

  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteUrl,
    siteName: 'Sabit Jaya Service',
    title: 'Jasa Service AC Terdekat | Profesional & Bergaransi',
    description:
      'Sabit Jaya Service menyediakan jasa service AC profesional dengan teknisi berpengalaman, harga transparan, dan garansi 30 hari.',
    images: [
      {
        url: '/logo-dokter-sejuk-ac-transparent.png',
        width: 512,
        height: 512,
        alt: 'Sabit Jaya Service',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Jasa Service AC Terdekat | Profesional & Bergaransi',
    description:
      'Sabit Jaya Service menyediakan jasa service AC profesional dengan teknisi berpengalaman, harga transparan, dan garansi 30 hari.',
    images: ['/logo-dokter-sejuk-ac-transparent.png'],
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

  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },

  themeColor: '#ffffff',
  category: 'Home Services',
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  '@id': `${siteUrl}/#organization`,
  name: 'Sabit Jaya Service',
  alternateName: 'SJS',
  url: siteUrl,
  logo: `${siteUrl}/logo-dokter-sejuk-ac-transparent.png`,
  image: `${siteUrl}/logo-dokter-sejuk-ac-transparent.png`,
  telephone: '+62-858-8401-1908',
  priceRange: '$$',

  areaServed: {
    '@type': 'Country',
    name: 'Indonesia',
  },

  description:
    'Jasa service AC profesional: cuci AC, isi freon, perbaikan, bongkar-pasang, dan perawatan berkala dengan teknisi profesional, harga transparan, dan garansi 30 hari.',

  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Boulevard Raya Gading Serpong, Kelapa Dua',
    addressLocality: 'Kelapa Dua',
    addressRegion: 'Banten',
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
    'https://www.instagram.com/sabitjayaservice',
    'https://www.facebook.com/sabitjayaservice',
    'https://wa.me/6285884011908',
  ],

  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '1280',
  },
};

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: 'Sabit Jaya Service',
  alternateName: 'SJS',
  publisher: {
    '@id': `${siteUrl}/#organization`,
  },
};

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Layanan Sabit Jaya Service',
  itemListElement: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Cuci AC',
      },
      priceCurrency: 'IDR',
      price: '75000',
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Isi Freon',
      },
      priceCurrency: 'IDR',
      price: '150000',
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Bongkar & Pasang AC',
      },
      priceCurrency: 'IDR',
      price: '450000',
    },
  ],
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Apakah teknisi Sabit Jaya Service bersertifikat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teknisi kami profesional dan berpengalaman menangani berbagai merek dan tipe AC, dari split, cassette, hingga central AC.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah ada garansi setelah service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya. Setiap layanan Sabit Jaya Service diberikan garansi selama 30 hari. Jika terjadi masalah yang tercakup dalam garansi, kami siap melakukan pemeriksaan dan perbaikan sesuai ketentuan garansi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Berapa lama waktu pengerjaan service AC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cuci AC umumnya 45–60 menit per unit. Perbaikan ringan sekitar 1–2 jam, sedangkan bongkar-pasang sekitar 2–3 jam tergantung kondisi lokasi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah bisa on-call di hari yang sama?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bisa. Untuk area Jabodetabek kami menyediakan layanan same-day dengan slot terbatas. Hubungi kami untuk mengecek ketersediaan jadwal.',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18355890066"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18355890066');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationLd),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteLd),
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
      </head>

      <body className={`${sans.variable} ${display.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
