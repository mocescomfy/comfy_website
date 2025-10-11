import React from 'react';
import Button from '../shared/Button';
import projectImg from '../../assets/zonadesconforto.png';

export default function Project() {
  return (
    <section id="projeto" className="relative w-full px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24 bg-gradient-to-br from-[#f3cddd] to-[#f5cee7]">
      <div className="container-responsive">
        <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Media */}
          <div className="flex-1 flex justify-center">
            <img
              src={projectImg}
              alt="Zona De(s)conforto – projeto da MOCES para promoção da saúde mental juvenil"
              className="w-full max-w-[640px] h-auto rounded-[20px] bg-white/90 backdrop-blur-xl p-3 shadow-[0_4px_20px_rgba(180,150,200,0.3)]"
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h2 className="font-fredoka text-3xl font-bold text-[#111827] md:text-4xl lg:text-5xl">
              O Projeto Zona De(s)conforto
            </h2>
            <p className="mt-6 font-inter text-base text-[#4b5563] md:text-lg max-w-[60ch]">
              O Zona De(s)conforto é uma iniciativa da MOCES apoiada pelo Portugal Inovação Social que promove a
              saúde mental de jovens dos 12 aos 18 anos. O projeto combina atividades nas escolas com uma aplicação
              móvel gratuita — a app Comfy — para reforçar competências socioemocionais e o bem‑estar diário.
            </p>
            <p className="mt-4 font-inter text-base text-[#4b5563] md:text-lg max-w-[60ch]">
              Criamos espaços seguros, estimulamos a autoestima e fortalecemos a resiliência para enfrentar os
              desafios da vida, sempre com acompanhamento e conteúdos acessíveis.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="primary" href="#app">Conheça a App Comfy</Button>
              <Button variant="secondary" href="#contribuir">Apoiar o projeto</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

