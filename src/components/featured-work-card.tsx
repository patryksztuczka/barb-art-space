import React, { createElement } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';

import { IFeaturedWork } from '@/utils/types/types';

interface IFeaturedWorkCardProps {
  locale: string;
  work: IFeaturedWork;
  takeWholeRow: boolean;
}

const FeaturedWorkCard = ({
  locale,
  work,
  takeWholeRow,
}: IFeaturedWorkCardProps) => {
  const t = useTranslations();

  const { title, projectSkills, thumbnail, icon, route } = work;

  return (
    <Link
      href={`/${locale}${route}`}
      className={clsx(
        'group relative flex aspect-square h-[353px] w-full select-none items-end justify-between gap-4 overflow-hidden bg-gradient-to-t from-black/75 to-transparent px-4 py-3 xl:aspect-auto xl:h-[550px] xl:w-full xl:flex-col xl:items-start xl:justify-end xl:gap-2 xl:bg-none xl:hover:bg-gradient-to-t',
        takeWholeRow && 'xl:col-span-2',
      )}
    >
      <Image
        src={thumbnail}
        className="-z-10 scale-110 object-cover xl:transition-transform xl:group-hover:scale-100"
        alt=""
        fill
      />
      <div className="flex flex-col xl:invisible xl:translate-y-6 xl:transition-transform xl:group-hover:visible xl:group-hover:translate-y-0">
        <h4 className="mb-1 font-anton text-xl">{title}</h4>
        <p className="font-epilogue text-sm">
          {projectSkills.map((skill) => t(`${skill}`)).join(', ')}
        </p>
      </div>
      <div className="xl:invisible xl:translate-y-6 xl:transition-transform xl:group-hover:visible xl:group-hover:translate-y-0">
        {createElement(icon, {})}
      </div>
    </Link>
  );
};

export default FeaturedWorkCard;
