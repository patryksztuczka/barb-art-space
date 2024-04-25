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

export default function Index() {
  const t = useTranslations();
  return (
    <>
      <div className="w-full xl:max-w-7xl">
        <LandingSection />
      </div>
      <InfiniteMarquee />
      <div className="w-full xl:max-w-7xl">
        <Section title={t('featuredWork')}>
          <div className="grid gap-5 xl:grid-cols-2 xl:gap-6">
            {featuredWork.map((work, index) => (
              <FeaturedWorkCard
                key={work.id}
                work={work}
                takeWholeRow={index !== 2 && index !== 3}
              />
            ))}
          </div>
        </Section>
        <Section title={t('otherWork')}>
          <div className="grid gap-5 xl:grid-cols-3 xl:gap-6">
            {otherWork.map((work) => (
              <OtherWorkCard key={work.id} work={work} />
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
