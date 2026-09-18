'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
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
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="secondary"
            className="gap-1.5 border-primary/20 bg-primary/10 px-3 py-1 text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {eyebrow}
          </Badge>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={cn(
          'max-w-3xl text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-display-md',
          titleClassName
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn(
            'max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg',
            align === 'center' && 'mx-auto'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
