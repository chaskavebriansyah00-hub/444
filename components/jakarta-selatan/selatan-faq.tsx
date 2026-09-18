'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/layout/section-heading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const selatanFaqs = [
  {
    question: 'Apakah Dokter Sejuk AC melayani service AC di Jakarta Selatan?',
    answer:
      'Ya. Dokter Sejuk AC melayani service AC untuk rumah, apartemen, kantor, ruko, dan tempat usaha di wilayah Jakarta Selatan dan sekitarnya.',
  },
  {
    question: 'Apa saja layanan service AC yang tersedia di Jakarta Selatan?',
    answer:
      'Cuci AC, isi dan tambah freon, perbaikan AC, AC tidak dingin, AC bocor, bongkar pasang, serta perawatan AC.',
  },
  {
    question: 'Apakah tersedia layanan cuci AC di Jakarta Selatan?',
    answer:
      'Ya. Dokter Sejuk AC melayani cuci AC untuk berbagai kebutuhan di Jakarta Selatan.',
  },
  {
    question: 'Apakah Dokter Sejuk menangani AC yang tidak dingin?',
    answer:
      'Ya. Teknisi akan melakukan pengecekan terlebih dahulu untuk mengetahui penyebab AC tidak dingin sebelum menentukan tindakan perbaikan.',
  },
  {
    question: 'Apakah tersedia layanan isi atau tambah freon?',
    answer:
      'Ya. Isi atau tambah freon tersedia setelah teknisi melakukan pengecekan kondisi sistem AC.',
  },
  {
    question: 'Apakah service AC mendapatkan garansi?',
    answer:
      'Beberapa layanan mendapatkan garansi sesuai ketentuan layanan yang berlaku.',
  },
  {
    question: 'Wilayah Jakarta Selatan mana saja yang dilayani?',
    answer:
      'Kami melayani Kebayoran Baru, Kebayoran Lama, Pesanggrahan, Cilandak, Jagakarsa, Mampang Prapatan, Pancoran, Tebet, Pasar Minggu, Setiabudi, dan area sekitarnya.',
  },
];

export function SelatanFaq() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden py-12 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-secondary/40"
        aria-hidden
      />

      <div className="container-page">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang sering diajukan"
          description="Belum menemukan jawaban? Tim kami siap membantu via WhatsApp setiap hari."
        />

        <div className="mx-auto mt-8 max-w-3xl sm:mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <Accordion
              type="single"
              collapsible
              className="space-y-3"
              defaultValue="faq-0"
            >
              {selatanFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="overflow-hidden rounded-xl border border-border bg-card px-5 data-[state=open]:border-primary/30 data-[state=open]:shadow-soft"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Banner Service AC Semua Merk */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 overflow-hidden rounded-2xl sm:mt-8"
          >
            <img
              src="/images/service-ac-semua-merk.png"
              alt="Service AC semua merk - Dokter Sejuk AC"
              className="block h-auto w-full rounded-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
      }
