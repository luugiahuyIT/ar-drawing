import type { Route } from "./+types/camera-trace";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { Slider } from "../components/Slider";
import { CameraTraceTipsSheet } from "../components/CameraTraceTipsSheet";

export function meta({}: Route.MetaArgs) {
  return [{ title: "PhotoTrace AR - Live AR Mode" }];
}

export default function CameraTrace() {
  const location = useLocation();
  const navigate = useNavigate();
  const imageUrl = location.state?.imageUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuBnCZKF-YUkVDFfaP8pW2atyfh2HLIpbP0qyU9ESKdZLI8g4ANgBbkPuHid7luvThIpIytUFZA6bnoCirzXNr6VzO9CDErTTSXstUgVFrQFEhcx1DHPrkrNnkDJNt_ehs__F0umDva6OCywSU2eN9GN20W1VJVIu5cIbqW72GbIp_-TWHMHUI1OQsV1pVGoah7wbIci71dlJQtXlvqYEv3ugOnbltKcYc0UBiIBpv-kMiuGcZxCE11-gP7WPDovza0w8RWaHKLUkPfe";
  
  const [opacity, setOpacity] = useState(50);
  const [isFrozen, setIsFrozen] = useState(false);
  const [isMirrored, setIsMirrored] = useState(false);

  return (
    <div className="bg-surface text-on-surface h-screen w-screen overflow-hidden font-body-md antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <style>{`
        .camera-bg {
          background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuDBNkAT8eOs-v43bePeWOXrBPfse0iGP9nsEQoVhWqMBZ7lSXT6pVlh4dgE24CDczsQ-sctf29wT4MPpX40I8IG4zG3lRCo4TYw_AvOjVK5eBLtbAaWfBwFf1COdAwB-JGuKfNX9vBCXDz8OTiVnyad5xICV3ThgKerRdHdQLeuT13Pe_uRrYdCL91b2zjnd-iG-9Hi9hEaZlXpmx0nmlx2RrvNXGrQf352B-zJHz_UWJysPcY-hrJGNiGALxiOJ_pvBIE0TFvjGhwp);
          background-size: cover;
          background-position: center;
        }
        .top-gradient {
          background: linear-gradient(to bottom, rgba(30, 27, 58, 0.7) 0%, transparent 100%);
        }
        .bottom-gradient {
          background: linear-gradient(to top, rgba(30, 27, 58, 0.85) 0%, transparent 100%);
        }
      `}</style>

      {/* AR Camera View Container */}
      <main className="relative h-full w-full camera-bg">
        {/* AR Overlay Layer (The traced image) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 pt-[120px] pb-[220px] px-8">
          <div className="relative w-full h-full max-w-[450px] max-h-[450px] flex items-center justify-center" style={{ opacity: opacity / 100 }}>
            {/* If we have an image, we show it, else fallback to SVG placeholder */}
            {imageUrl ? (
              <img 
                src={imageUrl} 
                className="w-full h-full object-contain" 
                style={{ transform: isMirrored ? 'scaleX(-1)' : 'none' }}
                alt="AR trace outline" 
              />
            ) : (
              <svg className="w-full h-full text-primary-container drop-shadow-md stroke-current" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 100 100">
                <path d="M20,50 Q30,20 50,20 T80,50 Q90,70 80,80 Q70,90 50,90 Q30,90 20,80 Q10,70 20,50 Z" strokeDasharray="4 4"></path>
                <circle cx="35" cy="45" fill="currentColor" r="4"></circle>
                <circle cx="65" cy="45" fill="currentColor" r="4"></circle>
                <ellipse cx="50" cy="65" fill="currentColor" rx="8" ry="5"></ellipse>
              </svg>
            )}
          </div>
        </div>


        {/* Top UI Overlay */}
        <header className="absolute top-0 left-0 w-full z-50 top-gradient px-[8px] py-[16px] flex justify-between items-start h-32">
          {/* Left Actions */}
          <div className="flex items-center gap-[8px] pt-4 pl-4 md:pl-0">
            <button onClick={() => navigate(-1)} aria-label="Back" className="p-2 rounded-full hover:bg-white/10 transition-colors group">
              <span className="material-symbols-outlined text-white text-3xl group-hover:-translate-x-1 transition-transform" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_back</span>
            </button>
            <CameraTraceTipsSheet trigger={
              <button aria-label="Help" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>help_outline</span>
              </button>
            } />
          </div>

          {/* Right Actions */}
          <div className="pt-4 pr-4 md:pr-0">
            <button className="text-white font-button-label text-[16px] px-6 py-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2" style={{ background: "linear-gradient(135deg, rgb(79, 70, 229) 0%, rgb(129, 140, 248) 100%)", borderRadius: "24px", boxShadow: "rgba(79, 70, 229, 0.25) 0px 4px 12px" }}>
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>check_circle</span>
              Complete
            </button>
          </div>
        </header>

        {/* Bottom UI Overlay */}
        <footer className="absolute bottom-0 left-0 w-full z-50 bottom-gradient px-[20px] md:px-[64px] pb-[32px] pt-24 flex flex-col items-center justify-end pointer-events-none">
          {/* Main Controls Container */}
          <div className="w-full max-w-md mx-auto flex flex-col gap-[16px] bg-[#4b5563]/80 backdrop-blur-md p-6 rounded-[24px] border border-white/10 shadow-2xl pointer-events-auto">
            
            {/* Opacity Slider Control */}
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-between items-center text-white font-caption text-[14px]">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>opacity</span>
                  Opacity
                </span>
                <span className="font-bold">{opacity}%</span>
              </div>
              <Slider value={opacity} onChange={setOpacity} />
            </div>

            {/* Secondary Actions (Pill Buttons) */}
            <div className="flex justify-center gap-[16px] mt-2">
              <button 
                onClick={() => setIsMirrored(!isMirrored)}
                className={`bg-[#FAF7F2]/80 hover:bg-[#FAF7F2] text-on-surface font-caption text-[14px] px-5 py-2 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-all active:scale-95 backdrop-blur-sm ${isMirrored ? 'bg-primary-container/20 border border-primary text-primary' : ''}`}
              >
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>flip</span>
                Mirror
              </button>
              <button 
                onClick={() => setIsFrozen(!isFrozen)}
                className={`bg-[#FAF7F2]/80 hover:bg-[#FAF7F2] text-on-surface font-caption text-[14px] px-5 py-2 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-all active:scale-95 backdrop-blur-sm ${isFrozen ? 'bg-primary-container/20 border border-primary text-primary' : ''}`}
              >
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>ac_unit</span>
                {isFrozen ? 'Unfreeze' : 'Freeze'}
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
