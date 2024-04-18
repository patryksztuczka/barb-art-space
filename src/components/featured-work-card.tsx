import React from 'react';

import { IFeaturedWork } from '@/utils/types/types';

interface IFeaturedWorkCardProps {
  work: IFeaturedWork;
}

const FeaturedWorkCard = ({ work }: IFeaturedWorkCardProps) => {
  const { title, projectSkills } = work;
  return <div className="h-[250px] w-full bg-orange-700"></div>;
};

export default FeaturedWorkCard;
