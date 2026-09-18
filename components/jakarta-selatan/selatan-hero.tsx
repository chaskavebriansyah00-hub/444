'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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

export function SelatanHero() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-[85svh] flex-col overflow-hidden bg-[#071b3a]"
      style={{ minHeight: 'clamp(620px, 87vh, 900px)' }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundImage:
            'linear-gradient(120deg, #071b3a 0%, #123f91 30%, #176ee8 52%, #4f46b5 75%, #111c4d 100%)',
          backgroundSize: '250% 250%',
        }}
        aria-hidden
      />

      {/* Moving glow - left */}
      <motion.div
        className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 70, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden
      />

      {/* Moving glow - right */}
      <motion.div
        className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-violet-400/25 blur-3xl"
        animate={{
          x: [0, -90, 0],
          y: [0, 90, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden
      />

      {/* Decorative wave circles */}
      <motion.div
        className="absolute -right-20 bottom-[-180px] h-[500px] w-[500px] rounded-full border border-white/10"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'linear',
        }}
        aria-hidden
      />

      <motion.div
        className="absolute right-[-100px] bottom-[-230px] h-[650px] w-[650px] rounded-full border border-white/10"
        animate={{
          rotate: [360, 0],
          scale: [1.05, 1, 1.05],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'linear',
        }}
        aria-hidden
      />

      {/* Soft overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#06142d]/20 via-transparent to-[#06142d]/45"
        aria-hidden
      />

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 items-center pb-8 pt-28 sm:pb-16 lg:pb-20">
        <div className="container-page w-full">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-4">

            {/* Text */}
            <div className="relative z-20 max-w-2xl">
              <motion.h1
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="font-display text-[2.6rem] font-bold leading-[1.08] tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl"
              >
                Jasa Service{' '}
                <span className="text-[#73c7ff]">AC</span>{' '}
                Jakarta Selatan
              </motion.h1>

              <motion.p
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="mt-6 max-w-xl text-base leading-[1.7] text-white/90 drop-shadow-md sm:text-lg sm:leading-[1.75]"
              >
                Jasa service AC Jakarta Selatan profesional untuk rumah,
                apartemen, kantor, ruko, dan tempat usaha. Dokter Sejuk AC
                melayani cuci AC, perbaikan AC, isi dan tambah freon, bongkar
                pasang, serta perawatan AC dengan teknisi berpengalaman, harga
                transparan, dan pengerjaan rapi.
              </motion.p>
            </div>

            {/* Technician PNG */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.94 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-10 flex items-end justify-center lg:justify-end"
            >
              <motion.img
                src="/home-2-transparent.png"
                alt="Teknisi Dokter Sejuk AC melayani service AC di Jakarta Selatan"
                className="w-[95%] max-w-[620px] object-contain drop-shadow-2xl sm:w-[85%] lg:w-[680px]"
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

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071b3a]/80 to-transparent"
        aria-hidden
      />
    </section>
  );
}
