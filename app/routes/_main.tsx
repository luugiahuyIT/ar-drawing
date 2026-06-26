import { Outlet, NavLink } from "react-router";
import type { Route } from "./+types/_main";

export function meta({}: Route.MetaArgs) {
  return [{ title: "PhotoTrace AR" }];
}

export default function MainLayout() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col relative overflow-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* Outlet renders the active tab content (e.g. Studio, Explore, Learn, Profile) */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-surface/90 backdrop-blur-xl border-t border-surface-variant/50">
        <NavLink 
          to="/studio"
          className={({ isActive }) => `flex flex-col items-center justify-center w-16 relative group cursor-pointer active:scale-90 transition-all duration-200 ${isActive ? '' : 'text-outline hover:text-primary'}`}
        >
          {({ isActive }) => (
            <>
              <div className="relative flex flex-col items-center">
                <span 
                  className={`material-symbols-outlined text-2xl mb-1 transition-transform group-hover:-translate-y-1 ${isActive ? 'text-primary' : ''}`}
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  palette
                </span>
                <span className={`font-caption text-[11px] ${isActive ? 'font-semibold text-primary' : 'font-medium'}`}>
                  Studio
                </span>
              </div>
              {isActive && (
                <div className="absolute -bottom-2 w-1 h-1 rounded-full bg-[#FB7185]"></div>
              )}
            </>
          )}
        </NavLink>

        <NavLink 
          to="/explore"
          className={({ isActive }) => `flex flex-col items-center justify-center w-16 relative group cursor-pointer active:scale-90 transition-all duration-200 ${isActive ? '' : 'text-outline hover:text-primary'}`}
        >
          {({ isActive }) => (
            <>
              <div className="relative flex flex-col items-center">
                <span 
                  className={`material-symbols-outlined text-2xl mb-1 transition-transform group-hover:-translate-y-1 ${isActive ? 'text-primary' : ''}`}
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  explore
                </span>
                <span className={`font-caption text-[11px] ${isActive ? 'font-semibold text-primary' : 'font-medium'}`}>
                  Explore
                </span>
              </div>
              {isActive && (
                <div className="absolute -bottom-2 w-1 h-1 rounded-full bg-[#FB7185]"></div>
              )}
            </>
          )}
        </NavLink>

        <NavLink 
          to="/learn"
          className={({ isActive }) => `flex flex-col items-center justify-center w-16 relative group cursor-pointer active:scale-90 transition-all duration-200 ${isActive ? '' : 'text-outline hover:text-primary'}`}
        >
          {({ isActive }) => (
            <>
              <div className="relative flex flex-col items-center">
                <span 
                  className={`material-symbols-outlined text-2xl mb-1 transition-transform group-hover:-translate-y-1 ${isActive ? 'text-primary' : ''}`}
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  school
                </span>
                <span className={`font-caption text-[11px] ${isActive ? 'font-semibold text-primary' : 'font-medium'}`}>
                  Learn
                </span>
              </div>
              {isActive && (
                <div className="absolute -bottom-2 w-1 h-1 rounded-full bg-[#FB7185]"></div>
              )}
            </>
          )}
        </NavLink>

        <NavLink 
          to="/profile"
          className={({ isActive }) => `flex flex-col items-center justify-center w-16 relative group cursor-pointer active:scale-90 transition-all duration-200 ${isActive ? '' : 'text-outline hover:text-primary'}`}
        >
          {({ isActive }) => (
            <>
              <div className="relative flex flex-col items-center">
                <span 
                  className={`material-symbols-outlined text-2xl mb-1 transition-transform group-hover:-translate-y-1 ${isActive ? 'text-primary' : ''}`}
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  person
                </span>
                <span className={`font-caption text-[11px] ${isActive ? 'font-semibold text-primary' : 'font-medium'}`}>
                  Profile
                </span>
              </div>
              {isActive && (
                <div className="absolute -bottom-2 w-1 h-1 rounded-full bg-[#FB7185]"></div>
              )}
            </>
          )}
        </NavLink>
      </nav>
    </div>
  );
}
