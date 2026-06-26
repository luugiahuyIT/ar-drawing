import { useNavigate } from "react-router";

interface SearchBarProps {
  query: string;
  setQuery: (val: string) => void;
}

export function SearchBar({ query, setQuery }: SearchBarProps) {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-12 pb-4 px-margin-mobile flex items-center justify-between gap-4 sticky top-0 z-50 bg-surface">
      <div className="flex-1 relative">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
        <input 
          autoFocus
          className="w-full h-[48px] pl-12 pr-4 bg-surface-container rounded-xl border-2 border-primary-container focus:ring-0 focus:outline-none text-on-surface font-body-md text-[16px] placeholder-outline-variant transition-colors" 
          placeholder="Search templates..." 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button 
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        )}
      </div>
      <button 
        onClick={() => navigate(-1)}
        className="text-primary-container font-button-label text-[16px] active:opacity-70 transition-opacity"
      >
        Cancel
      </button>
    </div>
  );
}
