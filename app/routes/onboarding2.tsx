import { useNavigate } from "react-router";
import { Button } from "~/components/Button";
import onboarding2Img from "~/assets/images/onboarding2.png";
import type { Route } from "./+types/onboarding2";

export function meta({}: Route.MetaArgs) {
  return [{ title: "PhotoTrace AR - Onboarding 2" }];
}

export default function Onboarding2() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-surface-container font-body-md select-none">
      <main className="flex-1 flex flex-col mx-auto w-full max-w-[412px] relative overflow-hidden bg-[#fdf9f3]">
        {/* Status Bar Mock */}
        <div className="h-8 w-full flex justify-between items-center px-6 pt-4 text-on-surface-variant">
          <span className="font-bold text-sm">9:41</span>
          <div className="flex gap-1.5 items-center">
            <span className="material-symbols-outlined text-[18px]">signal_cellular_4_bar</span>
            <span className="material-symbols-outlined text-[18px]">wifi</span>
            <span className="material-symbols-outlined text-[18px]">battery_full</span>
          </div>
        </div>

        {/* Top Navigation */}
        <header className="flex justify-end items-center px-6 h-16 pt-2">
        </header>

        {/* Hero Illustration */}
        <div className="flex-1 flex flex-col items-center justify-center px-10">
          <div className="relative w-full aspect-square flex items-center justify-center">
            <img 
              alt="PhotoTrace AR Hero Illustration showing guided drawing" 
              className="w-full h-auto object-contain drop-shadow-xl" 
              src={onboarding2Img} 
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="px-[20px] text-center flex flex-col items-center mb-10">
          <h1 className="text-[32px] text-[#1E1B3A] mb-4 font-bold tracking-tight">
            Master your skills
          </h1>
          <p className="text-[16px] text-[#6B6981] leading-relaxed max-w-[280px]">
            Follow guided tutorials to improve your drawing techniques step by step.
          </p>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-10">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E8E4DE]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-primary-container"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#E8E4DE]"></div>
        </div>

        {/* Primary Action */}
        <footer className="px-6 pb-12">
          <Button variant="primary" onClick={() => navigate("/onboarding3")}>
            Continue
          </Button>
          {/* Android Home Indicator Mock */}
          <div className="mt-8 mx-auto w-32 h-1.5 bg-outline-variant/30 rounded-full"></div>
        </footer>
      </main>
    </div>
  );
}
