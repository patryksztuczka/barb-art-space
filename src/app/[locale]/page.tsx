import { useTranslations } from 'next-intl';
import Image from 'next/image';

import blurrySubtract from '@/assets/images/blurry-subtract.svg';
import scrollIndicator from '@/assets/images/scroll-indicator.svg';
import InfiniteMarquee from '@/components/infinite-marquee';

export default function Index() {
  const t = useTranslations();
  return (
    <div>
      <section className="mb-6 mt-5 px-5">
        <h1 className="mb-10">{t('welcome')}</h1>
        <h3 className="font-anton mb-10 text-xl">
          {t('helloMyNameIsBarbara')}
        </h3>
        <p className="font-epilogue mb-10 font-light">
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
    </div>
  );
}
