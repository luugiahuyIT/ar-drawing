import { useState } from "react";
import { Link } from "react-router";

export interface GalleryCardProps {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  timeEstimate: string;
  imageUrl: string;
  altText: string;
  isFavorite?: boolean;
}

export function GalleryCard({ 
  id,
  title, 
  difficulty, 
  timeEstimate, 
  imageUrl, 
  altText,
  isFavorite: initialFavorite = false
}: GalleryCardProps) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  return (
    <Link 
      to={`/template/${id}`} 
      state={{ item: { id, title, difficulty, timeEstimate, imageUrl, altText, isFavorite: initialFavorite } }} 
      className="group cursor-pointer block"
    >
      <div className="relative aspect-square w-full rounded-xl border border-surface-variant bg-surface-container-lowest overflow-hidden shadow-[0_10px_30px_-15px_rgba(79,70,229,0.05)] mb-3 active:scale-[0.98] transition-transform">
        <img 
          className="w-full h-full object-cover p-6" 
          src={imageUrl}
          alt={altText}
          data-alt={altText} 
        />
        <button 
          onClick={(e) => {
            e.preventDefault(); // Prevent navigating when clicking favorite
            setIsFavorite(!isFavorite); // Toggle favorite state
          }}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center transition-colors ${
            isFavorite 
              ? 'text-tertiary' 
              : 'text-outline hover:text-tertiary'
          }`}
        >
          <span 
            className="material-symbols-outlined text-[18px]" 
            style={isFavorite ? { fontVariationSettings: "'FILL' 1" } : {}}
          >
            favorite
          </span>
        </button>
      </div>
      <h3 className="font-button-label text-[14px] font-bold text-on-surface truncate">{title}</h3>
      <p className="font-caption text-[11px] text-outline mt-1">{difficulty} • {timeEstimate}</p>
    </Link>
  );
}
