// src/app/components/layout/header/actions/PhoneAction.tsx
'use client';

import { Phone } from 'lucide-react';
import type { PhoneActionProps } from '@/types/header.types';

const PhoneAction = ({ 
  phone = "063-51 40 11",
  className = ""
}: PhoneActionProps) => {
  return (
    <div className={`flex items-center gap-3 hover:opacity-80 transition-opacity duration-200 ${className}`}>
      {/* Phone Icon - Ronde blauwe achtergrond met wit icon */}
      <div className="flex-shrink-0 bg-[#005293] p-2 rounded-full shadow-sm">
        <Phone 
          size={20}
          className="text-white" 
        />
      </div>
      
      {/* Contact Text - Stacked */}
      <div className="flex flex-col">
        {/* Kleine tekst bovenaan */}
        <span className="text-xs text-gray-500 font-medium leading-tight">
          Ring direkt —
        </span>
        {/* Grote telefoonnummer onderaan */}
        <a 
          href={`tel:${phone.replace(/\s|-/g, '')}`}
          className="text-sm font-bold text-gray-900 hover:text-[#005293] transition-colors duration-200 leading-tight"
        >
          {phone}
        </a>
      </div>
    </div>
  );
};

export default PhoneAction;