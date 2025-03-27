"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, Star } from "lucide-react"
import { Button } from "@/components/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { ItemType } from "@/types/marketplace"

interface ProductGridProps {
  items: ItemType[]
  onViewItem: (item: ItemType) => void
  onAddToCart: (item: ItemType) => void
}

export function ProductGrid({ items, onViewItem, onAddToCart }: ProductGridProps) {
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
        >
          <div className="relative">
            <Image
              src={item.imageUrl || "/public/images/"}
              alt={item.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />
            {item.discount && (
              <div className="absolute top-2 left-2 bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded">
                {item.discount}% OFF
              </div>
            )}
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
                <h3 className="font-bold text-white truncate">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.category}</p>
              </div>
              <div className="text-right">
                {item.originalPrice && <p className="text-xs text-gray-500 line-through">{item.originalPrice} STRK</p>}
                <p className="font-bold text-white">{item.price} STRK</p>
              </div>
            </div>

            <div
              className={`text-sm mb-3 ${
                item.rarity === "Common"
                  ? "text-gray-400"
                  : item.rarity === "Uncommon"
                    ? "text-green-400"
                    : item.rarity === "Rare"
                      ? "text-blue-400"
                      : item.rarity === "Epic"
                        ? "text-purple-400"
                        : "text-yellow-400"
              }`}
            >
              {item.rarity}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-6 w-6 mr-2">
                  <AvatarImage src={item.seller.avatar} alt={item.seller.name} />
                  <AvatarFallback>{item.seller.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex items-center">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="text-xs text-gray-300">{item.seller.rating}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                  onClick={() => onViewItem(item)}
                >
                  View
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="text-xs bg-cyan-500 hover:bg-cyan-600"
                  onClick={() => onAddToCart(item)}
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

