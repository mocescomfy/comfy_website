import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full px-4 py-12 md:px-8 md:py-16 bg-[#FAF0E6]">
      <div className="container-responsive">
        {/* Logo Row */}
        <div className="flex flex-col items-center gap-6 mb-8 sm:flex-row sm:justify-center sm:gap-12">
          <div className="w-32 h-8 bg-gray-300 rounded"></div>
          <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
          <div className="w-32 h-10 bg-gray-300 rounded"></div>
        </div>

        {/* Funding Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
          <div className="h-12 w-24 bg-gray-300 rounded"></div>
          <div className="h-12 w-24 bg-gray-300 rounded"></div>
          <div className="h-12 w-24 bg-gray-300 rounded"></div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-600 font-inter">
          <p>© 2025 MOCES - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}

