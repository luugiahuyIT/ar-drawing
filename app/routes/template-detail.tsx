import type { Route } from "./+types/template-detail";
import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router";
import { PermissionModal } from "../components/PermissionModal";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Template Detail - PhotoTrace AR" }];
}

export default function TemplateDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item;
  const [showPermission, setShowPermission] = useState(false);

  const handleCameraTrace = () => {
    const hasPermission = localStorage.getItem('cameraPermissionAllowed') === 'true';
    if (hasPermission) {
      navigate('/camera-trace', { state: { imageUrl: item?.imageUrl } });
    } else {
      setShowPermission(true);
    }
  };

  const handleScreenTrace = () => {
    navigate('/screen-trace', { state: { imageUrl: item?.imageUrl } });
  };

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Template not found.</p>
        <button onClick={() => navigate(-1)} className="ml-4 text-primary underline">Go Back</button>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-[100dvh] flex flex-col font-body-md text-on-surface antialiased overflow-x-hidden selection:bg-primary-container/30">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Linear/Transactional Navigation Shell */}
      <nav className="flex justify-between items-center w-full px-margin-mobile h-16 sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors py-2 active:scale-95 group"
        >
          <span className="material-symbols-outlined text-[20px] transition-transform group-active:-translate-x-1" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_back</span>
          <span className="font-button-label text-button-label font-medium">Back</span>
        </button>
      </nav>

      <main className="flex-1 w-full max-w-[1080px] mx-auto px-margin-mobile pb-stack-lg">
        {/* Hero Zone (Preview) */}
        <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-video rounded-xl bg-surface-container border border-surface-variant p-4 mt-stack-sm shadow-sm flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-contain bg-center bg-no-repeat m-6 mix-blend-multiply opacity-90" 
            style={{ backgroundImage: `url('${item.imageUrl}')` }}
          ></div>
        </div>

        {/* Info Zone */}
        <div className="mt-stack-md flex flex-col gap-1">
          <h1 className="font-subheadline text-subheadline text-on-surface font-bold tracking-tight">{item.title}</h1>
          <p className="font-caption text-caption text-on-surface-variant">{item.difficulty} • {item.timeEstimate} • Cute Creatures</p>
        </div>

        {/* Action Zone */}
        <div className="mt-stack-lg flex flex-col gap-stack-sm">
          <button 
            onClick={handleCameraTrace}
            className="w-full h-[56px] rounded-xl bg-gradient-to-br from-primary-container to-secondary-container text-on-primary font-button-label text-button-label shadow-md shadow-primary-container/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-all hover:shadow-lg hover:shadow-primary-container/30"
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>photo_camera</span>
            Camera Trace
          </button>
          
          <button 
            onClick={handleScreenTrace}
            className="w-full h-[56px] rounded-xl bg-surface-container-lowest border border-surface-variant text-on-surface font-button-label text-button-label flex items-center justify-center gap-2 active:scale-[0.98] transition-all hover:bg-surface-container-lowest/80"
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>desktop_windows</span>
            Screen Trace
          </button>
        </div>

        {/* Similar Templates */}
        <div className="mt-stack-lg">
          <h2 className="font-button-label text-button-label font-bold text-on-surface mb-stack-sm text-center">Similar templates</h2>
          <div className="overflow-x-auto pb-4 -mx-margin-mobile hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
            <div className="flex gap-4 px-margin-mobile w-max mx-auto snap-x snap-mandatory">
              {/* Hardcoded similar templates for now */}
            <button className="shrink-0 snap-start active:scale-95 transition-transform text-left">
              <div className="w-[120px] h-[120px] rounded-xl bg-surface-container border border-surface-variant flex items-center justify-center overflow-hidden mb-2">
                <div className="w-full h-full bg-cover bg-center mix-blend-multiply opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdbgxl2E_Jd4M6C563c2bCHmqcOF5I5DjFxuOMGOMQ9sl8YTgIqt7ZNmApEtOrVytMq5ZNYWhKDAAbacYLfVMA30o0d85o1npSL4RVp9t2afSdF_Uzjgr7srPm65eQMyZllnuQAM8u6vFdJiL9n2gjumG9GJBvQZQlJJDq6u9tDCQgPoWoiaAh3YM1aumD5bwjdhXd7Igiy4DUFVLuTnBrpaeCw1cg4-2Frg9mPigmPnaxEbfZeQHQ4G1bUNK6PZ5Aztmb_KgILruL')" }}></div>
              </div>
              <span className="font-caption text-caption text-on-surface line-clamp-1">Wise Owl</span>
            </button>
            <button className="shrink-0 snap-start active:scale-95 transition-transform text-left">
              <div className="w-[120px] h-[120px] rounded-xl bg-surface-container border border-surface-variant flex items-center justify-center overflow-hidden mb-2">
                <div className="w-full h-full bg-cover bg-center mix-blend-multiply opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcffokjucp30PLFpdSLrhvvKcFZMnpx_f2XV0xiWIkDHJHPh6PB19cnp-AOa16Pvz5x2wqQNuKcdTOHvryMiozyqTCO5hDpHMxrXRBurCi2oA7WS6c1ojrAMNFE86Yq5ubHeqEu3fXJbsZZYkDJ_bdXesHWcF3YrppAHr89pZ83YMpjjO7NNtkoLY0gIBU9b1k-YsZhM3d4G6RnecX8mmuXa9-MKjDf4N_d-qV17Qfd_QRIXCTcGBgGaaBdQPl3LkCR6d3WNayGm69')" }}></div>
              </div>
              <span className="font-caption text-caption text-on-surface line-clamp-1">Playful Kitten</span>
            </button>
            <button className="shrink-0 snap-start active:scale-95 transition-transform text-left">
              <div className="w-[120px] h-[120px] rounded-xl bg-surface-container border border-surface-variant flex items-center justify-center overflow-hidden mb-2">
                <div className="w-full h-full bg-cover bg-center mix-blend-multiply opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2Y4acrQUHELjqOLmpog7FJFDUoR9PEphXRnfC4COJUwvo8dmPQ0MHyGTyC8x7PMgUNYeZjB_t68Q7UJyWxk3S3H8MLT-rDHIOdlIr9GMWN1Z_lF14Om8QLlQfaO5UUDvTTzZIly9vO8MEkdUU4leXu4TrAKMJ0bLjb_WIIbqcdwhDn6lmKhKJzGShXiPJBf54KtsjO_dmVVPVA3qdwvCpAG9HbMNwLJEcmeI_mW8h_U2LX2NuwX1hftC4NynliRRB_9hHcZ357At8')" }}></div>
              </div>
              <span className="font-caption text-caption text-on-surface line-clamp-1">Geo Wolf</span>
            </button>
          </div>
        </div>
      </div>
    </main>

      {/* Permission Modal */}
      <PermissionModal 
        isOpen={showPermission}
        onAllow={() => {
          localStorage.setItem('cameraPermissionAllowed', 'true');
          setShowPermission(false);
          navigate('/camera-trace', { state: { imageUrl: item?.imageUrl } });
        }}
        onDeny={() => {
          setShowPermission(false);
          navigate('/not-allowed', { state: { imageUrl: item?.imageUrl } });
        }}
        onClose={() => setShowPermission(false)}
      />
    </div>
  );
}
