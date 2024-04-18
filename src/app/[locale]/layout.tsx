import Image from 'next/image';
import { Epilogue, Anton } from 'next/font/google';
import localfont from 'next/font/local';

import grainBackground from '@/assets/images/grain.png';
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
      <body className="overflow-x-hidden bg-black">
        {/* <div className="absolute left-0 top-0 -z-10 h-dvh w-screen">
          <Image
            src={grainBackground}
            className="object-cover opacity-5"
            alt=""
            fill
          />
        </div> */}
        <Header />
        {children}
      </body>
    </html>
  );
}
