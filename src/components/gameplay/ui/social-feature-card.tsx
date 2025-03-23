"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface SocialFeatureCardProps {
  feature: {
    name: string
    description: string
    icon: ReactNode
    features: string[]
  }
  index: number
  isInView: boolean
}

export default function SocialFeatureCard({ feature, index, isInView }: SocialFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="bg-gradient-to-br from-[#0c1624] to-[#162a43] rounded-lg overflow-hidden border border-[#162a43] hover:border-[#00aaff]/50 transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-[#00aaff]/20 p-3 rounded-full mr-3">{feature.icon}</div>
          <h3 className="text-xl font-bold text-white">{feature.name}</h3>
        </div>

        <p className="text-gray-400 mb-6">{feature.description}</p>

        <div>
          <h4 className="text-xs text-gray-500 uppercase mb-2">Key Features</h4>
          <ul className="space-y-2">
            {feature.features.map((item) => (
              <li key={item} className="text-gray-300 text-sm flex items-start">
                <span className="text-[#00aaff] mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

