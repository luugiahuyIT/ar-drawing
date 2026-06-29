import screenImg from '~/assets/images/screen.webp';

export function SplashPage() {
  return (
    <div className="bg-[#FFFBF5] min-h-screen w-full flex flex-col font-sans">
      {/* Top 40% Empty Space */}
      <div className="h-[40vh] w-full flex-shrink-0"></div>

      {/* Middle 30% Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center px-[24px] text-center w-full max-w-md mx-auto">
        {/* Brand Icon */}
        <img 
          src={screenImg} 
          alt="PhotoTrace AR Logo" 
          className="w-[240px] h-[240px] object-contain drop-shadow-xl" 
        />
        
        {/* 32pt gap */}
        <div className="h-[32px]"></div>
        
        {/* App Name */}
        <h1 className="text-[#1E1B3A] font-bold text-[56px] leading-[1.1] tracking-[-0.02em]">
          PhotoTrace AR
        </h1>
        
        {/* 12pt gap */}
        <div className="h-[12px]"></div>
        
        {/* Tagline */}
        <p className="text-[#6B6981] font-normal text-[22px] leading-[1.4]">
          Trace any photo. Free forever.
        </p>

        {/* Progress Bar */}
        <div className="mt-12 w-48 h-1.5 bg-[#E8E4DE] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#4F46E5] to-[#818CF8] rounded-full animate-[progress_3s_ease-in-out_forwards]" />
        </div>
        <style>{`
          @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}</style>
      </main>

      {/* Bottom 30% Empty Space */}
      <div className="h-[30vh] w-full flex-shrink-0"></div>
    </div>
  );
}
