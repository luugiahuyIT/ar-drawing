import type { Route } from "./+types/not-allowed";
import { useLocation, useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [{ title: "PhotoTrace AR - Camera Permission Denied" }];
}

export default function NotAllowedRoute() {
  const navigate = useNavigate();
  const location = useLocation();
  const imageUrl = location.state?.imageUrl;

  return (
    <div className="font-body-md text-on-background min-h-screen flex flex-col relative pb-[80px] bg-[#FFFBF5]">
      {/* Top AppBar */}
      <header className="fixed top-0 w-full z-50 bg-[#FFFBF5]/90 backdrop-blur-md border-b border-[#E8E4DE] shadow-[0_10px_30px_-15px_rgba(79,70,229,0.05)] h-16 flex items-center px-margin-mobile pt-safe">
        <div className="flex items-center w-full justify-between relative">
          <button onClick={() => navigate(-1)} aria-label="Go back" className="flex items-center text-[#4F46E5] hover:opacity-80 transition-opacity active:scale-95 duration-200 z-10">
            <span className="material-symbols-outlined text-[20px] mr-1" style={{ fontVariationSettings: "'wght' 400" }}>arrow_back</span>
            <span className="font-button-label text-button-label">Back</span>
          </button>
          <h1 className="absolute left-0 right-0 text-center font-subheadline text-subheadline text-[#1E1B3A] pointer-events-none">
            Camera Trace
          </h1>
          <div className="w-[60px]"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-margin-mobile mt-[64px] pb-8">
        <div className="flex flex-col items-center text-center space-y-[24px] w-full max-w-md mx-auto">
          {/* Hero Icon */}
          <div className="w-[160px] h-[160px] rounded-[24px] bg-[#FAF7F2] border-2 border-[#E8E4DE] flex items-center justify-center shadow-[0_10px_30px_-15px_rgba(79,70,229,0.05)]">
            <span className="material-symbols-outlined text-[80px] text-[#6B6981]" style={{ fontVariationSettings: "'FILL' 1" }}>
              videocam_off
            </span>
          </div>

          <div className="space-y-[8px] flex flex-col items-center">
            <h2 className="text-[28px] leading-[34px] font-bold text-[#1E1B3A]">
              Camera blocked
            </h2>
            <p className="text-[16px] leading-[24px] font-normal text-[#6B6981] max-w-[280px]">
              We can't access your camera right now. Try Screen Trace as a lightbox instead, or grant camera permission in Settings.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-[16px] pt-4 w-full">
            <button 
              onClick={() => navigate('/screen-trace', { state: { imageUrl } })}
              className="w-[280px] h-[56px] rounded-[24px] bg-gradient-to-br from-[#4F46E5] to-[#818CF8] text-white flex items-center justify-center hover:scale-[1.02] active:scale-95 transition-transform duration-200 shadow-[0_10px_12px_rgba(79,70,229,0.2)]"
            >
              <span className="material-symbols-outlined mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>desktop_windows</span>
              <span className="font-bold text-[18px]">Use Screen Trace</span>
            </button>
            <button 
              onClick={() => navigate(-1)}
              className="w-[280px] h-[56px] rounded-[12px] bg-white border border-[#E8E4DE] text-[#4F46E5] flex items-center justify-center font-semibold text-[16px] hover:bg-surface-container-low active:scale-95 transition-all duration-200 shadow-sm"
            >
              Open Settings
            </button>
          </div>

          <p className="text-[12px] font-normal text-[#A09FA8] pt-2">
            Your photos and camera data stay on your device.
          </p>
        </div>
      </main>
    </div>
  );
}
