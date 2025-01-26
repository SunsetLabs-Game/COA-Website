"use client"

import { MarketplaceCard } from "./MarketplaceCard"

interface Item {
  id: string;
  imageUrl: string;
  price: number;
  rarity: string;
  rating: number;
}

interface ItemGridProps {
  items: Item[];
  onInspect: (id: string) => void;
  onBuy: (id: string) => void;
}

export function ItemGrid({ items, onInspect, onBuy }: ItemGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {items.map((item) => (
        <MarketplaceCard
          key={item.id}
          imageUrl={item.imageUrl}
          price={item.price}
          rarity={item.rarity}
          rating={item.rating}
          onInspect={() => onInspect(item.id)}
          onBuy={() => onBuy(item.id)}
        />
      ))}
    </div>
  )
}
