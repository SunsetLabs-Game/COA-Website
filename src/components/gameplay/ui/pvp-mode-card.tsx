"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface PvpModeCardProps {
  mode: {
    name: string
    description: string
    icon: ReactNode
    rewards: string[]
  }
  index: number
  isInView: boolean
}

export default function PvpModeCard({ mode, index, isInView }: PvpModeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
      className="bg-gradient-to-br from-[#0c1624] to-[#162a43] p-6 rounded-lg border border-[#162a43] hover:border-[#00aaff]/50 transition-all duration-300"
    >
      <div className="bg-[#00aaff]/10 p-3 rounded-full inline-block mb-4">{mode.icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{mode.name}</h3>
      <p className="text-gray-400 text-sm mb-4">{mode.description}</p>

      <div>
        <h4 className="text-xs text-gray-500 uppercase mb-2">Rewards</h4>
        <div className="flex flex-wrap gap-2">
          {mode.rewards.map((reward) => (
            <span key={reward} className="bg-[#162a43] text-white text-xs px-2 py-1 rounded-full">
              {reward}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

