import { Footer } from '@/components/layout/footer';
import { FloatingContactBar } from '@/components/layout/floating-contact-bar';
import { Hero } from '@/components/home/hero';
import { Services } from '@/components/home/services';
import { WhyChooseUs } from '@/components/home/why-choose-us';
import { Process } from '@/components/home/process';
import { PricingTable } from '@/components/pricing/pricing-table';
import { ServiceProcess } from '@/components/home/service-process';
import { CtaBanner } from '@/components/home/cta-banner';
import { Gallery } from '@/components/gallery/gallery';
import { Testimonials } from '@/components/home/testimonials';
import { Faq } from '@/components/home/faq';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <PricingTable />
        <ServiceProcess />
        <CtaBanner />
        <Gallery />
        <Testimonials />
        <Faq />
      </main>

      <Footer />
      <FloatingContactBar />
    </>
  );
}
