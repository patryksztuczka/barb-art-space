import React from 'react';
import { useTranslations } from 'next-intl';
import Subtract from '@/assets/icons/subtract';

const InfiniteMarquee = () => {
  const t = useTranslations();

  return (
    <div className=" overflow-hidden border-b border-t py-4">
      <div className="animate-marquee flex items-center gap-4">
        <span className="font-anton  whitespace-nowrap xl:text-xl">
          {t('classicalArts')}
        </span>
        <span className="font-anton  whitespace-nowrap xl:text-xl">
          {t('userInterface')}
        </span>
        <span className="font-anton  whitespace-nowrap xl:text-xl">
          {t('userExperience')}
        </span>
        <span className="font-anton  whitespace-nowrap xl:text-xl">
          {t('graphicDesign')}
        </span>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
