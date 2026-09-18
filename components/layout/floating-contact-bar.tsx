'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

import { testimonials } from '@/lib/data';
import { siteConfig } from '@/lib/site-config';

const locationWhatsAppMessages: Record<string, string> = {
  '/jakarta-selatan':
    'Halo Dokter Sejuk AC, saya ingin memesan layanan service AC di Jakarta Selatan. Mohon info jadwal nya.',

  '/jakarta-timur':
    'Halo Dokter Sejuk AC, saya ingin memesan layanan service AC di Jakarta Timur. Mohon info jadwal nya.',

  '/jakarta-barat':
    'Halo Dokter Sejuk AC, saya ingin memesan layanan service AC di Jakarta Barat. Mohon info jadwal nya.',

  '/jakarta-utara':
    'Halo Dokter Sejuk AC, saya ingin memesan layanan service AC di Jakarta Utara. Mohon info jadwal nya.',

  '/jakarta-pusat':
    'Halo Dokter Sejuk AC, saya ingin memesan layanan service AC di Jakarta Pusat. Mohon info jadwal nya.',

  '/tangerang-selatan':
    'Halo Dokter Sejuk AC, saya ingin memesan layanan service AC di Tangerang Selatan. Mohon info jadwal nya.',

  '/kota-tangerang':
    'Halo Dokter Sejuk AC, saya ingin memesan layanan service AC di Kota Tangerang. Mohon info jadwal nya.',

  '/kabupaten-tangerang':
    'Halo Dokter Sejuk AC, saya ingin memesan layanan service AC di Kabupaten Tangerang. Mohon info jadwal nya.',

  '/bekasi':
    'Halo Dokter Sejuk AC, saya ingin memesan layanan service AC di Bekasi. Mohon info jadwal nya.',

  '/depok':
    'Halo Dokter Sejuk AC, saya ingin memesan layanan service AC di Depok. Mohon info jadwal nya.',

  '/bogor':
    'Halo Dokter Sejuk AC, saya ingin memesan layanan service AC di Bogor. Mohon info jadwal nya.',
};

/*
 * Menggunakan sumber data yang SAMA dengan section Testimonials.
 *
 * Section Testimonials juga menggunakan 6 testimonial pertama.
 */
const floatingTestimonials = testimonials.slice(0, 6);

const TESTIMONIAL_INTERVAL = 4000;

