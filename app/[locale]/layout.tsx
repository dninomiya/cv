import { ThemeProvider } from '@/app/components/theme-provider';
import { getData } from '@/data';
import { I18nProviderClient } from '@/locales/client';
import { Inter } from 'next/font/google';
import '../globals.css';
import { AppConfig } from '@/app.config';
import { Metadata } from 'next';
import { getCurrentLocale } from '@/locales/server';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata() {
  const data = getData();
  const locale = getCurrentLocale();

  const meta: Metadata = {
    title: data.name,
    description: data.summary,
    metadataBase: AppConfig.host ? new URL(AppConfig.host) : undefined,
    openGraph: {
      title: data.name,
      description: data.summary,
      images: [`/locale/${locale}/og-image.png`],
    },
    twitter: {
      card: 'summary_large_image',
      images: [`/locale/${locale}/og-image.png`],
    },
  };

  return meta;
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className="print:text-[15px]" suppressHydrationWarning>
      <body className={inter.className}>
        <I18nProviderClient locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme={AppConfig.defaultTheme}
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </I18nProviderClient>
      </body>
    </html>
  );
}
