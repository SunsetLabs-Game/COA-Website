"use client"

import { useState } from "react"
import { Sliders, Brain, Cpu, Eye, Zap } from "lucide-react"

export default function CharacterCustomization() {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null)

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
      options: ["Hacking Interfaces", "Memory Enhancement", "Combat Reflexes", "Neural Networks", "AI Integration"],
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
    <div className="min-h-screen text-white flex items-center justify-center py-2">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#00ffff]"> ⚙️ Character Customization</h2>
            </div>
            <p className="text-gray-400  text-lg">
              Rebuild yourself with cutting-edge augmentations that go beyond cosmetics. Every modification affects your
              gameplay, abilities, and interactions with the world.
            </p>
          </div>

          <div className="bg-[#0c1624] border border-[#162a43] rounded-lg p-6 space-y-6">
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
                <li key={index} className="flex items-start gap-2">
                  <span className="text-cyan-300">✓</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8 bg-[#0c1624] border border-[#162a43] rounded-lg p-8">
          {categories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#162238] p-2 rounded-full">
                  <div className="text-cyan-300">{category.icon}</div>
                </div>
                <h2 className="text-xl font-bold">{category.name}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {category.options.map((option) => (
                  <div
                    key={option}
                    className={`bg-[#162238] border border-[#1a2942] rounded-md p-3 cursor-pointer transition-all duration-200 hover:bg-[#1d2c45] hover:border-cyan-700 ${
                      hoveredOption === option ? "border-cyan-500 bg-[#1d2c45]" : ""
                    }`}
                    onMouseEnter={() => setHoveredOption(option)}
                    onMouseLeave={() => setHoveredOption(null)}
                  >
                    <span className="text-gray-200">{option}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

