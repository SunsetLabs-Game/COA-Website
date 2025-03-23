"use client"

import { motion } from "framer-motion"

export default function GameplayNavigation() {
  const navigationItems = [
    { name: "Combat", id: "combat" },
    { name: "Progression", id: "progression" },
    { name: "Missions", id: "missions" },
    { name: "PvP", id: "pvp" },
    { name: "Skills", id: "skills" },
    { name: "Crafting", id: "crafting" },
  ]

  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-3xl mx-auto">
      {navigationItems.map((item, index) => (
        <motion.a
          key={item.name}
          href={`#${item.id}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          className="bg-[#162a43]/50 border border-[#00aaff]/30 rounded-lg p-3 text-center hover:bg-[#00aaff]/20 transition-colors"
        >
          <span className="text-white text-sm">{item.name}</span>
        </motion.a>
      ))}
    </div>
  )
}

