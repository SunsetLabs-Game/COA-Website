"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sliders, Brain, Cpu, Eye } from "lucide-react"

export default function CharacterCustomization() {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const categories = [
    {
      id: "physical",
      name: "Physical Augmentations",
      icon: <Cpu className="w-6 h-6 text-[#00aaff]" />,
      options: [
        "Cybernetic Limbs",
        "Enhanced Sensory Systems",
        "Combat Implants",
        "Stealth Modifications",
        "Movement Enhancements",
      ],
    },
    {
      id: "neural",
      name: "Neural Implants",
      icon: <Brain className="w-6 h-6 text-[#00ffff]" />,
      options: [
        "Hacking Interfaces",
        "Memory Enhancement",
        "Combat Reflexes",
        "Neural Networks",
        "AI Integration",
      ],
    },
    {
      id: "aesthetic",
      name: "Aesthetic Customization",
      icon: <Eye className="w-6 h-6 text-[#ff0033]" />,
      options: [
        "Holographic Projections",
        "Skin Modifications",
        "Cybernetic Tattoos",
        "Optical Enhancements",
        "Voice Modulators",
      ],
    },
  ]

  const augmentationFeatures = [
    "Over 200 unique augmentations to discover",
    "Combine augmentations for synergistic effects",
    "Augmentations affect dialogue options and story paths",
    "Upgrade paths for each augmentation type",
    "Faction-specific augmentation technologies",
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen text-white flex items-center justify-center py-2"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#00ffff]">
                ⚙️ Character Customization
              </h2>
            </div>
            <p className="text-gray-400 text-lg">
              Rebuild yourself with cutting-edge augmentations that go beyond cosmetics. Every modification affects your
              gameplay, abilities, and interactions with the world.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#0c1624] border border-[#162a43] rounded-lg p-6 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-[#162238] p-2 rounded-md">
                <Sliders className="w-6 h-6 text-cyan-300" />
              </div>
              <h2 className="text-xl font-bold">Augmentation System</h2>
            </div>

            <p className="text-gray-400">
              Our advanced augmentation system allows for unprecedented character customization with real gameplay
              impact:
            </p>

            <ul className="space-y-2">
              {augmentationFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2 text-gray-300"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                >
                  <span className="text-cyan-300">✓</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="space-y-8 bg-[#0c1624] border border-[#162a43] rounded-lg p-8"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, i) => (
            <motion.div
              key={category.id}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#162238] p-2 rounded-full">
                  <div className="text-cyan-300">{category.icon}</div>
                </div>
                <h2 className="text-xl font-bold">{category.name}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {category.options.map((option) => (
                  <motion.div
                    key={option}
                    className={`bg-[#162238] border border-[#1a2942] rounded-md p-3 cursor-pointer transition-all duration-200 hover:bg-[#1d2c45] hover:border-cyan-700 ${
                      hoveredOption === option ? "border-cyan-500 bg-[#1d2c45]" : ""
                    }`}
                    onMouseEnter={() => setHoveredOption(option)}
                    onMouseLeave={() => setHoveredOption(null)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="text-gray-200">{option}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
