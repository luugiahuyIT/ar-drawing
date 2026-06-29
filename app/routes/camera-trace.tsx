import type { Route } from "./+types/camera-trace";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { Slider } from "../components/Slider";
import { CameraTraceTipsSheet } from "../components/CameraTraceTipsSheet";
import { ConfirmModal } from "../components/ConfirmModal";
import { ExportBottomSheet } from "../components/ExportBottomSheet";
import Webcam from "react-webcam";
import { useRef } from "react";
import { useCaptureStore } from "../store/useCaptureStore";

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
  const [activeTab, setActiveTab] = useState<'OPACITY' | 'CAMERA' | 'IMAGE'>('OPACITY');
  const [isHidden, setIsHidden] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);

  const webcamRef = useRef<Webcam>(null);
  const setCapturedImage = useCaptureStore((state) => state.setCapturedImage);

  const handleComplete = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setCapturedImage(imageSrc);
      navigate('/capture-complete');
    } else {
      // Fallback if camera is not ready
      navigate('/capture-complete');
    }
  };

  const handleSaveAndExit = () => {
    const existingStr = localStorage.getItem('album-images');
    const existing = existingStr ? JSON.parse(existingStr) : [];
    existing.unshift({
      id: Date.now(),
      image: imageUrl,
      date: 'Just now'
    });
    localStorage.setItem('album-images', JSON.stringify(existing));
    
    setIsConfirmOpen(false);
    setIsExportOpen(true);
  };

  return (
    <div className="bg-surface text-on-surface h-screen w-screen overflow-hidden font-body-md antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <style>{`
        .top-gradient {
          background: linear-gradient(to bottom, rgba(30, 27, 58, 0.7) 0%, transparent 100%);
        }
        .bottom-gradient {
          background: linear-gradient(to top, rgba(30, 27, 58, 0.85) 0%, transparent 100%);
        }
      `}</style>

      {/* AR Camera View Container */}
      <main className="relative h-full w-full bg-black">
        {/* The Webcam Background */}
        <div className="absolute inset-0 z-0">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-full h-full object-cover"
            videoConstraints={{ facingMode: "environment" }}
          />
        </div>

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
            <button onClick={handleComplete} className="text-white font-button-label text-[16px] px-6 py-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2" style={{ background: "linear-gradient(135deg, rgb(79, 70, 229) 0%, rgb(129, 140, 248) 100%)", borderRadius: "24px", boxShadow: "rgba(79, 70, 229, 0.25) 0px 4px 12px" }}>
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>check_circle</span>
              Complete
            </button>
          </div>
        </header>

        {/* Unhide Button */}
        {isHidden && (
          <button 
            onClick={() => setIsHidden(false)}
            className="absolute bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#1A1926]/90 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg text-white pointer-events-auto hover:bg-[#1A1926] transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">visibility</span>
          </button>
        )}

        {/* Bottom UI Overlay */}
        {/* Bottom UI Overlay */}
        <footer className={`absolute bottom-0 left-0 w-full z-50 flex flex-col items-center justify-end pointer-events-none transition-transform duration-300 ease-in-out ${isHidden ? 'translate-y-full' : 'translate-y-0'}`}>
          
          {/* Row 1: Controls */}
          <div className="w-full max-w-md mx-auto pointer-events-auto bg-white/10 backdrop-blur-md p-6 rounded-t-2xl border-t border-l border-r border-white/20 shadow-lg min-h-[130px] flex items-center justify-center">
            
            {activeTab === 'OPACITY' && (
              <div className="w-full flex flex-col gap-5">
                <div className="flex justify-between items-center text-white/90 font-caption text-[13px]">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">opacity</span>
                    Opacity
                  </span>
                  <span className="font-bold">{opacity}%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-white/40 text-[20px]">visibility_off</span>
                  <div className="flex-1 relative flex items-center h-6">
                    <Slider value={opacity} onChange={setOpacity} />
                  </div>
                  <span className="material-symbols-outlined text-white/90 text-[20px]">visibility</span>
                </div>
              </div>
            )}

            {activeTab === 'CAMERA' && (
              <div className="w-full flex justify-around items-start gap-2">
                {/* Flash */}
                <div className="flex flex-col items-center gap-2">
                  <button className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                    <span className="material-symbols-outlined">flash_off</span>
                  </button>
                  <span className="text-white text-[10px] font-bold">Flash</span>
                  <div className="bg-[#FFFBF5] px-2 py-0.5 rounded-full">
                    <span className="text-[#1E1B3A] text-[8px] font-bold">Flash: OFF</span>
                  </div>
                </div>
                
                {/* Capture */}
                <div className="flex flex-col items-center gap-2">
                  <button className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                    <span className="material-symbols-outlined">photo_camera</span>
                  </button>
                  <span className="text-white text-[10px] font-bold">Capture</span>
                  <span className="text-white/70 text-[8px]">Snapshot</span>
                </div>
                
                {/* Lock Focus */}
                <div className="flex flex-col items-center gap-2">
                  <button className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                    <span className="material-symbols-outlined">track_changes</span>
                  </button>
                  <span className="text-white text-[10px] font-bold">Lock Focus</span>
                  <span className="text-white/70 text-[8px]">AF lock</span>
                </div>
                
                {/* Zoom */}
                <div className="flex flex-col items-center gap-2">
                  <button className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                    <span className="material-symbols-outlined">zoom_in</span>
                  </button>
                  <span className="text-white text-[10px] font-bold">Zoom</span>
                  <span className="text-white/70 text-[8px]">1.0x</span>
                </div>
              </div>
            )}

            {activeTab === 'IMAGE' && (
              <div className="w-full flex justify-around items-start gap-2">
                <button onClick={() => setIsMirrored(!isMirrored)} className="flex flex-col items-center gap-2 group">
                  <div className={`w-[50px] h-[50px] rounded-full flex items-center justify-center transition-colors ${isMirrored ? 'bg-primary text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                    <span className="material-symbols-outlined">flip</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-[10px] font-bold">Mirror</span>
                    <span className="text-white/60 text-[8px]">Mirror flip</span>
                  </div>
                </button>
                
                <button onClick={() => setIsFrozen(!isFrozen)} className="flex flex-col items-center gap-2 group">
                  <div className={`w-[50px] h-[50px] rounded-full flex items-center justify-center transition-colors ${isFrozen ? 'bg-primary text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                    <span className="material-symbols-outlined">{isFrozen ? 'lock' : 'lock_open_right'}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-[10px] font-bold">Lock</span>
                    <span className="text-white/60 text-[8px]">Lock overlay</span>
                  </div>
                </button>
                
                <button className="flex flex-col items-center gap-2 group">
                  <div className="w-[50px] h-[50px] rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                    <span className="material-symbols-outlined">grid_on</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-[10px] font-bold">Grid</span>
                    <span className="text-white/60 text-[8px]">Show grid</span>
                  </div>
                </button>
                
                <button onClick={() => {
                  setOpacity(50);
                  setIsMirrored(false);
                  setIsFrozen(false);
                }} className="flex flex-col items-center gap-2 group">
                  <div className="w-[50px] h-[50px] rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                    <span className="material-symbols-outlined">restart_alt</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-[10px] font-bold">Reset</span>
                    <span className="text-white/60 text-[8px]">Reset position</span>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Row 2: Tab Bar */}
          <div className="w-full bg-[#1E1B3A]/85 backdrop-blur-md border-t border-white/10 pointer-events-auto">
            <div className="max-w-md mx-auto flex justify-around items-center py-3">
              <button onClick={() => setActiveTab('OPACITY')} className={`flex flex-col items-center gap-1 ${activeTab === 'OPACITY' ? 'text-white border-b-2 border-[#4F46E5] pb-1' : 'text-white/60 hover:text-white'}`}>
                <span className={`material-symbols-outlined ${activeTab === 'OPACITY' ? 'text-[#4F46E5]' : ''}`}>opacity</span>
                <span className="text-[10px] font-bold uppercase tracking-wider">Opacity</span>
              </button>
              
              <button onClick={() => setActiveTab('CAMERA')} className={`flex flex-col items-center gap-1 ${activeTab === 'CAMERA' ? 'text-white border-b-2 border-[#4F46E5] pb-1' : 'text-white/60 hover:text-white'}`}>
                <span className={`material-symbols-outlined ${activeTab === 'CAMERA' ? 'text-[#4F46E5]' : ''}`}>camera_alt</span>
                <span className="text-[10px] font-bold uppercase tracking-wider">Camera</span>
              </button>
              
              <button onClick={() => setActiveTab('IMAGE')} className={`flex flex-col items-center gap-1 ${activeTab === 'IMAGE' ? 'text-white border-b-2 border-[#4F46E5] pb-1' : 'text-white/60 hover:text-white'}`}>
                <span className={`material-symbols-outlined ${activeTab === 'IMAGE' ? 'text-[#4F46E5]' : ''}`}>image</span>
                <span className="text-[10px] font-bold uppercase tracking-wider">Image</span>
              </button>
              
              <button onClick={() => setIsHidden(true)} className="flex flex-col items-center gap-1 text-white/60 hover:text-white pb-1">
                <span className="material-symbols-outlined">hide_source</span>
                <span className="text-[10px] font-bold uppercase tracking-wider">Hide</span>
              </button>
            </div>
          </div>
          
          {/* Banner Ad Area Placeholder */}
          <div className="w-full h-[60px] bg-black/40 flex items-center justify-center border-t border-white/5 pointer-events-auto">
            <span className="text-white/30 text-xs font-bold tracking-widest uppercase">BANNER AD AREA</span>
          </div>
          
        </footer>
      </main>

      <ConfirmModal 
        isOpen={isConfirmOpen}
        onConfirm={handleSaveAndExit}
        onCancel={() => setIsConfirmOpen(false)}
      />

      <ExportBottomSheet 
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        imageUrl={imageUrl}
      />
    </div>
  );
}
