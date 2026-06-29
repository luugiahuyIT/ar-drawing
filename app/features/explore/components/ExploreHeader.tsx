import { Link } from "react-router";

export function ExploreHeader() {
  return (
    <header className="flex justify-between items-center w-full px-margin-mobile h-16 sticky top-0 z-50 shadow-sm">
      <h1 className="font-headline-lg-mobile text-[24px] font-extrabold text-on-surface tracking-tight">Explore</h1>
        <div className="flex items-center gap-1">
          <Link to="/search" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors active:scale-95">
            <span className="material-symbols-outlined text-outline" style={{ fontSize: '24px' }}>search</span>
          </Link>
          <Link to="/settings" className="pb-1 w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors active:scale-95">
                <span className="material-symbols-outlined text-on-surface-variant">settings</span>
          </Link>
          </div>
    </header>
  );
}
