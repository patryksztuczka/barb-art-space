import React from 'react';
import { useTranslations } from 'next-intl';
import Subtract from '@/assets/icons/subtract';

const InfiniteMarquee = () => {
  const t = useTranslations();

  return (
    <div className="flex overflow-hidden whitespace-nowrap border-b border-t py-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="flex animate-marquee items-center">
          <span className="px-2 font-anton xl:text-xl">
            {t('classicalArts')}
          </span>
          <div>
            <Subtract />
          </div>
          <span className="px-2 font-anton xl:text-xl">
            {t('userInterface')}
          </span>
          <div>
            <Subtract />
          </div>
          <span className="px-2 font-anton xl:text-xl">
            {t('userExperience')}
          </span>
          <div>
            <Subtract />
          </div>
          <span className="px-2 font-anton xl:text-xl">
            {t('graphicDesign')}
          </span>
          <div>
            <Subtract />
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfiniteMarquee;
