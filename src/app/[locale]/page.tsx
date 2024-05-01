import { useTranslations } from 'next-intl';
import Image from 'next/image';

import barbImage from '@/assets/images/barb.png';
import InfiniteMarquee from '@/components/infinite-marquee';
import { featuredWork } from '@/utils/constants/featured-work';
import FeaturedWorkCard from '@/components/featured-work-card';
import SectionHeading from '@/components/section-heading';
import Section from '@/components/section';
import LandingSection from '@/components/landing-section';
import { otherWork } from '@/utils/constants/other-work';
import OtherWorkCard from '@/components/other-work-card';

export default function Index({
  params: { locale },
}: {
  params: { locale: string };
}) {
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
            <div className="relative aspect-[6/9] max-h-[400px] w-full max-w-[353px] xl:aspect-auto xl:h-[650px] xl:max-w-[400px]">
              <Image src={barbImage} alt="" fill />
            </div>
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
}
