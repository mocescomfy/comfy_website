import React from 'react';
import Button from '../shared/Button';

export default function Contribute() {
  return (
    <section id="contribuir" className="relative w-full px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24 bg-[#BEC864]">
      <div className="container-responsive">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* How to Help */}
          <div className="flex-1">
            <h2 className="font-fredoka text-3xl font-bold text-[#111827] md:text-4xl lg:text-5xl mb-6">
              Como Pode Ajudar?
            </h2>
            <p className="font-inter text-base text-[#111827] mb-6 md:text-lg">
              A sua contribuição é fundamental para o sucesso deste projeto. Com a sua ajuda, podemos 
              continuar a desenvolver e promover a app Comfy. É simples:
            </p>
            <ul className="space-y-4 font-inter text-base md:text-lg text-[#111827] mb-8">
              <li className="flex items-start gap-4">
                <span className="text-2xl">•</span>
                <span>Clique no botão abaixo para fazer uma doação</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">•</span>
                <span>Escolha o valor que deseja contribuir e faça a sua parte na transformação da vida de jovens em Olhão.</span>
              </li>
            </ul>
            <Button variant="primary">
              FAÇA UMA DOAÇÃO
            </Button>
          </div>

          {/* Fundraising Goal Chart */}
          <div className="flex-1 bg-white/80 rounded-[20px] p-8 md:p-12 shadow-xl backdrop-blur-sm">
            <h3 className="font-fredoka text-2xl font-bold text-[#111827] mb-8 text-center">
              Meta de Arrecadação
            </h3>
            <div className="relative h-[400px] flex items-end justify-center gap-4">
              {/* Simple bar chart placeholder */}
              <div className="w-32 bg-[#B496C8] rounded-t-lg" style={{height: '40%'}}>
                <div className="text-center text-white font-fredoka text-sm pt-2">15,000 €</div>
              </div>
              <div className="w-32 bg-gray-200 rounded-t-lg h-full flex items-center justify-center">
                <div className="text-center text-gray-600 font-fredoka text-sm">40,000 €</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

