import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { unstable_setRequestLocale } from 'next-intl/server';

import InfiniteMarquee from '@/components/infinite-marquee';
import FeaturedWorkCard from '@/components/featured-work-card';
import Section from '@/components/section';
import LandingSection from '@/components/landing-section';
import OtherWorkCard from '@/components/other-work-card';
import { featuredWork, otherWork } from '@/utils/constants/constants';

const MainPage = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations();

  return (
    <>
      <div className="w-full xl:max-w-7xl">
        <LandingSection />
      </div>
      <InfiniteMarquee />
      <div className="w-full xl:max-w-7xl">
        <Section id="work" title={t('featuredWork')}>
          <div className="grid gap-5 xl:grid-cols-2 xl:gap-6">
            {featuredWork.map((work, index) => (
              <FeaturedWorkCard
                locale={locale}
                key={work.id}
                work={work}
                takeWholeRow={index !== 2 && index !== 3}
              />
            ))}
          </div>
        </Section>
        <Section id="otherWork" title={t('otherWork')}>
          <div className="grid gap-5 xl:grid-cols-3 xl:gap-6">
            {otherWork.map((work) => (
              <OtherWorkCard key={work.id} work={work} />
            ))}
          </div>
        </Section>
        <Section id="about" title={t('aboutMe')}>
          <div className="flex flex-col items-center xl:flex-row-reverse xl:gap-20 xl:px-9">
            <picture className="relative aspect-[8/9] w-full max-w-[400px] select-none xl:h-[650px]">
              <source
                srcSet="/images/barb-large.png"
                media="(min-width: 1280px)"
              />
              <Image src="/images/barb.png" alt="" fill />
            </picture>
            <div>
              <h3 className="mt-5 flex h-[67px] select-none items-center font-glamora text-[54px] leading-none xl:mt-0 xl:h-auto xl:text-[100px]">
                {t('helloThere')}
              </h3>
              <h3 className="mt-5 font-anton text-xl xl:mt-8">
                {t('welcomeToMyWorld')}
              </h3>
              <p className="mt-5 whitespace-pre-line pb-[54px] font-epilogue leading-[30px] xl:mt-8">
                {t('aboutMeDescription')}
              </p>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default MainPage;
