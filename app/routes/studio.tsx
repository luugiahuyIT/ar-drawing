import type { Route } from "./+types/studio";
import { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { useStudioStore } from "../store";

export function meta({}: Route.MetaArgs) {
  return [{ title: "PhotoTrace AR - Studio" }];
}

export default function Studio() {
  const images = useStudioStore((state) => state.images);
  const addImage = useStudioStore((state) => state.addImage);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          addImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
    // reset input
    e.target.value = '';
  };

  const handleImageClick = (imageUrl: string) => {
    navigate("/edit", { state: { imageUrl } });
  };

  return (
    <>
      {/* Hidden File Input */}
      <input 
        type="file" 
        accept="image/*" 
        hidden 
        ref={fileInputRef} 
        onChange={handleFileChange} 
      />

      {images.length === 0 ? (
        // --- EMPTY STATE ---
        <>
          {/* Ambient AR Glow Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-32 w-[30rem] h-[30rem] bg-tertiary-container/5 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-ar-grid"></div>
          </div>



          {/* TopAppBar */}
          <header className="flex justify-between items-center w-full px-[20px] h-16 sticky top-0 z-50 bg-surface/70 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(79,70,229,0.05)] border-b border-surface-variant/50">
            <div className="flex items-center gap-3">
              <h1 className="font-headline-lg-mobile font-extrabold text-primary tracking-tight text-2xl">Studio</h1>
            </div>
            <Link to="/settings" className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-primary-container/10 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-2xl">settings</span>
            </Link>
          </header>

          {/* Main Content Canvas (Empty State Hero) */}
          <main className="flex-1 flex flex-col items-center justify-center px-[20px] pb-32 pt-10">
            <div className="flex flex-col items-center max-w-[320px] w-full mx-auto relative z-10 animate-fade-in-up">
              
              {/* Hero Icon */}
              <div className="relative group mb-[16px]">
                <div className="absolute -inset-4 border border-primary/20 rounded-[2rem] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out">
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary rounded-br-lg"></div>
                </div>
                <div className="w-40 h-40 rounded-[24px] bg-gradient-to-br from-[#4F46E5] to-[#818CF8] flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(79,70,229,0.4)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-50 transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  <span className="text-[80px] filter drop-shadow-md relative z-10 animate-bounce-subtle">📸</span>
                </div>
              </div>

              <h2 className="text-[24px] font-bold text-on-surface mb-[8px] text-center">
                Trace your first photo
              </h2>
              <p className="text-[18px] text-on-surface-variant text-center mb-[48px] max-w-[280px]">
                Pick any photo from your gallery. We'll turn it into an outline you can trace on paper.
              </p>

              <button onClick={handleImportClick} className="w-full h-14 bg-gradient-to-br from-[#4F46E5] to-[#818CF8] text-white rounded-[24px] font-button-label text-[16px] font-semibold shadow-[0_10px_30px_-10px_rgba(79,70,229,0.3)] flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] active:translate-y-0.5 transition-all duration-200 group mb-[8px]">
                <span className="text-xl group-hover:scale-110 transition-transform">📸</span>
                Import a photo
              </button>

              <div className="flex items-center gap-1.5 justify-center opacity-80">
                <span className="material-symbols-outlined text-[14px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-[14px] font-medium text-outline">Free forever. No subscription.</span>
              </div>
            </div>
          </main>
        </>
      ) : (
        // --- IMPORTED STATE ---
        <div className="bg-surface text-on-surface h-full flex flex-col font-body-md overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container min-h-screen">

          
          {/* Top App Bar */}
          <header className="flex justify-between items-center w-full px-margin-mobile h-16 sticky top-0 z-50 bg-surface/70 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(79,70,229,0.05)] border-b border-surface-variant/50">
            <div className="flex items-center gap-3">
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-extrabold text-primary tracking-tight text-2xl" style={{color: "rgb(30, 27, 58)"}}>Studio</h1>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={handleImportClick} className="bg-gradient-to-br from-[#4F46E5] to-[#818CF8] text-white font-button-label text-button-label px-4 py-1.5 rounded-[24px] shadow-[0_4px_12px_rgba(79,70,229,0.25)] hover:scale-105 active:scale-95 transition-transform flex items-center gap-1">
                <span className="material-symbols-outlined text-sm font-bold">add</span>
                New
              </button>
              <Link to="/settings" className="text-outline hover:bg-primary-container/10 transition-colors active:scale-95 p-1 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
              </Link>
            </div>
          </header>
          
          {/* Divider */}
          <div className="w-full h-px bg-surface-variant shrink-0"></div>
          
          {/* Main Content Canvas */}
          <main className="flex-1 overflow-y-auto px-margin-mobile pt-stack-md pb-32">
            <div className="grid grid-cols-2 gap-stack-sm">
              {images.map((imgUrl, index) => (
                <button 
                  key={index} 
                  onClick={() => handleImageClick(imgUrl)}
                  className="aspect-square bg-surface-container-lowest border border-outline-variant rounded-xl flex items-center justify-center relative overflow-hidden group shadow-lg -translate-y-1 transition-all"
                >
                  <div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    className="w-2/3 h-2/3 object-contain opacity-90 group-hover:scale-105 transition-transform duration-300 pointer-events-none" 
                    src={imgUrl} 
                    alt={`Imported ${index}`}
                  />
                </button>
              ))}
            </div>
          </main>
        </div>
      )}
    </>
  );
}

