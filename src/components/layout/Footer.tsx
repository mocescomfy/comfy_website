import React from 'react';
import mocesLogo from '../../assets/moces.svg';
import zonaLogo from '../../assets/zonadesconforto.png';
import comfyLogo from '../../assets/comfy.png';
import pisLogo from '../../assets/footer/pis-logo.png';
import algarve2030Bar from '../../assets/footer/algarve2030-bar.svg';
import cmoLogo from '../../assets/footer/cmo-logo.png';
import juntaOlhao from '../../assets/footer/juntas/olhao.png';
import juntaFuseta from '../../assets/footer/juntas/fuseta.png';
import juntaMoncarapacho from '../../assets/footer/juntas/moncarapacho.png';
import juntaPechao from '../../assets/footer/juntas/pechao.png';
import juntaQuelfes from '../../assets/footer/juntas/quelfes.png';

export default function Footer() {
  return (
    <footer className="w-full px-4 py-12 md:px-8 md:py-16 bg-[#FAF0E6]">
      <div className="container-responsive space-y-10">
        {/* Row 1: Brand Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          <div className="w-[50px] h-[62px] sm:w-[60px] sm:h-[75px]">
            <img src={mocesLogo.src} alt="MOCES - Organização sem fins lucrativos" className="w-full h-full object-contain" loading="lazy" />
          </div>
          <div className="w-20 h-20 sm:w-[100px] sm:h-[100px]">
            <img src={zonaLogo.src} alt="Zona De(s)conforto" className="w-full h-full object-contain" loading="lazy" />
          </div>
          <div className="w-[50px] h-[60px] sm:w-[70px] sm:h-[85px]">
            <img src={comfyLogo.src} alt="Comfy App" className="w-full h-full object-contain" loading="lazy" />
          </div>
        </div>

        {/* Row 2: Cofinanciado Por */}
        <div className="space-y-3">
          <p className="text-center text-sm text-gray-600 font-inter uppercase tracking-wide">Cofinanciado por</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <div className="h-12 w-auto">
              <img src={pisLogo.src} alt="Portugal Inovação Social" className="h-full w-auto object-contain" loading="lazy" />
            </div>
            <div className="h-12 w-auto">
              <img src={algarve2030Bar.src} alt="ALGARVE 2030, PORTUGAL 2030, Cofinanciado pela União Europeia" className="h-full w-auto object-contain" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Row 3: Investidores Sociais */}
        <div className="space-y-3">
          <p className="text-center text-sm text-gray-600 font-inter uppercase tracking-wide">Investidores Sociais</p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <div className="h-10 w-auto sm:h-12">
              <img src={cmoLogo.src} alt="Câmara Municipal de Olhão" className="h-full w-auto object-contain" loading="lazy" />
            </div>
            <div className="h-8 w-auto sm:h-10">
              <img src={juntaOlhao.src} alt="Junta de Freguesia de Olhão" className="h-full w-auto object-contain" loading="lazy" />
            </div>
            <div className="h-8 w-auto sm:h-10">
              <img src={juntaFuseta.src} alt="Junta de Freguesia da Fuseta" className="h-full w-auto object-contain" loading="lazy" />
            </div>
            <div className="h-8 w-auto sm:h-10">
              <img src={juntaMoncarapacho.src} alt="Junta de Freguesia de Moncarapacho" className="h-full w-auto object-contain" loading="lazy" />
            </div>
            <div className="h-8 w-auto sm:h-10">
              <img src={juntaPechao.src} alt="Junta de Freguesia de Pechão" className="h-full w-auto object-contain" loading="lazy" />
            </div>
            <div className="h-8 w-auto sm:h-10">
              <img src={juntaQuelfes.src} alt="Junta de Freguesia de Quelfes" className="h-full w-auto object-contain" loading="lazy" />
            </div>
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
