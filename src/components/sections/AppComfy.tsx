import React from 'react';
import DonateButton from '../shared/DonateButton';

export default function AppComfy() {
  return (
    <section id="app" className="relative w-full px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24 bg-transparent">
      {/* Cloud decoration top-right */}
      <div className="pointer-events-none absolute right-0 md:right-[10px] rotate-[20deg] top-[10px] w-[180px] h-[135px] md:w-[300px] md:h-[225px] lg:w-[436px] lg:h-[326px] opacity-80 z-0">
        <img src="app/greencloud-top.svg" alt="" className="w-full h-full object-contain" />
      </div>

      {/* Left phone mockups */}
      <div aria-hidden className="absolute -left-[60px] md:-left-[40px] lg:left-[72px] top-[0px] z-[10]">
        <div className="relative w-[160px] h-[300px] md:w-[220px] md:h-[410px] lg:w-[280px] lg:h-[520px]">
          <div className="absolute left-6 md:left-10 top-[40px] md:top-[72px] rotate-[-7deg] w-[120px] h-[250px] md:w-[170px] md:h-[360px] lg:w-[220px] lg:h-[460px] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] border-2 md:border-4 border-[#B496C8] overflow-hidden bg-white shadow-[0_6px_20px_rgba(0,0,0,0.15)]">
            <img src="app/phone-left-1.png" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -left-[70px] md:-left-[100px] lg:-left-[140px] top-0 rotate-[-27deg] w-[120px] h-[250px] md:w-[170px] md:h-[360px] lg:w-[220px] lg:h-[460px] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] border-2 md:border-4 border-[#B496C8] overflow-hidden bg-white shadow-[0_6px_20px_rgba(0,0,0,0.15)]">
            <img src="app/phone-left-2.png" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="container-responsive">
        {/* Lavender rounded panel */}
        <div className="relative z-[1] mx-auto max-w-[1280px] bg-[#B496C8] rounded-[40px] md:rounded-[60px] lg:rounded-[80px] px-6 md:px-10 lg:px-20 py-12 md:py-16 lg:py-24 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
          {/* Centered content */}
          <div className="relative z-[2] max-w-[946px] mx-auto flex flex-col items-center gap-8 z-[1000]">
            {/* Title */}
            <div className="flex items-end justify-center gap-3">
              <h2 className="font-semibold text-black text-[40px] md:text-[56px] lg:text-[72px] leading-[1.08]">A App</h2>
              <span className="h-[46px] md:h-[58px] lg:h-[74px] inline-block">
                <img src="app/greencloud.svg" alt="" className="h-full w-auto" />
              </span>
            </div>
            <h3 className="font-semibold text-black text-center text-[28px] md:text-[40px] lg:text-[56px] leading-[1.08] z-[1000]">
              Apoio ao Bem-Estar e Saúde Mental dos Jovens
            </h3>
            {/* Body */}
            <p className="text-black text-center text-[16px] leading-6 md:text-[20px] md:leading-8 lg:text-[24px] lg:leading-8 max-w-[820px] z-[1000]">
              A app Comfy foi desenhada para ajudar os jovens a desenvolverem as suas competências emocionais, melhorar a autoestima e aumentar a resiliência de maneira gratuita. Através de conteúdos interativos e ferramentas adaptadas, os jovens terão o apoio necessário para enfrentar situações de stress, ansiedade e outros desafios emocionais, promovendo um equilíbrio psicológico saudável.
            </p>

            {/* CTA */}
            <div className="mt-2">
              <DonateButton
                text="CONHEÇA A APP COMFY"
                showFace={false}
                href="https://www.instagram.com/the.comfy.app/"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right phone mockups */}
      <div aria-hidden className="absolute -right-[40px] md:-right-[20px] lg:right-[72px] bottom-[60px] md:bottom-[40px] lg:bottom-[32px] z-[10]">
        <div className="relative w-[160px] h-[300px] md:w-[220px] md:h-[410px] lg:w-[280px] lg:h-[520px]">
          <div className="absolute right-0 bottom-0 rotate-[10deg] w-[120px] h-[250px] md:w-[170px] md:h-[360px] lg:w-[220px] lg:h-[460px] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] border-2 md:border-4 border-[#B496C8] overflow-hidden bg-white shadow-[0_6px_20px_rgba(0,0,0,0.15)]">
            <img src="app/phone-right-1.png" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -right-[40px] md:-right-[50px] lg:-right-[70px] bottom-[20px] md:bottom-[30px] lg:bottom-[40px] rotate-[19deg] w-[120px] h-[250px] md:w-[170px] md:h-[360px] lg:w-[220px] lg:h-[460px] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] border-2 md:border-4 border-[#B496C8] overflow-hidden bg-white shadow-[0_6px_20px_rgba(0,0,0,0.15)]">
            <img src="app/phone-right-2.png" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>

      {/* Bottom-left friendly blob - positioned relative to the section */}
      <div aria-hidden className="absolute left-[100px] md:left-[160px] lg:left-[220px] bottom-[10px] md:bottom-[15px] lg:bottom-[20px] w-[90px] h-[80px] md:w-[150px] md:h-[132px] lg:w-[230px] lg:h-[203px] z-[10]">
        <img src="app/black_smiling_cloud.svg" alt="" className="w-full h-full object-contain" />
      </div>
    </section>
  );
}

