import { Chip } from '~/components/Chip';

export interface FilterChipsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function FilterChips({ categories, activeCategory, onCategoryChange }: FilterChipsProps) {
  return (
    <div className="px-margin-mobile py-stack-sm sticky top-16 z-40 bg-surface/95 backdrop-blur-md">
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {categories.map((category) => (
          <Chip
            key={category}
            active={activeCategory === category}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Chip>
        ))}
      </div>
    </div>
  );
}
