import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { ExploreHeader } from "./components/ExploreHeader";
import { FilterChips } from "./components/FilterChips";
import { GalleryCard, type GalleryCardProps } from "./components/GalleryCard";
import { BannerAd } from "./components/BannerAd";
import { BottomNavBar } from "~/shared/components/BottomNavBar";

import dog1 from "~/assets/images/dog1.webp";
import dog2 from "~/assets/images/dog2.webp";
import dog3 from "~/assets/images/dog3.webp";
import dog4 from "~/assets/images/dog4.webp";
import dog5 from "~/assets/images/dog5.webp";
import cat1 from "~/assets/images/cat1.webp";
import cat2 from "~/assets/images/cat2.webp";
import cat3 from "~/assets/images/cat3.webp";
import cat4 from "~/assets/images/cat4.webp";
import monster1 from "~/assets/images/monster1.webp";
import monster2 from "~/assets/images/monster2.webp";
import monster3 from "~/assets/images/monster3.webp";
import monster4 from "~/assets/images/monster4.webp";
import monster5 from "~/assets/images/monster5.webp";
const categories = ["All", "Dog", "Cat", "Monster"];

const galleryItems: GalleryCardProps[] = [
  {
    id: "1",
    title: "Dog 1",
    difficulty: "Easy",
    timeEstimate: "10m",
    imageUrl: dog1,
    altText: "Dog 1 drawing",
    category: "Dog"
  },
  {
    id: "2",
    title: "Cat 1",
    difficulty: "Easy",
    timeEstimate: "15m",
    imageUrl: cat1,
    altText: "Cat 1 drawing",
    category: "Cat"
  },
  {
    id: "3",
    title: "Dog 2",
    difficulty: "Medium",
    timeEstimate: "20m",
    imageUrl: dog2,
    altText: "Dog 2 drawing",
    category: "Dog",
    isFavorite: true,
  },
  {
    id: "4",
    title: "Cat 2",
    difficulty: "Medium",
    timeEstimate: "20m",
    imageUrl: cat2,
    altText: "Cat 2 drawing",
    category: "Cat"
  },
  {
    id: "5",
    title: "Dog 3",
    difficulty: "Medium",
    timeEstimate: "25m",
    imageUrl: dog3,
    altText: "Dog 3 drawing",
    category: "Dog"
  },
  {
    id: "6",
    title: "Cat 3",
    difficulty: "Medium",
    timeEstimate: "25m",
    imageUrl: cat3,
    altText: "Cat 3 drawing",
    category: "Cat"
  },
  {
    id: "7",
    title: "Dog 4",
    difficulty: "Hard",
    timeEstimate: "35m",
    imageUrl: dog4,
    altText: "Dog 4 drawing",
    category: "Dog"
  },
  {
    id: "8",
    title: "Cat 4",
    difficulty: "Hard",
    timeEstimate: "35m",
    imageUrl: cat4,
    altText: "Cat 4 drawing",
    category: "Cat"
  },
  {
    id: "9",
    title: "Dog 5",
    difficulty: "Hard",
    timeEstimate: "35m",
    imageUrl: dog5,
    altText: "Dog 5 drawing",
    category: "Dog"
  },
  {
    id: "10",
    title: "Monster 1",
    difficulty: "Easy",
    timeEstimate: "15m",
    imageUrl: monster1,
    altText: "Monster 1 drawing",
    category: "Monster"
  },
  {
    id: "11",
    title: "Monster 2",
    difficulty: "Medium",
    timeEstimate: "20m",
    imageUrl: monster2,
    altText: "Monster 2 drawing",
    category: "Monster"
  },
  {
    id: "12",
    title: "Monster 3",
    difficulty: "Medium",
    timeEstimate: "25m",
    imageUrl: monster3,
    altText: "Monster 3 drawing",
    category: "Monster"
  },
  {
    id: "13",
    title: "Monster 4",
    difficulty: "Hard",
    timeEstimate: "30m",
    imageUrl: monster4,
    altText: "Monster 4 drawing",
    category: "Monster"
  },
  {
    id: "14",
    title: "Monster 5",
    difficulty: "Hard",
    timeEstimate: "35m",
    imageUrl: monster5,
    altText: "Monster 5 drawing",
    category: "Monster"
  },
];

export function ExplorePage() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  // Use URL param as initial state if it's a valid category, otherwise fallback to "All"
  const initialCategory = categoryParam && categories.includes(categoryParam) 
    ? categoryParam 
    : "All";
    
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  // Sync state if URL changes (e.g. via browser back/forward or new navigation)
  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredItems = galleryItems.filter(item => 
    activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen pb-24 flex flex-col max-w-md mx-auto relative shadow-2xl">
      {/* Include the global styles for no-scrollbar that were in the HTML */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        body {
          min-height: max(884px, 100dvh);
          background-color: #f4f0ea; /* dark background for the outside */
        }
      `}</style>
      
      <ExploreHeader />
      <FilterChips 
        categories={categories} 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      
      <main className="flex-grow px-margin-mobile pt-stack-sm pb-stack-lg">
        <div className="grid grid-cols-2 gap-4">
          {filteredItems.map((item) => (
            <GalleryCard key={item.id} {...item} />
          ))}
        </div>
        
        <BannerAd />
      </main>
      
      <BottomNavBar />
    </div>
  );
}
