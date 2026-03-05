import React from 'react';
import barLogos from '../../assets/bar-logos.svg';
import barCofinanciado from '../../assets/footer/bar-cofinanciado.png';
import barInvestidores from '../../assets/footer/bar-investidores.png';

export default function Footer() {
  return (
    <footer className="w-full px-4 py-12 md:px-8 md:py-16 bg-[#FAF0E6]">
      <div className="container-responsive space-y-10">
        {/* Row 1: Brand Logos (pre-aligned bar) */}
        <div className="flex justify-center">
          <img
            src={barLogos.src}
            alt="MOCES, Zona De(s)conforto, Comfy App"
            className="h-16 sm:h-20 md:h-24 w-auto object-contain"
            loading="lazy"
          />
        </div>

        {/* Row 2: Cofinanciado Por (pre-aligned bar) */}
        <div className="space-y-3">
          <p className="text-center text-sm text-gray-600 font-inter uppercase tracking-wide">Cofinanciado por</p>
          <div className="flex justify-center">
            <img
              src={barCofinanciado.src}
              alt="Portugal Inovação Social, ALGARVE 2030, PORTUGAL 2030, Cofinanciado pela União Europeia"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Row 3: Investidores Sociais (pre-aligned bar) */}
        <div className="space-y-3">
          <p className="text-center text-sm text-gray-600 font-inter uppercase tracking-wide">Investidores Sociais</p>
          <div className="flex justify-center">
            <img
              src={barInvestidores.src}
              alt="Câmara Municipal de Olhão, Juntas de Freguesia de Olhão, Fuseta, Moncarapacho, Pechão, Quelfes"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 text-center text-sm text-gray-600 font-inter">
          <p>© 2025 MOCES - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
