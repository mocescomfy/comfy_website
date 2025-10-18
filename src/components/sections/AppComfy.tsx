import React from 'react';
import Button from '../shared/Button';

export default function AppComfy() {
  return (
    <section id="app" className="relative w-full px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24 bg-transparent">
      {/* Cloud decoration top-right */}
      <div className="pointer-events-none absolute right-[10px] rotate-[20deg] top-[10px] w-[436px] h-[326px] opacity-80 hidden lg:block z-0">
        <img src="/app/greencloud-top.svg" alt="" className="w-full h-full object-contain" />
      </div>

      <div aria-hidden className="hidden lg:block absolute left-[72px] top-[0px] z-[10]">
        <div className="relative w-[280px] h-[520px]">
          <div className="absolute left-10 top-[72px] rotate-[-7deg] w-[220px] h-[460px] rounded-[24px] border-4 border-[#B496C8] overflow-hidden bg-white shadow-[0_6px_20px_rgba(0,0,0,0.15)]">
            <img src="/app/phone-left-1.png" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -left-[140px] top-0 rotate-[-27deg] w-[220px] h-[460px] rounded-[24px] border-4 border-[#B496C8] overflow-hidden bg-white shadow-[0_6px_20px_rgba(0,0,0,0.15)]">
            <img src="/app/phone-left-2.png" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="container-responsive">
        {/* Lavender rounded panel */}
        <div className="relative z-[1] mx-auto max-w-[1280px] bg-[#B496C8] rounded-[40px] md:rounded-[60px] lg:rounded-[80px] px-6 md:px-10 lg:px-20 py-12 md:py-16 lg:py-24 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
          {/* Centered content */}
          <div className="relative z-[2] max-w-[946px] mx-auto flex flex-col items-center gap-8">
            {/* Title */}
            <div className="flex items-end justify-center gap-3">
              <h2 className="font-fredoka font-semibold text-black text-[40px] md:text-[56px] lg:text-[72px] leading-[1.08]">A App</h2>
              <span className="h-[46px] md:h-[58px] lg:h-[74px] inline-block">
                <img src="/app/greencloud.svg" alt="" className="h-full w-auto" />
              </span>
            </div>
            <h3 className="font-fredoka font-semibold text-black text-center text-[28px] md:text-[40px] lg:text-[56px] leading-[1.08]">
              Apoio ao Bem-Estar e Saúde Mental dos Jovens
            </h3>
            {/* Body */}
            <p className="font-fredoka text-black text-center text-[16px] leading-6 md:text-[20px] md:leading-8 lg:text-[24px] lg:leading-8 max-w-[820px]">
              A app Comfy foi desenhada para ajudar os jovens a desenvolverem as suas competências emocionais, melhorar a autoestima e aumentar a resiliência de maneira gratuita. Através de conteúdos interativos e ferramentas adaptadas, os jovens terão o apoio necessário para enfrentar situações de stress, ansiedade e outros desafios emocionais, promovendo um equilíbrio psicológico saudável.
            </p>

            {/* Layered CTA */}
            <div className="relative h-16 md:h-20 w-[300px] md:w-[380px] lg:w-[397px] mt-2">
              <div className="absolute left-1/2 top-1/2 -translate-x-[calc(50%-4px)] -translate-y-[calc(50%-4px)] bg-black border-4 border-black rounded-[24px] px-8 md:px-10 py-4 md:py-6" aria-hidden />
              <Button variant="secondary" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-black rounded-[24px] !px-10 !py-6 uppercase font-fredoka text-[16px] md:text-[20px] lg:text-[24px] w-full whitespace-nowrap">
                CONHEÇA A APP COMFY
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative phone mockups - positioned relative to the section */}
      
      <div aria-hidden className="hidden lg:block absolute right-[72px] bottom-[32px] z-[10]">
        <div className="relative w-[280px] h-[520px]">
          <div className="absolute right-0 bottom-0 rotate-[10deg] w-[220px] h-[460px] rounded-[24px] border-4 border-[#B496C8] overflow-hidden bg-white shadow-[0_6px_20px_rgba(0,0,0,0.15)]">
            <img src="/app/phone-right-1.png" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -right-[70px] bottom-[40px] rotate-[19deg] w-[220px] h-[460px] rounded-[24px] border-4 border-[#B496C8] overflow-hidden bg-white shadow-[0_6px_20px_rgba(0,0,0,0.15)]">
            <img src="/app/phone-right-2.png" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>

      {/* Bottom-left friendly blob - positioned relative to the section */}
      <div aria-hidden className="lg:block absolute left-[220px] bottom-[20px] w-[230px] h-[203px] z-[10]">
        <img src="/app/black_smiling_cloud.svg" alt="" className="w-full h-full object-contain" />
      </div>
    </section>
  );
}

