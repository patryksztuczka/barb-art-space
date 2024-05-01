import React, { ReactNode } from 'react';

import SectionHeading from './section-heading';

interface ISectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section = ({ id, title, children }: ISectionProps) => {
  return (
    <section id={id} className="px-5 pt-[54px] xl:px-6 xl:pt-[90px]">
      <SectionHeading title={title} />
      {children}
    </section>
  );
};

export default Section;
