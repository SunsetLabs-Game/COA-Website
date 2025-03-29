"use client";

import { useMarketplaceFilters } from "@/hooks/useMarketplaceFilters";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import { useMouseFollower } from "@/hooks/useMouseFollower"; 
import { MarketplaceHeader } from "@/components/marketplace/marketplace-header";
import { FeaturedItems } from "@/components/marketplace/featured-items";
import { FilterSidebar } from "@/components/marketplace/filter-sidebar";
import { ProductSorting } from "@/components/marketplace/product-sorting";
import { ProductGrid } from "@/components/marketplace/product-grid";
import { ProductList } from "@/components/marketplace/product-list";  
import { ShoppingCart } from "@/components/marketplace/shopping-cart";
import { ProductDetails } from "@/components/marketplace/product-details";
import { featuredItems, allItems, categories, rarities } from "@/data/marketplace-data";
import { ItemType } from "@/types/marketplace";

export default function Marketplace() {

  const {
    searchQuery,
    setSearchQuery,
    priceRange,
    setPriceRange,
    selectedCategories,
    setSelectedCategories,
    selectedRarities,
    setSelectedRarities,
    viewMode,
    setViewMode,
    sortOption,
    setSortOption,
    showFilters,
    setShowFilters,
    selectedItem,
    setSelectedItem,
    sortedItems,
  } = useMarketplaceFilters(allItems);

  const {
    cartItems,
    showCart,
    setShowCart,
    handleAddToCart,
    handleRemoveFromCart,
    handleQuantityChange,
  } = useShoppingCart();

  const {
    cursorRef,
    isHovering,
    setIsHovering,
  } = useMouseFollower();

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories(checked ? [...selectedCategories, category] : selectedCategories.filter(c => c !== category));
  };

  const handleRarityChange = (rarity: string, checked: boolean) => {
    setSelectedRarities(checked ? [...selectedRarities, rarity] : selectedRarities.filter(r => r !== rarity));
  };

  const handleViewItem = (item: ItemType) => {
    setSelectedItem(item);
  };

  return (
    <div
      className="min-h-screen bg-[url('/images/BACKGROUND_CITIZEN_OF_ARCANIS.jpg')] bg-cover bg-center text-white relative overflow-x-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div ref={cursorRef} className={`pointer-events-none fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-cyan-400 z-50 transition-opacity duration-300 ${isHovering ? "opacity-100" : "opacity-0"}`} />

      {/* Navbar space */}
      <div className="h-16"></div>

      {/* Main content */}
      <div className="container mx-auto px-4 pb-20">
        <MarketplaceHeader 
          searchQuery={searchQuery} 
          onSearchChange={handleSearchChange}
          onToggleFilters={() => setShowFilters(!showFilters)}
          onToggleCart={() => setShowCart(!showCart)} 
          cartItemsCount={cartItems.length} 
        />

        <FeaturedItems items={featuredItems} onViewItem={() => {}} onAddToCart={handleAddToCart} />

        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar
            showFilters={showFilters}
            onCloseFilters={() => setShowFilters(false)}
            categories={categories}
            rarities={rarities}
            selectedCategories={selectedCategories}
            selectedRarities={selectedRarities}
            priceRange={priceRange}
            onCategoryChange={handleCategoryChange}
            onRarityChange={handleRarityChange}
            onPriceRangeChange={setPriceRange}
            onApplyFilters={() => setShowFilters(false)}
          />

          <div className="lg:w-3/4">
            <ProductSorting itemCount={sortedItems.length} viewMode={viewMode} sortOption={sortOption} onViewModeChange={setViewMode} onSortChange={setSortOption} />

            {viewMode === "grid" ? (
              <ProductGrid 
                items={sortedItems} 
                onAddToCart={handleAddToCart} 
                onViewItem={handleViewItem}
              />
            ) : (
              <ProductList 
                items={sortedItems} 
                onAddToCart={handleAddToCart} 
                onViewItem={handleViewItem}
              />
            )}
          </div>
        </div>
      </div>

      <ShoppingCart show={showCart} onClose={() => setShowCart(false)} items={cartItems} onRemoveItem={handleRemoveFromCart} onQuantityChange={handleQuantityChange} />

      <ProductDetails 
        show={!!selectedItem} 
        item={selectedItem} 
        relatedItems={featuredItems} 
        onClose={() => setSelectedItem(null)} 
        onAddToCart={handleAddToCart}
        onViewRelatedItem={handleViewItem}
      />
    </div>
  );
}

