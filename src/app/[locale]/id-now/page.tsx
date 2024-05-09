import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import blurrySubtract from '@/assets/images/blurry-subtract.svg';
import Subtract from '@/assets/icons/subtract';
import { unstable_setRequestLocale } from 'next-intl/server';

interface Params {
  params: {
    locale: string;
    work: string;
  };
}

const IdNowPage = ({ params: { work, locale } }: Params) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations();

  return (
    <div className="grid w-full grid-cols-1 p-5 xl:max-w-7xl xl:grid-cols-2 xl:gap-x-[90px] xl:px-6 xl:py-4">
      <section className="flex flex-col gap-6 pb-6 pt-5 xl:col-span-2 xl:flex-row xl:gap-10 xl:pb-10 xl:pt-4">
        <div className="flex flex-col gap-6 xl:justify-center xl:gap-[42px]">
          <h1 className="mb-6 font-glamora text-[62px] leading-none">
            {t('idNow')}
          </h1>
          <p className="mb-6 bg-gradient-to-r from-[#FF004D] to-[#FF9000] bg-clip-text font-anton text-xl uppercase text-transparent">
            {t('idNowRole')}
          </p>
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <h2 className="after:content-blurry-subtract font-anton text-xl uppercase">
                {t('projectOverview')}
              </h2>
              <Image src={blurrySubtract} alt="" width={32} height={32} />
            </div>
            <p className="font-epilogue leading-[30px]">
              {t('idNowProjectOverviewParagraph')}
            </p>
          </section>
        </div>
        <div className="relative h-[250px] w-full xl:h-[500px] xl:w-[800px] xl:min-w-[800px]">
          <Image
            src="/images/featured-work/id-now/idnow-thumbnail.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </section>
      {/* <div className="relative my-6 h-[250px] xl:mb-10 xl:mt-0 xl:h-[470px]">
        <Image
          src="/images/featured-work/id-now/idnow-thumbnail.png"
          alt=""
          fill
          className="object-cover"
        />
      </div> */}
      <div className="relative mb-6 h-[250px] xl:col-span-2 xl:mb-10 xl:h-[650px]">
        <Image
          src="/images/featured-work/id-now/id-now-2.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="relative mb-[54px] h-[250px] xl:col-span-2 xl:mb-[90px] xl:h-[650px]">
        <Image
          src="/images/featured-work/id-now/id-now-3.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <section className="mb-[54px] flex flex-col gap-6">
        <div className="flex items-center gap-6">
          <h2 className="after:content-blurry-subtract font-anton text-xl uppercase">
            {t('problemStatement')}
          </h2>
          <Image src={blurrySubtract} alt="" width={32} height={32} />
        </div>
        <p className="font-epilogue leading-[30px]">
          {t('idNowProblemStatementParagraph')}
        </p>
      </section>
      <section className="mb-[54px] flex flex-col gap-6">
        <div className="flex items-center gap-6">
          <h2 className="after:content-blurry-subtract font-anton text-xl uppercase">
            {t('solution')}
          </h2>
          <Image src={blurrySubtract} alt="" width={32} height={32} />
        </div>
        <p className="font-epilogue leading-[30px]">
          {t('idNowSolutionParagraph')}
        </p>
      </section>
      <section className="mb-[54px] flex flex-col gap-6 xl:col-span-2">
        <div className="flex items-center gap-6">
          <h2 className="after:content-blurry-subtract font-anton text-xl uppercase">
            {t('background')}
          </h2>
          <Image src={blurrySubtract} alt="" width={32} height={32} />
        </div>
        <p className="font-epilogue leading-[30px]">
          {t('idNowBackgroundParagraph')}
        </p>
        <div className="relative h-[200px] xl:h-[470px]">
          <Image
            src="/images/thesis-thumbnail.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </section>
      <section className="flex flex-col gap-6 xl:col-span-2">
        <div className="flex items-center gap-6">
          <h2 className="after:content-blurry-subtract font-anton text-xl uppercase">
            {t('designProcess')}
          </h2>
          <Image src={blurrySubtract} alt="" width={32} height={32} />
        </div>
        <section>
          <h3 className="mb-4 font-anton text-[32px] uppercase">
            {t('research')}
          </h3>
          <ul className="ml-[76px]">
            <li className="mb-2">
              <div className="relative">
                <div className="absolute -left-9">
                  <Subtract />
                </div>
                <h4 className="relative font-epilogue text-xl font-bold">
                  {t('competetiveAnalysis')}
                </h4>
              </div>
              <p className="font-epilogue leading-[30px]">
                {t('idNowCompetetiveAnalysisParagraph')}
              </p>
            </li>
            <li>
              <div className="relative">
                <div className="absolute -left-9">
                  <Subtract />
                </div>
                <h4 className="relative font-epilogue text-xl font-bold">
                  {t('designInspiration')}
                </h4>
              </div>
              <p className="font-epilogue leading-[30px]">
                {t('idNowDesignInspirationParagraph')}
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="mb-4 font-anton text-[32px] uppercase">
            {t('userFlowAndLoFiMockups')}
          </h3>
          <ul className="ml-[76px]">
            <li className="mb-2">
              <div className="relative">
                <div className="absolute -left-9">
                  <Subtract />
                </div>
                <h4 className="relative font-epilogue text-xl font-bold">
                  {t('workshops')}
                </h4>
              </div>
              <p className="font-epilogue leading-[30px]">
                {t('idNowWorkshopsParagraph')}
              </p>
            </li>
            <li>
              <div className="relative">
                <div className="absolute -left-9">
                  <Subtract />
                </div>
                <h4 className="relative font-epilogue text-xl font-bold">
                  {t('loFiMockups')}
                </h4>
              </div>
              <p className="font-epilogue leading-[30px]">
                {t('idNowLoFiMockupsParagraph')}
              </p>
            </li>
          </ul>
          <div className="relative mb-7 mt-5 h-[181px] xl:h-[613px]">
            <Image
              src="/images/featured-work/id-now/id-now-flow.svg"
              alt=""
              fill
            />
          </div>
          <div className="relative h-[241px] xl:h-[337px]">
            <Image
              src="/images/featured-work/id-now/id-now-lofi.png"
              alt=""
              fill
              className="object-contain"
            />
            <Image
              src="/images/featured-work/id-now/id-now-ux.png"
              alt=""
              fill
              className="animate-reveal object-contain"
            />
          </div>
        </section>
        <section>
          <h3 className="mb-4 font-anton text-[32px] uppercase">
            {t('graphicDesign')}
          </h3>
          <ul className="ml-[76px]">
            <li className="mb-2">
              <div className="relative">
                <div className="absolute -left-9">
                  <Subtract />
                </div>
                <h4 className="relative font-epilogue text-xl font-bold">
                  {t('logoDesign')}
                </h4>
              </div>
              <p className="font-epilogue leading-[30px]">
                {t('idNowLogoDesignParagraph')}
              </p>
            </li>
            <li>
              <div className="relative">
                <div className="absolute -left-9">
                  <Subtract />
                </div>
                <h4 className="relative font-epilogue text-xl font-bold">
                  {t('documentCards')}
                </h4>
              </div>
              <p className="font-epilogue leading-[30px]">
                {t('idNowDocumentCardsParagraph')}
              </p>
            </li>
          </ul>
        </section>
        <section className="mb-[54px]">
          <h3 className="mb-4 font-anton text-[32px] uppercase">
            {t('uiDesignAndPrototyping')}
          </h3>
          <ul className="ml-[76px]">
            <li className="mb-2">
              <div className="relative">
                <div className="absolute -left-9">
                  <Subtract />
                </div>
                <h4 className="relative font-epilogue text-xl font-bold">
                  {t('development')}
                </h4>
              </div>
              <p className="font-epilogue leading-[30px]">
                {t('idNowDevelopmentParagraph')}
              </p>
            </li>
          </ul>
        </section>
      </section>
      <div className="grid grid-cols-1 xl:col-span-2 xl:grid-cols-3 xl:gap-x-[90px]">
        <section className="mb-[54px] flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <h2 className="after:content-blurry-subtract font-anton text-xl uppercase">
              {t('outcome')}
            </h2>
            <Image src={blurrySubtract} alt="" width={32} height={32} />
          </div>
          <p className="font-epilogue leading-[30px]">
            {t('idNowOutcomeParagraph')}
          </p>
        </section>
        <section className="mb-[54px] flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <h2 className="after:content-blurry-subtract font-anton text-xl uppercase">
              {t('futureSteps')}
            </h2>
            <Image src={blurrySubtract} alt="" width={32} height={32} />
          </div>
          <p className="font-epilogue leading-[30px]">
            {t('idNowFutureStepsParagraph')}
          </p>
        </section>
        <section className="mb-[54px] flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <h2 className="after:content-blurry-subtract font-anton text-xl uppercase">
              {t('challengesAndLearning')}
            </h2>
            <Image src={blurrySubtract} alt="" width={32} height={32} />
          </div>
          <p className="font-epilogue leading-[30px]">
            {t('idNowChallengesAndLearningParagraph')}
          </p>
        </section>
      </div>
    </div>
  );
};

export default IdNowPage;
