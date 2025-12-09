import React from 'react';

export default function Impact() {
  return (
    <section id="impacto" className="relative w-full px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24 bg-[#FAF0E6] overflow-hidden lg:ml-[70px]">
      <div className="container-responsive">
        {/* 2 Column Layout - stacked on mobile/tablet, side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="flex flex-col">
            {/* Title */}
            <h2 className="text-3xl font-bold text-[#111827] text-left md:text-5xl lg:text-6xl mb-8 md:mb-12">
              O Impacto da <br className='md:hidden'/>Sua Doação
            </h2>
            
            {/* Intro paragraph */}
            <p className="text-base text-[#4b5563] text-left mb-8 md:text-lg md:mb-12">
              Com o seu apoio, poderemos desenvolver a app Comfy, promovendo a saúde mental e o bem-estar 
              emocional dos jovens. A sua doação será usada para:
            </p>

            {/* Bullet list in green box */}
            <div className="bg-[#D7D7AA] rounded-[20px] p-8 mb-8">
              <ul className="space-y-4 text-base md:text-lg text-[#111827]">
                <li className="flex items-start gap-4 font-bold">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-1">
                    <img src="/app/tiny_pink_cloud.svg" alt="" className="w-full h-full object-contain" />
                  </span>
                  <span>Desenvolver e melhorar a tecnologia da app</span>
                </li>
                <li className="flex items-start gap-4 font-bold">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-1">
                    <img src="/app/tiny_pink_cloud.svg" alt="" className="w-full h-full object-contain" />
                  </span>
                  <span>Promover a app em escolas e centros comunitários</span>
                </li>
                <li className="flex items-start gap-4 font-bold">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-1">
                    <img src="/app/tiny_pink_cloud.svg" alt="" className="w-full h-full object-contain" />
                  </span>
                  <span>Formar facilitadores especializados em saúde mental</span>
                </li>
              </ul>
            </div>

            {/* Concluding paragraph */}
            <p className="text-base text-[#4b5563] text-left md:text-lg">
              Cada contribuição faz uma diferença significativa na vida dos jovens em Olhão, ajudando-os a 
              crescer mais fortes e mais confiantes.
            </p>
          </div>

          {/* RIGHT COLUMN: Visual Elements and Callout */}
          <div className="relative hidden md:block lg:hidden min-h-[400px]">
            {/* Person photo in cloud shape - centered on tablet */}
            <div className="absolute md:left-[340px] md:w-[300px] md:right-auto top-[-15px]">
              <img src="/app/cloud_kneeling_phone.svg" alt="" className="w-full h-full object-contain" loading="lazy" />
            </div>

            {/* Callout box - positioned overlapping with cloud photo on tablet */}
            <div className="absolute md:top-[120px] md:w-[210px] md:left-1/3 md:-translate-x-1/2 text-center bg-[#A0D2B4] rounded-[20px] md:p-6 z-5">
              <p className="text-sm md:text-base text-[#111827]">
                A app vai ajudar os jovens a melhorar a sua saúde mental, a sua autoestima e a se sentirem mais conectados
              </p>
            </div>

            {/* Purple smiling character - bottom center on tablet */}
            <div className="absolute md:left-1/2 md:-translate-x-1/2 md:right-auto md:top-[280px] md:w-[120px] md:h-[150px] z-10">
              <img src="/app/pink_square_pants.svg" alt="" className="w-full h-full object-contain" loading="lazy" />
            </div>
          </div>

          {/* RIGHT COLUMN: Visual Elements and Callout - Desktop only */}
          <div className="relative hidden lg:block min-h-[600px]">
            {/* Person photo in cloud shape - upper right */}
            <div className="absolute lg:right-[-180px] top-0 lg:w-[380px] lg:h-[300px]">
              <img src="/app/cloud_kneeling_phone.svg" alt="" className="w-full h-full object-contain" loading="lazy" />
            </div>

            {/* Callout box - positioned overlapping with cloud photo */}
            <div className="absolute lg:right-[110px] lg:top-[160px] lg:w-[320px] bg-[#A0D2B4] rounded-[20px] lg:p-8 lg:md:p-12 z-5">
              <p className="text-base lg:text-lg text-[#111827]">
                A app vai ajudar os jovens a melhorar a sua saúde mental, a sua autoestima e a se sentirem mais conectados
              </p>
            </div>

            {/* Purple smiling character - bottom right, overlapping with callout */}
            <div className="absolute lg:right-[40px] lg:top-[350px] lg:w-[160px] lg:h-[200px] z-10">
              <img src="/app/pink_square_pants.svg" alt="" className="w-full h-full object-contain" loading="lazy" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

