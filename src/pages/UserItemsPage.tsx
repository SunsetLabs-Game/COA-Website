"use client"
import React, { useState, useMemo } from "react"
import NavMenu from "@/components/NavMenu"
import SearchBar from "@/components/SearchBar"
import { MyItemCard } from "@/components/MyItemCard"
import { FilterIcon, SortAscIcon } from "lucide-react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Inventory", href: "/inventory" },
  { label: "Shop", href: "/shop" },
  { label: "Profile", href: "/profile" },
]

const rarityOptions = ["All", "Common", "Rare", "Epic", "Legendary"]
const priceOptions = ["All", "Low to High", "High to Low"]

const mockItems = [
  { id: 1, name: "Mystic Sword", rarity: "Epic", price: 1000 },
  { id: 2, name: "Health Potion", rarity: "Common", price: 50 },
  { id: 3, name: "Dragon Scale Armor", rarity: "Legendary", price: 5000 },
  { id: 4, name: "Magic Wand", rarity: "Rare", price: 500 },
  { id: 5, name: "Invisibility Cloak", rarity: "Epic", price: 2000 },
  { id: 6, name: "Enchanted Bow", rarity: "Rare", price: 750 },
]

export default function UserItemsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [rarity, setRarity] = useState("All")
  const [priceSort, setPriceSort] = useState("All")

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const filteredItems = useMemo(() => {
    return mockItems
      .filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesRarity = rarity === "All" || item.rarity === rarity
        return matchesSearch && matchesRarity
      })
      .sort((a, b) => {
        if (priceSort === "Low to High") return a.price - b.price
        if (priceSort === "High to Low") return b.price - a.price
        return 0
      })
  }, [searchQuery, rarity, priceSort])

  return (
    <div className="min-h-screen bg-[url('/images/BACKGROUND_CITIZEN_OF_ARCANIS.jpg')] bg-cover bg-center">
      <div className="bg-black bg-opacity-20 min-h-screen">
        <div className="flex flex-col sm:flex-row justify-between py-1 px-6 items-center bg-[#203040]/70 backdrop-blur-md sticky top-0 z-10">
          <h1 className="font-bold text-3xl text-white mb-2 sm:mb-0">Logo</h1>
          <NavMenu items={navItems} bg_color="transparent" />
        </div>
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">My Magical Items</h1>
          <div className="flex justify-center mb-8">
            <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onSearch={handleSearch} />
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="w-full lg:w-1/4">
              <div className="bg-[#203040] rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                  <FilterIcon className="w-5 h-5" />
                  Filters
                </h2>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-200 mb-2">Rarity</label>
                  <select
                    className="w-full bg-[#3986AFA6] text-white text-sm rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    value={rarity}
                    onChange={(e) => setRarity(e.target.value)}
                  >
                    {rarityOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Price</label>
                  <select
                    className="w-full bg-[#3986AFA6] text-white text-sm rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    value={priceSort}
                    onChange={(e) => setPriceSort(e.target.value)}
                  >
                    {priceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </aside>
            <section className="w-full lg:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredItems.map((item) => (
                  <MyItemCard key={item.id} item={item} />
                ))}
              </div>
              {filteredItems.length === 0 && (
                <p className="text-white text-center mt-8">No items found matching your search criteria.</p>
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

