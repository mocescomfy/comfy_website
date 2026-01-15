import React from 'react';

export default function Transparency() {
  return (
    <section id="transparencia" className="relative w-full px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24 bg-[#FAF0E6] overflow-x-visible">
      {/* Background noise radial SVG with aqua gradient */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img src="project-bg.svg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'radial-gradient(70.32% 50% at 50% 50%, #A0D2B4 0%, rgba(250, 240, 230, 0.00) 100%)'
          }}
        />
      </div>
      <div className="container-responsive max-w-[752px] relative z-10">
        <h2 className="font-semibold text-[40px] md:text-[56px] lg:text-[72px] leading-[1.08] text-black text-center mb-8">
          Transparência e Responsabilidade
        </h2>
        
        <p className="font-normal text-[18px] leading-[28px] md:text-[22px] md:leading-8 lg:text-[24px] lg:leading-[32px] text-black text-center mb-8">
          A MOCES garante total transparência na utilização dos fundos arrecadados. Todos os donativos serão 
          utilizados exclusivamente para o desenvolvimento da app Comfy e para a promoção do projeto Zona 
          De(s)conforto. Os nossos relatórios financeiros serão partilhados periodicamente com os nossos 
          apoiantes, garantindo a confiança e o compromisso com a causa.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8 hidden">
          <button className="bg-[#B496C8] hover:bg-[#BEC864] font-semibold text-black uppercase text-[18px] md:text-[20px] lg:text-[24px] leading-none px-6 py-2 rounded-[16px] transition-colors duration-300">
            LINK 1
          </button>
          <button className="bg-[#B496C8] hover:bg-[#BEC864] font-semibold text-black uppercase text-[18px] md:text-[20px] lg:text-[24px] leading-none px-6 py-2 rounded-[16px] transition-colors duration-300">
            LINK 2
          </button>
          <button className="bg-[#B496C8] hover:bg-[#BEC864] font-semibold text-black uppercase text-[18px] md:text-[20px] lg:text-[24px] leading-none px-6 py-2 rounded-[16px] transition-colors duration-300">
            LINK 3
          </button>
        </div>
      </div>

      {/* Images - overlapping and rotated, outside container to allow overflow */}
      <div className="w-full overflow-x-visible mt-24 relative z-10">
        <div className="flex items-center justify-center relative" style={{ minHeight: '200px' }}>
          {/* Image 1 - Left (rotated counter-clockwise) */}
          <div className="relative inline-block rotate-[-8deg] z-10" style={{ marginRight: '-40px' }}>
            <div className="relative w-80 h-52 lg:w-80 lg:h-52 rounded-[24px] border-4 border-[#FAF0E6] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
              <img 
                src="project-media.png" 
                alt="Atividade do projeto Zona De(s)conforto" 
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Image 2 - Center (rotated clockwise) */}
          <div className="relative inline-block rotate-[5deg] z-20" style={{ marginLeft: '-20px', marginRight: '-20px' }}>
            <div className="relative w-80 h-52 lg:w-80 lg:h-52 rounded-[24px] border-4 border-[#FAF0E6] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
              <img 
                src="project-media.png" 
                alt="Participante do projeto Zona De(s)conforto" 
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Image 3 - Right (rotated counter-clockwise, layered images) */}
          <div className="relative inline-block rotate-[-6deg] z-10" style={{ marginLeft: '-40px' }}>
            <div className="relative w-80 h-52 lg:w-80 lg:h-52 rounded-[24px] border-4 border-[#FAF0E6] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
              <div className="absolute inset-0">
                <img 
                  src="project-media.png" 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  aria-hidden="true"
                />
                <img 
                  src="project-media.png" 
                  alt="Atividade colaborativa do projeto Zona De(s)conforto" 
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

