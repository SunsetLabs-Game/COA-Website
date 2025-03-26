interface MarketplaceHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onToggleCart: () => void;
  cartItemsCount: number;
}

export function MarketplaceHeader({ searchQuery, onSearchChange, onToggleCart, cartItemsCount }: MarketplaceHeaderProps) {
  return (
    <div>
      <input 
        type="text" 
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
} 