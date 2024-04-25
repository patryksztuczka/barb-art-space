import React, { createElement } from 'react';

import { IFeaturedWork } from '@/utils/types/types';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import clsx from 'clsx';

interface IFeaturedWorkCardProps {
  work: IFeaturedWork;
  takeWholeRow: boolean;
}

const FeaturedWorkCard = ({ work, takeWholeRow }: IFeaturedWorkCardProps) => {
  const t = useTranslations();
  const { title, projectSkills, thumbnail, icon } = work;
  return (
    <div
      className={clsx(
        'relative flex aspect-square h-[353px] w-full items-end justify-between gap-4 bg-gradient-to-t from-black/75 to-transparent px-4 py-3 xl:aspect-auto xl:h-[550px] xl:w-full xl:flex-col xl:items-start xl:justify-end xl:gap-2',
        takeWholeRow && 'xl:col-span-2',
      )}
    >
      <Image src={thumbnail} alt="" fill className="-z-10 object-cover" />
      <div className="flex flex-col">
        <h4 className="mb-1 font-anton text-xl">{title}</h4>
        <p className="font-epilogue text-sm">
          {projectSkills.map((skill) => t(`${skill}`)).join(', ')}
        </p>
      </div>
      <div>{createElement(icon, {})}</div>
    </div>
  );
};

export default FeaturedWorkCard;
