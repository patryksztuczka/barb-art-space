import React from 'react';

const UnderConstructionPage = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#03030A] text-white">
      {/* Grainy background like old app */}
      <div className="grain-bg pointer-events-none fixed inset-0 -z-10 opacity-10" />

      {/* Soft glow accents */}
      <div className="bg-[#F9B54C]/14 pointer-events-none absolute -left-24 -top-32 h-64 w-64 rounded-full blur-3xl md:-left-40 md:-top-40 md:h-96 md:w-96" />
      <div className="bg-[#FF5E7E]/14 pointer-events-none absolute -bottom-40 -right-24 h-64 w-64 rounded-full blur-3xl md:-bottom-48 md:-right-40 md:h-96 md:w-96" />

      <main className="relative mx-6 w-full max-w-xl">
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

          {/* Launch status */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between font-epilogue text-[10px] uppercase tracking-[0.2em] text-white/50 md:text-xs">
              <span>Launch status</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/80 md:text-[10px]">
                In progress
              </span>
            </div>

            <ul className="space-y-2 font-epilogue text-xs text-white/70 md:text-sm">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F9B54C]" />
                <span>
                  Refreshing recent case studies and process write-ups
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5E7E]" />
                <span>Polishing visuals and motion details</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FDFF9C]" />
                <span>Final review before going live</span>
              </li>
            </ul>
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
