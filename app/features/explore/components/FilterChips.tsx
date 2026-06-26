import { useState } from 'react';
import { Chip } from '~/components/Chip';

export function FilterChips() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = [
    "All",
    "Pets",
    "Cute Creatures",
    "Flowers",
    "Nature",
    "Portrait Basics"
  ];

  return (
    <div className="px-margin-mobile py-stack-sm sticky top-16 z-40 bg-surface/95 backdrop-blur-md">
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {categories.map((category) => (
          <Chip
            key={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Chip>
        ))}
      </div>
    </div>
  );
}
