import React from 'react';

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title?: string;
  confirmText?: string;
  cancelText?: string;
}

export function ConfirmModal({ 
  isOpen, 
  onConfirm, 
  onCancel,
  title = "Are you done with this drawing?",
  confirmText = "Yes, save and exit",
  cancelText = "No, keep drawing"
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-margin-mobile">
      {/* Modal Overlay Backdrop */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 bg-[#1E1B3A]/70 backdrop-blur-[4px] z-10"
        onClick={onCancel}
      ></div>
      
      {/* Modal Card */}
      <div className="bg-surface-container-lowest w-[320px] rounded-2xl p-6 shadow-[0_10px_30px_-15px_rgba(79,70,229,0.15)] flex flex-col items-center relative z-20 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Title */}
        <h2 className="text-[20px] font-bold leading-tight text-[#1E1B3A] text-center mb-6 tracking-tight">
          {title}
        </h2>
        
        {/* Button Stack */}
        <div className="w-full flex flex-col gap-[8px]">
          {/* Primary Action Button */}
          <button 
            onClick={onConfirm}
            className="w-full h-[48px] text-white font-button-label flex items-center justify-center hover:scale-[1.02] active:scale-95 transition-transform shadow-sm relative overflow-hidden group font-bold bg-gradient-to-br from-[#4F46E5] to-[#818CF8] rounded-full shadow-[0_4px_12px_rgba(79,70,229,0.25)]"
          >
            <span className="relative z-10">{confirmText}</span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          {/* Secondary Action Button */}
          <button 
            onClick={onCancel}
            className="w-full h-[48px] rounded-full bg-white border border-[#E8E4DE] text-[#1E1B3A] font-button-label flex items-center justify-center hover:bg-surface-container-low active:scale-95 transition-all"
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
}
