import { useNavigate, useParams } from "react-router";
import type { Route } from "./+types/lesson-step";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Lesson Editor - Day 1 - PhotoTrace AR" }];
}

export default function LessonStep() {
  const navigate = useNavigate();
  const { id, stepId } = useParams();
  
  const currentStep = parseInt(stepId || "1");
  const totalSteps = 6;
  
  const handlePrevious = () => {
    if (currentStep > 1) {
      navigate(`/lesson/${id || 1}/step/${currentStep - 1}`);
    } else {
      navigate(`/lesson/${id || 1}`);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      navigate(`/lesson/${id || 1}/step/${currentStep + 1}`);
    } else {
      navigate(`/lesson/${id || 1}`); // Go back to detail for now, could go to completion
    }
  };

  return (
    <div className="bg-surface-bright min-h-screen w-full flex justify-center text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* Mobile Device Container for presentation */}
      <main className="w-full max-w-md bg-background min-h-[884px] flex flex-col relative shadow-[0_10px_40px_-10px_rgba(79,70,229,0.1)] border-x border-surface-variant md:border-y md:my-8 md:rounded-[2rem] overflow-hidden md:min-h-[850px]">
        
        {/* Top Zone */}
        <header className="flex justify-between items-center px-gutter h-16 w-full bg-surface/70 backdrop-blur-md sticky top-0 z-50 shadow-[0_10px_30px_-15px_rgba(79,70,229,0.05)]">
          <button onClick={() => navigate(`/lesson/${id || 1}`)} aria-label="Go back" className="flex items-center text-primary-container hover:text-primary transition-colors cursor-pointer group">
            <span className="material-symbols-outlined text-[20px] group-active:scale-90 transition-transform">arrow_back</span>
            <span className="font-button-label text-button-label ml-1">Back</span>
          </button>
          <h1 className="font-body-md text-body-md font-bold text-on-surface text-center flex-1 truncate px-2">
            Day {id || 1}: Lines and Shapes
          </h1>
          <button aria-label="Help" className="text-outline hover:text-on-surface transition-colors cursor-pointer active:scale-90">
            <span className="material-symbols-outlined">help</span>
          </button>
        </header>
        
        {/* Progress Zone */}
        <div className="px-gutter py-stack-md flex gap-2 w-full">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 flex-1 rounded-full ${
                i + 1 < currentStep 
                  ? 'bg-gradient-to-r from-primary-container to-secondary-container' 
                  : i + 1 === currentStep
                    ? 'bg-gradient-to-r from-secondary-container to-inverse-primary'
                    : 'bg-surface-variant'
              }`}
            ></div>
          ))}
        </div>
        
        {/* Step Content placeholder - This would normally contain the image or drawing logic for the step */}
        <div className="flex-1 flex items-center justify-center p-8 text-center text-on-surface-variant">
          <div className="flex flex-col items-center">
            <span className="material-symbols-outlined text-6xl text-outline mb-4">draw</span>
            <p className="font-subheadline text-[24px]">Step {currentStep}</p>
            <p className="text-sm mt-2 max-w-xs">Follow the guide to trace the lines on your paper.</p>
          </div>
        </div>

        <footer className="mt-auto p-gutter bg-surface/70 backdrop-blur-md border-t border-surface-variant flex justify-between items-center gap-4">
          <button onClick={handlePrevious} className="flex-1 h-14 rounded-[24px] border border-outline text-on-surface font-bold transition-transform active:scale-95">
            Previous
          </button>
          <button onClick={handleNext} className="flex-1 h-14 rounded-[24px] bg-gradient-to-br from-[#4F46E5] to-[#818CF8] text-white font-bold shadow-[0_12px_24px_-8px_rgba(79,70,229,0.2)] transition-transform active:scale-95">
            {currentStep === totalSteps ? 'Finish' : 'Next'}
          </button>
        </footer>
      </main>
    </div>
  );
}
