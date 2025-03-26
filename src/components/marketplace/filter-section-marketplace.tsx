"use client"

import { Checkbox } from "@/components/common/check-box"
import { Slider } from "@/components/common/slider"
import { Button } from "@/components/button"
import { ChevronRight } from "lucide-react"

interface FilterSectionProps {
  priceRange: number[]
  onPriceRangeChange: (value: number[]) => void
  onRarityChange: (rarity: string, checked: boolean) => void
  onTypeChange: (type: string, checked: boolean) => void
  selectedTypes: string[]
}

export function FilterSection({
  priceRange,
  onPriceRangeChange,
  onRarityChange,
  onTypeChange,
  selectedTypes,
}: FilterSectionProps) {
  // Categories with counts
  const categories = [
    { name: "Energy Weapons", count: 42 },
    { name: "Melee Weapons", count: 36 },
    { name: "Firearms", count: 28 },
    { name: "Augmentations", count: 53 },
    { name: "Defense Systems", count: 32 },
    { name: "Special Weapons", count: 25 },
  ]

  // Rarities
  const rarities = [
    { name: "Common", color: "text-gray-400" },
    { name: "Uncommon", color: "text-green-400" },
    { name: "Rare", color: "text-blue-400" },
    { name: "Epic", color: "text-purple-400" },
    { name: "Legendary", color: "text-yellow-400" },
  ]

  return (
    <div className="w-full lg:w-1/4 bg-gray-900/80 rounded-lg p-5 border border-gray-800">
      <h2 className="text-xl font-bold mb-6">Filters</h2>

      {/* Categories */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Categories</h3>
          <ChevronRight size={16} className="text-gray-500" />
        </div>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.name} className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox
                  id={`category-${category.name}`}
                  checked={selectedTypes.includes(category.name)}
                  onCheckedChange={(checked) => onTypeChange(category.name, checked as boolean)}
                  className="border-gray-600 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                />
                <label
                  htmlFor={`category-${category.name}`}
                  className="ml-2 text-sm font-medium text-gray-300 cursor-pointer"
                >
                  {category.name}
                </label>
              </div>
              <span className="text-xs text-gray-500">{category.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rarity */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Rarity</h3>
          <ChevronRight size={16} className="text-gray-500" />
        </div>
        <div className="space-y-2">
          {rarities.map((rarity) => (
            <div key={rarity.name} className="flex items-center">
              <Checkbox
                id={`rarity-${rarity.name}`}
                onCheckedChange={(checked) => onRarityChange(rarity.name, checked as boolean)}
                className="border-gray-600 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
              />
              <label
                htmlFor={`rarity-${rarity.name}`}
                className={`ml-2 text-sm font-medium cursor-pointer ${rarity.color}`}
              >
                {rarity.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Price Range</h3>
          <ChevronRight size={16} className="text-gray-500" />
        </div>
        <Slider
          defaultValue={[0, 600]}
          max={600}
          step={1}
          value={priceRange}
          onValueChange={onPriceRangeChange}
          className="my-6"
        />
        <div className="flex justify-between text-sm text-gray-400">
          <span>{priceRange[0]} STRK</span>
          <span>{priceRange[1]} STRK</span>
        </div>
      </div>

      <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">Apply Filters</Button>
    </div>
  )
}

