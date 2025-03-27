"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, Star } from "lucide-react"
import { Button } from "@/components/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { ItemType } from "@/types/marketplace"

interface ProductListProps {
  items: ItemType[]
  onViewItem: (item: ItemType) => void
  onAddToCart: (item: ItemType) => void
}

export function ProductList({ items, onViewItem, onAddToCart }: ProductListProps) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="bg-gray-900/60 rounded-lg overflow-hidden border border-gray-800 hover:border-cyan-500 transition-all duration-300"
          whileHover={{
            boxShadow: "0 0 15px rgba(34, 211, 238, 0.3)",
          }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="relative md:w-1/3">
              <Image
                src={item.imageUrl || "/placeholder.svg"}
                alt={item.name}
                width={400}
                height={300}
                className="w-full h-60 md:h-full object-cover"
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

            <div className="p-6 md:w-2/3 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <p className="text-sm text-gray-400">{item.category}</p>
                    <div
                      className={`text-sm mt-1 ${
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
                  </div>
                  <div className="text-right">
                    {item.originalPrice && (
                      <p className="text-sm text-gray-500 line-through">{item.originalPrice} STRK</p>
                    )}
                    <p className="text-xl font-bold text-white">{item.price} STRK</p>
                  </div>
                </div>

                <p className="text-gray-300 mt-4 mb-6 line-clamp-2">
                  {item.description || "No description available."}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={item.seller.avatar} alt={item.seller.name} />
                    <AvatarFallback>{item.seller.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm text-white">{item.seller.name}</p>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-xs text-gray-300">{item.seller.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                    onClick={() => onViewItem(item)}
                  >
                    View
                  </Button>
                  <Button variant="default" className="bg-cyan-500 hover:bg-cyan-600" onClick={() => onAddToCart(item)}>
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

