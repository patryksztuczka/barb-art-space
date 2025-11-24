import React from 'react';

import Logo from '@/components/logo';

const UnderConstructionPage = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#03030A] text-white">
      {/* Grainy background like old app */}
      <div className="grain-bg pointer-events-none fixed inset-0 -z-10 opacity-10" />

      {/* Soft glow accents */}
      <div className="bg-[#F9B54C]/14 pointer-events-none absolute -left-24 -top-32 h-64 w-64 rounded-full blur-3xl md:-left-40 md:-top-40 md:h-96 md:w-96" />
      <div className="bg-[#FF5E7E]/14 pointer-events-none absolute -bottom-40 -right-24 h-64 w-64 rounded-full blur-3xl md:-bottom-48 md:-right-40 md:h-96 md:w-96" />

      <main className="relative mx-6 w-full max-w-xl">
        <div className="mb-8 flex justify-center md:justify-start">
          <Logo />
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(0,0,0,0.7)] backdrop-blur-xl md:p-10">
          <span className="font-epilogue text-[10px] uppercase tracking-[0.3em] text-white/60 md:text-xs">
            Portfolio refresh in progress
          </span>

          <h1 className="mt-6 font-glamora text-4xl uppercase tracking-[0.2em] md:text-5xl">
            Under construction
          </h1>

          <p className="mt-5 font-epilogue text-sm text-white/70 md:mt-6 md:text-base">
            I&apos;m currently rebuilding this space to better showcase recent
            work, process, and experiments. Please check back soon for the full
            experience.
          </p>

          {/* Fancy progress bar */}
          <div className="mt-8">
            <div className="flex items-center justify-between font-epilogue text-[10px] uppercase tracking-[0.2em] text-white/50 md:text-xs">
              <span>Phase one</span>
              <span>68%</span>
            </div>
            <div className="mt-3 h-1.5 w-full rounded-full bg-white/10">
              <div className="h-1.5 w-2/3 animate-pulse rounded-full bg-gradient-to-r from-[#F9B54C] via-[#FF5E7E] to-[#FDFF9C]" />
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-4 font-epilogue text-[10px] uppercase tracking-[0.2em] text-white/50 md:mt-8 md:text-xs">
            <span className="rounded-full border border-white/15 px-3 py-1">
              UX / UI
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1">
              Visual design
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1">
              Art direction
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UnderConstructionPage;
