"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TrendingUp, Award, Layers, BarChart } from "lucide-react"
import SectionContainer from "@/components/gameplay/ui/section-container"
import SectionTitle from "@/components/gameplay/ui/section-title"
import ProgressionStage from "@/components/gameplay/ui/progression-stage"

export default function ProgressionSystem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const progressionStages = [
    {
      stage: "Initiate",
      level: "1-10",
      description: "Begin your journey as a newly awakened citizen of Arcanis, learning the basics of survival.",
      unlocks: ["Basic Augmentations", "Starter Weapons", "Tutorial Missions", "First Companion"],
    },
    {
      stage: "Operative",
      level: "11-30",
      description: "Establish yourself as a capable operative, taking on more challenging missions and faction tasks.",
      unlocks: ["Advanced Weapons", "Faction Reputation", "Specialized Training", "Companion Upgrades"],
    },
    {
      stage: "Specialist",
      level: "31-50",
      description: "Become a specialist in your chosen path, with access to rare equipment and high-risk missions.",
      unlocks: ["Rare Augmentations", "Specialized Gear", "High-Risk Contracts", "Black Market Access"],
    },
    {
      stage: "Elite",
      level: "51-70",
      description: "Join the elite ranks with access to the most powerful abilities and equipment in Arcanis.",
      unlocks: ["Elite Augmentations", "Legendary Weapons", "Faction Leadership", "Advanced Companions"],
    },
    {
      stage: "Ascended",
      level: "71+",
      description: "Transcend normal limitations and shape the future of Arcanis with your actions and decisions.",
      unlocks: ["Unique Abilities", "World-Altering Missions", "Legendary Status", "Legacy System"],
    },
  ]

  const progressionSystems = [
    {
      title: "Character Level",
      icon: <Award className="w-5 h-5 text-[#00aaff] mr-2" />,
      description: "Increase your base stats and unlock new ability slots through experience points.",
    },
    {
      title: "Faction Reputation",
      icon: <Layers className="w-5 h-5 text-[#00aaff] mr-2" />,
      description: "Gain standing with factions to access exclusive missions, areas, and equipment.",
    },
    {
      title: "Skill Mastery",
      icon: <BarChart className="w-5 h-5 text-[#00aaff] mr-2" />,
      description: "Improve individual skills through use, unlocking advanced techniques and passive bonuses.",
    },
    {
      title: "Augmentation Tier",
      icon: <Award className="w-5 h-5 text-[#00aaff] mr-2" />,
      description: "Upgrade your cybernetic enhancements to unlock new capabilities and synergies.",
    },
  ]

  return (
    <SectionContainer id="progression" ref={ref}>
      <SectionTitle
        title="📈 Progression System"
        description="Advance through multiple tiers of progression, unlocking new abilities, equipment, and story content as you rise through the ranks of Arcanis."
        isInView={isInView}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-[#0c1624] border border-[#162a43] rounded-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-[#00aaff]/20 p-2 rounded-full mr-3">
                <TrendingUp className="w-6 h-6 text-[#00aaff]" />
              </div>
              <h3 className="text-xl font-bold text-white">Multi-Faceted Progression</h3>
            </div>

            <p className="text-gray-400 mb-6">
              Progress in Citizen of Arcanis isn&apos;t just about gaining levels. Your advancement is measured across
              multiple systems:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {progressionSystems.map((system, index) => (
                <div key={index} className="bg-[#162a43]/50 p-4 rounded-lg border border-[#00aaff]/10">
                  <div className="flex items-center mb-2">
                    {system.icon}
                    <h4 className="text-white font-medium">{system.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm">{system.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          {/* Animated circuit background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,170,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,170,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 rounded-lg"></div>

          <div className="relative z-10 bg-[#0c1624]/80 border border-[#162a43] rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-6">Prestige System</h3>
            <p className="text-gray-400 mb-6">
              Upon reaching max level, unlock the Prestige system to reset certain aspects of your character while
              maintaining key progression elements. Each Prestige level grants:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Permanent stat bonuses</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Unique cosmetic effects</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Access to Prestige-only equipment</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">New dialogue options and story paths</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Increased reputation gain with all factions</span>
              </li>
            </ul>

            <div className="bg-[#162a43]/50 border border-[#00aaff]/30 rounded-lg p-4">
              <p className="text-[#00ffff] italic text-sm">
                &quot;The Prestige system gives Citizen of Arcanis incredible replay value, with each cycle offering new
                challenges and rewards.&quot; - GameVerse Review
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-[#0c1624] border border-[#162a43] rounded-lg overflow-hidden"
      >
        <div className="p-6 border-b border-[#162a43]">
          <h3 className="text-xl font-bold text-white">Progression Stages</h3>
        </div>

        <div className="p-6">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-[#162a43]"></div>

            <div className="space-y-8">
              {progressionStages.map((stage, index) => (
                <ProgressionStage key={stage.stage} stage={stage} index={index} isInView={isInView} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  )
}

