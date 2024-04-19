import { useTranslations } from 'next-intl';
import Image from 'next/image';

import blurrySubtract from '@/assets/images/blurry-subtract.svg';
import scrollIndicator from '@/assets/images/scroll-indicator.svg';
import InfiniteMarquee from '@/components/infinite-marquee';
import { featuredWork } from '@/utils/constants/featured-work';
import FeaturedWorkCard from '@/components/featured-work-card';

export default function Index() {
  const t = useTranslations();
  return (
    <div>
      <section className="mb-6 mt-5 px-5">
        <h1 className="font-glamora mb-5 select-none text-[78px]">
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
        <div className="flex justify-between">
          <Image src={scrollIndicator} alt="" width={32} height={110} />
          <Image src={blurrySubtract} alt="" width={125} height={125} />
        </div>
      </section>
      <InfiniteMarquee />
      <section className="mt-[54px] px-5">
        <div className="mb-5 flex items-center justify-center gap-4">
          <Image src={blurrySubtract} alt="" width={40} height={40} />
          <h2 className="font-glamora text-center text-[28px]">
            {t('featuredWork')}
          </h2>
          <Image src={blurrySubtract} alt="" width={40} height={40} />
        </div>
        <div className="flex flex-col gap-5">
          {featuredWork.map((work) => (
            <FeaturedWorkCard key={work.id} work={work} />
          ))}
        </div>
      </section>
    </div>
  );
}
