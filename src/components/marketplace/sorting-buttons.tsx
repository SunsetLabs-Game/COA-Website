"use client"
  
import { Button } from "@/components/button"
import { ArrowUpDown, Grid, List } from "lucide-react"
import { useState } from "react"

interface SortingButtonsProps {
  onSort: (type: "new" | "priceAsc" | "priceDesc" | "rarity") => void
}

export function SortingButtons({ onSort }: SortingButtonsProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortOpen, setSortOpen] = useState(false)

  const handleViewChange = (mode: "grid" | "list") => {
    setViewMode(mode)
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center bg-gray-900/60 rounded-md p-1">
        <button
          className={`p-1.5 rounded ${viewMode === "grid" ? "bg-gray-700" : ""}`}
          onClick={() => handleViewChange("grid")}
          aria-label="Grid view"
        >
          <Grid size={18} className="text-white" />
        </button>
        <button
          className={`p-1.5 rounded ${viewMode === "list" ? "bg-gray-700" : ""}`}
          onClick={() => handleViewChange("list")}
          aria-label="List view"
        >
          <List size={18} className="text-white" />
        </button>
      </div>

      <div className="relative">
        <Button
          variant="outline"
          size="sm"
          className="text-xs border-gray-700 text-gray-300 hover:bg-gray-700"
          onClick={() => setSortOpen(!sortOpen)}
        >
          <ArrowUpDown size={14} className="mr-1" />
          Sort
        </Button>

        {sortOpen && (
          <div className="absolute right-0 mt-1 bg-gray-900 border border-gray-800 rounded-md shadow-lg z-10 w-48">
            <div className="py-1">
              <button
                className="block px-4 py-2 text-sm text-white hover:bg-gray-800 w-full text-left"
                onClick={() => {
                  onSort("new")
                  setSortOpen(false)
                }}
              >
                Newest
              </button>
              <button
                className="block px-4 py-2 text-sm text-white hover:bg-gray-800 w-full text-left"
                onClick={() => {
                  onSort("priceAsc")
                  setSortOpen(false)
                }}
              >
                Price: Low to High
              </button>
              <button
                className="block px-4 py-2 text-sm text-white hover:bg-gray-800 w-full text-left"
                onClick={() => {
                  onSort("priceDesc")
                  setSortOpen(false)
                }}
              >
                Price: High to Low
              </button>
              <button
                className="block px-4 py-2 text-sm text-white hover:bg-gray-800 w-full text-left"
                onClick={() => {
                  onSort("rarity")
                  setSortOpen(false)
                }}
              >
                Rarity
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

