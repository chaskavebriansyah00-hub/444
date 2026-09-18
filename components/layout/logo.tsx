import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export function Logo() {
  return (
    <Link
      href="#beranda"
      className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl"
      aria-label={`${siteConfig.name} — beranda`}
    >
      Dokter Sejuk <span className="text-primary">AC</span>
    </Link>
  );
}
