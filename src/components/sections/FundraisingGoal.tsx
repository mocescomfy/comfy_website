import React from 'react';
import ProgressBar from '../shared/ProgressBar';

export default function FundraisingGoal() {
  return (
    <div className="flex-1 relative bg-[#A0D2B4] w-[366px] rounded-[20px] p-8 md:p-12 lg:p-16 shadow-xl">
      {/* Title for mobile and desktop */}
      <h3 className="text-[40px] leading-[48px] font-bold text-[#111827] mb-12 text-center md:hidden lg:block" >
        <p className="mb-0">Meta de</p>
        <p>Arrecadação</p>
      </h3>

      {/* Progress Bar Container */}
      <div className="flex items-start gap-8 md:gap-12">
        {/* Vertical title for tablet only */}
        <div className="hidden md:block lg:hidden flex-shrink-0">
          <h3 
            className="text-2xl font-bold text-[#111827] whitespace-nowrap text-center"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontFamily: 'Fredoka, sans-serif' }}
          >
            Meta de Arrecadação
          </h3>
        </div>

        {/* Progress Bar */}
        <ProgressBar />
      </div>
    </div>
  );
}

