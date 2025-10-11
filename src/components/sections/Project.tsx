import React from 'react';
import projectImg from '../../assets/zonadesconforto.png';

export default function Project() {
  return (
    <section id="projeto" className="relative w-full px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24 bg-[#FAF0E6]">
      {/* Background noise radial SVG */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img src="/project-bg.svg" alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="container-responsive relative z-10">
        {/* Row 1: Title and badge */}
        <div className="flex items-start justify-between gap-8">
          <div className="max-w-[752px]">
            <h2 className="font-fredoka font-semibold text-[40px] md:text-[56px] lg:text-[72px] leading-[1.08] text-black">
              O Projeto Zona De(s)conforto
            </h2>
            <p className="mt-6 font-fredoka font-normal text-[18px] leading-[28px] md:text-[22px] md:leading-8 lg:text-[24px] lg:leading-[32px] text-black">
              <span className="font-bold">Zona De(s)conforto</span> é um projeto premiado apoiado pelo <span className="font-bold">Portugal Inovação Social</span>, criado pela <span className="font-bold">MOCES</span>. A sua missão é promover a saúde mental entre jovens dos 12 aos 18 anos, através de uma combinação de atividades presenciais nas escolas e uma app inovadora e gratuita (a App Comfy). O projeto oferece um espaço seguro para o desenvolvimento de competências emocionais, o aumento da autoestima e a construção de resiliência para enfrentar os desafios da vida.
            </p>
          </div>
          <div className="shrink-0 w-[160px] h-[160px] md:w-[220px] md:h-[220px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden">
            <img src={projectImg.src} alt="Logótipo Zona De(s)conforto" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        {/* Row 2: Media card + copy + CTA */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-16">
          {/* Rotated media card */}
          <div className="justify-self-start">
            <div className="relative inline-block rotate-[345deg]">
              <div className="relative w-[320px] h-[200px] md:w-[420px] md:h-[260px] lg:w-[485px] lg:h-[300px] rounded-[24px] border-4 border-[#BEC864] bg-white shadow-[0_4px_20px_rgba(180,150,200,0.3)] overflow-hidden">
                <img src="/project-media.png" alt="Imagem ilustrativa do projeto Zona De(s)conforto" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              </div>
              {/* Play badge (non-functional) */}
              <div className="absolute -right-6 -bottom-10 w-[96px] h-[96px] md:w-[112px] md:h-[112px] lg:w-[128px] lg:h-[128px] rounded-full bg-white border-4 border-[#d28cb4] shadow-[0_6px_20px_rgba(0,0,0,0.15)] grid place-items-center select-none" aria-hidden>
                <span className="text-[#d28cb4] text-3xl md:text-4xl lg:text-5xl leading-none">▶︎</span>
              </div>
            </div>
          </div>

          {/* Right copy + CTA */}
          <div className="flex flex-col gap-12 max-w-[558px]">
            <div className="font-fredoka text-black">
              <p className="text-[18px] leading-[28px] md:text-[22px] md:leading-8 lg:text-[24px] lg:leading-[32px]">
                Este é o início de um movimento para tornar a saúde mental uma prioridade. Começando no Município de Olhão, o nosso objetivo é expandir este impacto transformador a nível nacional.
              </p>
              <p className="text-[18px] leading-[28px] md:text-[22px] md:leading-8 lg:text-[24px] lg:leading-[32px] mt-4">
                Siga a nossa <a href="https://www.instagram.com/the.comfy.app/" className="underline" target="_blank" rel="noreferrer">página</a> e junte-se a nós nesta jornada de transformação!
              </p>
              <p className="text-[18px] leading-[28px] md:text-[22px] md:leading-8 lg:text-[24px] lg:leading-[32px] mt-4">
                Se deseja apoiar este projeto, por favor, faça uma doação <a href="https://gofund.me/5155e84f" className="underline" target="_blank" rel="noreferrer">aqui</a>.
              </p>
            </div>

            {/* Layered CTA (non-functional) */}
            <div className="relative h-20 w-[320px] md:w-[420px] lg:w-[430px]">
              <div 
                className="absolute left-1/2 top-1/2 px-10 py-6 rounded-[24px] border-4 border-black bg-black"
                style={{ transform: 'translate(calc(-50% + 6px), calc(-50% + 6px))' }}
                aria-hidden
              />
              <button 
                aria-disabled 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d7d7aa] px-10 py-6 rounded-[24px] border-4 border-black font-fredoka font-semibold text-[14px] md:text-[16px] lg:text-[16px] uppercase text-black whitespace-nowrap"
              >
                SAIBA MAIS SOBRE O PROJETO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

