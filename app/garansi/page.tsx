import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingContactBar } from '@/components/layout/floating-contact-bar';
import { Guarantee } from '@/components/guarantee/guarantee';

export const metadata = {
  title: 'Ketentuan Garansi — Dokter Sejuk AC',
  description:
    'Syarat & ketentuan garansi layanan service AC Dokter Sejuk AC. Garansi berlaku 30 hari sejak tanggal invoice untuk perbaikan, penggantian sparepart, isi freon, dan pengelasan pipa freon.',
};

export default function GaransiPage() {
  return (
    <>
      <Header />
      <main id="beranda" className="pt-28 pb-20 md:pb-10">
        <Guarantee />
      </main>
      <Footer />
      <FloatingContactBar />
    </>
  );
}
