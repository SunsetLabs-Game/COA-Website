import type { ItemType, SortOption } from "@/types/marketplace"

// Filter items based on search, categories, rarities, and price
export const filterItems = (
  items: ItemType[],
  searchQuery: string,
  selectedCategories: string[],
  selectedRarities: string[],
  priceRange: number[],
): ItemType[] => {
  return items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category)
    const matchesRarity = selectedRarities.length === 0 || selectedRarities.includes(item.rarity)
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1]

    return matchesSearch && matchesCategory && matchesRarity && matchesPrice
  })
}

// Sort items based on selected sort option
export const sortItems = (items: ItemType[], sortOption: SortOption): ItemType[] => {
  return [...items].sort((a, b) => {
    switch (sortOption) {
      case "priceAsc":
        return a.price - b.price
      case "priceDesc":
        return b.price - a.price
      case "rating":
        return b.seller.rating - a.seller.rating
      case "popular":
      default:
        return 0 // No sorting for popular (default order)
    }
  })
}

// Get color class for rarity
export const getRarityColor = (rarity: string): string => {
  switch (rarity) {
    case "Common":
      return "text-gray-400"
    case "Uncommon":
      return "text-green-400"
    case "Rare":
      return "text-blue-400"
    case "Epic":
      return "text-purple-400"
    case "Legendary":
      return "text-yellow-400"
    default:
      return "text-gray-400"
  }
}

