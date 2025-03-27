import { useState, useMemo } from "react";
import { filterItems, sortItems } from "@/utils/marketplace-utils";
import type { ItemType, SortOption } from "@/types/marketplace";

export function useMarketplaceFilters(allItems: ItemType[]) {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 600]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRarities, setSelectedRarities] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>("popular");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);

  const filteredItems = useMemo(
    () => filterItems(allItems, searchQuery, selectedCategories, selectedRarities, priceRange),
    [allItems, searchQuery, selectedCategories, selectedRarities, priceRange]
  );

  const sortedItems = useMemo(() => sortItems(filteredItems, sortOption), [filteredItems, sortOption]);

  return {
    searchQuery,
    setSearchQuery,
    priceRange,
    setPriceRange,
    selectedCategories,
    setSelectedCategories,
    selectedRarities,
    setSelectedRarities,
    sortOption,
    setSortOption,
    viewMode,
    setViewMode,
    showFilters, // Devuelto aquí
    setShowFilters, // Devuelto aquí
    selectedItem, // Devuelto aquí
    setSelectedItem, // Devuelto aquí
    filteredItems,
    sortedItems,
  };
}
