import { useNavigate } from "react-router";
import type { Route } from "./+types/capture-complete";
import { useCaptureStore } from "../store/useCaptureStore";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Capture Preview - PhotoTrace AR" }];
}

export default function CaptureComplete() {
  const navigate = useNavigate();
  const capturedImage = useCaptureStore((state) => state.capturedImage);
  const displayImage = capturedImage || "https://lh3.googleusercontent.com/aida-public/AB6AXuAjiskcyjyL-d5VOhk7WJR0y3VCxurkV0cqr7j2xS2aYl9bgQsMvOrQpx6aO4r7TVDHOMv8-TNZLtwKeWtUTpd2CpvuwJ7ihvoDEkj5HUIeEzYsPEP4Tlp5KBiGTzqTmFnpDb38-A4thVOD-8gtZJFn6SvG3f82-cBt4jagzeeL2xtJlpSNVMXj6UBe14HrZYk4YpkOxFhj_irNGMetrPGOLFMh4eWRjzvhizun5v6JbGtqbSL-nF99yfG8Ok4ckD7GIJ4uNQLbmHEA";

  return (
    <div className="bg-[#FFFBF5] min-h-screen flex flex-col items-center justify-between font-sans text-[#4F46E5] antialiased max-w-md mx-auto relative overflow-hidden">
      {/* Top Section */}
      <header className="w-full flex flex-col items-center pt-8 pb-6 px-6 z-10 shrink-0">
        <h1 className="font-bold text-[28px] leading-[36px] text-[#4F46E5] mb-1 text-center">Looks good?</h1>
        <p className="font-normal text-[14px] leading-[20px] text-[#4F46E5]/70 text-center">We captured a clean photo of your drawing.</p>
      </header>
      
      {/* Middle Section: Preview Card */}
      <main className="w-full flex-grow flex items-center justify-center px-6 py-4 z-10">
        <div className="w-full h-full max-h-[530px] rounded-[24px] overflow-hidden shadow-[0_10px_30px_-15px_rgba(79,70,229,0.05)] bg-white border border-[#c7c4d8]/30 flex items-center justify-center relative group">
          <img 
            alt="Captured drawing preview" 
            className="w-full h-full object-contain p-2" 
            src={displayImage}
          />
          {/* Decorative corner elements for 'scanner' feel */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#4F46E5]/20 rounded-tl-lg"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#4F46E5]/20 rounded-tr-lg"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#4F46E5]/20 rounded-bl-lg"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#4F46E5]/20 rounded-br-lg"></div>
        </div>
      </main>

      {/* Bottom Section: Buttons */}
      <footer className="w-full px-6 pb-12 pt-6 flex flex-col gap-4 z-10 shrink-0">
        {/* Save Button */}
        <button 
          className="w-full h-[56px] rounded-[24px] bg-[#4F46E5] text-white font-bold text-[16px] leading-[24px] shadow-[0_8px_24px_-12px_rgba(79,70,229,0.25)] hover:bg-[#4F46E5]/90 active:translate-y-[2px] active:shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
          onClick={() => navigate('/studio')}
        >
          Save
        </button>
        {/* Retake Button */}
        <button 
          className="w-full h-[56px] rounded-[24px] bg-white border-2 border-[#4F46E5] text-[#4F46E5] font-bold text-[16px] leading-[24px] hover:bg-[#4F46E5]/5 active:translate-y-[2px] transition-all duration-200 flex items-center justify-center gap-2"
          onClick={() => navigate(-1)}
        >
          Retake
        </button>
        {/* Save Outline Only Button */}
        <button 
          className="w-full py-2 text-[#4F46E5]/70 font-semibold text-[14px] leading-[20px] hover:text-[#4F46E5] active:scale-95 transition-all duration-200 text-center"
          onClick={() => navigate('/studio')}
        >
          Save outline only
        </button>
      </footer>
    </div>
  );
}
