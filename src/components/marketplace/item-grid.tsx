"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Star } from "lucide-react"
import { Button } from "@/components/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ItemProps {
  id: string
  imageUrl: string
  price: number
  rarity: string
  rating: number
}

interface ItemGridProps {
  items: ItemProps[]
  onInspect: (id: string) => void
  onBuy: (id: string) => void
}

export function ItemGrid({ items, onInspect, onBuy }: ItemGridProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const getRarityColor = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case "common":
        return "text-gray-400"
      case "uncommon":
        return "text-green-400"
      case "rare":
        return "text-blue-400"
      case "epic":
        return "text-purple-400"
      case "legendary":
        return "text-yellow-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="bg-gray-900/60 rounded-lg overflow-hidden border border-gray-800 hover:border-cyan-500 transition-all duration-300"
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 15px rgba(34, 211, 238, 0.3)",
          }}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="relative">
            <Image
              src={item.imageUrl || "/public/assets/images/placeholder.svg"}
              alt="Item"
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />
            <button
              className="absolute top-2 right-2 bg-gray-900/80 p-1.5 rounded-full hover:bg-gray-800"
              aria-label="Add to wishlist"
            >
              <Heart size={18} className="text-white" />
            </button>
          </div>

          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-white truncate">Quantum Edge Blade</h3>
                <p className="text-sm text-gray-400">Melee Weapons</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-white">{item.price} STRK</p>
              </div>
            </div>

            <div className={`text-sm mb-3 ${getRarityColor(item.rarity)}`}>{item.rarity}</div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-6 w-6 mr-2">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Seller" />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <div className="flex items-center">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="text-xs text-gray-300">{item.rating}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                  onClick={() => onInspect(item.id)}
                >
                  View
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="text-xs bg-cyan-500 hover:bg-cyan-600"
                  onClick={() => onBuy(item.id)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

