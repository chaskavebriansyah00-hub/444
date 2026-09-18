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
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="container-page">
          <div
            className={cn(
              'mt-3 flex items-center justify-between rounded-[8px] border px-5 py-3 backdrop-blur-md transition-all duration-300',
              scrolled
                ? 'border-white/30 bg-background/50 shadow-card'
                : 'border-white/20 bg-background/50 shadow-card'
            )}
          >
            <Link
              href="#beranda"
              className="flex min-w-0 items-center"
              aria-label="Dokter Sejuk AC — beranda"
            >
              <div className="flex min-w-0 items-center gap-2.5">
                <img
                  src="/logo-dokter-sejuk-ac-transparent.png"
                  alt="Dokter Sejuk AC"
                  className="h-10 w-auto object-contain sm:h-12"
                />

                <span className="whitespace-nowrap font-display text-lg font-bold tracking-tight sm:text-xl">
                  <span className="text-[#0F2342]">Dokter</span>{' '}
                  <span className="text-[#1677E8]">Sejuk</span>{' '}
                  <span className="text-[#7A8491]">AC</span>
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Buka menu navigasi"
              aria-expanded={open}
              className="group flex h-11 w-11 items-center justify-center rounded-[8px] border border-border bg-background/50 text-foreground backdrop-blur-sm transition-all duration-200 hover:border-[#1677E8]/40 hover:bg-[#1677E8]/10 hover:text-[#1677E8]"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm"
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                stiffness: 320,
                damping: 34,
              }}
              className="fixed inset-y-0 right-0 z-[70] flex h-full w-[300px] flex-col bg-card shadow-elevated sm:w-[360px]"
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigasi"
            >
              <div className="flex items-center justify-between border-b border-border px-6 py-5">
                <span className="font-display text-lg font-bold tracking-tight text-foreground">
                  Dokter Sejuk{' '}
                  <span className="text-[#1677E8]">AC</span>
                </span>

                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Tutup menu"
                  className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-border text-muted-foreground transition-colors hover:bg-[#1677E8]/5 hover:text-[#1677E8]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav
                className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6"
                aria-label="Navigasi utama"
              >
                {/* Beranda */}
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-[8px] px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-[#1677E8]/5 hover:text-[#1677E8]"
                >
                  <span>Beranda</span>
                  <span className="h-1.5 w-1.5 rounded-[2px] bg-border" />
                </Link>

                {/* Layanan */}
                <div>
                  <button
                    type="button"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                    className="flex w-full items-center justify-between rounded-[8px] px-4 py-3.5 text-left text-base font-medium text-foreground transition-colors hover:bg-[#1677E8]/5 hover:text-[#1677E8]"
                  >
                    <span>Layanan</span>

                    <ChevronDown
                      className={cn(
                        'h-5 w-5 transition-transform duration-200',
                        servicesOpen
                          ? 'rotate-180 text-[#1677E8]'
                          : 'text-muted-foreground'
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-3 border-l-2 border-[#1677E8]/15 pl-3">
                          {serviceAreas.map((region) => (
                            <div key={region.region} className="py-2">
                              <div className="px-3 pb-1 pt-1 text-sm font-bold text-[#1677E8]">
                                {region.region}
                              </div>

                              {region.areas.map((area) => (
                                <Link
                                  key={area.href}
                                  href={area.href}
                                  onClick={closeMenu}
                                  className="block rounded-[8px] px-3 py-2.5 text-sm leading-snug text-foreground/80 transition-colors hover:bg-[#1677E8]/5 hover:text-[#1677E8]"
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
                  className="flex items-center justify-between rounded-[8px] px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-[#1677E8]/5 hover:text-[#1677E8]"
                >
                  <span>Daftar Harga</span>
                  <span className="h-1.5 w-1.5 rounded-[2px] bg-border" />
                </Link>

                {/* Galeri Pengerjaan */}
                <Link
                  href="#galeri"
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-[8px] px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-[#1677E8]/5 hover:text-[#1677E8]"
                >
                  <span>Galeri Pengerjaan</span>
                  <span className="h-1.5 w-1.5 rounded-[2px] bg-border" />
                </Link>
              </nav>

              {/* Hubungi cepat */}
              <div className="border-t border-border px-4 py-5">
                <p className="px-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Hubungi cepat
                </p>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <a
                    href={siteConfig.phoneHref}
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-1.5 rounded-[8px] bg-[#1677E8] py-3 text-sm font-semibold text-white transition-transform active:scale-95"
                  >
                    <Phone className="h-4 w-4" />
                    Telepon
                  </a>

                  <a
                    href={siteConfig.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-1.5 rounded-[8px] bg-[#25D366] py-3 text-sm font-semibold text-white transition-transform active:scale-95"
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
