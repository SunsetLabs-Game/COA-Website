"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface MissionCardProps {
  mission: {
    type: string
    description: string
    icon: ReactNode
    features: string[]
    image: string
  }
  index: number
  isInView: boolean
}

export default function MissionCard({ mission, index, isInView }: MissionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="bg-gradient-to-br from-[#0c1624] to-[#162a43] rounded-lg overflow-hidden border border-[#162a43] hover:border-[#00aaff]/50 transition-all duration-300 flex flex-col"
    >
      <div className="relative h-48">
        <Image
          src={mission.image || "/placeholder.svg"}
          alt={mission.type}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1624] to-transparent"></div>

        <div className="absolute bottom-4 left-4 flex items-center">
          <div className="bg-[#0c1624]/80 p-2 rounded-full mr-2">{mission.icon}</div>
          <h3 className="text-xl font-bold text-white">{mission.type}</h3>
        </div>
      </div>

      <div className="p-6 flex-grow">
        <p className="text-gray-400 mb-4">{mission.description}</p>

        <div>
          <h4 className="text-sm text-gray-500 uppercase mb-2">Features</h4>
          <ul className="space-y-2">
            {mission.features.map((feature) => (
              <li key={feature} className="text-gray-300 text-sm flex items-start">
                <span className="text-[#00aaff] mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

