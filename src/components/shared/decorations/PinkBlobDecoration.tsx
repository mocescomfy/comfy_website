import React from 'react';

interface PinkBlobDecorationProps {
  className?: string;
  text?: string;
}

export default function PinkBlobDecoration({ 
  className = '',
  text = 'A sua contribuição é um apoio essencial para a promoção da saúde mental',
}: PinkBlobDecorationProps) {
  return (
    <div 
      className={className}
      style={{ 
        width: '281.94px',
        height: '240.485px',
        transform: 'rotate(-15deg)'
      }}
    >
      <div className="relative w-full h-full">
        <img 
          src="app/pink-blob-contribute.svg"
          alt="" 
          className="w-full h-full object-contain" 
          loading="lazy" 
        />
        <p 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-[#111827] text-center" 
        >
          {text}
        </p>
      </div>
    </div>
  );
}
