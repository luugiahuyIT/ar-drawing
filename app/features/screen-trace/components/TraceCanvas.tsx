interface TraceCanvasProps {
  opacity: number; // 0 to 100
  imageUrl?: string;
}

export function TraceCanvas({ opacity, imageUrl }: TraceCanvasProps) {
  return (
    <main className="flex-1 flex items-center justify-center relative w-full h-full p-margin-mobile z-0">
      {/* SVG Tracing Image (Sunflower Bloom) */}
      <div 
        className="w-full h-full flex items-center justify-center transition-opacity duration-200" 
        style={{ opacity: opacity / 100 }}
      >
        {imageUrl ? (
          <img 
            src={imageUrl} 
            className="w-full h-full object-contain pointer-events-none" 
            alt="Trace outline" 
          />
        ) : (
          <div className="w-full max-w-[80vmin] aspect-square flex items-center justify-center">
            <svg className="w-full h-full stroke-on-surface fill-none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 100 100">
              {/* Simplified Sunflower Path */}
              <circle className="fill-surface-dim" cx="50" cy="50" r="15"></circle>
              <path d="M50 35 C45 20, 55 20, 50 35 Z"></path>
              <path d="M50 65 C45 80, 55 80, 50 65 Z"></path>
              <path d="M35 50 C20 45, 20 55, 35 50 Z"></path>
              <path d="M65 50 C80 45, 80 55, 65 50 Z"></path>
              <path d="M40 40 C30 25, 40 20, 40 40 Z"></path>
              <path d="M60 60 C70 75, 60 80, 60 60 Z"></path>
              <path d="M60 40 C75 30, 80 40, 60 40 Z"></path>
              <path d="M40 60 C25 70, 20 60, 40 60 Z"></path>
              {/* Center details */}
              <circle cx="50" cy="50" r="10" strokeDasharray="1 2" strokeWidth="0.5"></circle>
            </svg>
          </div>
        )}
      </div>
    </main>
  );
}
