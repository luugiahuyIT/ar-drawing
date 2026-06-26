import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  let baseClasses = 'font-button-label text-button-label transition-transform';
  let variantClasses = '';
  let style: React.CSSProperties = {};

  if (variant === 'primary') {
    variantClasses = 'w-full h-[56px] text-white flex items-center justify-center active:scale-95';
    style = {
      background: 'linear-gradient(135deg, #4F46E5 0%, #818CF8 100%)',
      borderRadius: '24px',
      boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
    };
  } else if (variant === 'secondary') {
    variantClasses = 'w-full h-[56px] border border-surface-variant bg-surface-container-lowest text-on-surface-variant flex items-center justify-center active:scale-95';
    style = {
      borderRadius: '24px',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 12px',
    };
  } else if (variant === 'ghost') {
    variantClasses = 'text-outline hover:text-on-surface active:scale-100';
    baseClasses = 'font-button-label text-button-label'; // no flex/scale
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} style={style} {...props}>
      {children}
    </button>
  );
}
