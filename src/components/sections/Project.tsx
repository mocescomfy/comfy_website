import React from 'react';
import projectImg from '../../assets/zonadesconforto.png';
import DonateButton from '../shared/DonateButton';

export default function Project() {
  return (
    <section id="projeto" className="relative w-full px-4 py-10 md:px-8 md:py-20 lg:px-16 lg:py-24 bg-[#FAF0E6]">
      {/* Background with CSS radial gradient (scales to any viewport) + noise texture */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* CSS radial gradient - scales properly at all viewport sizes */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'radial-gradient(ellipse 100% 50% at 50% 50%, #D28CB4 0%, rgba(250, 240, 230, 0) 100%)'
          }}
        />
        {/* Noise texture overlay using inline SVG filter */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <filter id="projectNoise" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="3" result="noise" seed="2"/>
              <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise"/>
              <feComponentTransfer in="alphaNoise" result="coloredNoise">
                <feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"/>
              </feComponentTransfer>
              <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="colorFlood"/>
              <feComposite operator="in" in2="coloredNoise" in="colorFlood" result="coloredNoiseFinal"/>
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#projectNoise)" fill="transparent"/>
        </svg>
      </div>
      <div className="container-responsive relative z-10">
        {/* Row 1: Title and badge */}
        <div className="flex items-start justify-between gap-8">
          <div className="max-w-[752px]">
            <h2 className="font-semibold text-[40px] md:text-[56px] lg:text-[72px] leading-[1.08] text-black">
              O Projeto Zona De(s)conforto
            </h2>
            <p className="mt-6 font-normal text-[18px] leading-[28px] md:text-[22px] md:leading-8 lg:text-[24px] lg:leading-[32px] text-black">
              Zona De(s)conforto - uma zona confortável para partilhar o desconforto, é um projeto financiado pelo Portugal Inovação Social e criado pela associação MOCES.
            </p>
            <p className="mt-4 font-normal text-[18px] leading-[28px] md:text-[22px] md:leading-8 lg:text-[24px] lg:leading-[32px] text-black">
              A nossa missão é promover a saúde mental de jovens dos 12 aos 18 anos, através de uma aplicação inovadora, gratuita e acessível: The Comfy App.
            </p>
          </div>
          <div className="hidden md:block shrink-0 md:w-[220px] md:h-[220px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden">
            <img src={projectImg.src} alt="Logótipo Zona De(s)conforto" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        {/* Row 2: Media card + copy + CTA */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-16">
          {/* Rotated media card */}
          <div className="justify-self-start">
            <div className="relative inline-block rotate-[345deg]">
              <div className="relative w-[320px] h-[200px] md:w-[420px] md:h-[260px] lg:w-[485px] lg:h-[300px] rounded-[24px] border-4 border-[#BEC864] bg-white shadow-[0_4px_20px_rgba(180,150,200,0.3)] overflow-hidden">
                <img src="project-media.png" alt="Imagem ilustrativa do projeto Zona De(s)conforto" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              </div>
              {/* Play badge (non-functional) */}
              <div className="absolute -right-6 -bottom-10 w-[96px] h-[96px] md:w-[112px] md:h-[112px] lg:w-[128px] lg:h-[128px] rounded-full bg-white border-4 border-[#d28cb4] shadow-[0_6px_20px_rgba(0,0,0,0.15)] grid place-items-center select-none" aria-hidden>
                <span className="text-[#d28cb4] text-3xl md:text-4xl lg:text-5xl leading-none">▶︎</span>
              </div>
            </div>
          </div>

          {/* Right copy + CTA */}
          <div className="flex flex-col gap-12 max-w-[558px]">
            <div className="text-black">
              <p className="text-[18px] leading-[28px] md:text-[22px] md:leading-8 lg:text-[24px] lg:leading-[32px]">
                Acreditamos que falar sobre emoções, aprender a regulá-las e pedir ajuda não deve ser um tabu. Por isso, criámos um espaço digital seguro, pensado para os jovens, onde podem desenvolver competências emocionais, fortalecer a autoestima, cultivar a resiliência e aceder a ferramentas práticas para lidar com os desafios da vida. Todo o conteúdo é adequado à idade e complementado por apoio profissional responsável, através de uma linha de apoio via chat com psicólogos.
              </p>
              <p className="text-[18px] leading-[28px] md:text-[22px] md:leading-8 lg:text-[24px] lg:leading-[32px] mt-4">
                Este projeto é mais do que uma aplicação: é o início de um movimento para colocar a saúde mental no centro das prioridades sociais. Começamos pelo Município de Olhão, onde está a ser implementado o projeto-piloto, com o objetivo claro de expandir este impacto transformador a nível nacional, em colaboração com municípios, escolas e entidades parceiras.
              </p>
              <p className="text-[18px] leading-[28px] md:text-[22px] md:leading-8 lg:text-[24px] lg:leading-[32px] mt-4">
                A Comfy App é gratuita, desenvolvida com o apoio de profissionais de saúde mental e baseada em evidência científica, complementando e nunca substituindo o papel das famílias, escolas e serviços de saúde.
              </p>
            </div>

            {/* CTA */}
            <div className="flex justify-center md:justify-start">
              <div className="relative h-20 w-[320px] md:w-[420px] lg:w-[430px]">
                <DonateButton
                  text="Sabe mais sobre o projeto"
                  showFace={false}
                  href="https://www.instagram.com/the.comfy.app/"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

