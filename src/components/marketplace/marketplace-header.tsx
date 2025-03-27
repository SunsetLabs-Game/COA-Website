"use client"

import type React from "react"
import { Search, SlidersHorizontal, ShoppingCart } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/button"

interface MarketplaceHeaderProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  onToggleFilters: () => void
  onToggleCart: () => void
  cartItemsCount: number
}

export function MarketplaceHeader({
  searchQuery,
  onSearchChange,
  onToggleFilters,
  onToggleCart,
  cartItemsCount,
}: MarketplaceHeaderProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value)
  }

  return (
    <div className="w-full bg-gray-900/80 py-4 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Todo en una sola línea horizontal */}
        <div className="flex flex-row items-center justify-between">
          {/* Título */}
          <div className="text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-cyan-400">Arcanis Marketplace</h1>
            <p className="text-xs md:text-sm text-gray-300">Discover rare items and powerful gear</p>
          </div>

          {/* Controles (búsqueda, filtros, carrito) */}
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block w-64">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="text-gray-400" size={18} />
              </div>
              <Input
                type="text"
                placeholder="Search items..."
                className="pl-10 pr-4 py-2 bg-gray-800/90 border-gray-700 text-white w-full rounded-md focus:border-cyan-400 focus:ring-cyan-400"
                value={searchQuery}
                onChange={handleChange}
              />
            </div>

            <Button
              variant="default"
              size="sm"
              className="bg-cyan-500 hover:bg-cyan-600 text-white"
              onClick={onToggleFilters}
            >
              <SlidersHorizontal className="mr-2" size={16} />
              <span>Filters</span>
            </Button>

            <Button
              variant="default"
              size="sm"
              className="bg-cyan-500 hover:bg-cyan-600 text-white relative"
              onClick={onToggleCart}
            >
              <ShoppingCart className="mr-2" size={16} />
              <span>Cart</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-cyan-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Barra de búsqueda móvil */}
        <div className="mt-4 md:hidden relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="text-gray-400" size={18} />
          </div>
          <Input
            type="text"
            placeholder="Search items..."
            className="pl-10 pr-4 py-2 bg-gray-800/90 border-gray-700 text-white w-full rounded-md focus:border-cyan-400 focus:ring-cyan-400"
            value={searchQuery}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  )
}

