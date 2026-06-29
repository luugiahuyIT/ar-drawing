import { useNavigate, useParams } from "react-router";
import type { Route } from "./+types/lesson-detail";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Day 1 Lesson - PhotoTrace AR" }];
}

export default function LessonDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const steps = [
    { num: 1, title: "Horizontal lines", time: "~2 min", icon: <svg fill="none" height="24" stroke="#1E1B3A" strokeLinecap="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg> },
    { num: 2, title: "Vertical lines", time: "~2 min", icon: <svg fill="none" height="24" stroke="#1E1B3A" strokeLinecap="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><line x1="12" x2="12" y1="4" y2="20"></line><line x1="6" x2="6" y1="4" y2="20"></line><line x1="18" x2="18" y1="4" y2="20"></line></svg> },
    { num: 3, title: "Add a circle", time: "~2 min", icon: <svg fill="none" height="24" stroke="#1E1B3A" strokeWidth="2" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="8"></circle></svg> },
    { num: 4, title: "Square and rectangle", time: "~2 min", icon: <svg fill="none" height="24" stroke="#1E1B3A" strokeWidth="2" viewBox="0 0 24 24" width="24"><rect height="7" width="7" x="4" y="4"></rect><rect height="10" width="8" x="13" y="10"></rect></svg> },
    { num: 5, title: "Diagonals & angles", time: "~2 min", icon: <svg fill="none" height="24" stroke="#1E1B3A" strokeLinecap="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><line x1="4" x2="20" y1="20" y2="4"></line><line x1="4" x2="16" y1="12" y2="20"></line></svg> },
    { num: 6, title: "Combine into composition", time: "~2 min", icon: <svg fill="none" height="24" stroke="#1E1B3A" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><polygon points="12 2 2 22 22 22"></polygon><circle cx="12" cy="14" r="4"></circle></svg> },
  ];

  return (
    <div className="bg-[#FFFBF5] font-body-md text-[#1E1B3A] min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[428px] min-h-screen relative flex flex-col bg-[#FFFBF5] shadow-2xl overflow-hidden">
        
        {/* TopAppBar */}
        <header className="w-full h-14 flex items-center justify-between px-5 border-b border-[#E8E4DE] bg-[#FFFBF5] sticky top-0 z-40">
          <button onClick={() => {navigate("/learn")}} className="flex items-center text-primary-container font-semibold text-[16px] hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined mr-1">arrow_back</span>
            Back
          </button>
          <h1 className="absolute left-1/2 -translate-x-1/2 font-bold text-[18px] text-[#1E1B3A]">Day {id || 1} Lesson</h1>
          <div className="w-16"></div> {/* Spacer for center alignment */}
        </header>
        
        <main className="flex-1 overflow-y-auto px-5 pb-32 pt-6 flex flex-col gap-8">
          {/* Hero Zone */}
          <section>
            <div className="bg-gradient-to-br from-[#4F46E5] to-[#818CF8] rounded-2xl p-6 text-white shadow-lg shadow-primary-container/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm pointer-events-none"></div>
              <div className="relative z-10 flex flex-col gap-3">
                <span className="text-[11px] font-bold tracking-[0.1em] text-white/80 uppercase">DAY {id || 1} • FREE</span>
                <h2 className="text-[28px] font-bold leading-tight">Lines and Shapes</h2>
                <p className="text-[14px] text-white/90">6 steps • 12 min • Beginner</p>
              </div>
            </div>
          </section>
          
          {/* Description Zone */}
          <section>
            <p className="text-[16px] text-[#6B6981] leading-relaxed">
              Build the foundation of every drawing — control lines, master angles, and feel confident with simple shape construction.
            </p>
          </section>
          
          {/* Step List Zone */}
          <section className="flex flex-col gap-4">
            <h3 className="text-[16px] font-bold text-[#1E1B3A]">Steps</h3>
            <div className="flex flex-col gap-3">
              {steps.map((step) => (
                <div key={step.num} className="h-[64px] bg-[#FAF7F2] rounded-xl border border-[#E8E4DE] flex items-center p-2 pr-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigate(`/lesson/${id || 1}/step/${step.num}`)}>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#818CF8] flex items-center justify-center text-white font-bold text-[18px] shrink-0">
                    {step.num}
                  </div>
                  <div className="ml-3 flex-1 flex flex-col justify-center">
                    <span className="font-bold text-[16px] text-[#1E1B3A] leading-tight">{step.title}</span>
                    <span className="text-[11px] text-[#A09FA8] mt-0.5">{step.time}</span>
                  </div>
                  <div className="w-10 h-10 bg-[#FFFBF5] rounded border border-[#E8E4DE]/50 flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        
        {/* Action Zone (Sticky Bottom) */}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#FFFBF5] via-[#FFFBF5] to-transparent pt-12 pb-8 px-5 flex flex-col gap-4 z-40">
          <button 
            onClick={() => navigate(`/lesson/${id || 1}/step/1`)}
            className="w-full h-[56px] bg-gradient-to-br from-[#4F46E5] to-[#818CF8] rounded-[24px] flex items-center justify-center text-white font-bold text-[18px] shadow-lg shadow-primary-container/20 transform active:scale-[0.98] transition-all hover:scale-[1.02]"
          >
            <span className="material-symbols-outlined mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            Start lesson
          </button>
          <button 
            onClick={() => navigate('/camera-trace')}
            className="w-full py-2 text-primary-container font-semibold text-[16px] flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            Preview camera mode
          </button>
        </div>
      </div>
    </div>
  );
}
