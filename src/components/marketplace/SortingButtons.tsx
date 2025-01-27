"use client"

import { Button } from "@/components/ui/button"

interface SortingButtonsProps {
  onSort: (type: 'new' | 'priceAsc' | 'priceDesc' | 'rarity') => void;
}

export function SortingButtons({ onSort }: SortingButtonsProps) {
  return (
    <div className="flex items-center space-x-4">
      <Button 
        variant="ghost" 
        className="text-gray-200 hover:bg-gray-300"
        onClick={() => onSort('new')}
      >
        New
      </Button>
      <Button 
        variant="ghost" 
        className="text-gray-200 hover:bg-gray-300"
        onClick={() => onSort('priceAsc')}
      >
        Price ascending
      </Button>
      <Button 
        variant="ghost" 
        className="text-gray-200 hover:bg-gray-300"
        onClick={() => onSort('priceDesc')}
      >
        Price descending
      </Button>
      <Button 
        variant="ghost" 
        className="text-gray-200 hover:bg-gray-300"
        onClick={() => onSort('rarity')}
      >
        Rarity
      </Button>
    </div>
  )
}
