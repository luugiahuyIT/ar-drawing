import { useNavigate } from "react-router";

interface ExportBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

export function ExportBottomSheet({ isOpen, onClose, imageUrl }: ExportBottomSheetProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <>
      {/* Dark Overlay */}
      <div 
        className="fixed inset-0 bg-inverse-surface/60 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Bottom Sheet */}
      <div className="fixed bottom-0 left-0 w-full bg-surface rounded-t-[24px] pt-stack-sm pb-margin-mobile px-margin-mobile z-50 flex flex-col items-center shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.3)] animate-in slide-in-from-bottom duration-300 ease-out max-h-[90vh] overflow-y-auto">
        
        {/* Drag Handle */}
        <div className="w-10 h-1 bg-outline-variant rounded-full mb-stack-md shrink-0"></div>
        
        {/* Title */}
        <h2 className="font-subheadline text-subheadline text-on-surface w-full text-center mb-stack-md font-bold tracking-tight">Export drawing</h2>
        
        {/* Preview Square */}
        <div className="w-[200px] h-[200px] bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 flex items-center justify-center relative mb-stack-lg overflow-hidden group shrink-0">
          {/* Inner soft shadow to frame the drawing area */}
          <div className="absolute inset-0 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] pointer-events-none rounded-xl z-10"></div>
          
          {/* Drawing Image */}
          <img 
            src={imageUrl} 
            className="w-[160px] h-[160px] object-contain opacity-90 group-hover:scale-105 transition-transform duration-500 ease-in-out" 
            alt="Export preview" 
          />
          
          {/* Watermark */}
          <div className="absolute bottom-2 right-2 flex flex-col items-end z-20">
            <span className="font-caption text-[9px] text-outline opacity-80 leading-tight">Made with</span>
            <span className="font-caption text-[10px] text-on-surface font-bold leading-tight">PhotoTrace AR</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-stack-sm max-w-md mx-auto">
          
          {/* Ad Removal Button */}
          <button className="w-full py-4 px-6 rounded-full border-2 border-tertiary text-tertiary flex items-center justify-center gap-2 hover:bg-tertiary/5 active:scale-[0.98] transition-all duration-200">
            <span className="text-xl leading-none">🎁</span>
            <span className="font-button-label text-button-label">Watch ad to remove watermark</span>
          </button>
          
          {/* Primary Share Button */}
          <button className="w-full py-4 px-6 text-on-primary flex items-center justify-center gap-2 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200" style={{ background: "linear-gradient(135deg, rgb(79, 70, 229) 0%, rgb(129, 140, 248) 100%)", borderRadius: "24px", boxShadow: "rgba(79, 70, 229, 0.2) 0px 10px 12px" }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>ios_share</span>
            <span className="font-button-label text-button-label font-bold">Share</span>
          </button>
          
          {/* Cancel Button */}
          <button onClick={() => navigate('/studio')} className="w-full py-3 mt-2 text-on-surface-variant font-button-label text-button-label text-center hover:text-on-surface active:opacity-70 transition-colors duration-200">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
