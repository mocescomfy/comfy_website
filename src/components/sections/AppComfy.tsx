import React from 'react';
import Button from '../shared/Button';

export default function AppComfy() {
  return (
    <section id="app" className="relative w-full px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24 bg-[#B496C8]">
      <div className="container-responsive">
        <div className="flex flex-col gap-12 lg:flex-row-reverse lg:gap-16 lg:items-center">
          {/* Text Content */}
          <div className="flex-1 text-white">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-fredoka text-3xl font-bold md:text-4xl lg:text-5xl">
                A App
              </h2>
              <span className="font-fredoka text-3xl font-bold md:text-4xl lg:text-5xl gradient-text-secondary">
                comfy
              </span>
            </div>
            <h3 className="font-fredoka text-2xl font-semibold mb-6 md:text-3xl">
              Apoio ao Bem-Estar e Saúde Mental dos Jovens
            </h3>
            <p className="font-inter text-base md:text-lg">
              A app Comfy foi desenhada para ajudar os jovens a desenvolverem as suas competências emocionais, 
              melhorar a autoestima e aumentar a resiliência de maneira gratuita. Através de conteúdos interativos 
              e ferramentas adaptadas, os jovens terão o apoio necessário para enfrentar situações de stress, 
              ansiedade e outros desafios emocionais, promovendo um equilíbrio psicológico saudável.
            </p>
            <div className="mt-8">
              <Button variant="secondary">
                CONHEÇA A APP COMFY
              </Button>
            </div>
          </div>

          {/* App Mockup Placeholder */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-md aspect-[9/16] bg-white/20 backdrop-blur-sm rounded-[40px] shadow-xl flex items-center justify-center">
              <span className="text-white font-fredoka text-lg">App Screenshots</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

