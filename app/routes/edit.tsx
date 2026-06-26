import type { Route } from "./+types/edit";
import { useLocation, useNavigate, Link } from "react-router";
import { useState } from "react";
import { TraceModeSheet } from "../components/TraceModeSheet";
import { Slider } from "../components/Slider";

export function meta({}: Route.MetaArgs) {
  return [{ title: "PhotoTrace AR - Edit Outline" }];
}

function CustomSlider({ label, value, onChange }: { label: string, value: number, onChange: (v: number) => void }) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-20 font-caption text-[14px] text-on-surface font-medium">{label}</span>
      <Slider value={value} onChange={onChange} />
      <span className="w-8 text-right font-caption text-[14px] text-primary-container font-semibold slider-value">{value}</span>
    </div>
  );
}

export default function Edit() {
  const location = useLocation();
  const navigate = useNavigate();
  const imageUrl = location.state?.imageUrl;
  
  const [contrast, setContrast] = useState(65);
  const [threshold, setThreshold] = useState(50);
  const [smooth, setSmooth] = useState(20);
  const [isTraceModalOpen, setIsTraceModalOpen] = useState(false);

  if (!imageUrl) {
    return (
      <div className="h-screen flex items-center justify-center p-4">
        <p>No image selected. <Link to="/studio" className="text-primary underline">Go back</Link></p>
      </div>
    );
  }

  return (
    <div className="bg-background text-on-surface h-[100dvh] flex flex-col overflow-hidden font-body-md antialiased">
      {/* TopAppBar */}
      <header className="bg-background text-primary flex justify-between items-center w-full px-margin-mobile py-4 max-w-full docked full-width top-0 border-b border-surface-variant flex-shrink-0 z-10">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-primary-container hover:opacity-80 transition-opacity active:scale-95 group"
        >
          <span className="material-symbols-outlined mr-1 text-[24px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_back</span>
          <span className="font-button-label text-button-label">Back</span>
        </button>
        <h1 className="font-bold text-[18px] text-on-surface absolute left-1/2 transform -translate-x-1/2">
          Your outline
        </h1>
        <button 
          onClick={() => setIsTraceModalOpen(true)}
          className="bg-gradient-to-r from-primary-container to-secondary-container text-white px-4 py-1.5 rounded-[24px] font-button-label text-[14px] hover:opacity-80 transition-opacity shadow-[0_4px_12px_rgba(79,70,229,0.25)] active:scale-95"
        >
          Next
        </button>
      </header>
      
      {/* Middle Zone (Preview) */}
      <main className="flex-grow flex flex-col p-margin-mobile gap-stack-md overflow-y-auto relative no-scrollbar">
        <div className="flex w-full pb-4 flex-col gap-stack-sm">
          {/* Left Pane: Photo */}
          <div className="flex flex-col w-full">
            <span className="font-caption text-caption text-outline mb-2">Photo</span>
            <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-outline-variant shadow-sm bg-surface">
              <img className="w-full h-full object-cover" src={imageUrl} alt="Original photo" />
            </div>
          </div>
          {/* Right Pane: Outline */}
          <div className="flex flex-col w-full">
            <span className="font-caption text-caption text-outline mb-2">Outline</span>
            <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-outline-variant shadow-sm bg-surface flex items-center justify-center p-4">
              <img className="w-full h-full object-contain" src={imageUrl} style={{ filter: `contrast(${contrast}%) grayscale(100%)` }} alt="Outline preview" />
            </div>
          </div>
        </div>
      </main>
      
      {/* Toolbar Zone (Bottom) */}
      <footer className="bg-surface-container-lowest border-t border-surface-variant flex-shrink-0 pt-4 pb-8 px-margin-mobile rounded-t-[24px] shadow-[0_-10px_40px_-10px_rgba(79,70,229,0.05)] relative z-20">
        {/* Style Tabs */}
        <div className="flex gap-3 overflow-x-auto pb-6 scrollbar-hide snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button className="snap-start flex-shrink-0 bg-gradient-to-r from-primary-container to-secondary-container text-white px-5 py-1.5 rounded-full font-button-label text-[14px] shadow-sm active:scale-95 transition-transform">
            Basic
          </button>
          <button className="snap-start flex-shrink-0 bg-surface-container-low border border-outline-variant text-on-surface px-5 py-1.5 rounded-full font-button-label text-[14px] hover:bg-surface-variant transition-colors flex items-center gap-1 active:scale-95">
            Manga <span className="text-[14px]">🎁</span>
          </button>
          <button className="snap-start flex-shrink-0 bg-surface-container-low border border-outline-variant text-on-surface px-5 py-1.5 rounded-full font-button-label text-[14px] hover:bg-surface-variant transition-colors flex items-center gap-1 active:scale-95">
            Pencil <span className="text-[14px]">🎁</span>
          </button>
          <button className="snap-start flex-shrink-0 bg-surface-container-low border border-outline-variant text-on-surface px-5 py-1.5 rounded-full font-button-label text-[14px] hover:bg-surface-variant transition-colors flex items-center gap-1 active:scale-95">
            Comic <span className="text-[14px]">🎁</span>
          </button>
        </div>
        
        {/* Sliders */}
        <div className="flex flex-col gap-6">
          <CustomSlider label="Contrast" value={contrast} onChange={setContrast} />
          <CustomSlider label="Threshold" value={threshold} onChange={setThreshold} />
          <CustomSlider label="Smooth" value={smooth} onChange={setSmooth} />
        </div>
      </footer>

      {/* Choose Trace Mode Popup */}
      <TraceModeSheet 
        open={isTraceModalOpen}
        onOpenChange={setIsTraceModalOpen}
        imageUrl={imageUrl}
      />
    </div>
  );
}
