import type { ItemType, CategoryType, RarityType } from "@/types/marketplace"

// Mock data for featured items
export const featuredItems: ItemType[] = [
  {
    id: "item-1",
    name: "Nexus Power Gauntlet",
    imageUrl: "/placeholder.svg?height=300&width=300",
    price: 383,
    originalPrice: 450,
    discount: 15,
    rarity: "Legendary",
    category: "Augmentations",
    seller: {
      name: "CyberForge",
      rating: 4.9,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    description: "Advanced power gauntlet with neural interface for enhanced strength and precision.",
    stats: {
      damage: 85,
      accuracy: 70,
      range: 30,
      stability: 90,
    },
  },
  {
    id: "item-2",
    name: "Plasma Defender MK3",
    imageUrl: "/placeholder.svg?height=300&width=300",
    price: 280,
    rarity: "Epic",
    category: "Energy Weapons",
    seller: {
      name: "TechArsenal",
      rating: 4.8,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    description: "Compact energy pistol with focused plasma discharge and minimal heat buildup.",
    stats: {
      damage: 75,
      accuracy: 80,
      range: 60,
      stability: 65,
    },
  },
  {
    id: "item-3",
    name: "Quantum Edge Blade",
    imageUrl: "/placeholder.svg?height=300&width=300",
    price: 380,
    rarity: "Legendary",
    category: "Melee Weapons",
    seller: {
      name: "BladeWorks",
      rating: 5.0,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    description: "Vibrating molecular edge capable of cutting through most materials with minimal resistance.",
    stats: {
      damage: 95,
      accuracy: 90,
      range: 10,
      stability: 85,
    },
  },
  {
    id: "item-4",
    name: "Shadow Protocol Pistol",
    imageUrl: "/placeholder.svg?height=300&width=300",
    price: 288,
    originalPrice: 320,
    discount: 10,
    rarity: "Epic",
    category: "Firearms",
    seller: {
      name: "ShadowArms",
      rating: 4.9,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    description: "Stealth-optimized sidearm with integrated sound suppression and heat signature masking.",
    stats: {
      damage: 65,
      accuracy: 85,
      range: 50,
      stability: 75,
    },
  },
]

// Mock data for all marketplace items
export const allItems: ItemType[] = [
  ...featuredItems,
  {
    id: "item-5",
    name: "Precision Nova Rifle",
    imageUrl: "/placeholder.svg?height=300&width=300",
    price: 520,
    rarity: "Legendary",
    category: "Energy Weapons",
    seller: {
      name: "EliteArmory",
      rating: 4.9,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    description:
      "The Precision Nova Rifle is the pinnacle of energy weapon technology. Featuring an advanced targeting system, modular power cells, and adaptive recoil compensation, this rifle delivers unparalleled accuracy and stopping power. The integrated quantum stabilizer ensures consistent energy output even in extreme conditions.",
    stats: {
      damage: 95,
      accuracy: 90,
      range: 85,
      stability: 80,
    },
  },
  {
    id: "item-6",
    name: "Tactical Energy Bow",
    imageUrl: "/placeholder.svg?height=300&width=300",
    price: 261,
    originalPrice: 290,
    discount: 10,
    rarity: "Epic",
    category: "Special Weapons",
    seller: {
      name: "ShadowTech",
      rating: 4.8,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    description: "Silent but deadly energy bow with customizable arrow types and adjustable draw strength.",
    stats: {
      damage: 70,
      accuracy: 85,
      range: 75,
      stability: 60,
    },
  },
  {
    id: "item-7",
    name: "Guardian Shield Core",
    imageUrl: "/placeholder.svg?height=300&width=300",
    price: 340,
    rarity: "Epic",
    category: "Defense Systems",
    seller: {
      name: "DefenseCorp",
      rating: 4.7,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    description: "Deployable energy shield with adaptive resistance to various damage types.",
    stats: {
      damage: 10,
      accuracy: 100,
      range: 30,
      stability: 95,
    },
  },
  {
    id: "item-8",
    name: "Plasma Blaster Elite",
    imageUrl: "/placeholder.svg?height=300&width=300",
    price: 260,
    rarity: "Epic",
    category: "Energy Weapons",
    seller: {
      name: "PlasmaWorks",
      rating: 4.8,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    description: "Heavy plasma weapon with area effect damage and shield penetration capabilities.",
    stats: {
      damage: 90,
      accuracy: 65,
      range: 55,
      stability: 70,
    },
  },
]

// Categories with counts
export const categories: CategoryType[] = [
  { name: "Energy Weapons", count: 42 },
  { name: "Melee Weapons", count: 36 },
  { name: "Firearms", count: 28 },
  { name: "Augmentations", count: 53 },
  { name: "Defense Systems", count: 32 },
  { name: "Special Weapons", count: 25 },
]

// Rarities
export const rarities: RarityType[] = [
  { name: "Common", color: "text-gray-400" },
  { name: "Uncommon", color: "text-green-400" },
  { name: "Rare", color: "text-blue-400" },
  { name: "Epic", color: "text-purple-400" },
  { name: "Legendary", color: "text-yellow-400" },
]

