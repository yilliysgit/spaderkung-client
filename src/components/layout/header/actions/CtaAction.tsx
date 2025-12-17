// src/app/components/layout/header/actions/CtaAction.tsx
'use client';

import type { CtaActionProps } from '@/types/header.types';

const CtaAction = ({ 
  label = "Beställ nu",
  href = "/bestall",
  className = ""
}: CtaActionProps) => {
  return (
    <button
      type="button"
      className={`group inline-flex items-center rounded-lg bg-[#FECC00] px-5 py-2.5 text-[#002855] font-semibold text-sm hover:bg-[#FDB913] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FECC00]/50 focus:ring-offset-2 ${className}`}
      onClick={() => {
        // Navigate to order page
        window.location.href = href;
        console.log('Beställ nu clicked');
      }}
    >
      <span>{label}</span>
      
      {/* Arrow icon */}
      <svg 
        className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 5l7 7-7 7" 
        />
      </svg>
    </button>
  );
};

export default CtaAction;