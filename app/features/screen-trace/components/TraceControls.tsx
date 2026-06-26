import React from 'react';
import { Slider } from '~/components/Slider';

interface TraceControlsProps {
  opacity: number;
  setOpacity: (val: number) => void;
  isLocked: boolean;
  startPress: (e: React.SyntheticEvent) => void;
  cancelPress: () => void;
  unlock: () => void;
}

export function TraceControls({
  opacity,
  setOpacity,
  isLocked,
  startPress,
  cancelPress,
  unlock,
}: TraceControlsProps) {
  return (
    <footer className="absolute bottom-0 left-0 w-full z-10 px-margin-mobile pb-stack-lg pt-stack-md flex flex-col items-center gap-stack-md pointer-events-none">
      {/* Opacity Slider Group */}
      <div className={`w-full max-w-sm pointer-events-auto flex flex-col items-center gap-stack-sm backdrop-blur-md bg-surface/70 p-4 rounded-xl shadow-[0_10px_30px_rgba(79,70,229,0.05)] border border-outline-variant transition-opacity ${isLocked ? 'opacity-50 pointer-events-none' : ''}`}>
        <label className="text-caption font-caption text-outline w-full text-center flex justify-between px-2" htmlFor="opacity-slider">
          <span>Opacity</span>
          <span>{opacity}%</span>
        </label>
        <div className="w-full relative flex items-center h-6">
          <Slider value={opacity} onChange={setOpacity} />
        </div>
      </div>
      
      {/* Lock Button */}
      <button 
        className={`pointer-events-auto px-6 py-3 rounded-full font-button-label text-button-label shadow-sm flex items-center gap-2 select-none touch-none transition-all ${
          isLocked 
            ? 'bg-primary-container text-on-primary border-primary-container' 
            : 'bg-surface-bright border border-outline-variant text-on-primary-fixed-variant hover:bg-surface-container-lowest active:scale-95'
        }`}
        onMouseDown={startPress}
        onTouchStart={startPress}
        onMouseUp={cancelPress}
        onMouseLeave={cancelPress}
        onTouchEnd={cancelPress}
        onTouchCancel={cancelPress}
        onClick={unlock}
      >
        <span className="material-symbols-outlined text-[20px]" data-icon={isLocked ? "lock" : "lock_open"}>
          {isLocked ? "lock" : "lock_open"}
        </span>
        {isLocked ? "Screen Locked" : "Long-press to lock"}
      </button>
    </footer>
  );
}
