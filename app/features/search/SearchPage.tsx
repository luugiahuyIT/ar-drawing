import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { TrendingSearches } from "./components/TrendingSearches";
import { CategoryList } from "./components/CategoryList";

export function SearchPage() {
  const [query, setQuery] = useState("");

  const handleSelect = (selectedQuery: string) => {
    setQuery(selectedQuery);
    // In a real app, this would trigger a search or navigation
  };

  return (
    <div className="bg-surface min-h-screen w-full max-w-md mx-auto flex flex-col font-sans overflow-hidden shadow-2xl relative">
      {/* Global styles for this page (similar to explore) */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        body {
          min-height: 100dvh;
          background-color: #f4f0ea; /* dark background for the outside */
        }
      `}</style>
      
      {/* Top Zone */}
      <SearchBar query={query} setQuery={setQuery} />

      {/* Middle Zone */}
      <div className="flex-1 overflow-y-auto w-full no-scrollbar px-margin-mobile pb-12">
        <TrendingSearches onSelect={handleSelect} />
        <CategoryList onSelect={handleSelect} />
      </div>
    </div>
  );
}
