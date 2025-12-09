import React from 'react';

export default function Impact() {
  return (
    <section id="impacto" className="relative w-full px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24 bg-[#FAF0E6] overflow-hidden ml-[70px]">
      <div className="container-responsive">
        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="flex flex-col">
            {/* Title */}
            <h2 className="font-bold text-[#111827] text-left md:text-4xl lg:text-6xl mb-8 md:mb-12">
              O Impacto da <br/>Sua Doação
            </h2>
            
            {/* Intro paragraph */}
            <p className="text-base text-[#4b5563] text-left mb-8 md:text-lg md:mb-12">
              Com o seu apoio, poderemos desenvolver a app Comfy, promovendo a saúde mental e o bem-estar 
              emocional dos jovens. A sua doação será usada para:
            </p>

            {/* Bullet list in green box */}
            <div className="bg-[#D7D7AA] rounded-[20px] p-8 md:p-12 mb-8">
              <ul className="space-y-4 text-base md:text-lg text-[#111827]">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-1">
                    <img src="/app/tiny_pink_cloud.svg" alt="" className="w-full h-full object-contain" />
                  </span>
                  <span>Desenvolver e melhorar a tecnologia da app</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-1">
                    <img src="/app/tiny_pink_cloud.svg" alt="" className="w-full h-full object-contain" />
                  </span>
                  <span>Promover a app em escolas e centros comunitários</span>
                </li>
                <li className="flex items-start gap-4">
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
          <div className="relative hidden lg:block min-h-[600px]">
            {/* Person photo in cloud shape - upper right */}
            <div className="absolute right-[-180px] top-0 w-[380px] h-[300px]">
              <img src="/app/cloud_kneeling_phone.svg" alt="" className="w-full h-full object-contain" loading="lazy" />
            </div>

            {/* Callout box - positioned overlapping with cloud photo */}
            <div className="absolute right-[110px] top-[160px] w-[320px] bg-[#A0D2B4] rounded-[20px] p-8 md:p-12 z-5">
              <p className="text-base md:text-lg text-[#111827]">
                A app vai ajudar os jovens a melhorar a sua saúde mental, a sua autoestima e a se sentirem mais conectados
              </p>
            </div>

            {/* Purple smiling character - bottom right, overlapping with callout */}
            <div className="absolute right-[40px] top-[350px] w-[160px] h-[200px] z-10">
              <img src="/app/pink_square_pants.svg" alt="" className="w-full h-full object-contain" loading="lazy" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

