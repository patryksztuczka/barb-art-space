import React, { ReactNode } from 'react';

import SectionHeading from './section-heading';

interface ISectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: ISectionProps) => {
  return (
    <section className="px-5 pt-[54px] xl:px-6 xl:pt-[90px]">
      <SectionHeading title={title} />
      {children}
    </section>
  );
};

export default Section;
