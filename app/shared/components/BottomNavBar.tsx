import { Link, useLocation } from "react-router";

export function BottomNavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-surface/80 backdrop-blur-xl shadow-[0_-10px_30px_-15px_rgba(79,70,229,0.05)] rounded-t-2xl border-t border-surface-variant/30">
      {/* Studio Tab */}
      <Link 
        to="/studio" 
        className={`flex flex-col items-center justify-center transition-all active:scale-90 px-4 py-1 group ${currentPath === '/studio' ? 'text-primary' : 'text-outline hover:text-primary'}`}
      >
        <span className="material-symbols-outlined mb-1 group-hover:scale-110 transition-transform">palette</span>
        <span className="font-caption text-[10px] font-medium">Studio</span>
      </Link>

      {/* Explore Tab */}
      <Link 
        to="/explore" 
        className={`flex flex-col items-center justify-center rounded-full px-5 py-2 active:scale-90 transition-all duration-200 shadow-sm relative ${currentPath === '/explore' ? 'bg-primary-container text-on-primary-container' : 'text-outline hover:text-primary group'}`}
      >
        <span className="material-symbols-outlined mb-1" style={currentPath === '/explore' ? { fontVariationSettings: "'FILL' 1" } : {}}>explore</span>
        <span className={`font-caption text-[10px] ${currentPath === '/explore' ? 'font-bold' : 'font-medium'}`}>Explore</span>
        {currentPath === '/explore' && (
          <span className="absolute top-1.5 right-4 w-2 h-2 rounded-full bg-tertiary shadow-sm"></span>
        )}
      </Link>

      {/* Learn Tab */}
      <Link 
        to="/learn" 
        className={`flex flex-col items-center justify-center transition-all active:scale-90 px-4 py-1 group ${currentPath === '/learn' ? 'text-primary' : 'text-outline hover:text-primary'}`}
      >
        <span className="material-symbols-outlined mb-1 group-hover:scale-110 transition-transform">school</span>
        <span className="font-caption text-[10px] font-medium">Learn</span>
      </Link>

      {/* Profile Tab */}
      <Link 
        to="/profile" 
        className={`flex flex-col items-center justify-center transition-all active:scale-90 px-4 py-1 group ${currentPath === '/profile' ? 'text-primary' : 'text-outline hover:text-primary'}`}
      >
        <span className="material-symbols-outlined mb-1 group-hover:scale-110 transition-transform">person</span>
        <span className="font-caption text-[10px] font-medium">Profile</span>
      </Link>
    </nav>
  );
}
