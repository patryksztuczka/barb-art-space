import { ROUTES, featuredWorkCaseStudy } from '@/utils/constants/constants';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';
import blurrySubtract from '@/assets/images/blurry-subtract.svg';

interface Params {
  params: {
    locale: string;
    work: string;
  };
}

const WorkPage = ({ params: { work } }: Params) => {
  const caseStudy = featuredWorkCaseStudy.find((item) => item.id === work);

  if (!caseStudy) {
    redirect(ROUTES.home);
  }

  const t = useTranslations();

  const { title, projectOverview, role, subtitle, images } = caseStudy;

  return (
    <div className="grid w-full grid-cols-1 p-5 xl:max-w-7xl xl:grid-cols-2 xl:gap-x-[90px] xl:px-6 xl:py-4">
      <section>
        <h1 className="font-glamora text-[78px] leading-none">{title}</h1>
        {subtitle ? (
          <p className="mt-2 font-epilogue">{t(`${subtitle}`)}</p>
        ) : null}
        <p className="my-6 bg-gradient-to-r from-[#FF004D] to-[#FF9000] bg-clip-text font-anton text-xl uppercase text-transparent">
          {t(`${role}`)}
        </p>
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <h2 className="after:content-blurry-subtract font-anton text-xl uppercase">
              {t('projectOverview')}
            </h2>
            <Image src={blurrySubtract} alt="" width={32} height={32} />
          </div>
          <p className="font-epilogue leading-[30px]">
            {t(`${projectOverview}`)}
          </p>
        </section>
      </section>
      {images.map((image, index) =>
        index === 0 ? (
          <div
            key={index}
            className="relative my-6 h-[250px] xl:mb-10 xl:mt-0 xl:h-[470px]"
          >
            <Image src={image} alt="" fill className="object-cover" />
          </div>
        ) : (
          <div
            key={index}
            className="relative mb-6 h-[250px] xl:col-span-2 xl:mb-10 xl:h-[650px]"
          >
            <Image src={image} alt="" fill className="object-cover" />
          </div>
        ),
      )}
    </div>
  );
};

export default WorkPage;
