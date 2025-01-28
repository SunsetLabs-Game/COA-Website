import React from "react"
import { ShoppingBagIcon } from "lucide-react"

interface Item {
  id: number
  name: string
  rarity: string
  price: number
}

interface MyItemCardProps {
  item: Item
}

export function MyItemCard({ item }: MyItemCardProps) {
  const rarityColor = {
    Common: "bg-gray-500",
    Rare: "bg-blue-500",
    Epic: "bg-purple-500",
    Legendary: "bg-yellow-500",
  }[item.rarity]

  return (
    <div className="bg-[#203040] rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="h-48 bg-[#3986AFA6] flex items-center justify-center">
        <ShoppingBagIcon className="w-16 h-16 text-white" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-white">{item.name}</h3>
        <div className="flex justify-between items-center">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${rarityColor}`}>
            {item.rarity}
          </span>
          <span className="text-lg font-bold text-white">${item.price}</span>
        </div>
      </div>
    </div>
  )
}

