'use client';

import * as React from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  ChevronDown,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import {
  serviceAreas,
  siteConfig,
} from '@/lib/site-config';
import { cn } from '@/lib/utils';

interface HeaderProps {
  homepage?: boolean;
}

export function Header({
  homepage = false,
}: HeaderProps) {
  const [scrolled, setScrolled] =
    React.useState(false);

  const [open, setOpen] =
    React.useState(false);

  const [servicesOpen, setServicesOpen] =
    React.useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(
    scrollY,
    'change',
    (latest) => {
      setScrolled(latest > 24);
    }
  );

  React.useEffect(() => {
    document.body.style.overflow = open
      ? 'hidden'
      : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* =========================================================
          HEADER — FULL WIDTH
      ========================================================= */}

      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          fixed
          inset-x-0
          top-0
          z-50
          w-full
        "
      >
        <div className="w-full">
          <div
            className={cn(
              `
                flex
                w-full
                items-center
                justify-between
                gap-2
                overflow-hidden
                border-b
                border-white/10
                px-3
                py-2.5
                sm:px-5
                sm:py-3
              `,
              `
                rounded-none
                bg-gradient-to-r
                from-[#030403]
                via-[#0d120f]
                to-[#030403]
              `,
              `
                shadow-[0_8px_30px_rgba(0,0,0,0.65)]
                backdrop-blur-xl
              `,
              scrolled
                ? `
                  border-white/15
                  shadow-[0_10px_35px_rgba(0,0,0,0.8)]
                `
                : `
                  border-white/10
                `
            )}
          >
            {/* =====================================================
                LOGO + NAMA
            ===================================================== */}

            <Link
              href="#beranda"
              className="
                flex
                min-w-0
                flex-1
                items-center
              "
              aria-label="
                Sabit Jaya Service — beranda
              "
            >
              <div
                className="
                  flex
                  min-w-0
                  items-center
                  gap-2
                  sm:gap-3
                "
              >
                <img
                  src="/logo-dokter-sejuk-ac-transparent.png"
                  alt="Sabit Jaya Service"
                  className="
                    h-9
                    w-auto
                    flex-shrink-0
                    object-contain
                    sm:h-12
                  "
                />

                {/* NAMA — BIRU & LEBIH BESAR */}
                <span
                  className="
                    min-w-0
                    whitespace-nowrap
                    font-sans
                    text-[18px]
                    font-extrabold
                    leading-none
                    tracking-[-0.5px]
                    text-[#2563EB]
                    drop-shadow-[0_0_10px_rgba(37,99,235,0.25)]
                    sm:text-2xl
                    md:text-3xl
                  "
                >
                  SABIT JAYA{' '}
                  <span className="text-[#60A5FA]">
                    SERVICE
                  </span>
                </span>
              </div>
            </Link>

            {/* =====================================================
                WHATSAPP + HAMBURGER
            ===================================================== */}

            <div
              className="
                flex
                flex-shrink-0
                items-center
                gap-1.5
                sm:gap-2
              "
            >
              {/* ===================================================
                  WHATSAPP HEADER — BIRU
              =================================================== */}

              <motion.a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="
                  Hubungi Sabit Jaya Service
                  melalui WhatsApp
                "
                whileTap={{
                  scale: 0.95,
                }}
                animate={{
                  boxShadow: [
                    '0 4px 14px rgba(37,99,235,0.25)',
                    '0 5px 24px rgba(59,130,246,0.55)',
                    '0 4px 14px rgba(37,99,235,0.25)',
                  ],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  flex
                  h-10
                  min-w-[94px]
                  flex-shrink-0
                  items-center
                  justify-center
                  gap-1.5
                  rounded-[7px]
                  bg-gradient-to-r
                  from-[#1D4ED8]
                  via-[#2563EB]
                  to-[#3B82F6]
                  px-2.5
                  text-white
                  transition-all
                  duration-200
                  hover:from-[#1E40AF]
                  hover:via-[#2563EB]
                  hover:to-[#60A5FA]
                  hover:shadow-lg
                  active:scale-95
                  sm:h-11
                  sm:min-w-[120px]
                  sm:gap-2
                  sm:px-4
                "
              >
                <FaWhatsapp
                  className="
                    h-[18px]
                    w-[18px]
                    flex-shrink-0
                    sm:h-5
                    sm:w-5
                  "
                />

                <span
                  className="
                    whitespace-nowrap
                    text-[11px]
                    font-bold
                    sm:text-sm
                  "
                >
                  WhatsApp
                </span>
              </motion.a>

              {/* ===================================================
                  HAMBURGER
              =================================================== */}

              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Buka menu navigasi"
                aria-expanded={open}
                className="
                  flex
                  h-10
                  w-10
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-[7px]
                  border
                  border-white/15
                  bg-white/[0.04]
                  text-white
                  transition-all
                  duration-200
                  hover:border-[#2563EB]/50
                  hover:bg-[#2563EB]/10
                  hover:text-[#60A5FA]
                  active:scale-95
                  sm:h-11
                  sm:w-11
                "
              >
                <Menu
                  className="
                    h-5
                    w-5
                    sm:h-6
                    sm:w-6
                  "
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* =========================================================
          MENU SAMPING
      ========================================================= */}

      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={closeMenu}
              className="
                fixed
                inset-0
                z-[60]
                bg-black/75
                backdrop-blur-sm
              "
            />

            {/* DRAWER */}

            <motion.aside
              initial={{
                x: '100%',
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: '100%',
              }}
              transition={{
                type: 'spring',
                stiffness: 320,
                damping: 34,
              }}
              className="
                fixed
                inset-y-0
                right-0
                z-[70]
                flex
                h-full
                w-[300px]
                flex-col
                border-l
                border-white/10
                bg-gradient-to-b
                from-[#0b0d0c]
                via-[#050505]
                to-[#000000]
                shadow-2xl
                sm:w-[360px]
              "
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigasi"
            >
              {/* DRAWER HEADER */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  px-6
                  py-5
                "
              >
                <span
                  className="
                    font-sans
                    text-xl
                    font-extrabold
                    tracking-tight
                    text-[#2563EB]
                  "
                >
                  SABIT JAYA{' '}
                  <span className="text-[#60A5FA]">
                    SERVICE
                  </span>
                </span>

                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Tutup menu"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-[7px]
                    border
                    border-white/15
                    text-white/70
                    transition-colors
                    hover:border-[#2563EB]/40
                    hover:bg-[#2563EB]/10
                    hover:text-[#60A5FA]
                  "
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* NAVIGASI */}

              <nav
                className="
                  flex
                  flex-1
                  flex-col
                  gap-1
                  overflow-y-auto
                  px-4
                  py-6
                "
                aria-label="Navigasi utama"
              >
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-[7px]
                    px-4
                    py-3.5
                    text-base
                    font-medium
                    text-white
                    transition-colors
                    hover:bg-[#2563EB]/10
                    hover:text-[#60A5FA]
                  "
                >
                  <span>Beranda</span>

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-[2px]
                      bg-white/25
                    "
                  />
                </Link>

                {/* LAYANAN */}

                <div>
                  <button
                    type="button"
                    onClick={() =>
                      setServicesOpen(
                        !servicesOpen
                      )
                    }
                    aria-expanded={
                      servicesOpen
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-[7px]
                      px-4
                      py-3.5
                      text-left
                      text-base
                      font-medium
                      text-white
                      transition-colors
                      hover:bg-[#2563EB]/10
                      hover:text-[#60A5FA]
                    "
                  >
                    <span>Layanan</span>

                    <ChevronDown
                      className={cn(
                        `
                          h-5
                          w-5
                          transition-transform
                          duration-200
                        `,
                        servicesOpen
                          ? `
                            rotate-180
                            text-[#60A5FA]
                          `
                          : `
                            text-white/50
                          `
                      )}
                    />
                  </button>

                  <AnimatePresence
                    initial={false}
                  >
                    {servicesOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="overflow-hidden"
                      >
                        <div
                          className="
                            ml-3
                            border-l-2
                            border-[#2563EB]/30
                            pl-3
                          "
                        >
                          {serviceAreas.map(
                            (region) => (
                              <div
                                key={
                                  region.region
                                }
                                className="py-2"
                              >
                                <div
                                  className="
                                    px-3
                                    pb-1
                                    pt-1
                                    text-sm
                                    font-bold
                                    text-[#60A5FA]
                                  "
                                >
                                  {
                                    region.region
                                  }
                                </div>

                                {region.areas.map(
                                  (area) => (
                                    <Link
                                      key={
                                        area.href
                                      }
                                      href={
                                        area.href
                                      }
                                      onClick={
                                        closeMenu
                                      }
                                      className="
                                        block
                                        rounded-[7px]
                                        px-3
                                        py-2.5
                                        text-sm
                                        leading-snug
                                        text-white/75
                                        transition-colors
                                        hover:bg-[#2563EB]/10
                                        hover:text-white
                                      "
                                    >
                                      {
                                        area.label
                                      }
                                    </Link>
                                  )
                                )}
                              </div>
                            )
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* DAFTAR HARGA */}

                <Link
                  href="#harga"
                  onClick={closeMenu}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-[7px]
                    px-4
                    py-3.5
                    text-base
                    font-medium
                    text-white
                    transition-colors
                    hover:bg-[#2563EB]/10
                    hover:text-[#60A5FA]
                  "
                >
                  <span>Daftar Harga</span>

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-[2px]
                      bg-white/25
                    "
                  />
                </Link>

                {/* GALERI */}

                <Link
                  href="#galeri"
                  onClick={closeMenu}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-[7px]
                    px-4
                    py-3.5
                    text-base
                    font-medium
                    text-white
                    transition-colors
                    hover:bg-[#2563EB]/10
                    hover:text-[#60A5FA]
                  "
                >
                  <span>
                    Galeri Pengerjaan
                  </span>

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-[2px]
                      bg-white/25
                    "
                  />
                </Link>
              </nav>

              {/* HUBUNGI CEPAT */}

              <div
                className="
                  border-t
                  border-white/10
                  px-4
                  py-5
                "
              >
                <p
                  className="
                    px-2
                    text-xs
                    font-medium
                    uppercase
                    tracking-wide
                    text-white/50
                  "
                >
                  Hubungi cepat
                </p>

                <div
                  className="
                    mt-3
                    grid
                    grid-cols-2
                    gap-2
                  "
                >
                  {/* TELEPON */}

                  <a
                    href={siteConfig.phoneHref}
                    onClick={closeMenu}
                    className="
                      flex
                      items-center
                      justify-center
                      gap-1.5
                      rounded-[7px]
                      bg-gradient-to-r
                      from-[#1D4ED8]
                      via-[#2563EB]
                      to-[#3B82F6]
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      shadow-[0_5px_15px_rgba(37,99,235,0.3)]
                      transition-transform
                      active:scale-95
                    "
                  >
                    <Phone className="h-4 w-4" />
                    Telepon
                  </a>

                  {/* WHATSAPP */}

                  <a
                    href={
                      siteConfig.whatsappHref
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="
                      flex
                      items-center
                      justify-center
                      gap-1.5
                      rounded-[7px]
                      bg-gradient-to-r
                      from-[#1D4ED8]
                      via-[#2563EB]
                      to-[#3B82F6]
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      shadow-[0_5px_15px_rgba(37,99,235,0.3)]
                      transition-transform
                      active:scale-95
                    "
                  >
                    <FaWhatsapp className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
                }
