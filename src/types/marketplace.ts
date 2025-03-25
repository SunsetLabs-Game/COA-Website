// Tipos para el marketplace
export type ItemRarity = "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary"
export type ItemCategory =
  | "Energy Weapons"
  | "Melee Weapons"
  | "Firearms"
  | "Augmentations"
  | "Defense Systems"
  | "Special Weapons"
export type SortOption = "popular" | "priceAsc" | "priceDesc" | "rating"
export type ViewMode = "grid" | "list"

export interface ItemType {
  id: string
  name: string
  imageUrl: string
  price: number
  originalPrice?: number
  discount?: number
  rarity: ItemRarity
  category: ItemCategory
  seller: {
    name: string
    rating: number
    avatar: string
  }
  description?: string
  stats?: {
    damage?: number
    accuracy?: number
    range?: number
    stability?: number
  }
}

export interface CartItemType extends ItemType {
  quantity: number
}

export interface CategoryType {
  name: ItemCategory
  count: number
}

export interface RarityType {
  name: ItemRarity
  color: string
}

