import { IOtherWork } from '@/utils/types/types';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { createElement } from 'react';

export interface IOtherWorkCardProps {
  work: IOtherWork;
}

const OtherWorkCard = ({ work }: IOtherWorkCardProps) => {
  const t = useTranslations();
  const { title, description, thumbnail, icons } = work;
  return (
    <div className="group relative flex aspect-square h-[353px] w-full items-end justify-between gap-4 overflow-hidden bg-gradient-to-t from-black/75 to-transparent px-4 py-3 xl:aspect-auto xl:h-[500px] xl:w-full xl:gap-2 xl:bg-none xl:hover:bg-gradient-to-t">
      <Image
        src={thumbnail}
        className="-z-10 scale-110 object-cover xl:transition-transform xl:group-hover:scale-100"
        alt=""
        fill
      />
      <div className="flex flex-col xl:invisible xl:translate-y-6 xl:transition-transform xl:group-hover:visible xl:group-hover:translate-y-0">
        <h4 className="mb-1 font-anton text-xl">{title}</h4>
        <p className="font-epilogue text-sm">{t(`${description}`)}</p>
      </div>
      {icons && icons.length > 0 ? (
        <div className="flex items-end justify-end gap-1">
          {icons.map((icon, i) => (
            <div
              key={i}
              className="xl:invisible xl:translate-y-6 xl:transition-transform xl:group-hover:visible xl:group-hover:translate-y-0"
            >
              {createElement(icon)}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default OtherWorkCard;
