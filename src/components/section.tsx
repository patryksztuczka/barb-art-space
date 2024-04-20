import React, { ReactNode } from 'react';

import SectionHeading from './section-heading';

interface ISectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: ISectionProps) => {
  return (
    <section className="mt-[54px] px-5">
      <SectionHeading title={title} />
      {children}
    </section>
  );
};

export default Section;
