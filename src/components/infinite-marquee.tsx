import React from 'react';
import { useTranslations } from 'next-intl';

import Subtract from '@/assets/icons/subtract';
import { marqueeSkills } from '@/utils/constants/constants';

const InfiniteMarquee = () => {
  const t = useTranslations();

  return (
    <div className="flex h-fit select-none overflow-hidden whitespace-nowrap border-b border-t py-4">
      {Array.from({ length: 6 }).map(() => (
        <div key={null} className="flex animate-marquee items-center uppercase">
          {marqueeSkills.map((skill) => (
            <>
              <span className="px-2 font-anton xl:text-xl">{t(skill)}</span>
              <div>
                <Subtract />
              </div>
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

export default InfiniteMarquee;
