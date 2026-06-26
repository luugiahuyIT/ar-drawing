import React from 'react';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export function Slider({ value, onChange, min = 0, max = 100 }: SliderProps) {
  const percentage = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));

  return (
    <div className="flex-grow relative h-6 flex items-center w-full">
      {/* Background track */}
      <div className="absolute w-full h-1 bg-[#E8E4DE] rounded-sm top-1/2 -translate-y-1/2 z-0"></div>
      {/* Fill */}
      <div 
        className="absolute h-1 bg-gradient-to-r from-[#4F46E5] to-[#818CF8] rounded-sm top-1/2 -translate-y-1/2 z-0" 
        style={{ width: `${percentage}%` }}
      ></div>
      {/* Input */}
      <input 
        className="w-full relative z-10 opacity-0 cursor-pointer h-full touch-none" 
        type="range" 
        min={min} 
        max={max} 
        value={value} 
        onChange={(e) => onChange(Number(e.target.value))} 
      />
      {/* Thumb */}
      <div 
        className="absolute h-5 w-5 rounded-full bg-white border-2 border-[#4F46E5] top-1/2 -translate-y-1/2 shadow-sm pointer-events-none z-20"
        style={{ left: `calc(${percentage}% - 10px)` }}
      ></div>
    </div>
  );
}
