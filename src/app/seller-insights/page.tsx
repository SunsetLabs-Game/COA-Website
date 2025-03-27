"use client"

import { useState } from "react"
import { SearchBar } from "@/components/marketplace/search-bar"
import { SortingButtons } from "@/components/marketplace/sorting-buttons"
import { FilterSection } from "@/components/marketplace/filter-section-marketplace"
import { ItemGrid } from "@/components/marketplace/item-grid"

// Mock data - replace with actual data fetching
const mockItems = Array.from({ length: 15 }, (_, i) => ({
  id: `item-${i}`,
  imageUrl: "/images/weapon.png",
  price: 40,
  rarity: "Rare",
  rating: 3,
}))

export default function GameMarketplace() {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [items] = useState(mockItems)

  const handleSearch = (query: string) => {
    console.log('Search:', query)
    // Implement search logic
  }

  const handleSort = (type: 'new' | 'priceAsc' | 'priceDesc' | 'rarity') => {
    console.log('Sort:', type)
    // Implement sort logic
  }

  const handleRarityChange = (rarity: string, checked: boolean) => {
    console.log('Rarity change:', rarity, checked)
    // Implement rarity filter logic
  }

  const handleTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setSelectedTypes([...selectedTypes, type])
    } else {
      setSelectedTypes(selectedTypes.filter(t => t !== type))
    }
    // Implement additional type filter logic
  }

  const handleInspect = (id: string) => {
    console.log('Inspect:', id)
    // Implement inspect logic
  }

  const handleBuy = (id: string) => {
    console.log('Buy:', id)
    // Implement buy logic
  }

  return (
    <div className="min-h-screen bg-[url('/images/BACKGROUND_CITIZEN_OF_ARCANIS.jpg')] bg-cover bg-center">
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
  )
}
