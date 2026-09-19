'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.2 + i * 0.12,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function Hero() {
  return (
    <>
      <Header homepage />

      <section
        id="beranda"
        className="
          relative
          flex
          min-h-[85svh]
          flex-col
          overflow-hidden
          bg-[#020303]
        "
        style={{
          minHeight: 'clamp(620px, 87vh, 900px)',
        }}
      >
        {/* =====================================================
            BLACK GLOSSY BASE
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#050706]
            via-[#010201]
            to-[#000000]
          "
          aria-hidden
        />

        {/* =====================================================
            ANIMATED GLOSSY LIGHT
        ===================================================== */}

        <motion.div
          className="
            absolute
            inset-0
            opacity-90
          "
          animate={{
            backgroundPosition: [
              '0% 50%',
              '100% 50%',
              '0% 50%',
            ],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundImage:
              `
              linear-gradient(
                120deg,
                transparent 0%,
                rgba(255,255,255,0.015) 20%,
                rgba(34,197,94,0.055) 38%,
                rgba(255,255,255,0.025) 50%,
                rgba(34,197,94,0.045) 62%,
                rgba(255,255,255,0.015) 80%,
                transparent 100%
              )
              `,
            backgroundSize: '240% 240%',
          }}
          aria-hidden
        />

        {/* =====================================================
            GLOSSY TOP LIGHT
        ===================================================== */}

        <motion.div
          className="
            absolute
            left-[-20%]
            top-[-40%]
            h-[420px]
            w-[140%]
            rotate-[-8deg]
            bg-gradient-to-r
            from-transparent
            via-white/[0.045]
            to-transparent
            blur-3xl
          "
          animate={{
            x: ['-8%', '8%', '-8%'],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-hidden
        />

        {/* =====================================================
            GREEN GLOW — LEFT
        ===================================================== */}

        <motion.div
          className="
            absolute
            -left-40
            top-20
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#22C55E]/10
            blur-[100px]
          "
          animate={{
            x: [0, 100, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
            opacity: [0.45, 0.8, 0.45],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-hidden
        />

        {/* =====================================================
            GREEN GLOW — RIGHT
        ===================================================== */}

        <motion.div
          className="
            absolute
            -right-40
            top-28
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#4ADE80]/10
            blur-[110px]
          "
          animate={{
            x: [0, -90, 0],
            y: [0, 80, 0],
            scale: [1, 1.25, 1],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-hidden
        />

        {/* =====================================================
            BLUE SUBTLE GLOW
            Untuk memberi sedikit kontras pada background
        ===================================================== */}

        <motion.div
          className="
            absolute
            right-[10%]
            top-[25%]
            h-[280px]
            w-[280px]
            rounded-full
            bg-blue-500/5
            blur-[100px]
          "
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-hidden
        />

        {/* =====================================================
            CORAK DIAGONAL
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            opacity-40
          "
          style={{
            backgroundImage:
              `
              repeating-linear-gradient(
                125deg,
                transparent 0px,
                transparent 34px,
                rgba(255,255,255,0.018) 35px,
                transparent 36px,
                transparent 72px
              )
              `,
          }}
          aria-hidden
        />

        {/* =====================================================
            CORAK HEX / TECH
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            opacity-20
          "
          style={{
            backgroundImage:
              `
              radial-gradient(
                circle at center,
                rgba(74,222,128,0.18) 1px,
                transparent 1.5px
              )
              `,
            backgroundSize: '32px 32px',
          }}
          aria-hidden
        />

        {/* =====================================================
            GLOSSY CURVED LINES
        ===================================================== */}

        <motion.div
          className="
            absolute
            -right-48
            bottom-[-280px]
            h-[620px]
            w-[620px]
            rounded-full
            border
            border-[#22C55E]/10
          "
          animate={{
            rotate: [0, 360],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'linear',
          }}
          aria-hidden
        />

        <motion.div
          className="
            absolute
            -right-64
            bottom-[-350px]
            h-[780px]
            w-[780px]
            rounded-full
            border
            border-white/[0.06]
          "
          animate={{
            rotate: [360, 0],
            scale: [1.05, 1, 1.05],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          aria-hidden
        />

        <motion.div
          className="
            absolute
            -left-72
            bottom-[-400px]
            h-[720px]
            w-[720px]
            rounded-full
            border
            border-[#4ADE80]/[0.06]
          "
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          aria-hidden
        />

        {/* =====================================================
            MOVING GREEN LIGHT LINE
        ===================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            left-[-30%]
            top-[45%]
            h-[2px]
            w-[55%]
            rotate-[-12deg]
            bg-gradient-to-r
            from-transparent
            via-[#4ADE80]/50
            to-transparent
            blur-[1px]
          "
          animate={{
            x: ['0%', '280%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatDelay: 2,
            ease: 'easeInOut',
          }}
          aria-hidden
        />

        {/* =====================================================
            SECOND LIGHT LINE
        ===================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            right-[-30%]
            top-[65%]
            h-[1px]
            w-[50%]
            rotate-[14deg]
            bg-gradient-to-r
            from-transparent
            via-[#22C55E]/40
            to-transparent
            blur-[1px]
          "
          animate={{
            x: ['0%', '-280%'],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatDelay: 1,
            ease: 'easeInOut',
          }}
          aria-hidden
        />

        {/* =====================================================
            SOFT DARK OVERLAY
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/10
            via-transparent
            to-black/55
          "
          aria-hidden
        />

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-10
            flex
            flex-1
            items-center
            pb-8
            pt-28
            sm:items-center
            sm:pb-16
            lg:pb-20
          "
        >
          <div className="container-page w-full">
            <div
              className="
                grid
                items-center
                gap-8
                lg:grid-cols-[1fr_1.05fr]
                lg:gap-4
              "
            >
              {/* =================================================
                  TEXT
              ================================================= */}

              <div
                className="
                  relative
                  z-20
                  max-w-2xl
                "
              >
                <motion.h1
                  custom={0}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  className="
                    font-display
                    text-[2.6rem]
                    font-bold
                    leading-[1.08]
                    tracking-tight
                    text-white
                    drop-shadow-[0_4px_18px_rgba(0,0,0,0.75)]
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  Jasa Service{' '}
                  <span className="text-[#73c7ff]">
                    AC
                  </span>
                  <br />
                  Terdekat
                </motion.h1>

                <motion.p
                  custom={1}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  className="
                    mt-6
                    max-w-xl
                    text-base
                    leading-[1.7]
                    text-white/90
                    drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)]
                    sm:text-lg
                    sm:leading-[1.75]
                  "
                >
                  Butuh jasa service AC terdekat
                  yang cepat dan terpercaya?
                  Kami siap membantu! Kami
                  memiliki teknisi AC berpengalaman
                  yang dapat memperbaiki AC Anda
                  dengan cepat dan efektif. Kami
                  selalu memberikan pelayanan
                  terbaik dengan harga terjangkau
                  untuk setiap pelanggan. Hubungi
                  kami sekarang untuk mendapatkan
                  layanan jasa service AC terdekat
                  yang handal.
                </motion.p>
              </div>

              {/* =================================================
                  TECHNICIAN PNG
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 60,
                  scale: 0.94,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.35,
                  ease: [
                    0.16,
                    1,
                    0.3,
                    1,
                  ],
                }}
                className="
                  relative
                  z-10
                  flex
                  items-end
                  justify-center
                  lg:justify-end
                "
              >
                <motion.img
                  src="/home-2-transparent.png"
                  alt="Teknisi Sabit Jaya Service"
                  className="
                    w-[95%]
                    max-w-[620px]
                    object-contain
                    drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)]
                    sm:w-[85%]
                    lg:w-[680px]
                  "
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  draggable={false}
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM GLOW
        ===================================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-40
            bg-gradient-to-t
            from-black
            via-black/50
            to-transparent
          "
          aria-hidden
        />

        {/* =====================================================
            BOTTOM GREEN GLOW LINE
        ===================================================== */}

        <motion.div
          className="
            absolute
            bottom-0
            left-1/2
            h-[2px]
            w-[70%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-[#22C55E]/50
            to-transparent
            blur-[1px]
          "
          animate={{
            opacity: [0.3, 1, 0.3],
            scaleX: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-hidden
        />
      </section>
    </>
  );
        }
