import Link from 'next/link';
import {
  MapPin,
  Headphones,
  Phone,
  Mail,
  Wrench,
  FileText,
  ChevronRight,
} from 'lucide-react';

import { siteConfig } from '@/lib/site-config';

const areaJakarta = [
  { label: 'Service AC Jakarta Selatan', href: '/jakarta-selatan' },
  { label: 'Service AC Jakarta Timur', href: '/jakarta-timur' },
  { label: 'Service AC Jakarta Barat', href: '/jakarta-barat' },
  { label: 'Service AC Jakarta Utara', href: '/jakarta-utara' },
  { label: 'Service AC Jakarta Pusat', href: '/jakarta-pusat' },
];

const areaBanten = [
  { label: 'Service AC Tangerang Selatan', href: '/tangerang-selatan' },
  { label: 'Service AC Kota Tangerang', href: '/kota-tangerang' },
  {
    label: 'Service AC Kabupaten Tangerang',
    href: '/kabupaten-tangerang',
  },
];

const areaJawaBarat = [
  { label: 'Service AC Bekasi', href: '/bekasi' },
  { label: 'Service AC Depok', href: '/depok' },
  { label: 'Service AC Bogor', href: '/bogor' },
];

const layananUtama = [
  { label: 'CUCI AC', href: '/cuci-ac' },
  { label: 'INSTALASI AC', href: '/instalasi-ac' },
];

function AreaLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-1.5 text-[13px] leading-6 text-slate-300 transition-colors duration-200 hover:text-[hsl(211_100%_65%)] sm:text-sm"
      >
        <ChevronRight
          size={14}
          strokeWidth={2}
          className="shrink-0 text-blue-400 transition-transform duration-200 group-hover:translate-x-0.5"
        />

        <span>{label}</span>
      </Link>
    </li>
  );
}

function SectionTitle({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex shrink-0 text-[hsl(211_100%_60%)]">
        {icon}
      </span>

      <h3 className="font-display text-[15px] font-bold uppercase tracking-wide text-white sm:text-base">
        {children}
      </h3>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-[#0f1b2d]">
      <div className="container-page px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
        {/* =========================================================
            BRAND
        ========================================================= */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-[23px] font-bold tracking-tight text-white sm:text-2xl">
            Sabit{' '}
            <span className="text-[hsl(211_100%_60%)]">Jaya</span>{' '}
            <span className="text-slate-300">Service</span>
          </p>

          <p className="mx-auto mt-3 max-w-xl text-[13px] leading-6 text-slate-400 sm:text-sm">
            Melayani kebutuhan service AC dengan teknisi profesional, harga
            transparan, dan garansi. Pilih area layanan Anda di bawah untuk
            melihat layanan AC yang tersedia di wilayah Anda.
          </p>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-6 h-px max-w-5xl bg-white/10" />

        {/* =========================================================
            AREA LAYANAN
        ========================================================= */}
        <section className="mt-6">
          <h2 className="text-center font-display text-base font-bold uppercase tracking-wider text-[hsl(211_100%_60%)] sm:text-lg">
            Area Layanan
          </h2>

          {/* DKI Jakarta + Banten */}
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-2 gap-x-5 gap-y-7 sm:gap-x-10 lg:gap-x-16">
            {/* DKI Jakarta */}
            <div className="min-w-0">
              <SectionTitle
                icon={<MapPin size={22} strokeWidth={2.2} />}
              >
                DKI Jakarta
              </SectionTitle>

              <ul className="mt-3 space-y-1">
                {areaJakarta.map((area) => (
                  <AreaLink key={area.label} {...area} />
                ))}
              </ul>
            </div>

            {/* Banten */}
            <div className="min-w-0">
              <SectionTitle
                icon={<MapPin size={22} strokeWidth={2.2} />}
              >
                Banten
              </SectionTitle>

              <ul className="mt-3 space-y-1">
                {areaBanten.map((area) => (
                  <AreaLink key={area.label} {...area} />
                ))}
              </ul>
            </div>

            {/* Jawa Barat */}
            <div className="min-w-0">
              <SectionTitle
                icon={<MapPin size={22} strokeWidth={2.2} />}
              >
                Jawa Barat
              </SectionTitle>

              <ul className="mt-3 space-y-1">
                {areaJawaBarat.map((area) => (
                  <AreaLink key={area.label} {...area} />
                ))}
              </ul>
            </div>

            {/* Layanan AC */}
            <div className="min-w-0">
              <SectionTitle
                icon={<Wrench size={22} strokeWidth={2.2} />}
              >
                Layanan AC
              </SectionTitle>

              <ul className="mt-3 space-y-1">
                {layananUtama.map((layanan) => (
                  <AreaLink key={layanan.label} {...layanan} />
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================
            KETENTUAN GARANSI
        ========================================================= */}
        <div className="mx-auto mt-7 max-w-5xl border-y border-white/10 py-4">
          <Link
            href="/garansi"
            className="group flex items-center justify-center gap-2.5 text-[hsl(211_100%_60%)] transition-colors duration-200 hover:text-white"
          >
            <FileText
              size={21}
              strokeWidth={2.1}
              className="shrink-0"
            />

            <span className="font-display text-sm font-bold uppercase tracking-wide sm:text-base">
              Ketentuan Garansi
            </span>

            <ChevronRight
              size={17}
              strokeWidth={2.2}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* =========================================================
            HUBUNGI KAMI
        ========================================================= */}
        <section className="mx-auto mt-6 max-w-5xl">
          <SectionTitle
            icon={<Headphones size={22} strokeWidth={2.2} />}
          >
            Hubungi Kami
          </SectionTitle>

          <div className="mt-5 grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
            {/* Telepon */}
            <div className="flex min-w-0 gap-2.5 sm:gap-3">
              <Phone
                size={22}
                strokeWidth={2.2}
                className="mt-0.5 shrink-0 text-[hsl(211_100%_60%)]"
              />

              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-[hsl(211_100%_60%)] sm:text-xs">
                  Telepon
                </p>

                <a
                  href={siteConfig.phoneHref}
                  className="mt-1 block text-[11px] leading-5 text-slate-300 transition-colors duration-200 hover:text-white sm:text-sm"
                >
                  0857 7333 4303
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex min-w-0 gap-2.5 sm:gap-3">
              <Mail
                size={22}
                strokeWidth={2.2}
                className="mt-0.5 shrink-0 text-[hsl(211_100%_60%)]"
              />

              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-[hsl(211_100%_60%)] sm:text-xs">
                  Email
                </p>

                <a
                  href={siteConfig.emailHref}
                  className="mt-1 block break-all text-[11px] leading-5 text-slate-300 transition-colors duration-200 hover:text-white sm:text-sm"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Alamat */}
            <div className="flex min-w-0 gap-2.5 sm:gap-3">
              <MapPin
                size={22}
                strokeWidth={2.2}
                className="mt-0.5 shrink-0 text-[hsl(211_100%_60%)]"
              />

              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-[hsl(211_100%_60%)] sm:text-xs">
                  Alamat
                </p>

                <p className="mt-1 text-[11px] leading-5 text-slate-400 sm:text-sm">
                  Jl. Boulevard Raya Gading Serpong, Kelapa Dua, Kecamatan
                  Kelapa Dua, Kabupaten Tangerang, Banten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto mt-6 h-px max-w-5xl bg-white/10" />

        {/* =========================================================
            COPYRIGHT
        ========================================================= */}
        <div className="mt-5 text-center">
          <p className="text-[11px] text-slate-500 sm:text-xs">
            &copy; 2026 Sabit Jaya Service. Semua Hak Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
