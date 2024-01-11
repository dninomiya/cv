import { AppConfig } from '@/app.config';
import { getData } from '@/data';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

const data = getData();

export const metadata: Metadata = {
  title: data.name,
  description: data.summary,
  openGraph: {
    title: data.name,
    description: data.summary,
    images: [`/locale/${AppConfig.defaultLocale}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`/locale/${AppConfig.defaultLocale}/og-image.png`],
  },
};

export default function RootPage() {
  redirect(AppConfig.defaultLocale);
}
