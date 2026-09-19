'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3 sm:gap-4',
        align === 'center'
          ? 'items-center text-center'
          : 'items-start text-left',
        className
      )}
    >
      {/* =====================================================
          JUDUL KECIL / EYEBROW
          STYLE SERAGAM UNTUK SEMUA SECTION
      ===================================================== */}

      {eyebrow && (
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-80px',
          }}
          transition={{
            duration: 0.5,
          }}
          className={cn(
            align === 'center'
              ? 'flex justify-center'
              : 'flex justify-start'
          )}
        >
          <span
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-[8px]
              border
              border-[#60A5FA]/30
              bg-gradient-to-b
              from-[#1D4ED8]
              via-[#2563EB]
              to-[#1E40AF]
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.08em]
              text-white
              shadow-[0_6px_18px_rgba(37,99,235,0.28)]
              ring-1
              ring-white/10
              sm:px-5
              sm:py-2.5
              sm:text-sm
            "
          >
            {/* Titik kecil */}
            <span
              className="
                h-2
                w-2
                shrink-0
                rounded-full
                bg-[#93C5FD]
                shadow-[0_0_8px_rgba(147,197,253,0.9)]
              "
            />

            {eyebrow}
          </span>
        </motion.div>
      )}

      {/* =====================================================
          JUDUL UTAMA
      ===================================================== */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 16,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: '-80px',
        }}
        transition={{
          duration: 0.5,
          delay: 0.05,
        }}
        className={cn(
          `
            max-w-3xl
            text-balance
            font-display
            text-3xl
            font-bold
            tracking-tight
            text-white
            sm:text-4xl
            lg:text-display-md
          `,
          titleClassName
        )}
      >
        {title}
      </motion.h2>

      {/* =====================================================
          DESKRIPSI
      ===================================================== */}

      {description && (
        <motion.p
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-80px',
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className={cn(
            `
              max-w-2xl
              text-pretty
              text-base
              leading-relaxed
              text-white/70
              sm:text-lg
            `,
            align === 'center' && 'mx-auto'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
      }
