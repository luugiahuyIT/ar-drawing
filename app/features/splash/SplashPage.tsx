import screenImg from '~/assets/images/screen.png';

export function SplashPage() {
  return (
    <div className="bg-[#FFFBF5] min-h-screen w-full flex flex-col font-sans">
      <style>{`
        .icon-gradient-mask {
          mask-image: url('${screenImg}');
          mask-size: contain;
          mask-repeat: no-repeat;
          mask-position: center;
          -webkit-mask-image: url('${screenImg}');
          -webkit-mask-size: contain;
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-position: center;
        }
      `}</style>

      {/* Top 40% Empty Space */}
      <div className="h-[40vh] w-full flex-shrink-0"></div>

      {/* Middle 30% Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center px-[24px] text-center">
        {/* Brand Icon: 240x240px using the provided image as a mask for the gradient */}
        <div aria-hidden="true" className="w-[240px] h-[240px] icon-gradient-mask bg-gradient-to-br from-[#4F46E5] to-[#818CF8]"></div>
        
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
      </main>

      {/* Bottom 30% Empty Space */}
      <div className="h-[30vh] w-full flex-shrink-0"></div>
    </div>
  );
}
