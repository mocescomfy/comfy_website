import React from 'react';

interface StarDecorationProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function StarDecoration({ 
  className = '', 
  size = 'md' 
}: StarDecorationProps) {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32 md:w-40 md:h-40',
    lg: 'w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <img 
        src="star-vector.svg"
        alt="" 
        className="w-full h-full object-contain" 
        loading="lazy" 
      />
    </div>
  );
}

