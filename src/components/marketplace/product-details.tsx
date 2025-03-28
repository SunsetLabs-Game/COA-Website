"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, Heart, Share2, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { ItemType } from "@/types/marketplace"

interface ProductDetailsProps {
  show: boolean
  item: ItemType | null
  relatedItems: ItemType[]
  onClose: () => void
  onAddToCart: (item: ItemType) => void
  onViewRelatedItem: (item: ItemType) => void
}

export function ProductDetails({
  show,
  item,
  relatedItems,
  onClose,
  onAddToCart,
  onViewRelatedItem,
}: ProductDetailsProps) {
  if (!show || !item) return null

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "bg-gray-600"
      case "Uncommon":
        return "bg-green-600"
      case "Rare":
        return "bg-blue-600"
      case "Epic":
        return "bg-purple-600"
      case "Legendary":
        return "bg-yellow-600"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center overflow-auto py-10">
      <motion.div
        className="bg-gray-900 w-full max-w-5xl rounded-lg relative mx-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Botón de cerrar mejorado */}
        <button
          className="absolute top-4 right-4 z-50 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full"
          onClick={onClose}
          aria-label="Close details"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          <div className="flex items-center mb-6">
            <button className="text-cyan-400 hover:text-cyan-300 flex items-center" onClick={onClose}>
              <ChevronLeft size={16} className="mr-1" />
              Back to Marketplace
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-gray-800 rounded-lg overflow-hidden mb-4">
                <Image
                  src={item.imageUrl || "/placeholder.svg"}
                  alt={item.name}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-gray-800 rounded overflow-hidden cursor-pointer border-2 border-transparent hover:border-cyan-500"
                  >
                    <Image
                      src={item.imageUrl || "/placeholder.svg"}
                      alt={`${item.name} thumbnail ${i}`}
                      width={100}
                      height={100}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-2">
                <Badge className={getRarityColor(item.rarity)}>{item.rarity}</Badge>
                <Badge className="ml-2 bg-gray-700">{item.category}</Badge>
              </div>

              <h1 className="text-3xl font-bold text-white mb-2">{item.name}</h1>

              <div className="flex items-center mb-6">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={item.seller.avatar} alt={item.seller.name} />
                  <AvatarFallback>{item.seller.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm text-white">{item.seller.name}</p>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-300">{item.seller.rating}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                {item.originalPrice && <p className="text-gray-500 line-through">{item.originalPrice} STRK</p>}
                <div className="flex items-center">
                  <p className="text-3xl font-bold text-white mr-3">{item.price} STRK</p>
                  {item.discount && <Badge className="bg-cyan-500">{item.discount}% OFF</Badge>}
                </div>
              </div>

              <p className="text-gray-300 mb-6">{item.description}</p>

              {item.stats && (
                <div className="mb-6 grid grid-cols-2 gap-4">
                  {item.stats.damage !== undefined && (
                    <div>
                      <p className="text-gray-400 mb-1">Damage</p>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500" style={{ width: `${item.stats.damage}%` }}></div>
                      </div>
                      <p className="text-right text-sm text-gray-400 mt-1">{item.stats.damage}</p>
                    </div>
                  )}

                  {item.stats.accuracy !== undefined && (
                    <div>
                      <p className="text-gray-400 mb-1">Accuracy</p>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500" style={{ width: `${item.stats.accuracy}%` }}></div>
                      </div>
                      <p className="text-right text-sm text-gray-400 mt-1">{item.stats.accuracy}</p>
                    </div>
                  )}

                  {item.stats.range !== undefined && (
                    <div>
                      <p className="text-gray-400 mb-1">Range</p>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500" style={{ width: `${item.stats.range}%` }}></div>
                      </div>
                      <p className="text-right text-sm text-gray-400 mt-1">{item.stats.range}</p>
                    </div>
                  )}

                  {item.stats.stability !== undefined && (
                    <div>
                      <p className="text-gray-400 mb-1">Stability</p>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500" style={{ width: `${item.stats.stability}%` }}></div>
                      </div>
                      <p className="text-right text-sm text-gray-400 mt-1">{item.stats.stability}</p>
                    </div>
                  )}
                </div>
              )}

              <div className="flex gap-3 mb-6">
                <Button
                  className="flex-1 bg-cyan-500 hover:bg-cyan-600"
                  onClick={() => {
                    onAddToCart(item)
                    onClose()
                  }}
                >
                  <ShoppingCart className="mr-2" size={18} />
                  Add to Cart
                </Button>
                <Button variant="outline" className="border-cyan-500 text-cyan-400">
                  <Heart className="mr-2" size={18} />
                  Wishlist
                </Button>
                <Button variant="outline" className="border-cyan-500 text-cyan-400">
                  <Share2 size={18} />
                </Button>
              </div>

              <div className="border-t border-gray-800 pt-4">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    In Stock
                  </div>
                  <div>Fast digital delivery</div>
                  <div>24-hour return policy</div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {relatedItems.slice(0, 4).map((relatedItem) => (
                <div
                  key={relatedItem.id}
                  className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-800 hover:border-cyan-500 transition-all duration-300 cursor-pointer"
                  onClick={() => onViewRelatedItem(relatedItem)}
                >
                  <div className="relative">
                    <Image
                      src={relatedItem.imageUrl || "/placeholder.svg"}
                      alt={relatedItem.name}
                      width={200}
                      height={200}
                      className="w-full h-32 object-cover"
                    />
                    {relatedItem.discount && (
                      <div className="absolute top-2 left-2 bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {relatedItem.discount}% OFF
                      </div>
                    )}
                  </div>

                  <div className="p-3">
                    <h3 className="font-bold text-white text-sm truncate">{relatedItem.name}</h3>
                    <p className="text-xs text-gray-400">{relatedItem.category}</p>
                    <p className="font-bold text-white text-sm mt-1">{relatedItem.price} STRK</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

