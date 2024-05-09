import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import { Epilogue, Anton } from 'next/font/google';
import localfont from 'next/font/local';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/react';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { locales } from '@/libs/i18n/config';

import '../globals.css';

const epilogue = Epilogue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-epilogue',
});

const anton = Anton({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-anton',
});

const glamora = localfont({
  src: [
    {
      path: '../../../public/fonts/glamora.otf',
    },
  ],
  variable: '--font-glamora',
});

export const generateStaticParams = () => {
  return locales.map((locale) => ({ locale }));
};

export const metadata: Metadata = {
  title: 'Barbara Morawiak',
};

const LocaleLayout = ({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) => {
  unstable_setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${epilogue.variable} ${anton.variable} ${glamora.variable} font-sans`}
    >
      <body className="flex flex-col overflow-x-hidden bg-[#03030A] xl:items-center">
        <div className="grain-bg fixed left-0 top-0 -z-10 h-screen w-full bg-repeat opacity-5" />
        <Header />
        <main className="flex w-screen flex-col items-center overflow-hidden">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
};

export default LocaleLayout;
