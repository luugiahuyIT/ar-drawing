import type { Route } from "./+types/settings";
import { useNavigate, Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Settings - PhotoTrace AR" }];
}

export default function SettingsPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-background font-body-md text-on-background min-h-[100dvh] antialiased flex flex-col md:hidden">
      {/* Top App Bar */}
      <header className="bg-surface/70 backdrop-blur-md fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile h-16 shadow-[0_10px_30px_-15px_rgba(79,70,229,0.05)]">
        <button 
          onClick={() => navigate(-1)} 
          className="text-primary hover:opacity-80 transition-opacity active:scale-95 flex items-center font-button-label text-button-label"
        >
          <span className="material-symbols-outlined mr-1">arrow_back</span>
          Back
        </button>
        <h1 className="font-subheadline text-subheadline text-on-background absolute left-1/2 -translate-x-1/2">Settings</h1>
        <div className="w-16"></div> {/* Spacer for centering */}
      </header>
      
      {/* Main Content Canvas */}
      <main className="flex-grow pt-[88px] pb-12 px-margin-mobile">
        <div className="bg-on-primary rounded-xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(79,70,229,0.05)] border border-surface-variant">
          <ul className="flex flex-col">
            <li className="border-b border-surface-variant last:border-0 hover:bg-surface-container-low transition-colors duration-200">
              <Link to="/faq" className="flex justify-between items-center h-[56px] px-4 font-button-label text-button-label text-on-background group">
                <span>FAQ</span>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
              </Link>
            </li>
            <li className="border-b border-surface-variant last:border-0 hover:bg-surface-container-low transition-colors duration-200">
              <a className="flex justify-between items-center h-[56px] px-4 font-button-label text-button-label text-on-background group" href="#">
                <span>Privacy Policy</span>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
              </a>
            </li>
            <li className="border-b border-surface-variant last:border-0 hover:bg-surface-container-low transition-colors duration-200">
              <a className="flex justify-between items-center h-[56px] px-4 font-button-label text-button-label text-on-background group" href="#">
                <span>Terms of Use</span>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
              </a>
            </li>
            <li className="border-b border-surface-variant last:border-0 hover:bg-surface-container-low transition-colors duration-200">
              <a className="flex justify-between items-center h-[56px] px-4 font-button-label text-button-label text-on-background group" href="#">
                <span>Manage Consent</span>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
              </a>
            </li>
            <li className="border-b border-surface-variant last:border-0 hover:bg-surface-container-low transition-colors duration-200">
              <a className="flex justify-between items-center h-[56px] px-4 font-button-label text-button-label text-on-background group" href="#">
                <span>Replay Onboarding</span>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
              </a>
            </li>
            <li className="border-b border-surface-variant last:border-0 hover:bg-surface-container-low transition-colors duration-200">
              <a className="flex justify-between items-center h-[56px] px-4 font-button-label text-button-label text-on-background group" href="#">
                <span>Contact Support</span>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
              </a>
            </li>
            <li className="border-b border-surface-variant last:border-0 hover:bg-error-container/30 transition-colors duration-200">
              <button className="w-full flex justify-between items-center h-[56px] px-4 font-button-label text-button-label text-error group text-left">
                <span>Delete Local Data</span>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-error transition-colors">chevron_right</span>
              </button>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
