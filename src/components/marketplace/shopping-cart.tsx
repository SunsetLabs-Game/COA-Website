"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { X, ShoppingCartIcon as CartIcon } from "lucide-react"
import { Button } from "@/components/button"
import { Input } from "@/components/ui/input"
import type { CartItemType } from "@/types/marketplace"

interface ShoppingCartProps {
  show: boolean
  onClose: () => void
  items: CartItemType[]
  onRemoveItem: (itemId: string) => void
  onQuantityChange: (itemId: string, quantity: number) => void
}

export function ShoppingCart({ show, onClose, items, onRemoveItem, onQuantityChange }: ShoppingCartProps) {
  // Calculate cart totals
  const cartSubtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const cartTax = cartSubtotal * 0.08 // 8% tax
  const cartTotal = cartSubtotal + cartTax

  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex justify-end">
      <motion.div
        className="bg-gray-900 w-full max-w-md h-full overflow-auto"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Shopping Cart ({items.length})</h2>
            <button className="text-gray-400 hover:text-white" onClick={onClose}>
              <X size={24} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-10">
              <CartIcon size={48} className="mx-auto text-gray-500 mb-4" />
              <p className="text-gray-400">Your cart is empty</p>
              <Button className="mt-4 bg-cyan-500 hover:bg-cyan-600" onClick={onClose}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b border-gray-800 pb-4">
                    <div className="w-20 h-20 bg-gray-800 rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={item.imageUrl || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-white">{item.name}</h3>
                        <button className="text-gray-500 hover:text-white" onClick={() => onRemoveItem(item.id)}>
                          <X size={16} />
                        </button>
                      </div>

                      <p
                        className={`text-xs ${
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
                        {item.rarity} • {item.category}
                      </p>

                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center border border-gray-700 rounded">
                          <button
                            className="px-2 py-1 text-gray-400 hover:text-white"
                            onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="px-2 py-1 text-white">{item.quantity}</span>
                          <button
                            className="px-2 py-1 text-gray-400 hover:text-white"
                            onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>

                        <p className="font-bold text-white">{item.price} STRK</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-white">{cartSubtotal.toFixed(2)} STRK</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Tax (8%)</span>
                  <span className="text-white">{cartTax.toFixed(2)} STRK</span>
                </div>
                <div className="border-t border-gray-700 my-2 pt-2">
                  <div className="flex justify-between">
                    <span className="font-bold text-white">Total</span>
                    <span className="font-bold text-white">{cartTotal.toFixed(2)} STRK</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="promo" className="block text-sm text-gray-400 mb-2">
                  Promo Code
                </label>
                <div className="flex gap-2">
                  <Input id="promo" placeholder="Enter code" className="bg-gray-800 border-gray-700 text-white" />
                  <Button variant="outline" className="border-cyan-500 text-cyan-400">
                    Apply
                  </Button>
                </div>
              </div>

              <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-6">Checkout</Button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  )
}

