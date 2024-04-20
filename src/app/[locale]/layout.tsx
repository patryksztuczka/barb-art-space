import { Epilogue, Anton } from 'next/font/google';
import localfont from 'next/font/local';

import Header from '@/components/header';
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

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html
      lang={locale}
      className={`${epilogue.variable} ${anton.variable} ${glamora.variable} font-sans`}
    >
      <body className="flex flex-col overflow-x-hidden bg-[#03030A] xl:items-center">
        <div className="grain-bg fixed left-0 top-0 -z-10 h-screen w-full bg-repeat opacity-5" />
        <Header />
        <main className="xl:flex xl:justify-center">{children}</main>
      </body>
    </html>
  );
}
