import { useTranslations } from 'next-intl';
import Image from 'next/image';

import barbImage from '@/assets/images/barb.png';
import InfiniteMarquee from '@/components/infinite-marquee';
import { featuredWork } from '@/utils/constants/featured-work';
import FeaturedWorkCard from '@/components/featured-work-card';
import SectionHeading from '@/components/section-heading';
import Section from '@/components/section';
import LandingSection from '@/components/landing-section';

export default function Index() {
  const t = useTranslations();
  return (
    <>
      <div className="xl:max-w-7xl">
        <LandingSection />
      </div>
      <InfiniteMarquee />
      <div className="xl:max-w-7xl">
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
          <h3 className="select-none font-glamora text-[54px]">
            {t('helloThere')}
          </h3>
        </Section>
      </div>
    </>
  );
}
