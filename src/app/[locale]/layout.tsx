import Image from 'next/image';
import { Epilogue, Anton } from 'next/font/google';

import grainBackground from '@/assets/images/grain.png';
import '../globals.css';
import Header from '@/components/header';

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
      className={`${epilogue.variable} ${anton.variable} font-sans`}
    >
      <body className="bg-black">
        <div className="absolute left-0 top-0 -z-10 h-dvh w-screen">
          <Image
            src={grainBackground}
            className="object-cover opacity-5"
            alt=""
            fill
          />
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
