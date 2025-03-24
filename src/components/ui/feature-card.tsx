"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
  features: string[]
  index: number
  isInView: boolean
}

export default function FeatureCard({ title, description, icon, features, index, isInView }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
      className="bg-gradient-to-br from-[#0c1624] to-[#162a43] p-6 rounded-lg border border-[#162a43] hover:border-[#00aaff]/50 transition-all duration-300"
    >
      <div className="bg-[#00aaff]/10 p-3 rounded-full inline-block mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>

      <div>
        <h4 className="text-xs text-gray-500 uppercase mb-2">Features</h4>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="text-gray-300 text-sm flex items-start">
              <span className="text-[#00aaff] mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

