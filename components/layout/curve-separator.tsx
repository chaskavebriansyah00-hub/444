'use client';

import { motion } from 'framer-motion';

interface CurveSeparatorProps {
  /** flip the curve direction */
  flip?: boolean;
  /** background fill color of the curve (matches the section below) */
  fill?: string;
  className?: string;
}

/**
 * Elegant SVG wave separator between sections.
 * Renders a smooth double-curve with a subtle animated gradient stroke.
 */
export function CurveSeparator({ flip = false, fill = 'hsl(var(--background))', className }: CurveSeparatorProps) {
  return (
    <div
      className={`pointer-events-none relative -my-px w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className ?? ''}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-[40px] w-full sm:h-[60px] lg:h-[80px]"
      >
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          d="M0,40 C240,80 480,0 720,30 C960,60 1200,10 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}
          d="M0,48 C240,86 480,10 720,38 C960,66 1200,18 1440,48"
          fill="none"
          stroke="hsl(var(--primary) / 0.18)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
