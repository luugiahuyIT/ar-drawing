import { Chip } from '~/components/Chip';

interface TrendingSearchesProps {
  onSelect: (query: string) => void;
}

export function TrendingSearches({ onSelect }: TrendingSearchesProps) {
  const trending = ["pet", "flower", "cat", "dog"];

  return (
    <div className="mt-6 mb-8">
      <h2 className="font-subheadline text-[18px] font-medium text-on-surface mb-4">Trending searches</h2>
      <div className="flex overflow-x-auto no-scrollbar gap-3 pb-2 -mx-margin-mobile px-margin-mobile">
        {trending.map(item => (
          <Chip 
            key={item}
            active
            onClick={() => onSelect(item)}
            className="capitalize"
          >
            {item}
          </Chip>
        ))}
      </div>
    </div>
  );
}