export function FloatingContactBar() {
  const pathname = usePathname();

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  /*
   * Normalisasi pathname supaya URL dengan / di belakang
   * tetap mendapatkan pesan WhatsApp area yang benar.
   */
  const normalizedPathname =
    pathname?.replace(/\/$/, '') || '/';

  /*
   * Pesan WhatsApp tetap mengikuti halaman area layanan.
   */
  const whatsappMessage =
    locationWhatsAppMessages[normalizedPathname] ??
    siteConfig.whatsappText;

  const whatsappHref = `${
    siteConfig.whatsappHref
  }?text=${encodeURIComponent(whatsappMessage)}`;

  /*
   * ==========================================================
   * ROTASI TESTIMONIAL
   * ==========================================================
   *
   * Testimonial berganti otomatis setiap 4 detik.
   *
   * Urutan:
   * 1 → 2 → 3 → 4 → 5 → 6 → 1 → dst.
   *
   * Menggunakan setTimeout yang dibuat ulang setiap pergantian
   * agar pergantian tetap berjalan terus.
   */
  useEffect(() => {
    if (floatingTestimonials.length <= 1) {
      return;
    }

    const timer = window.setTimeout(() => {
      setTestimonialIndex((current) => {
        return (
          (current + 1) %
          floatingTestimonials.length
        );
      });
    }, TESTIMONIAL_INTERVAL);

    return () => {
      window.clearTimeout(timer);
    };
  }, [testimonialIndex]);

  const currentTestimonial =
    floatingTestimonials[testimonialIndex];

  if (!currentTestimonial) {
    return null;
  }

  /*
   * Foto mengikuti urutan yang sama dengan
   * component Testimonials.
   */
  const testimonialImage =
    `/images/testimonial-${testimonialIndex + 1}.jpg`;

  return (
    <>
      {/* ======================================================
          FLOATING TESTIMONIAL
          Muncul dari atas floating button
         ====================================================== */}

      <AnimatePresence mode="wait">
        <motion.div
          key={`floating-testimonial-${testimonialIndex}`}
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.88,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -18,
            scale: 0.88,
          }}
          transition={{
            duration: 0.38,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            fixed
            bottom-[61px]
            left-3
            z-[60]
            w-[185px]
            max-w-[calc(100vw-24px)]
            overflow-hidden
            rounded-[12px]
            border
            border-slate-200
            bg-white
            shadow-[0_6px_18px_rgba(15,23,42,0.20)]
          "
        >
          {/* Garis aksen biru */}
          <motion.div
            className="
              absolute
              left-0
              top-0
              h-full
              w-[3px]
              bg-primary
            "
            animate={{
              opacity: [0.65, 1, 0.65],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            aria-hidden="true"
          />

          <div className="px-2.5 py-2">
            {/* =================================================
                FOTO + NAMA + LOKASI + RATING
               ================================================= */}

            <div className="flex items-center gap-1.5">
              <motion.img
                key={testimonialImage}
                src={testimonialImage}
                alt=""
                className="
                  h-6
                  w-6
                  shrink-0
                  rounded-full
                  object-cover
                "
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <div className="min-w-0 flex-1">
                <p
                  className="
                    truncate
                    text-[9px]
                    font-bold
                    leading-[1.1]
                    text-primary
                  "
                >
                  {currentTestimonial.name}
                </p>

                <p
                  className="
                    truncate
                    text-[7px]
                    leading-[1.2]
                    text-muted-foreground
                  "
                >
                  {currentTestimonial.location}
                </p>
              </div>

              {/* Rating */}
              <motion.div
                className="
                  shrink-0
                  text-[7px]
                  leading-none
                  text-amber-400
                "
                animate={{
                  opacity: [0.65, 1, 0.65],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                aria-label={`${currentTestimonial.rating} dari 5 bintang`}
              >
                {'★'.repeat(
                  currentTestimonial.rating
                )}
              </motion.div>
            </div>

            {/* =================================================
                ULASAN
               ================================================= */}

            <p
              className="
                mt-1.5
                line-clamp-2
                text-[7.5px]
                leading-[1.35]
                text-slate-600
              "
            >
              “{currentTestimonial.quote}”
            </p>

            {/* =================================================
                LABEL
               ================================================= */}

            <motion.p
              className="
                mt-1
                truncate
                text-[6.5px]
                font-extrabold
                uppercase
                tracking-[0.01em]
                text-primary
              "
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              SUDAH BERLANGGANAN DI SINI!
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ======================================================
          FLOATING CONTACT BUTTONS
         ====================================================== */}

      <motion.nav
        initial={{
          y: 30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        aria-label="Kontak cepat"
        className="
          fixed
          inset-x-0
          bottom-0
          z-50
          flex
          justify-center
          px-3
          pb-2
          pointer-events-none
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[380px]
            items-center
            justify-center
            gap-2
            pointer-events-auto
          "
        >
          {/* ==================================================
              TELEPON
              3 WARNA BIRU
             ================================================== */}

          <motion.a
            href={siteConfig.phoneHref}
            aria-label={`Telepon ${siteConfig.phoneDisplay}`}
            whileTap={{
              scale: 0.94,
            }}
            animate={{
              scale: [1, 1.015, 1],

              /*
               * 3 warna biru:
               * 1. Biru utama
               * 2. Biru terang
               * 3. Biru tua
               */
              backgroundColor: [
                '#2563eb',
                '#3b82f6',
                '#1d4ed8',
                '#2563eb',
              ],

              boxShadow: [
                '0 4px 13px rgba(37,99,235,0.20)',
                '0 5px 21px rgba(59,130,246,0.42)',
                '0 4px 18px rgba(29,78,216,0.36)',
                '0 4px 13px rgba(37,99,235,0.20)',
              ],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              relative
              flex
              h-[50px]
              flex-1
              items-center
              justify-center
              gap-1.5
              overflow-hidden
              rounded-[14px]
              px-2
              text-white
            "
          >
            {/* Kilatan cahaya */}
            <motion.span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-y-0
                -left-[70%]
                w-[30%]
                skew-x-[-20deg]
                bg-white/20
              "
              animate={{
                left: ['-70%', '150%'],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatDelay: 1.8,
                ease: 'easeInOut',
              }}
            />

            {/* Icon Telepon */}
            <motion.span
              className="
                relative
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white/15
              "
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, -3, 3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FaPhoneAlt className="h-[14px] w-[14px]" />
            </motion.span>

            <span
              className="
                relative
                text-[13px]
                font-bold
              "
            >
              Telepon
            </span>
          </motion.a>

          {/* ==================================================
              WHATSAPP
              3 WARNA HIJAU
             ================================================== */}

          <motion.a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat WhatsApp"
            whileTap={{
              scale: 0.94,
            }}
            animate={{
              scale: [1, 1.018, 1],

              /*
               * 3 warna hijau:
               * 1. Hijau utama
               * 2. Hijau terang
               * 3. Hijau tua
               */
              backgroundColor: [
                '#22c55e',
                '#86efac',
                '#16a34a',
                '#22c55e',
              ],

              boxShadow: [
                '0 4px 13px rgba(34,197,94,0.20)',
                '0 5px 22px rgba(134,239,172,0.45)',
                '0 4px 18px rgba(22,163,74,0.38)',
                '0 4px 13px rgba(34,197,94,0.20)',
              ],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.25,
            }}
            className="
              relative
              flex
              h-[50px]
              flex-1
              items-center
              justify-center
              gap-1.5
              overflow-hidden
              rounded-[14px]
              px-2
              text-white
            "
          >
            {/* Kilatan cahaya */}
            <motion.span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-y-0
                -left-[70%]
                w-[30%]
                skew-x-[-20deg]
                bg-white/22
              "
              animate={{
                left: ['-70%', '150%'],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatDelay: 1.4,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            />

            {/* Icon WhatsApp */}
            <motion.span
              className="
                relative
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white/15
              "
              animate={{
                scale: [1, 1.12, 1],
                rotate: [0, -3, 3, 0],
              }}
              transition={{
                duration: 1.9,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FaWhatsapp className="h-[18px] w-[18px]" />
            </motion.span>

            <span
              className="
                relative
                text-[13px]
                font-bold
              "
            >
              WhatsApp
            </span>
          </motion.a>
        </div>
      </motion.nav>
    </>
  );
      }
