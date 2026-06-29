interface CategoryListProps {
  onSelect: (category: string) => void;
}

export function CategoryList({ onSelect }: CategoryListProps) {
  const categories = [
    "Dog", "Cat", "Monster"
  ];

  return (
    <div className="mb-12">
      <h2 className="font-subheadline text-[18px] font-medium text-on-surface mb-4">Categories</h2>
      <div className="grid grid-cols-2 gap-y-5 gap-x-4">
        {categories.map(category => (
          <button 
            key={category}
            onClick={() => onSelect(category)}
            className="text-left py-2 font-body-md text-[14px] text-on-surface-variant hover:text-primary transition-colors flex items-center justify-between group border-b border-surface-container pb-2"
          >
            <span>{category}</span>
            <span className="material-symbols-outlined text-outline-variant group-hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity text-[18px]">arrow_forward</span>
          </button>
        ))}
      </div>
    </div>
  );
}
