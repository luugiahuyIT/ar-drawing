import { Link } from "react-router";
import { CameraTraceTipsSheet } from "~/components/CameraTraceTipsSheet";

export function TraceActionBar() {
  return (
    <header className="absolute top-0 left-0 w-full z-10 px-[8px] py-[16px] flex justify-between items-start h-32 pointer-events-none">
      {/* Left Actions */}
      <div className="flex items-center gap-[8px] pt-4 pl-4 md:pl-0">
        <Link 
          to="/explore" 
          className="pointer-events-auto text-outline hover:bg-black/5 rounded-full transition-colors p-2 active:scale-95 flex items-center justify-center group"
        >
          <span className="material-symbols-outlined text-3xl group-hover:-translate-x-1 transition-transform" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_back</span>
        </Link>
        <CameraTraceTipsSheet trigger={
          <button className="pointer-events-auto text-outline hover:bg-black/5 rounded-full transition-colors p-2 active:scale-95 flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>help_outline</span>
          </button>
        } />
      </div>
      
      {/* Right Actions */}
      <div className="pt-4 pr-4 md:pr-0">
        <button className="pointer-events-auto text-white font-button-label text-[16px] px-6 py-3 rounded-[24px] shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgb(79, 70, 229) 0%, rgb(129, 140, 248) 100%)", boxShadow: "rgba(79, 70, 229, 0.25) 0px 4px 12px" }}>
          Complete
        </button>
      </div>
    </header>
  );
}
