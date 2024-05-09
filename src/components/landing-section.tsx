import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import scrollIndicator from '@/assets/images/scroll-indicator.svg';
import blurrySubtract from '@/assets/images/blurry-subtract.svg';

const LandingSection = () => {
  const t = useTranslations();

  return (
    <section className="flex flex-col px-5 pb-12 pt-5 xl:flex-row xl:gap-16 xl:px-[42px] xl:pb-[90px] xl:pt-[72px]">
      <div>
        <h1 className="h-[67px] select-none font-glamora text-[78px] leading-none xl:h-[143px] xl:text-[150px]">
          {t('welcome')}
        </h1>
        <h3 className="mt-10 pl-1 font-anton text-xl xl:pl-4">
          {t('helloMyNameIsBarbara')}
        </h3>
        <p className="mt-10 pl-1 font-epilogue font-light leading-[30px] xl:mt-[54px] xl:pl-4">
          {t.rich('intro', {
            bold: (chunks) => <span className="font-bold">{chunks}</span>,
          })}
        </p>
      </div>
      <div className="mt-10 flex items-center justify-between pl-2 xl:mt-0 xl:gap-16 xl:pl-0">
        <Image src={scrollIndicator} alt="" width={32} height={110} />
        <div className="relative h-[125px] w-[125px] min-w-[125px] xl:h-[300px] xl:w-[300px] xl:min-w-[300px]">
          <Image src={blurrySubtract} alt="" fill />
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
