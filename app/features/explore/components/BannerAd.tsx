export function BannerAd() {
  return (
    <div className="mt-stack-lg mb-8 w-full h-[60px] bg-surface-variant rounded-lg flex items-center justify-center border border-outline-variant/50 relative overflow-hidden">
      <span className="font-caption text-caption text-outline font-medium tracking-widest uppercase">Advertisement</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-surface/30 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
      
      {/* Inline style for the shimmer animation since it was in a custom style tag in the HTML */}
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
