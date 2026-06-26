import type { Route } from "./+types/learn";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Learn - PhotoTrace AR" }];
}

export default function Learn() {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/70 dark:bg-surface-dim/70 backdrop-blur-md shadow-[0_10px_30px_-15px_rgba(79,70,229,0.05)]">
        <div className="flex justify-between items-center px-margin-mobile h-16 w-full">
          <h1 className="font-subheadline text-subheadline font-bold text-on-background">Learn</h1>
          <button className="p-2 hover:opacity-80 transition-opacity active:scale-95 duration-200">
            <span className="material-symbols-outlined text-on-surface-variant">settings</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 px-margin-mobile pb-32 space-y-6">
        {/* Hero Section */}
        <section className="space-y-2 mb-8">
          <h2 className="text-[28px] font-bold leading-tight text-on-background">7-Day Drawing Journey</h2>
          <p className="text-[16px] text-on-surface-variant font-body-md">Master the fundamentals of tracing and line work step-by-step.</p>
        </section>

        {/* Journey List */}
        <section className="space-y-4">
          {/* Day 1 (Completed) */}
          <article className="bg-[#FAF7F2] border border-[#E2E8F0] rounded-xl p-4 flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-success to-success-dark flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-success uppercase tracking-wider mb-1">DAY 1 Completed</p>
              <h3 className="text-lg font-bold text-on-background mb-1 truncate">Basic Lines &amp; Angles</h3>
              <p className="text-sm text-on-surface-variant truncate">Learn to control yo...</p>
            </div>
          </article>

          {/* Day 2 (In Progress) */}
          <article className="bg-white border-2 border-primary-container rounded-xl p-5 shadow-[0_10px_30px_-15px_rgba(79,70,229,0.15)] flex flex-col gap-4 transform -translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-container to-[#818CF8] flex items-center justify-center shrink-0 shadow-lg shadow-primary-container/30">
                <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-primary-container uppercase tracking-wider mb-1">DAY 2 In Progress</p>
                <h3 className="text-lg font-bold text-on-background mb-1">Simple Shapes</h3>
                <p className="text-sm text-on-surface-variant line-clamp-2">Constructing objects using fundamental geometric forms.</p>
              </div>
            </div>
            <button className="w-full mt-2 py-3 px-4 rounded-full bg-gradient-to-br from-primary-container to-[#818CF8] text-white font-button-label text-button-label text-center hover:scale-[1.02] active:translate-y-[2px] transition-all shadow-lg shadow-primary-container/20">
              Continue Lesson
            </button>
          </article>

          {/* Day 3 (Locked) */}
          <article className="bg-[#FAF7F2] border border-[#E2E8F0] rounded-xl p-4 flex items-start gap-4 opacity-70">
            <div className="w-14 h-14 rounded-full bg-surface-variant flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-outline">lock</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-outline uppercase tracking-wider mb-1">DAY 3 Locked</p>
              <h3 className="text-lg font-bold text-on-surface-variant mb-1 truncate">Curves &amp; Contours</h3>
              <p className="text-sm text-outline truncate">Fluid motion and natural shapes.</p>
            </div>
          </article>

          {/* Day 4 (Locked) */}
          <article className="bg-[#FAF7F2] border border-[#E2E8F0] rounded-xl p-4 flex items-start gap-4 opacity-70">
            <div className="w-14 h-14 rounded-full bg-surface-variant flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-outline">lock</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-outline uppercase tracking-wider mb-1">DAY 4 Locked</p>
              <h3 className="text-lg font-bold text-on-surface-variant mb-1 truncate">Proportions &amp; Layout</h3>
              <p className="text-sm text-outline truncate">Spacing and scale techniques.</p>
            </div>
          </article>

          {/* Day 5 (Locked) */}
          <article className="bg-[#FAF7F2] border border-[#E2E8F0] rounded-xl p-4 flex items-start gap-4 opacity-70">
            <div className="w-14 h-14 rounded-full bg-surface-variant flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-outline">lock</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-outline uppercase tracking-wider mb-1">DAY 5 Locked</p>
              <h3 className="text-lg font-bold text-on-surface-variant mb-1 truncate">Pet Silhouette</h3>
              <p className="text-sm text-outline truncate">Capturing animal forms quickly.</p>
            </div>
          </article>

          {/* Day 6 (Locked) */}
          <article className="bg-[#FAF7F2] border border-[#E2E8F0] rounded-xl p-4 flex items-start gap-4 opacity-70">
            <div className="w-14 h-14 rounded-full bg-surface-variant flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-outline">lock</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-outline uppercase tracking-wider mb-1">DAY 6 Locked</p>
              <h3 className="text-lg font-bold text-on-surface-variant mb-1 truncate">Portrait Basics</h3>
              <p className="text-sm text-outline truncate">Facial features mapping.</p>
            </div>
          </article>

          {/* Day 7 (Locked) */}
          <article className="bg-[#FAF7F2] border border-[#E2E8F0] rounded-xl p-4 flex items-start gap-4 opacity-70">
            <div className="w-14 h-14 rounded-full bg-surface-variant flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-outline">lock</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-outline uppercase tracking-wider mb-1">DAY 7 Locked</p>
              <h3 className="text-lg font-bold text-on-surface-variant mb-1 truncate">Final Mini Poster</h3>
              <p className="text-sm text-outline truncate">Combine all skills into a masterpiece.</p>
            </div>
          </article>
        </section>

        {/* Banner Ad Placeholder */}
        <section className="mt-8 mb-4 w-full h-[60px] bg-surface-container rounded-lg flex items-center justify-center border border-outline-variant/30">
          <span className="text-sm text-outline font-medium">Advertisement</span>
        </section>
      </main>
    </>
  );
}
