import { useTranslations } from 'next-intl';
import Image from 'next/image';

import blurrySubtract from '@/assets/images/blurry-subtract.svg';
import scrollIndicator from '@/assets/images/scroll-indicator.svg';
import barbImage from '@/assets/images/barb.png';
import InfiniteMarquee from '@/components/infinite-marquee';
import { featuredWork } from '@/utils/constants/featured-work';
import FeaturedWorkCard from '@/components/featured-work-card';
import SectionHeading from '@/components/section-heading';
import Section from '@/components/section';

export default function Index() {
  const t = useTranslations();
  return (
    <div className="xl:max-w-7xl">
      <section className="mb-6 mt-5 flex flex-col px-5 xl:mb-12 xl:mt-16 xl:flex-row xl:gap-16 xl:px-[42px]">
        <div>
          <h1 className="mb-5 select-none font-glamora text-[78px] xl:text-[150px]">
            {t('welcome')}
          </h1>
          <h3 className="mb-10 font-anton text-xl">
            {t('helloMyNameIsBarbara')}
          </h3>
          <p className="mb-10 font-epilogue font-light">
            {t.rich('intro', {
              bold: (chunks) => <span className="font-bold">{chunks}</span>,
            })}
          </p>
        </div>
        <div className="flex items-center justify-between xl:gap-16">
          <Image src={scrollIndicator} alt="" width={32} height={110} />
          <div className="relative h-[125px] w-[125px] min-w-[125px] xl:h-[300px] xl:w-[300px] xl:min-w-[300px]">
            <Image src={blurrySubtract} alt="" fill />
          </div>
        </div>
      </section>
      <InfiniteMarquee />
      <Section title={t('featuredWork')}>
        <div className="flex flex-col gap-5">
          {featuredWork.map((work) => (
            <FeaturedWorkCard key={work.id} work={work} />
          ))}
        </div>
      </Section>
      <Section title={t('otherWork')}>
        <div className="flex flex-col gap-5">
          {featuredWork.map((work) => (
            <FeaturedWorkCard key={work.id} work={work} />
          ))}
        </div>
      </Section>
      <Section title={t('aboutMe')}>
        <div className="relative aspect-auto w-full">
          <Image src={barbImage} alt="" fill />
        </div>
        <h3 className="mb-5 select-none font-glamora text-[54px]">
          {t('helloThere')}
        </h3>
      </Section>
    </div>
  );
}
