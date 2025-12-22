import React from 'react';
import Button from '../shared/Button';

export default function JoinCause() {
  return (
    <section id="causa" className="relative w-full overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Left decorative star - similar to Hero.tsx pattern, cream/hummus color */}
      <div className="absolute left-0 top-[7px] w-[207px] h-[220px] md:w-[300px] md:h-[320px] lg:w-[436px] lg:h-[464px] pointer-events-none opacity-80 md:opacity-100">
        <div 
          className="absolute inset-0"
          style={{
            maskImage: 'url(/star-vector.svg)',
            maskSize: 'contain',
            maskPosition: 'center',
            maskRepeat: 'no-repeat',
            WebkitMaskImage: 'url(/star-vector.svg)',
            WebkitMaskSize: 'contain',
            WebkitMaskPosition: 'center',
            WebkitMaskRepeat: 'no-repeat',
            backgroundColor: '#D7D7AA', // Cream/hummus color rgba(215, 215, 170, 1)
          }}
        />
      </div>

      {/* Right decorative element - yellow/mustard color */}
      <div className="absolute right-0 top-[584px] w-[186px] h-[180px] md:w-[300px] md:h-[292px] lg:w-[369px] lg:h-[358px] pointer-events-none opacity-80 md:opacity-100">
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
            backgroundColor: '#E6B41E', // Mustard yellow rgba(230, 180, 30, 1)
          }}
        />
      </div>

      {/* Main container - centered with 80px border radius, lavender background */}
      <div className="relative mx-auto w-[800px] bg-[#B496C8] rounded-[40px] md:rounded-[60px] lg:rounded-[80px] pt-[120px] pb-16 md:pb-20 lg:pb-24 px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* Content container - 752px max width */}
        <div className="max-w-[752px] mx-auto flex flex-col gap-[48px] items-center">
          
          {/* Heading and intro text section - gap 32px */}
          <div className="flex flex-col gap-[32px] items-center w-full">
            {/* Main heading - Fredoka SemiBold 72px */}
            <h2 className="font-fredoka font-semibold text-[48px] md:text-[56px] lg:text-[72px] leading-[1.08] text-black text-center">
              Junte-se à Causa
            </h2>
            
            {/* Intro text - Fredoka Regular 24px, two paragraphs */}
            <div className="flex flex-col gap-0 items-center text-center">
              <p className="font-fredoka font-normal text-[20px] md:text-[22px] lg:text-[24px] leading-[32px] text-black">
                Quer contribuir de outra forma?
              </p>
              <p className="font-fredoka font-normal text-[20px] md:text-[22px] lg:text-[24px] leading-[32px] text-black">
                Existem várias maneiras de ajudar:
              </p>
            </div>

            {/* List container with cream background */}
            <div className="relative w-full max-w-[558px]">
              {/* List container - cream background, rounded, padding */}
              <div className="bg-[#FAF0E6] rounded-[24px] p-[24px]">
                <ul className="font-fredoka font-semibold text-[20px] md:text-[22px] lg:text-[24px] leading-[32px] text-black space-y-0">
                  {/* Using flex pattern similar to Contribute.tsx */}
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-[17px] h-[17px] flex items-center justify-center mt-[6px] mr-[19px] ml-[30.5px]">
                      {/* Using tiny_pink_cloud.svg - can be replaced with bullet-star-icon.svg from Figma */}
                      <img 
                        src="/app/tiny_pink_cloud.svg" 
                        alt="" 
                        className="w-full h-full object-contain"
                        style={{ filter: 'hue-rotate(-30deg) saturate(1.5) brightness(0.85)' }}
                      />
                    </span>
                    <span className="leading-[32px]">Partilhar a página com amigos e familiares</span>
                  </li>
                  
                  <li className="flex items-start mt-[32px]">
                    <span className="flex-shrink-0 w-[17px] h-[17px] flex items-center justify-center mt-[6px] mr-[19px] ml-[30.5px]">
                      <img 
                        src="/app/tiny_pink_cloud.svg" 
                        alt="" 
                        className="w-full h-full object-contain"
                        style={{ filter: 'hue-rotate(-30deg) saturate(1.5) brightness(0.85)' }}
                      />
                    </span>
                    <span className="leading-[32px]">Participar em eventos e atividades organizadas pela MOCES</span>
                  </li>
                  
                  <li className="flex items-start mt-[64px]">
                    <span className="flex-shrink-0 w-[17px] h-[17px] flex items-center justify-center mt-[6px] mr-[19px] ml-[30.5px]">
                      <img 
                        src="/app/tiny_pink_cloud.svg" 
                        alt="" 
                        className="w-full h-full object-contain"
                        style={{ filter: 'hue-rotate(-30deg) saturate(1.5) brightness(0.85)' }}
                      />
                    </span>
                    <span className="leading-[32px]">Voluntariar-se para o projeto e ajudar na implementação da app</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA text - Fredoka Regular 24px, centered */}
            <p className="font-fredoka font-normal text-[20px] md:text-[22px] lg:text-[24px] leading-[32px] text-black text-center max-w-[558px]">
              Juntos podemos criar um futuro mais saudável e positivo para os jovens em Olhão.
            </p>
          </div>

          {/* Button - layered shadow effect similar to DonateButton */}
          <div className="relative h-[80px] w-full max-w-[452px]">
            {/* Shadow layer - black, offset 4px */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-[calc(50%-4px)] -translate-y-[calc(50%-4px)] bg-black border-4 border-black rounded-[24px] px-[40px] py-[24px] flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="font-fredoka font-semibold text-[20px] md:text-[22px] lg:text-[24px] leading-none text-black uppercase whitespace-nowrap">
                PARTICIPE E FAÇA A DIFERENÇA!
              </span>
            </div>
            
            {/* Foreground button - using Button component with custom styling */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Button
                variant="secondary"
                className="!rounded-[24px] !bg-[#D7D7AA] !border-4 !border-black !px-[40px] !py-[24px] !font-fredoka font-semibold !text-[20px] md:!text-[22px] lg:!text-[24px] !leading-none !uppercase !whitespace-nowrap !text-black hover:!bg-[#D7D7AA] hover:!translate-x-1 hover:!translate-y-1 active:!translate-x-1 active:!translate-y-1 !shadow-none transition-all duration-200"
              >
                PARTICIPE E FAÇA A DIFERENÇA!
              </Button>
            </div>
          </div>

          {/* Social media section - gap 32px */}
          <div className="flex flex-col gap-[32px] items-center w-full">
            {/* Social heading - Fredoka Bold 24px, cream color */}
            <p className="font-fredoka font-bold text-[20px] md:text-[22px] lg:text-[24px] leading-[32px] text-[#FAF0E6] text-center">
              Partilhar o projeto:
            </p>
            
            {/* Social media icons container - 64px height, 304px width */}
            <div className="h-[48px] md:h-[56px] lg:h-[64px] w-[240px] md:w-[272px] lg:w-[304px] flex items-center justify-center gap-4">
              {/* Placeholder social icons - will be replaced with actual SVG asset */}
              {/* For now, creating individual icon placeholders */}
              <a href="#" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-black rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Facebook">
                <span className="text-white text-lg md:text-xl lg:text-2xl font-bold">f</span>
              </a>
              <a href="#" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-black rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Instagram">
                <span className="text-white text-lg md:text-xl lg:text-2xl font-bold">ig</span>
              </a>
              <a href="#" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-black rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <span className="text-white text-lg md:text-xl lg:text-2xl font-bold">in</span>
              </a>
              <a href="#" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-black rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="TikTok">
                <span className="text-white text-lg md:text-xl lg:text-2xl font-bold">tt</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
