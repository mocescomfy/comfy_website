import React from 'react';

interface ProgressIndicatorTagProps {
  className?: string;
}

interface TickMarkProps {
  label: string;
  bold?: boolean;
}

function TickMark({ label, bold = false }: TickMarkProps) {
  return (
    <div className="relative w-full flex items-center">
      <div className="absolute left-0 right-0 border-t-2 border-dashed border-[#111827] opacity-40"></div>
      <span 
        className={`absolute right-0 text-[20px] text-[#111827] whitespace-nowrap opacity-40 ${bold ? 'font-bold' : ''}`}
        style={{ fontFamily: 'Fredoka, sans-serif', transform: 'translateY(-50%)', textAlign: 'right' }}
      >
        {label}
      </span>
    </div>
  );
}

function ProgressIndicatorTag({ className = '' }: ProgressIndicatorTagProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="134" 
      height="46" 
      viewBox="0 0 134 46" 
      fill="none"
      className={className}
      aria-label="15 000 €"
    >
      <path 
        d="M22.4292 2L2.7417 23L22.4292 44H131.742V2H22.4292Z" 
        fill="#B496C8" 
        stroke="black" 
        strokeWidth="4"
      />
      <text 
        x="67" 
        y="28" 
        fontFamily="Fredoka, sans-serif" 
        fontSize="14" 
        fontWeight="700" 
        fill="#111827" 
        textAnchor="middle"
      >
        15 000 €
      </text>
    </svg>
  );
}

export default function ProgressBar() {
  return (
    <div className="flex-1 flex flex-col relative">
      <div className="relative w-[170px] h-[426px] flex flex-col justify-end">
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
          className="absolute right-[-80px] md:right-[-90px] lg:right-[-100px] flex items-center"
          style={{ bottom: '33%'}}
        >
          <ProgressIndicatorTag className="h-10" />
        </div>
      </div>

      {/* Tick marks and labels - aligned to start at left side of progress bar, lines extend to end */}
      <div className="absolute top-0 h-full flex flex-col justify-between items-start" style={{ left: '0', right: '0', width: '268px' }}>
        <TickMark label="40 000 €" />
        <TickMark label="30 000 €" />
        <TickMark label="20 000 €" />
        <TickMark label="10 000 €" bold />
        <TickMark label="0 €" bold />
      </div>
    </div>
  );
}

