"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/button"
import { Card, CardContent, CardFooter } from "@/components/cards/card"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface MarketplaceCardProps {
  imageUrl: string;
  price: number;
  rarity: string;
  rating: number;
  onInspect: () => void;
  onBuy: () => void;
}

export function MarketplaceCard({
  imageUrl,
  price,
  rarity,
  rating,
  onInspect,
  onBuy
}: MarketplaceCardProps) {
  return (
    <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <div className="absolute inset-0 bg-blue-500/10 rounded-t-lg" />
          <Image
            src={imageUrl}
            alt="Item"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 p-3">
        <div className="flex justify-between items-center w-full">
          <Button 
            variant="secondary" 
            size="sm" 
            className="text-white bg-black"
            onClick={onInspect}
          >
            INSPECT
          </Button>
          <Button 
            variant="destructive" 
            size="sm"
            onClick={onBuy}
          >
            BUY
          </Button>
        </div>
        <div className="flex justify-between items-center w-full">
          <span className="text-gray-200">${price}</span>
          <span className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-300">
            {rarity}
          </span>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4",
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
              )}
            />
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
