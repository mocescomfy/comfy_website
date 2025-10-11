import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'glass';
}

export default function Card({ 
  children, 
  className = '',
  variant = 'default' 
}: CardProps) {
  const baseClasses = "rounded-[20px] p-6 md:p-8 transition-all duration-300";
  
  const variantClasses = {
    default: "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]",
    gradient: "bg-gradient-to-br from-[#f3cddd] to-[#f5cee7] shadow-[0_4px_20px_rgba(180,150,200,0.3)]",
    glass: "bg-white/90 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.1)]"
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}

