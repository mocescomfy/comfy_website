import React from 'react';

export default function Impact() {
  return (
    <section id="impacto" className="relative w-full px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24 bg-[#FAF0E6]">
      <div className="container-responsive">
        <h2 className="font-fredoka text-3xl font-bold text-[#111827] text-center md:text-4xl lg:text-5xl mb-12">
          O Impacto da Sua Doação
        </h2>
        
        <p className="font-inter text-base text-[#4b5563] text-center max-w-3xl mx-auto mb-12 md:text-lg">
          Com o seu apoio, poderemos desenvolver a app Comfy, promovendo a saúde mental e o bem-estar 
          emocional dos jovens. A sua doação será usada para:
        </p>

        <div className="bg-[#BEC864] rounded-[20px] p-8 md:p-12 mb-12">
          <ul className="space-y-4 font-inter text-base md:text-lg text-[#111827]">
            <li className="flex items-start gap-4">
              <span className="text-2xl">✓</span>
              <span>Desenvolver e melhorar a tecnologia da app</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl">✓</span>
              <span>Promover a app em escolas e centros comunitários</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl">✓</span>
              <span>Formar facilitadores especializados em saúde mental</span>
            </li>
          </ul>
        </div>

        <p className="font-inter text-base text-[#4b5563] text-center max-w-3xl mx-auto md:text-lg">
          Cada contribuição faz uma diferença significativa na vida dos jovens em Olhão, ajudando-os a 
          crescer mais fortes e mais confiantes.
        </p>
      </div>
    </section>
  );
}

