'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { SectionHeading } from '@/components/layout/section-heading';
import { siteConfig } from '@/lib/site-config';

const AUTO_SLIDE_DELAY = 4500;

type TestimonialCardProps = {
  testimonial: (typeof testimonials)[number];
  index: number;
};

function TestimonialCard({
  testimonial,
  index,
}: TestimonialCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  const isInView = useInView(cardRef, {
    once: false,
    amount: 0.2,
    margin: '-40px 0px -40px 0px',
  });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.55,
          delay: (index % 3) * 0.08,
          ease: [0.22, 1, 0.36, 1],
        },
      });
    } else {
      controls.start({
        opacity: 0,
        scale: 0.88,
        transition: {
          duration: 0.35,
          ease: [0.4, 0, 1, 1],
        },
      });
    }
  }, [isInView, controls, index]);

  return (
    <motion.figure
      ref={cardRef}
      initial={{
        opacity: 0,
        scale: 0.88,
      }}
      animate={controls}
      className="
        relative
        w-[calc(50%_-_8px)]
        min-w-[calc(50%_-_8px)]
        shrink-0
        snap-start
        rounded-[8px]
        border
        border-border
        bg-card
        p-5
        transition-all
        duration-300
        hover:border-primary/30
        hover:shadow-card
        sm:w-auto
        sm:min-w-0
        sm:p-6
      "
    >
      {/* Google Logo */}
      <div className="flex items-center justify-between">
        <img
          src="/images/google-logo.png"
          alt="Google"
          className="h-7 w-7 object-contain"
        />
      </div>

      {/* Rating */}
      <div className="mt-3 flex items-center gap-1">
        {Array.from({
          length: testimonial.rating,
        }).map((_, idx) => (
          <Star
            key={idx}
            className="h-4 w-4 fill-amber-400 text-amber-400"
          />
        ))}
      </div>

      {/* Review */}
      <blockquote className="mt-3 text-pretty text-sm leading-relaxed text-foreground">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Customer */}
      <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <img
          src={`/images/testimonial-${(index % 18) + 1}.jpg`}
          alt={testimonial.name}
          className="h-10 w-10 shrink-0 rounded-[6px] object-cover sm:h-11 sm:w-11"
        />

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">
            {testimonial.name}
          </p>

          <p className="truncate text-xs text-muted-foreground">
            {testimonial.role} · {testimonial.location}
          </p>
        </div>
      </figcaption>
    </motion.figure>
  );
}

export function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const currentPageRef = useRef(0);

  const [activePage, setActivePage] = useState(0);

  const allTestimonials = testimonials;

  const totalMobilePages = Math.max(
    1,
    Math.ceil(allTestimonials.length / 2)
  );

  const scrollToPage = (
    page: number,
    smooth = true
  ) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const maxPage = Math.max(
      0,
      totalMobilePages - 1
    );

    const nextPage = Math.min(
      Math.max(page, 0),
      maxPage
    );

    currentPageRef.current = nextPage;
    setActivePage(nextPage);

    slider.scrollTo({
      left: nextPage * slider.clientWidth,
      behavior: smooth ? 'smooth' : 'auto',
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider || allTestimonials.length <= 2) {
      return;
    }

    const mobileQuery = window.matchMedia(
      '(max-width: 639px)'
    );

    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const handleScroll = () => {
      if (!mobileQuery.matches) return;

      const pageWidth = slider.clientWidth;

      if (pageWidth <= 0) return;

      const page = Math.round(
        slider.scrollLeft / pageWidth
      );

      if (
        page !== currentPageRef.current
      ) {
        currentPageRef.current = page;
        setActivePage(page);
      }
    };

    slider.addEventListener(
      'scroll',
      handleScroll,
      {
        passive: true,
      }
    );

    const autoSlide = window.setInterval(() => {
      if (!mobileQuery.matches) return;
      if (reducedMotionQuery.matches) return;

      const nextPage =
        (currentPageRef.current + 1) %
        totalMobilePages;

      scrollToPage(nextPage, true);
    }, AUTO_SLIDE_DELAY);

    return () => {
      slider.removeEventListener(
        'scroll',
        handleScroll
      );

      window.clearInterval(autoSlide);
    };
  }, [
    allTestimonials.length,
    totalMobilePages,
  ]);

  return (
    <section
      id="testimoni"
      className="relative overflow-hidden py-12 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-secondary/40"
        aria-hidden
      />

      {/* Dekorasi background dibuat tanpa bentuk oval */}
      <div
        className="pointer-events-none absolute -left-32 top-10 -z-10 h-80 w-80 bg-accent/10 blur-3xl"
        aria-hidden
      />

      <div className="container-page">
        <SectionHeading
          eyebrow="Testimoni"
          title="Dipercaya ribuan pelanggan"
          description={`Rating ${siteConfig.rating}/5 dari ${siteConfig.reviewCount.toLocaleString(
            'id-ID'
          )}+ ulasan asli pelanggan di seluruh Indonesia.`}
        />

        <div
          ref={sliderRef}
          className="
            mt-10
            flex
            w-full
            snap-x
            snap-mandatory
            gap-4
            overflow-x-auto
            pb-2
            sm:mt-14
            sm:grid
            sm:grid-cols-2
            sm:gap-5
            sm:overflow-visible
            lg:grid-cols-3
          "
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {allTestimonials.map(
            (testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            )
          )}
        </div>

        {/* Mobile Indicators dibuat kotak */}
        <div
          className="mt-5 flex items-center justify-center gap-2 sm:hidden"
          aria-label="Navigasi testimoni"
        >
          {Array.from({
            length: totalMobilePages,
          }).map((_, page) => (
            <button
              key={page}
              type="button"
              onClick={() =>
                scrollToPage(page)
              }
              aria-label={`Testimoni ${
                page * 2 + 1
              } sampai ${Math.min(
                page * 2 + 2,
                allTestimonials.length
              )}`}
              aria-current={
                activePage === page
                  ? 'true'
                  : undefined
              }
              className={`h-2 rounded-[2px] transition-all duration-500 ${
                activePage === page
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-primary/20 hover:bg-primary/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
      }
