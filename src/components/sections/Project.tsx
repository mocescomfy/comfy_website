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
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-16 place-items-center lg:place-items-start">
          {/* Mascots - 3 rows group photo style */}
          <div className="place-self-center relative w-[280px] h-[300px] md:w-[380px] md:h-[380px] lg:w-[660px] lg:h-[650px]">
            {/* Back row - 3 small mascots */}
            <img
              src="app/Comfy_Bored.png"
              alt="Comfy mascot - Bored"
              className="absolute left-[25px] md:left-[45px] lg:left-[90px] top-0 w-[70px] md:w-[90px] lg:w-[155px] z-[10] drop-shadow-lg"
              loading="lazy"
            />
            <img
              src="app/Comfy_Anxiety.png"
              alt="Comfy mascot - Anxiety"
              className="absolute left-1/2 -translate-x-1/2 top-0 w-[70px] md:w-[90px] lg:w-[155px] z-[10] drop-shadow-lg"
              loading="lazy"
            />
            <img
              src="app/Comfy_Disgust.png"
              alt="Comfy mascot - Disgust"
              className="absolute right-[25px] md:right-[45px] lg:right-[90px] top-0 w-[70px] md:w-[90px] lg:w-[155px] z-[10] drop-shadow-lg"
              loading="lazy"
            />
            {/* Middle row - 3 medium mascots, overlapping back row */}
            <img
              src="app/Comfy_Sad.png"
              alt="Comfy mascot - Sad"
              className="absolute left-[5px] md:left-[15px] lg:left-[35px] top-[55px] md:top-[70px] lg:top-[125px] w-[90px] md:w-[115px] lg:w-[205px] z-[20] drop-shadow-lg"
              loading="lazy"
            />
            <img
              src="app/Comfy_Anger.png"
              alt="Comfy mascot - Anger"
              className="absolute left-1/2 -translate-x-1/2 top-[50px] md:top-[65px] lg:top-[120px] w-[95px] md:w-[120px] lg:w-[210px] z-[20] drop-shadow-lg"
              loading="lazy"
            />
            <img
              src="app/Comfy_Embarressment.png"
              alt="Comfy mascot - Embarrassment"
              className="absolute right-[5px] md:right-[15px] lg:right-[35px] top-[55px] md:top-[70px] lg:top-[125px] w-[90px] md:w-[115px] lg:w-[205px] z-[20] drop-shadow-lg"
              loading="lazy"
            />
            {/* Front row - 2 large mascots, overlapping middle row */}
            <img
              src="app/Comfy_Fear.png"
              alt="Comfy mascot - Fear"
              className="absolute left-[30px] md:left-[50px] lg:left-[95px] top-[100px] md:top-[125px] lg:top-[220px] w-[110px] md:w-[140px] lg:w-[240px] z-[30] drop-shadow-lg"
              loading="lazy"
            />
            <img
              src="app/Comfy_Happy.png"
              alt="Comfy mascot - Happy"
              className="absolute right-[30px] md:right-[50px] lg:right-[95px] top-[100px] md:top-[125px] lg:top-[220px] w-[110px] md:w-[140px] lg:w-[240px] z-[30] drop-shadow-lg"
              loading="lazy"
            />
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
            <div className="flex justify-center lg:justify-start">
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

