"use client"

import { motion } from "framer-motion"
import { ChevronRight, X } from "lucide-react"
import { Button } from "@/components/button"
import { Checkbox } from "@/components/common/check-box"
import { Slider } from "@/components/common/slider"
import type { CategoryType, RarityType } from "@/types/marketplace"

interface FilterSidebarProps {
  showFilters: boolean
  onCloseFilters: () => void
  categories: CategoryType[]
  rarities: RarityType[]
  selectedCategories: string[]
  selectedRarities: string[]
  priceRange: number[]
  onCategoryChange: (category: string, checked: boolean) => void
  onRarityChange: (rarity: string, checked: boolean) => void
  onPriceRangeChange: (value: number[]) => void
  onApplyFilters: () => void
}

export function FilterSidebar({
  showFilters,
  onCloseFilters,
  categories,
  rarities,
  selectedCategories,
  selectedRarities,
  priceRange,
  onCategoryChange,
  onRarityChange,
  onPriceRangeChange,
  onApplyFilters,
}: FilterSidebarProps) {
  return (
    <motion.div
      className={`lg:w-1/4 bg-gray-900/80 rounded-lg p-5 border border-gray-800 ${showFilters ? "block" : "hidden lg:block"}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Filters</h2>
        <button className="lg:hidden text-gray-400 hover:text-white" onClick={onCloseFilters}>
          <X size={20} />
        </button>
      </div>

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
                  checked={selectedCategories.includes(category.name)}
                  onCheckedChange={(checked) => onCategoryChange(category.name, checked as boolean)}
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
                checked={selectedRarities.includes(rarity.name)}
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

      <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white" onClick={onApplyFilters}>
        Apply Filters
      </Button>
    </motion.div>
  )
}

