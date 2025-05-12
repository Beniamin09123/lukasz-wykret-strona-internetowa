import React from 'react';

interface StatCounterProps {
  emoji: string;
  end: number;
  description: string;
  isHighlighted?: boolean;
}

export function StatCounter({ emoji, end, description, isHighlighted = false }: StatCounterProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-6 rounded-xl bg-white backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 shadow-[0_4px_12px_rgba(0,0,0,0.1)] ${
        isHighlighted ? 'border-green-500' : 'border-[#2C65C8]'
      }`}
    >
      <div className="text-4xl mb-4">{emoji}</div>
      <div className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-3 text-[#2C65C8]">
        {end}
      </div>
      <p className={`font-open-sans text-black text-center text-sm md:text-base ${
        isHighlighted ? 'font-bold' : ''
      }`}>
        {description}
      </p>
    </div>
  );
}