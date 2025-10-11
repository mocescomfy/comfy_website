import React from 'react';

export default function Transparency() {
  return (
    <section id="transparencia" className="relative w-full px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24 bg-gray-100">
      <div className="container-responsive max-w-4xl">
        <h2 className="font-fredoka text-3xl font-bold text-[#111827] text-center md:text-4xl lg:text-5xl mb-8">
          Transparência e Responsabilidade
        </h2>
        
        <p className="font-inter text-base text-[#4b5563] text-center md:text-lg mb-8">
          A MOCES garante total transparência na utilização dos fundos arrecadados. Todos os donativos serão 
          utilizados exclusivamente para o desenvolvimento da app Comfy e para a promoção do projeto Zona 
          De(s)conforto. Os nossos relatórios financeiros serão partilhados periodicamente com os nossos 
          apoiantes, garantindo a confiança e o compromisso com a causa.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="#" className="font-fredoka font-semibold text-[#3245ff] hover:text-[#bc52ee] transition-colors underline">
            LINK 1
          </a>
          <a href="#" className="font-fredoka font-semibold text-[#3245ff] hover:text-[#bc52ee] transition-colors underline">
            LINK 2
          </a>
          <a href="#" className="font-fredoka font-semibold text-[#3245ff] hover:text-[#bc52ee] transition-colors underline">
            LINK 3
          </a>
        </div>

        {/* Image placeholders */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <div className="w-48 h-32 bg-gray-300 rounded-lg"></div>
          <div className="w-48 h-32 bg-gray-300 rounded-lg"></div>
          <div className="w-48 h-32 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}

