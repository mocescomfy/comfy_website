import React from 'react';
import mocesLogo from '../../assets/moces.png';
import zonaLogo from '../../assets/zonadesconforto.png';
import comfyLogo from '../../assets/comfy.png';

export default function Footer() {
  return (
    <footer className="w-full px-4 py-12 md:px-8 md:py-16 bg-[#FAF0E6]">
      <div className="container-responsive">
        {/* Logo Container - Responsive Layout */}
        {/* Desktop (lg): single row with all 6 logos */}
        {/* Tablet (md): two rows with 40px gap */}
        {/* Mobile: flexible wrap */}
        <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center gap-6 md:gap-10 lg:gap-10">
          {/* Brand Logos Row - merges into main row on desktop */}
          <div className="flex justify-center items-center gap-6 md:gap-10 lg:gap-10">
            {/* MOCES Logo */}
            <div className="w-32 h-8 sm:w-[156px] sm:h-[32px]">
              <img 
                src={mocesLogo.src} 
                alt="MOCES - Organização sem fins lucrativos" 
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            
            {/* Zona De(s)conforto Logo */}
            <div className="w-20 h-20 sm:w-[120px] sm:h-[120px]">
              <img 
                src={zonaLogo.src} 
                alt="Zona De(s)conforto" 
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            
            {/* Comfy Logo */}
            <div className="w-32 h-10 sm:w-[142px] sm:h-[48px]">
              <img 
                src={comfyLogo.src} 
                alt="Comfy App" 
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Funding Logos Row - merges into main row on desktop */}
          {/* All three funding logos (ALGARVE 2030, PORTUGAL 2030, EU) are combined in one SVG */}
          <div className="flex justify-center items-center">
            <div className="h-12 w-auto">
              <img 
                src="footer/funding-logos.svg"
                alt="ALGARVE 2030, PORTUGAL 2030, Cofinanciado pela União Europeia" 
                className="h-full w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-600 font-inter">
          <p>© 2025 MOCES - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}

