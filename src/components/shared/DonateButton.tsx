import React from 'react';
import DonateFace from './icons/DonateFace';

interface DonateButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  text?: string;
  showFace?: boolean;
}

export default function DonateButton({ 
  href = '#contribuir', 
  onClick, 
  className = '',
  text = 'Faça uma Doação',
  showFace = true
}: DonateButtonProps) {
  // Check if className contains a background color class
  const hasBgClass = className.includes('bg-');
  const defaultBg = hasBgClass ? '' : 'bg-[#d7d7aa]';
  
  const buttonContent = (
    <div className="relative inline-block">
      {/* Background/shadow button (black) - positioned bottom-right */}
      <div 
        className="absolute left-[2.72px] top-[2.72px] flex items-center justify-center gap-4 md:gap-6 px-[27px] py-[16px] md:px-10 md:py-6 bg-black border-[2.72px] md:border-4 border-black rounded-3xl"
        aria-hidden="true"
      >
        <span className="font-semibold text-[16.32px] md:text-2xl text-black uppercase leading-none whitespace-nowrap">
          {text}
        </span>
        {showFace && (
          <DonateFace className="w-[41px] h-[16px] md:w-[60px] md:h-6" strokeWidth={2.72} variant="hover" />
        )}
      </div>
      
      {/* Foreground button (yellow/green) - positioned top-left */}
      <div 
        className={`group relative flex items-center justify-center gap-4 md:gap-6 px-[27px] py-[16px] md:px-10 md:py-6 ${defaultBg} border-[2.72px] md:border-4 border-black rounded-3xl transition-all duration-200 hover:translate-x-1 hover:translate-y-1 active:translate-x-1 active:translate-y-1 cursor-pointer ${className}`}
      >
        <span className="font-semibold text-[16.32px] md:text-2xl text-black uppercase leading-none whitespace-nowrap">
          {text}
        </span>
        {/* Instant swap between normal and hover faces (no animation) */}
        {showFace && (
          <span className="relative inline-block">
            <DonateFace className="w-[41px] h-[16px] md:w-[60px] md:h-6 block group-hover:hidden" strokeWidth={2.72} variant="normal" />
            <DonateFace className="w-[41px] h-[16px] md:w-[60px] md:h-6 hidden group-hover:block" strokeWidth={2.72} variant="hover" />
          </span>
        )}
      </div>
    </div>
  );

  if (href && !onClick) {
    return (
      <a href={href} className="inline-block no-underline">
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block border-0 bg-transparent p-0 cursor-pointer">
      {buttonContent}
    </button>
  );
}

