'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

import { testimonials } from '@/lib/data';
import { siteConfig } from '@/lib/site-config';

const locationWhatsAppMessages: Record<string, string> = {
  '/jakarta-selatan':
    'Halo Sabit Jaya Service, saya ingin memesan layanan service AC di Jakarta Selatan. Mohon info jadwal nya.',

  '/jakarta-timur':
    'Halo Sabit Jaya Service, saya ingin memesan layanan service AC di Jakarta Timur. Mohon info jadwal nya.',

  '/jakarta-barat':
    'Halo Sabit Jaya Service, saya ingin memesan layanan service AC di Jakarta Barat. Mohon info jadwal nya.',

  '/jakarta-utara':
    'Halo Sabit Jaya Service, saya ingin memesan layanan service AC di Jakarta Utara. Mohon info jadwal nya.',

  '/jakarta-pusat':
    'Halo Sabit Jaya Service, saya ingin memesan layanan service AC di Jakarta Pusat. Mohon info jadwal nya.',

  '/tangerang-selatan':
    'Halo Sabit Jaya Service, saya ingin memesan layanan service AC di Tangerang Selatan. Mohon info jadwal nya.',

  '/kota-tangerang':
    'Halo Sabit Jaya Service, saya ingin memesan layanan service AC di Kota Tangerang. Mohon info jadwal nya.',

  '/kabupaten-tangerang':
    'Halo Sabit Jaya Service, saya ingin memesan layanan service AC di Kabupaten Tangerang. Mohon info jadwal nya.',

  '/bekasi':
    'Halo Sabit Jaya Service, saya ingin memesan layanan service AC di Bekasi. Mohon info jadwal nya.',

  '/depok':
    'Halo Sabit Jaya Service, saya ingin memesan layanan service AC di Depok. Mohon info jadwal nya.',

  '/bogor':
    'Halo Sabit Jaya Service, saya ingin memesan layanan service AC di Bogor. Mohon info jadwal nya.',
};

/*
 * Menggunakan sumber data yang sama dengan Testimonials.
 */
const floatingTestimonials = testimonials.slice(0, 6);

const TESTIMONIAL_INTERVAL = 4000;

export function FloatingContactBar() {
  const pathname = usePathname();

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  /*
   * Normalisasi URL
   */
  const normalizedPathname =
    pathname?.replace(/\/$/, '') || '/';

  /*
   * Pesan WhatsApp berdasarkan halaman.
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

  const testimonialImage =
    `/images/testimonial-${testimonialIndex + 1}.jpg`;

  return (
    <>
      {/* ======================================================
          FLOATING TESTIMONIAL
      ====================================================== */}

      <AnimatePresence mode="wait">
        <motion.div
          key={`floating-testimonial-${testimonialIndex}`}
          initial={{
            opacity: 0,
            y: 18,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -14,
            scale: 0.92,
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            fixed
            bottom-[68px]
            left-3
            z-[60]
            w-[185px]
            max-w-[calc(100vw-24px)]
            overflow-hidden
            rounded-[10px]
            border
            border-gray-200
            bg-white
            shadow-[0_6px_20px_rgba(15,23,42,0.18)]
          "
        >
          {/* Aksen gradasi */}
          <motion.div
            className="
              absolute
              left-0
              top-0
              h-full
              w-[3px]
              bg-gradient-to-b
              from-[#1677E8]
              via-[#079FCF]
              to-[#16B86A]
            "
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            aria-hidden="true"
          />

          <div className="px-2.5 py-2">
            {/* FOTO + NAMA + LOKASI + RATING */}

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
                    text-[#1677E8]
                  "
                >
                  {currentTestimonial.name}
                </p>

                <p
                  className="
                    truncate
                    text-[7px]
                    leading-[1.2]
                    text-gray-500
                  "
                >
                  {currentTestimonial.location}
                </p>
              </div>

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
                {'★'.repeat(currentTestimonial.rating)}
              </motion.div>
            </div>

            {/* ULASAN */}

            <p
              className="
                mt-1.5
                line-clamp-2
                text-[7.5px]
                leading-[1.35]
                text-gray-600
              "
            >
              “{currentTestimonial.quote}”
            </p>

            {/* LABEL */}

            <motion.p
              className="
                mt-1
                truncate
                text-[6.5px]
                font-extrabold
                uppercase
                tracking-[0.01em]
                text-[#1677E8]
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
              SABIT JAYA SERVICE
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ======================================================
          FLOATING CONTACT BAR
      ====================================================== */}

      <motion.nav
        initial={{
          y: 35,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.45,
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
            max-w-[390px]
            items-center
            gap-2
            pointer-events-auto
          "
        >
          {/* ==================================================
              TELEPON
              BIRU
          ================================================== */}

          <motion.a
            href={siteConfig.phoneHref}
            aria-label={`Telepon ${siteConfig.phoneDisplay}`}
            whileTap={{
              scale: 0.94,
            }}
            animate={{
              boxShadow: [
                '0 4px 14px rgba(22,119,232,0.20)',
                '0 6px 22px rgba(22,119,232,0.38)',
                '0 4px 14px rgba(22,119,232,0.20)',
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              group
              relative
              flex
              h-[52px]
              flex-1
              items-center
              justify-center
              gap-2
              overflow-hidden
              rounded-[10px]
              bg-gradient-to-r
              from-[#075BE8]
              via-[#1677E8]
              to-[#079FCF]
              px-3
              text-white
            "
          >
            {/* Shine */}
            <motion.span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-y-0
                -left-[70%]
                w-[28%]
                skew-x-[-20deg]
                bg-white/20
              "
              animate={{
                left: ['-70%', '160%'],
              }}
              transition={{
                duration: 2.7,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'easeInOut',
              }}
            />

            {/* Icon */}
            <motion.span
              className="
                relative
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-[7px]
                bg-white/15
              "
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FaPhoneAlt className="h-[15px] w-[15px]" />
            </motion.span>

            <span
              className="
                relative
                text-[13px]
                font-bold
                sm:text-sm
              "
            >
              Hubungi Kami
            </span>
          </motion.a>

          {/* ==================================================
              WHATSAPP
              HIJAU
          ================================================== */}

          <motion.a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hubungi Sabit Jaya Service melalui WhatsApp"
            whileTap={{
              scale: 0.94,
            }}
            animate={{
              boxShadow: [
                '0 4px 14px rgba(22,184,106,0.20)',
                '0 6px 22px rgba(22,184,106,0.40)',
                '0 4px 14px rgba(22,184,106,0.20)',
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.25,
            }}
            className="
              group
              relative
              flex
              h-[52px]
              flex-1
              items-center
              justify-center
              gap-2
              overflow-hidden
              rounded-[10px]
              bg-gradient-to-r
              from-[#079F78]
              via-[#16B86A]
              to-[#22C55E]
              px-3
              text-white
            "
          >
            {/* Shine */}
            <motion.span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-y-0
                -left-[70%]
                w-[28%]
                skew-x-[-20deg]
                bg-white/22
              "
              animate={{
                left: ['-70%', '160%'],
              }}
              transition={{
                duration: 2.7,
                repeat: Infinity,
                repeatDelay: 1.7,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            />

            {/* Icon */}
            <motion.span
              className="
                relative
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-[7px]
                bg-white/15
              "
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FaWhatsapp className="h-[19px] w-[19px]" />
            </motion.span>

            <span
              className="
                relative
                text-[13px]
                font-bold
                sm:text-sm
              "
            >
              Hubungi Kami
            </span>
          </motion.a>
        </div>
      </motion.nav>
    </>
  );
      }
