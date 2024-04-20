import React from 'react';
import Image from 'next/image';

import blurrySubtract from '@/assets/images/blurry-subtract.svg';

interface ISectionHeadingProps {
  title: string;
}

const SectionHeading = ({ title }: ISectionHeadingProps) => {
  return (
    <div className="mb-5 flex items-center justify-center gap-4">
      <Image src={blurrySubtract} alt="" width={40} height={40} />
      <h2 className="text-center font-glamora text-[28px]">{title}</h2>
      <Image src={blurrySubtract} alt="" width={40} height={40} />
    </div>
  );
};

export default SectionHeading;