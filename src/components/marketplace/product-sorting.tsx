"use client"

import { Grid, List, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/button"
import type { SortOption, ViewMode } from "@/types/marketplace"

interface ProductSortingProps {
  itemCount: number
  viewMode: ViewMode
  sortOption: SortOption
  onViewModeChange: (mode: ViewMode) => void
  onSortChange: (option: SortOption) => void
}

export function ProductSorting({
  itemCount,
  viewMode,
  sortOption,
  onViewModeChange,
  onSortChange,
}: ProductSortingProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
      <p className="text-gray-400">Showing {itemCount} products</p>

      <div className="flex items-center gap-4">
        <div className="flex items-center bg-gray-900/60 rounded-md p-1">
          <button
            className={`p-1.5 rounded ${viewMode === "grid" ? "bg-gray-700" : ""}`}
            onClick={() => onViewModeChange("grid")}
            aria-label="Grid view"
          >
            <Grid size={18} />
          </button>
          <button
            className={`p-1.5 rounded ${viewMode === "list" ? "bg-gray-700" : ""}`}
            onClick={() => onViewModeChange("list")}
            aria-label="List view"
          >
            <List size={18} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-xs border-gray-700 text-gray-300 hover:bg-gray-700">
            <ArrowUpDown size={14} className="mr-1" />
            Sort
          </Button>
          <select
            className="bg-gray-900/60 border-gray-700 text-white rounded-md text-sm p-2 focus:border-cyan-400 focus:ring-cyan-400"
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
          >
            <option value="popular">Most Popular</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="rating">Best Rating</option>
          </select>
        </div>
      </div>
    </div>
  )
}

