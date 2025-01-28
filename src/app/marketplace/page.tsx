"use client";
import { useState } from "react";
import { SearchBar } from "@/components/marketplace/SearchBar";
import { SortingButtons } from "@/components/marketplace/SortingButtons";
import { FilterSection } from "@/components/marketplace/FilterSection";
import { ItemGrid } from "@/components/marketplace/ItemGrid";
import NavMenu from "@/components/NavMenu";
import Logo from "@/components/Logo";
import ProfileMenu from "@/components/ProfileMenu";

export default function Marketplace() {
  const mockItems = Array.from({ length: 15 }, (_, i) => ({
    id: `item-${i}`,
    imageUrl: "/images/weapon.png",
    price: 40,
    rarity: "Rare",
    rating: 3,
  }));
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [items] = useState(mockItems);

  const handleSearch = (query: string) => {
    console.log("Search:", query);
    // Implement search logic
  };

  const handleSort = (type: "new" | "priceAsc" | "priceDesc" | "rarity") => {
    console.log("Sort:", type);
    // Implement sort logic
  };

  const handleRarityChange = (rarity: string, checked: boolean) => {
    console.log("Rarity change:", rarity, checked);
    // Implement rarity filter logic
  };

  const handleTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setSelectedTypes([...selectedTypes, type]);
    } else {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    }
    // Implement additional type filter logic
  };

  const handleInspect = (id: string) => {
    console.log("Inspect:", id);
    // Implement inspect logic
  };

  const handleBuy = (id: string) => {
    console.log("Buy:", id);
    // Implement buy logic
  };
  return (
    <div className="min-h-screen bg-[url('/images/BACKGROUND_CITIZEN_OF_ARCANIS.jpg')] bg-cover bg-center">
      <div className="flex justify-between items-center mb-10 px-[80px] py-4">
        <Logo />
        <NavMenu
          items={[
            { label: "TREND ITEMS", href: "" },
            { label: "BUY", href: "" },
            { label: "SELL", href: "" },
            { label: "AUCTION", href: "" },
          ]}
        />
        <ProfileMenu />
      </div>
      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 space-x-4">
          <SearchBar onSearch={handleSearch} />
          <SortingButtons onSort={handleSort} />
        </div>

        <div className="flex gap-6">
          <FilterSection
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            onRarityChange={handleRarityChange}
            onTypeChange={handleTypeChange}
            selectedTypes={selectedTypes}
          />

          {/* Main Content */}
          <div className="flex-1">
            <ItemGrid
              items={items}
              onInspect={handleInspect}
              onBuy={handleBuy}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
