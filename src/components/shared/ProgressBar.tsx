import React from 'react';

export default function ProgressBar() {
  return (
    <div className="flex-1 flex flex-col items-center relative">
      <div className="relative w-24 md:w-32 lg:w-[220px] h-[300px] md:h-[400px] lg:h-[426px] flex flex-col justify-end">
        {/* Bar outline */}
        <div className="relative w-full h-full border-4 border-[#111827] rounded-t-[24px] bg-[#FAF0E6] overflow-hidden">
          {/* Lavender fill - 37.5% of height (15,000€ / 40,000€) */}
          <div 
            className="absolute bottom-0 w-full bg-[#B496C8]"
            style={{ height: '37.5%' }}
          />
        </div>

        {/* Progress indicator tag - positioned at top of filled section (37.5% from bottom) */}
        <div 
          className="absolute right-[-140px] md:right-[-160px] lg:right-[-180px] flex items-center"
          style={{ bottom: '37.5%', transform: 'translateY(-50%)' }}
        >
          <img 
            src="/app/progress-indicator-tag.svg" 
            alt="15 000 €" 
            className="h-6 md:h-8 lg:h-10 w-auto"
            loading="lazy"
          />
        </div>

        {/* Tick marks and labels - positioned to the right with overlap */}
        <div className="absolute top-0 h-full flex flex-col justify-between items-start" style={{ left: 'calc(100% - 60px)', width: '291px' }}>
          {/* 40,000 € */}
          <div className="relative w-full flex items-center">
            <div className="absolute left-[-27px] border-t-2 border-dashed border-[#111827] opacity-40" style={{ width: '160px' }}></div>
            <span className="absolute left-[133px] text-[24px] leading-[32px] text-[#111827] whitespace-nowrap opacity-40" style={{ fontFamily: 'Fredoka, sans-serif', transform: 'translateY(-50%)' }}>40 000 €</span>
          </div>
          {/* 30,000 € */}
          <div className="relative w-full flex items-center">
            <div className="absolute left-[-27px] border-t-2 border-dashed border-[#111827] opacity-40" style={{ width: '160px' }}></div>
            <span className="absolute left-[133px] text-[24px] leading-[32px] text-[#111827] whitespace-nowrap opacity-40" style={{ fontFamily: 'Fredoka, sans-serif', transform: 'translateY(-50%)' }}>30 000 €</span>
          </div>
          {/* 20,000 € */}
          <div className="relative w-full flex items-center">
            <div className="absolute left-[-27px] border-t-2 border-dashed border-[#111827] opacity-40" style={{ width: '160px' }}></div>
            <span className="absolute left-[133px] text-[24px] leading-[32px] text-[#111827] whitespace-nowrap opacity-40" style={{ fontFamily: 'Fredoka, sans-serif', transform: 'translateY(-50%)' }}>20 000 €</span>
          </div>
          {/* 10,000 € */}
          <div className="relative w-full flex items-center">
            <div className="absolute left-[-27px] border-t-2 border-dashed border-[#111827] opacity-40" style={{ width: '160px' }}></div>
            <span className="absolute left-[133px] text-[24px] leading-[32px] font-bold text-[#111827] whitespace-nowrap opacity-40" style={{ fontFamily: 'Fredoka, sans-serif', transform: 'translateY(-50%)' }}>10 000 €</span>
          </div>
          {/* 0 € */}
          <div className="relative w-full flex items-center">
            <div className="absolute left-[-27px] border-t-2 border-dashed border-[#111827] opacity-40" style={{ width: '160px' }}></div>
            <span className="absolute left-[133px] text-[24px] leading-[32px] font-bold text-[#111827] whitespace-nowrap opacity-40" style={{ fontFamily: 'Fredoka, sans-serif', transform: 'translateY(-50%)' }}>0 €</span>
          </div>
        </div>
      </div>
    </div>
  );
}

