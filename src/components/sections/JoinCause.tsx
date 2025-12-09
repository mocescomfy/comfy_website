import React from 'react';
import Button from '../shared/Button';

export default function JoinCause() {
  return (
    <section id="causa" className="relative w-full px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24 bg-[#B496C8]">
      <div className="container-responsive max-w-4xl">
        <div className="bg-white/20 backdrop-blur-sm rounded-[20px] p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold text-center md:text-4xl lg:text-5xl mb-6">
            Junte-se à Causa
          </h2>
          
          <p className="font-inter text-base text-center mb-8 md:text-lg">
            Quer contribuir de outra forma? Existem várias maneiras de ajudar:
          </p>

          <ul className="space-y-4 font-inter text-base md:text-lg mb-8 max-w-2xl mx-auto">
            <li className="flex items-start gap-4">
              <span className="text-2xl">•</span>
              <span>Partilhar a página com amigos e familiares</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl">•</span>
              <span>Participar em eventos e atividades organizadas pela MOCES</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl">•</span>
              <span>Voluntariar-se para o projeto e ajudar na implementação da app</span>
            </li>
          </ul>

          <p className="font-inter text-base text-center mb-8 md:text-lg">
            Juntos podemos criar um futuro mais saudável e positivo para os jovens em Olhão.
          </p>

          <div className="flex justify-center mb-8">
            <Button variant="secondary">
              PARTICIPE AGORA À CAUSA
            </Button>
          </div>

          <div className="text-center">
            <p className="font-semibold mb-4">Partilhar o projeto:</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center hover:bg-white/50 transition-colors">
                <span className="text-2xl">f</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center hover:bg-white/50 transition-colors">
                <span className="text-2xl">in</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center hover:bg-white/50 transition-colors">
                <span className="text-2xl">ig</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center hover:bg-white/50 transition-colors">
                <span className="text-2xl">tt</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

