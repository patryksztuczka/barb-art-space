import React from 'react';

import { IFeaturedWork } from '@/utils/types/types';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface IFeaturedWorkCardProps {
  work: IFeaturedWork;
}

const FeaturedWorkCard = ({ work }: IFeaturedWorkCardProps) => {
  const t = useTranslations();
  const { title, projectSkills, thumbnail } = work;
  return (
    <div className="relative flex h-[250px] w-full flex-col justify-end bg-gradient-to-t from-black/75 to-transparent px-4 py-3">
      <Image src={thumbnail} alt="" fill className="-z-10 object-cover" />
      <h4 className="mb-1 font-anton text-xl">{title}</h4>
      <p className="font-epilogue text-sm">
        {projectSkills.map((skill) => t(`${skill}`)).join(', ')}
      </p>
    </div>
  );
};

export default FeaturedWorkCard;
