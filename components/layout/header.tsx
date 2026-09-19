'use client';

import * as React from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { serviceAreas, siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

interface HeaderProps {
  homepage?: boolean;
}

export function Header({ homepage = false }: HeaderProps) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24);
  });

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

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
          HEADER
      ========================================================= */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="w-full px-2 sm:px-4">
          <div
            className={cn(
              'mx-auto mt-2 flex max-w-7xl items-center justify-between',
              'gap-2 border border-gray-200 bg-white',
              'px-3 py-2.5 sm:mt-3 sm:px-5 sm:py-3',
              'rounded-[8px]',
              'transition-all duration-300',
              scrolled
                ? 'shadow-lg'
                : 'shadow-md'
            )}
          >
            {/* =====================================================
                LOGO + NAMA SABIT JAYA SERVICE
            ===================================================== */}
            <Link
              href="#beranda"
              className="flex min-w-0 flex-1 items-center"
              aria-label="Sabit Jaya Service — beranda"
            >
              <div className="flex min-w-0 items-center gap-2 sm:gap-2.5">
                <img
                  src="/logo-dokter-sejuk-ac-transparent.png"
                  alt="Sabit Jaya Service"
                  className="
                    h-9
                    w-auto
                    flex-shrink-0
                    object-contain
                    sm:h-11
                  "
                />

                <span
                  className="
                    whitespace-nowrap
                    font-sans
                    text-[14px]
                    font-extrabold
                    tracking-[-0.35px]
                    text-[#1677E8]
                    sm:text-lg
                    md:text-xl
                  "
                >
                  SABIT JAYA SERVICE
                </span>
              </div>
            </Link>

            {/* =====================================================
                WHATSAPP + HAMBURGER
            ===================================================== */}
            <div className="flex flex-shrink-0 items-center gap-2">
              {/* WhatsApp */}
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hubungi Sabit Jaya Service melalui WhatsApp"
                className="
                  flex
                  h-10
                  items-center
                  justify-center
                  gap-1.5
                  rounded-[7px]
                  bg-gradient-to-r
                  from-[#1677E8]
                  via-[#079FCF]
                  to-[#16B86A]
                  px-3
                  text-white
                  shadow-md
                  transition-all
                  duration-200
                  hover:shadow-lg
                  active:scale-95
                  sm:h-11
                  sm:gap-2
                  sm:px-4
                "
              >
                <FaWhatsapp className="h-5 w-5" />

                <span className="hidden text-sm font-bold sm:inline">
                  WhatsApp
                </span>
              </a>

              {/* Hamburger */}
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
                  border-gray-200
                  bg-white
                  text-[#1677E8]
                  transition-all
                  duration-200
                  hover:border-[#1677E8]/40
                  hover:bg-[#1677E8]/5
                  hover:text-[#1677E8]
                  active:scale-95
                  sm:h-11
                  sm:w-11
                "
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
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
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              className="
                fixed
                inset-0
                z-[60]
                bg-black/40
                backdrop-blur-sm
              "
            />

            {/* ===================================================
                DRAWER
            =================================================== */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
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
                bg-white
                shadow-2xl
                sm:w-[360px]
              "
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigasi"
            >
              {/* =================================================
                  DRAWER HEADER
              ================================================= */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-gray-200
                  px-6
                  py-5
                "
              >
                <span
                  className="
                    font-sans
                    text-lg
                    font-extrabold
                    tracking-tight
                    text-[#1677E8]
                  "
                >
                  SABIT JAYA SERVICE
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
                    border-gray-200
                    text-gray-600
                    transition-colors
                    hover:border-[#1677E8]/30
                    hover:bg-[#1677E8]/5
                    hover:text-[#1677E8]
                  "
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* =================================================
                  NAVIGASI
              ================================================= */}
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
                {/* Beranda */}
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
                    text-gray-800
                    transition-colors
                    hover:bg-[#1677E8]/5
                    hover:text-[#1677E8]
                  "
                >
                  <span>Beranda</span>

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-[2px]
                      bg-gray-300
                    "
                  />
                </Link>

                {/* =================================================
                    LAYANAN
                ================================================= */}
                <div>
                  <button
                    type="button"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
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
                      text-gray-800
                      transition-colors
                      hover:bg-[#1677E8]/5
                      hover:text-[#1677E8]
                    "
                  >
                    <span>Layanan</span>

                    <ChevronDown
                      className={cn(
                        'h-5 w-5 transition-transform duration-200',
                        servicesOpen
                          ? 'rotate-180 text-[#1677E8]'
                          : 'text-gray-500'
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
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
                            border-[#1677E8]/15
                            pl-3
                          "
                        >
                          {serviceAreas.map((region) => (
                            <div
                              key={region.region}
                              className="py-2"
                            >
                              <div
                                className="
                                  px-3
                                  pb-1
                                  pt-1
                                  text-sm
                                  font-bold
                                  text-[#1677E8]
                                "
                              >
                                {region.region}
                              </div>

                              {region.areas.map((area) => (
                                <Link
                                  key={area.href}
                                  href={area.href}
                                  onClick={closeMenu}
                                  className="
                                    block
                                    rounded-[7px]
                                    px-3
                                    py-2.5
                                    text-sm
                                    leading-snug
                                    text-gray-700
                                    transition-colors
                                    hover:bg-[#1677E8]/5
                                    hover:text-[#1677E8]
                                  "
                                >
                                  {area.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Daftar Harga */}
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
                    text-gray-800
                    transition-colors
                    hover:bg-[#1677E8]/5
                    hover:text-[#1677E8]
                  "
                >
                  <span>Daftar Harga</span>

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-[2px]
                      bg-gray-300
                    "
                  />
                </Link>

                {/* Galeri Pengerjaan */}
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
                    text-gray-800
                    transition-colors
                    hover:bg-[#1677E8]/5
                    hover:text-[#1677E8]
                  "
                >
                  <span>Galeri Pengerjaan</span>

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-[2px]
                      bg-gray-300
                    "
                  />
                </Link>
              </nav>

              {/* =================================================
                  HUBUNGI CEPAT
              ================================================= */}
              <div
                className="
                  border-t
                  border-gray-200
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
                    text-gray-500
                  "
                >
                  Hubungi cepat
                </p>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  {/* Telepon */}
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
                      from-[#1677E8]
                      to-[#079FCF]
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      shadow-sm
                      transition-transform
                      active:scale-95
                    "
                  >
                    <Phone className="h-4 w-4" />
                    Telepon
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={siteConfig.whatsappHref}
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
                      from-[#079FCF]
                      to-[#16B86A]
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      shadow-sm
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
