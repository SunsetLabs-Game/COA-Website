"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Hammer, Cog, Zap, Crosshair } from "lucide-react"
import SectionContainer from "@/components/gameplay/ui/section-container"
import CraftingSystem from "@/components/gameplay/ui/crafting-system"

export default function CraftingResources() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const craftingSystems = [
    {
      name: "Weapon Crafting",
      description: "Create and modify weapons with various components and materials.",
      icon: <Crosshair className="w-6 h-6 text-[#ff0033]" />,
      features: [
        "Modular weapon assembly",
        "Component quality tiers",
        "Special effect integration",
        "Unique weapon naming",
      ],
    },
    {
      name: "Augmentation Engineering",
      description: "Design custom augmentations to enhance your cybernetic capabilities.",
      icon: <Cog className="w-6 h-6 text-[#00aaff]" />,
      features: [
        "Neural interface customization",
        "Power management systems",
        "Compatibility optimization",
        "Experimental prototypes",
      ],
    },
    {
      name: "Resource Refinement",
      description: "Process raw materials into valuable crafting components.",
      icon: <Hammer className="w-6 h-6 text-[#00ffff]" />,
      features: ["Material purification", "Yield optimization", "Rare element extraction", "Batch processing"],
    },
    {
      name: "Energy Systems",
      description: "Create power cells, shields, and energy-based equipment.",
      icon: <Zap className="w-6 h-6 text-[#00aaff]" />,
      features: [
        "Quantum battery creation",
        "Shield modulation",
        "Energy weapon calibration",
        "Power efficiency tuning",
      ],
    },
  ]

  return (
    <SectionContainer id="crafting" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-lg overflow-hidden"
        >
          <div className="aspect-video bg-[#0c1624] relative">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Crafting interface"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />

            {/* Overlay with glitch effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1624] via-transparent to-transparent"></div>

            {/* Crafting UI elements */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-[#0c1624]/80 border border-[#00aaff]/30 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-[#00aaff] mr-2 animate-pulse"></div>
                  <span className="text-[#00aaff] font-mono text-sm">CRAFTING INTERFACE v2.1</span>
                </div>
                <p className="text-gray-300 text-sm">
                  The crafting system features an intuitive interface that visualizes component compatibility and
                  potential outcomes before committing resources.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#00ffff]">🔧 Crafting & Resources</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Create, modify, and enhance your equipment through an extensive crafting system. Gather resources throughout
            Arcanis to fuel your creations.
          </p>

          <div className="bg-[#0c1624] border border-[#162a43] rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-white mb-4">Crafting Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Player-driven economy with crafted items</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Skill-based crafting with critical success chances</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Reverse engineering of found equipment</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Blueprint discovery and trading</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Experimental crafting with unique outcomes</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#162a43]/50 border border-[#00aaff]/30 rounded-lg p-4">
            <p className="text-[#00ffff] italic">
              &quot;The crafting system in Citizen of Arcanis offers unprecedented depth, allowing players to create truly
              unique items that reflect their personal style and strategy.&quot; - Tech Gaming Review
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {craftingSystems.map((system, index) => (
          <CraftingSystem key={system.name} system={system} index={index} isInView={isInView} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 bg-[#0c1624] border border-[#162a43] rounded-lg p-6"
      >
        <h3 className="text-xl font-bold text-white mb-4">Resource Gathering</h3>
        <p className="text-gray-400 mb-6">
          Resources in Arcanis are scattered throughout the world, encouraging exploration and strategic gathering:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#162a43]/50 p-4 rounded-lg border border-[#00aaff]/10">
            <h4 className="text-white font-medium mb-2">Mining Operations</h4>
            <p className="text-gray-400 text-sm">
              Extract valuable minerals and metals from deposits found in various territories.
            </p>
          </div>

          <div className="bg-[#162a43]/50 p-4 rounded-lg border border-[#00aaff]/10">
            <h4 className="text-white font-medium mb-2">Salvage Operations</h4>
            <p className="text-gray-400 text-sm">
              Recover components and materials from abandoned technology and defeated enemies.
            </p>
          </div>

          <div className="bg-[#162a43]/50 p-4 rounded-lg border border-[#00aaff]/10">
            <h4 className="text-white font-medium mb-2">Energy Harvesting</h4>
            <p className="text-gray-400 text-sm">
              Collect volatile energy sources from quantum anomalies and power stations.
            </p>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  )
}

