import React from 'react';

interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: React.ReactNode;
}

export function Chip({ active = false, children, className = '', ...props }: ChipProps) {
  return (
    <button
      className={`px-5 py-2 rounded-full font-button-label text-[13px] whitespace-nowrap active:scale-95 transition-all flex-shrink-0 border ${
        active
          ? 'bg-gradient-to-r from-primary-container to-secondary-container text-on-primary shadow-sm border-transparent'
          : 'bg-surface-container text-on-surface hover:bg-surface-variant border-outline-variant/30'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
