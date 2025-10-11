import React from 'react';
import DonateButton from '../shared/DonateButton';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[600px] md:min-h-[800px] overflow-hidden bg-[#FAF0E6]">
      {/* Decorative star/burst on the left */}
      <div className="absolute left-0 top-0 w-[207px] h-[220px] md:w-[300px] md:h-[320px] lg:w-[436px] lg:h-[464px] pointer-events-none opacity-80 md:opacity-100">
        <img 
          src="/star-vector.svg" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Flower collage on the right (with mask) */}
      <div className="absolute right-0 bottom-0 w-[186px] h-[180px] md:w-[300px] md:h-[292px] lg:w-[402px] lg:h-[390px] pointer-events-none opacity-80 md:opacity-100">
        <div 
          className="absolute inset-0"
          style={{
            maskImage: 'url(/flower-collage.png)',
            maskSize: 'contain',
            maskPosition: 'center',
            maskRepeat: 'no-repeat',
            WebkitMaskImage: 'url(/flower-collage.png)',
            WebkitMaskSize: 'contain',
            WebkitMaskPosition: 'center',
            WebkitMaskRepeat: 'no-repeat',
          }}
        >
          <img 
            src="/flower-image.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main content - centered */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[600px] md:min-h-[700px] lg:min-h-[800px] px-4 pt-16 pb-12 md:pt-32 md:pb-16">
        <div className="flex flex-col items-center gap-12 md:gap-12 max-w-[310px] md:max-w-[680px] lg:max-w-[900px] mx-auto text-center">
          {/* Heading and subtitle */}
          <div className="flex flex-col gap-8 md:gap-8 items-center w-full">
            <h1 className="font-fredoka font-semibold text-[48px] md:text-[72px] lg:text-[96px] leading-[1.08] text-black uppercase">
              Apoie a Saúde Mental dos Jovens de Olhão
            </h1>
            <p className="font-fredoka font-normal text-[20px] md:text-2xl lg:text-2xl leading-[28px] md:leading-8 text-black w-full">
              Ajude a criar a app Comfy e promover o bem-estar emocional dos jovens
            </p>
          </div>

          {/* CTA Button */}
          <DonateButton />
        </div>
      </div>
    </section>
  );
}

