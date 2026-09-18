export const siteConfig = {
  name: 'Sabit Jaya Service',
  shortName: 'Sabit Jaya Service',
  tagline: 'Jasa Service AC Profesional & Bergaransi',
  description:
    'Teknisi berpengalaman, harga transparan, dan garansi resmi untuk cuci AC, isi freon, perbaikan, serta bongkar-pasang se-Indonesia.',
  url: 'https://sabitjayaservice.com',
  phone: '085884011908',
  phoneDisplay: '0858-8401-1908',
  phoneHref: 'tel:085884011908',
  whatsappHref: 'https://wa.me/6285884011908',
  whatsappText:
    'Halo Sabit Jaya Service, saya ingin konsultasi mengenai layanan service AC.',
  email: 'halo@sabitjayaservice.com',
  emailHref: 'mailto:halo@sabitjayaservice.com',

  address: {
    line1: 'Jl. Sejuk Makmur No. 88',
    city: 'Jakarta Selatan',
    region: 'DKI Jakarta',
    postalCode: '12345',
    country: 'Indonesia',
  },

  hours: [
    { day: 'Senin – Jumat', time: '08.00 – 20.00' },
    { day: 'Sabtu – Minggu', time: '09.00 – 17.00' },
  ],

  social: {
    instagram: 'https://www.instagram.com/sabitjayaservice',
    facebook: 'https://www.facebook.com/sabitjayaservice',
    tiktok: 'https://www.tiktok.com/@sabitjayaservice',
  },

  rating: 4.9,
  reviewCount: 1280,
  unitsServiced: '25.000+',
  yearsExperience: 12,
  responseTime: '30 menit',
  warrantyDays: 90,
} as const;

/**
 * Menu utama website
 */
export const navLinks = [
  {
    label: 'Layanan',
    href: '#layanan',
  },
  {
    label: 'Daftar Harga',
    href: '#harga',
  },
  {
    label: 'Tentang Kami',
    href: '#tentang-kami',
  },
] as const;

/**
 * Area layanan
 */
export const serviceAreas = [
  {
    region: 'DKI Jakarta',
    areas: [
      {
        label: 'Service AC Jakarta Selatan',
        href: '/jakarta-selatan',
      },
      {
        label: 'Service AC Jakarta Timur',
        href: '/jakarta-timur',
      },
      {
        label: 'Service AC Jakarta Barat',
        href: '/jakarta-barat',
      },
      {
        label: 'Service AC Jakarta Utara',
        href: '/jakarta-utara',
      },
      {
        label: 'Service AC Jakarta Pusat',
        href: '/jakarta-pusat',
      },
    ],
  },

  {
    region: 'Banten',
    areas: [
      {
        label: 'Service AC Tangerang Selatan',
        href: '/tangerang-selatan',
      },
      {
        label: 'Service AC Kota Tangerang',
        href: '/kota-tangerang',
      },
      {
        label: 'Service AC Kabupaten Tangerang',
        href: '/kabupaten-tangerang',
      },
    ],
  },

  {
    region: 'Jawa Barat',
    areas: [
      {
        label: 'Service AC Bekasi',
        href: '/bekasi',
      },
      {
        label: 'Service AC Depok',
        href: '/depok',
      },
      {
        label: 'Service AC Bogor',
        href: '/bogor',
      },
    ],
  },
] as const;
