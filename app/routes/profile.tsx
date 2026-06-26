import { useState } from "react";
import type { Route } from "./+types/profile";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Profile - PhotoTrace AR" }];
}

const favoritesData = [
  { id: 1, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo8KPp76QVPhXxEG9q3xdGeSkedhR6_c7-bwWQ2Wj1ZoczEq4wX0XQB7ReOBCt_mlhdtHXIDwWAQ_e1sD-U6Qc-4D_ZybMNqZagujREYaoPCZ8A44UyvVrTn9DjYVb14dmzFMDl1M2H3h5n99_CwuXlC-5JWB_bnwzouWoLVCey-IbobzLIWZtKdCb6xskQxfV0uxAlXZNBxMoJToF91kpLBnj7RTnXJe_dZURzUS6onhYI-0yc-CgHYcnpCBM5LaSqO8kdrfZmE-i" },
  { id: 2, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwqBMC1cTc_e59n7NE4L-O3L8atuWsgkbTcH_vJf33nNnP6B4oBHZ5s8cunNuaP2Hfh35y3rOUZuxqk2G6dSpPJwkcKAb_T8Xdbo0MoYcKMw94Vb6BQ_sFkFmbhnpMnCAmGazwVYLDwxc3WN-jV7xuplv6Ckn-6ZVXST-V8QHz--y_CKmYH47LHPoURmFAngdizFWNysQdEjN_e9DpzjxJaBfr6_L_sK405IPKpwemvavBggG-elOg0fvVOKnje4SbFRl8ebQ06Go-" },
  { id: 3, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsNcZprFEykVV4HNF-rMnGVex2xVfRijlIySaEhmb3pcH_ysHwflSaF6KdzZ7zVSRg5IQcQYTIHUAnTlsrz37O3S1JGOejKGkzmstWMHUhuXssDzmRvXkBbqav9VG33yPXzuFzdLTb71_22nmKQkTrSvsKUcqugQqgH1UMaBbe4g4v3ie3GKFIgBHzk5pasU278zyMDmg_Tuu9zpuljfX_VYRbLzLv4UQhSa9vp3-AKrsowJrQPV-a6ndr0p5o9GT862PgkPd80zGy" },
  { id: 4, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLUMB-zpXV5kW2ajgFRGjyjwNQxI7XYNZH6x_jM24vPRE3UJrXus4S3LLS2ByJttFWPdIsjlgVEYBXUdvmVLxfe0qUZEO76giyiYQ4ENXfXyQm_cxp47idDHM1Xonkmv7-NoRDfNi2H-nFVpQd87iDX0rph_0TQLOPlAy5TMdnw1ivoruqpP9zcBqcV1v5XkJijvoy-eAHqyKsicf7bGyH0-i6gjLuY_1V7xRhxKVZoJBkh_RYwbI10ka8EdKixNdKeQWOBxC4oAoW" }
];

const importsData = [
  { id: 1, image: favoritesData[0].image, date: "Imported 3 days ago" },
  { id: 2, image: favoritesData[1].image, date: "Imported 4 days ago" },
  { id: 3, image: favoritesData[2].image, date: "Imported 1 week ago" },
  { id: 4, image: favoritesData[3].image, date: "Imported 2 weeks ago" }
];

const albumData = [
  { id: 1, image: favoritesData[0].image, date: "2 days ago" },
  { id: 2, image: favoritesData[1].image, date: "3 days ago" },
  { id: 3, image: favoritesData[2].image, date: "1 week ago" },
  { id: 4, image: favoritesData[3].image, date: "2 weeks ago" }
];

type TabType = 'favorites' | 'imports' | 'album';

export default function Profile() {
  const [activeTab, setActiveTab] = useState<TabType>('favorites');
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const toggleMenu = (id: number) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  return (
    <div onClick={() => setActiveMenu(null)}>
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/70 dark:bg-surface-dim/70 backdrop-blur-md shadow-[0_10px_30px_-15px_rgba(79,70,229,0.05)] flex justify-between items-center px-margin-mobile h-16">
        <button aria-label="Camera Options" className="text-outline dark:text-outline-variant hover:opacity-80 active:scale-95 transition-all duration-200">
          <span className="material-symbols-outlined">camera_enhance</span>
        </button>
        <h1 className="font-subheadline text-subheadline font-bold text-on-surface">Profile</h1>
        <button aria-label="Settings" className="text-outline dark:text-outline-variant hover:opacity-80 active:scale-95 transition-all duration-200">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </nav>

      {/* Main Content Canvas */}
      <main className="w-full max-w-md mx-auto pt-20 pb-32">
        {/* Level Card Zone */}
        <section className="px-margin-mobile">
          <div className="bg-gradient-to-br from-primary-container to-primary rounded-[16px] p-6 shadow-[0_10px_30px_-15px_rgba(79,70,229,0.3)] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            {/* Decorative AR Glass Flare */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors duration-500"></div>
            <p className="font-caption text-caption text-on-primary/80 uppercase tracking-widest mb-1 text-[11px]">Level 2</p>
            <h2 className="font-headline-lg-mobile text-[28px] leading-tight font-bold text-on-primary mb-8 relative z-10">Steady Hand</h2>
            <div className="relative z-10">
              <div className="w-full bg-on-primary/30 h-[6px] rounded-full mb-3 overflow-hidden">
                <div className="bg-on-primary h-full rounded-full w-[40%] transition-all duration-1000 ease-out"></div>
              </div>
              <p className="font-caption text-caption text-[12px] text-on-primary/90">5 more drawings to reach Shape Builder</p>
            </div>
          </div>
        </section>

        {/* Stats Row */}
        <section className="px-margin-mobile mt-8">
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-surface-container-lowest rounded-[12px] border border-surface-variant p-4 text-center shadow-[0_10px_30px_-15px_rgba(79,70,229,0.05)] hover:shadow-md transition-shadow">
              <span className="font-subheadline text-[24px] font-bold text-primary-container block leading-none mb-1.5">12</span>
              <span className="font-caption text-[11px] text-outline block leading-tight">Drawings</span>
            </div>
            <div className="bg-surface-container-lowest rounded-[12px] border border-surface-variant p-4 text-center shadow-[0_10px_30px_-15px_rgba(79,70,229,0.05)] hover:shadow-md transition-shadow">
              <span className="font-subheadline text-[24px] font-bold text-primary-container block leading-none mb-1.5">1</span>
              <span className="font-caption text-[11px] text-outline block leading-tight">Lessons</span>
            </div>
            <div className="bg-surface-container-lowest rounded-[12px] border border-surface-variant p-4 text-center shadow-[0_10px_30px_-15px_rgba(79,70,229,0.05)] hover:shadow-md transition-shadow">
              <span className="font-subheadline text-[24px] font-bold text-primary-container block leading-none mb-1.5">5</span>
              <span className="font-caption text-[11px] text-outline block leading-tight">Imports</span>
            </div>
            <div className="bg-surface-container-lowest rounded-[12px] border border-surface-variant p-4 text-center shadow-[0_10px_30px_-15px_rgba(79,70,229,0.05)] hover:shadow-md transition-shadow">
              <span className="font-subheadline text-[24px] font-bold text-primary-container block leading-none mb-1.5">45m</span>
              <span className="font-caption text-[11px] text-outline block leading-tight">Practice</span>
            </div>
          </div>
        </section>

        {/* Badges Zone */}
        <section className="mt-10">
          <h3 className="font-button-label text-button-label font-bold text-on-surface px-margin-mobile mb-4">Badges</h3>
          <div className="flex overflow-x-auto px-margin-mobile gap-3 pb-4 snap-x hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
            {/* Earned Badges */}
            <div className="flex-shrink-0 w-[80px] h-[80px] bg-gradient-to-br from-secondary-container to-secondary rounded-[12px] flex flex-col items-center justify-center p-2 snap-center shadow-[0_4px_10px_-4px_rgba(79,70,229,0.2)]">
              <span className="text-2xl mb-1 block">🥇</span>
              <span className="font-caption text-[10px] leading-tight text-on-secondary text-center">First Drawing</span>
            </div>
            <div className="flex-shrink-0 w-[80px] h-[80px] bg-gradient-to-br from-secondary-container to-secondary rounded-[12px] flex flex-col items-center justify-center p-2 snap-center shadow-[0_4px_10px_-4px_rgba(79,70,229,0.2)]">
              <span className="text-2xl mb-1 block">🏅</span>
              <span className="font-caption text-[10px] leading-tight text-on-secondary text-center">Lesson Finisher</span>
            </div>
            <div className="flex-shrink-0 w-[80px] h-[80px] bg-gradient-to-br from-secondary-container to-secondary rounded-[12px] flex flex-col items-center justify-center p-2 snap-center shadow-[0_4px_10px_-4px_rgba(79,70,229,0.2)]">
              <span className="text-2xl mb-1 block">🗺️</span>
              <span className="font-caption text-[10px] leading-tight text-on-secondary text-center">Import Explorer</span>
            </div>
            {/* Locked Badges */}
            <div className="flex-shrink-0 w-[80px] h-[80px] bg-surface rounded-[12px] border border-surface-variant flex flex-col items-center justify-center p-2 snap-center">
              <span className="material-symbols-outlined text-outline mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
              <span className="font-caption text-[10px] leading-tight text-outline text-center">3-Day Streak</span>
            </div>
            <div className="flex-shrink-0 w-[80px] h-[80px] bg-surface rounded-[12px] border border-surface-variant flex flex-col items-center justify-center p-2 snap-center">
              <span className="material-symbols-outlined text-outline mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
              <span className="font-caption text-[10px] leading-tight text-outline text-center">Style Master</span>
            </div>
            <div className="flex-shrink-0 w-[80px] h-[80px] bg-surface rounded-[12px] border border-surface-variant flex flex-col items-center justify-center p-2 snap-center">
              <span className="material-symbols-outlined text-outline mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
              <span className="font-caption text-[10px] leading-tight text-outline text-center">No-Guide</span>
            </div>
          </div>
        </section>

        {/* Tabs Zone */}
        <section className="mt-6 px-margin-mobile">
          <div className="flex space-x-8 border-b border-surface-variant">
            <button 
              onClick={() => setActiveTab('favorites')}
              className={`pb-3 font-button-label text-button-label transition-colors relative -bottom-[1px] ${activeTab === 'favorites' ? 'font-bold text-on-surface border-b-2 border-tertiary-container' : 'text-outline hover:text-on-surface'}`}
            >
              Favorites
            </button>
            <button 
              onClick={() => setActiveTab('imports')}
              className={`pb-3 font-button-label text-button-label transition-colors relative -bottom-[1px] ${activeTab === 'imports' ? 'font-bold text-on-surface border-b-2 border-tertiary-container' : 'text-outline hover:text-on-surface'}`}
            >
              Imports
            </button>
            <button 
              onClick={() => setActiveTab('album')}
              className={`pb-3 font-button-label text-button-label transition-colors relative -bottom-[1px] ${activeTab === 'album' ? 'font-bold text-on-surface border-b-2 border-tertiary-container' : 'text-outline hover:text-on-surface'}`}
            >
              Album
            </button>
          </div>
        </section>

        {/* Content Zone */}
        <section className="mt-6 px-margin-mobile grid grid-cols-2 gap-4 pb-8">
          {activeTab === 'favorites' && favoritesData.map(item => (
            <div key={item.id} className="bg-surface-container-lowest rounded-[12px] border border-surface-variant overflow-hidden shadow-[0_10px_30px_-15px_rgba(79,70,229,0.05)] hover:shadow-[0_10px_30px_-15px_rgba(79,70,229,0.15)] transition-shadow">
              <div className="aspect-square bg-surface flex items-center justify-center p-4">
                <div className="w-full h-full bg-contain bg-no-repeat bg-center mix-blend-multiply opacity-80" style={{ backgroundImage: `url('${item.image}')` }}></div>
              </div>
            </div>
          ))}

          {activeTab === 'imports' && importsData.map(item => (
            <div key={item.id} className="bg-white rounded-[12px] border border-surface-variant overflow-hidden shadow-[0_10px_30px_-15px_rgba(79,70,229,0.05)] flex flex-col group hover:shadow-[0_10px_30px_-15px_rgba(79,70,229,0.15)] transition-shadow relative">
              <div className="aspect-square bg-[#F3ECE1] relative p-3 flex items-center justify-center">
                <div className="w-full h-full bg-contain bg-no-repeat bg-center mix-blend-multiply opacity-80" style={{ backgroundImage: `url('${item.image}')` }}></div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMenu(item.id);
                  }}
                  className="absolute top-2 right-2 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center shadow-sm text-on-surface-variant hover:text-on-surface hover:bg-white transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">more_vert</span>
                </button>
                {activeMenu === item.id && (
                  <div className="absolute top-10 right-2 bg-white rounded-xl shadow-lg border border-surface-variant w-[170px] overflow-hidden z-20 animate-in fade-in zoom-in-95 duration-200">
                    <button className="w-full px-3 py-2.5 flex items-center gap-2 text-left hover:bg-surface-container-lowest transition-colors">
                      <span className="material-symbols-outlined text-[16px] text-primary">draw</span>
                      <span className="font-caption text-[12px] text-primary">Re-trace this outline</span>
                    </button>
                    <button className="w-full px-3 py-2.5 flex items-center gap-2 text-left hover:bg-surface-container-lowest transition-colors border-t border-surface-variant">
                      <span className="material-symbols-outlined text-[16px] text-error">delete</span>
                      <span className="font-caption text-[12px] text-error">Delete outline</span>
                    </button>
                  </div>
                )}
              </div>
              <div className="p-3 bg-white">
                <p className="font-caption text-[11px] text-outline">{item.date}</p>
              </div>
            </div>
          ))}

          {activeTab === 'album' && albumData.map(item => (
            <div key={item.id} className="bg-white rounded-[12px] p-2 border border-surface-variant shadow-[0_10px_30px_-15px_rgba(79,70,229,0.05)] flex flex-col group hover:shadow-[0_10px_30px_-15px_rgba(79,70,229,0.15)] transition-shadow relative">
              <div className="aspect-square bg-[#F3ECE1] rounded-[8px] relative p-2 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-contain bg-no-repeat bg-center mix-blend-multiply opacity-80" style={{ backgroundImage: `url('${item.image}')` }}></div>
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
                  <span className="font-caption text-[10px] font-medium text-on-surface-variant">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Advertisement */}
        {activeTab === 'imports' && (
          <section className="px-margin-mobile pb-8">
            <div className="w-full py-5 bg-surface-container rounded-xl flex flex-col items-center justify-center border border-surface-variant/50 relative overflow-hidden">
              <span className="font-caption text-[10px] text-outline uppercase tracking-wider mb-1">Advertisement</span>
              <span className="font-button-label text-[14px] text-on-surface font-medium">Unlock AR Pro today</span>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
