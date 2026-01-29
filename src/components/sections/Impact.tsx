import React from 'react';

export default function Impact() {
  return (
    <section id="impacto" className="relative w-full px-4 py-10 md:px-8 md:py-20 lg:px-16 lg:py-24 bg-[#FAF0E6] overflow-hidden">
      {/* Max-width wrapper to contain content on wide screens */}
      <div className="relative max-w-[1440px] mx-auto">
        {/* 2 Column Layout - stacked on mobile/tablet, side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="flex flex-col">
            {/* Title */}
            <h2 className="text-3xl font-bold text-[#111827] text-left md:text-5xl lg:text-6xl mb-8 md:mb-12">
              O Impacto da <br className='md:hidden'/>tua doação
            </h2>
            
            {/* Intro paragraph */}
            <p className="text-base text-[#4b5563] text-left mb-8 md:text-lg md:mb-12">
              Com o teu apoio, podemos continuar a desenvolver e fortalecer a Comfy App, promovendo a saúde mental e o bem-estar emocional dos jovens. A tua doação será essencial para:
            </p>

            {/* Bullet list in green box */}
            <div className="bg-[#D7D7AA] rounded-[20px] p-8 mb-8">
              <ul className="space-y-4 text-base md:text-lg text-[#111827]">
                <li className="flex items-start gap-4 font-bold">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-1">
                    <img src="app/tiny_pink_cloud.svg" alt="" className="w-full h-full object-contain" />
                  </span>
                  <span>Desenvolver e melhorar a tecnologia da aplicação</span>
                </li>
                <li className="flex items-start gap-4 font-bold">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-1">
                    <img src="app/tiny_pink_cloud.svg" alt="" className="w-full h-full object-contain" />
                  </span>
                  <span>Reforçar e capacitar a nossa equipa de profissionais especializados em saúde mental</span>
                </li>
                <li className="flex items-start gap-4 font-bold">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-1">
                    <img src="app/tiny_pink_cloud.svg" alt="" className="w-full h-full object-contain" />
                  </span>
                  <span>Criar conteúdos originais e adaptados a cada faixa etária, incluindo jogos, áudios e ferramentas interativas, apoiando criadores e profissionais especializados</span>
                </li>
              </ul>
            </div>

            {/* Concluding paragraph */}
            <p className="text-base text-[#4b5563] text-left md:text-lg">
              Cada contribuição faz uma diferença real na vida dos jovens de Olhão, ajudando-os a crescer com mais confiança, equilíbrio emocional e ferramentas para enfrentar os desafios do futuro.
            </p>
          </div>

          {/* RIGHT COLUMN: Visual Elements and Callout - Mobile */}
          <div className="relative block md:hidden min-h-[380px]">
            {/* Person photo in flower shape - positioned right on mobile (matching Figma) */}
            <div className="absolute right-[-20px] top-0 w-[220px] h-[180px]">
              <img src="app/cloud_kneeling_phone.svg" alt="" className="w-full h-full object-contain" loading="lazy" />
            </div>

            {/* Callout box - positioned overlapping from left side (matching Figma) */}
            <div className="absolute top-[80px] left-[10px] w-[200px] text-center bg-[#A0D2B4] rounded-[20px] p-4 z-5">
              <p className="text-xs text-[#111827]">
                A app vai ajudar os jovens a melhorar a sua saúde mental, a sua autoestima e a se sentirem mais conectados
              </p>
            </div>

            {/* Purple smiling character - bottom right on mobile (matching Figma) */}
            <div className="absolute right-[60px] top-[220px] w-[112px] h-[140px] z-10">
              <img src="app/pink_square_pants.svg" alt="" className="w-full h-full object-contain" loading="lazy" />
            </div>
          </div>

          {/* RIGHT COLUMN: Visual Elements and Callout - Tablet */}
          <div className="relative hidden md:block lg:hidden min-h-[400px]">
            {/* Person photo in cloud shape - centered on tablet */}
            <div className="absolute md:left-[340px] md:w-[300px] md:right-auto top-[-15px]">
              <img src="app/cloud_kneeling_phone.svg" alt="" className="w-full h-full object-contain" loading="lazy" />
            </div>

            {/* Callout box - positioned overlapping with cloud photo on tablet */}
            <div className="absolute md:top-[120px] md:w-[210px] md:left-1/3 md:-translate-x-1/2 text-center bg-[#A0D2B4] rounded-[20px] md:p-6 z-5">
              <p className="text-sm md:text-base text-[#111827]">
                A app vai ajudar os jovens a melhorar a sua saúde mental, a sua autoestima e a se sentirem mais conectados
              </p>
            </div>

            {/* Purple smiling character - bottom center on tablet */}
            <div className="absolute md:left-1/2 md:-translate-x-1/2 md:right-auto md:top-[280px] md:w-[120px] md:h-[150px] z-10">
              <img src="app/pink_square_pants.svg" alt="" className="w-full h-full object-contain" loading="lazy" />
            </div>
          </div>

          {/* RIGHT COLUMN: Visual Elements and Callout - Desktop only */}
          <div className="relative hidden lg:block min-h-[600px]">
            {/* Person photo in cloud shape - upper right */}
            <div className="absolute lg:right-[-180px] top-0 lg:w-[380px] lg:h-[300px]">
              <img src="app/cloud_kneeling_phone.svg" alt="" className="w-full h-full object-contain" loading="lazy" />
            </div>

            {/* Callout box - positioned overlapping with cloud photo */}
            <div className="absolute lg:right-[110px] lg:top-[160px] lg:w-[320px] bg-[#A0D2B4] rounded-[20px] lg:p-8 lg:md:p-12 z-5">
              <p className="text-base lg:text-lg text-[#111827]">
                A app vai ajudar os jovens a melhorar a sua saúde mental, a sua autoestima e a se sentirem mais conectados
              </p>
            </div>

            {/* Purple smiling character - bottom right, overlapping with callout */}
            <div className="absolute lg:right-[40px] lg:top-[350px] lg:w-[160px] lg:h-[200px] z-10">
              <img src="app/pink_square_pants.svg" alt="" className="w-full h-full object-contain" loading="lazy" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

