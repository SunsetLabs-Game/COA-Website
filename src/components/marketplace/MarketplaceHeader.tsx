interface MarketplaceHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onToggleCart: () => void;
  cartItemsCount: number;
}

export function MarketplaceHeader({ searchQuery, onSearchChange, onToggleCart, cartItemsCount }: MarketplaceHeaderProps) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 border-b border-gray-800">
      <div className="flex-1">
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full max-w-md px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
          placeholder="Search marketplace..."
        />
      </div>
      <button 
        onClick={onToggleCart}
        className="flex items-center px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md text-white transition-colors"
      >
        <span className="mr-2">Cart</span>
        {cartItemsCount > 0 && (
          <span className="inline-flex items-center justify-center w-5 h-5 text-xs bg-white text-cyan-600 rounded-full">
            {cartItemsCount}
          </span>
        )}
      </button>
    </div>
  );
} 