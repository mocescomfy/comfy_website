import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  variant = 'primary', 
  children, 
  onClick,
  href,
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseClasses = "rounded-full px-8 py-4 font-fredoka font-semibold transition-all duration-300 inline-block text-center";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-[#3245ff] to-[#bc52ee] text-white hover:shadow-[0_8px_30px_rgba(50,69,255,0.3)] hover:scale-105",
    secondary: "bg-[#BEC864] text-black hover:bg-[#B496C8] hover:shadow-[0_4px_20px_rgba(180,150,200,0.3)]"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

