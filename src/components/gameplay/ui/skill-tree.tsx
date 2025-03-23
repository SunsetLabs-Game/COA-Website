"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface SkillTreeProps {
  tree: {
    name: string
    icon: ReactNode
    description: string
    branches: {
      name: string
      skills: string[]
    }[]
  }
  index: number
  isInView: boolean
}

export default function SkillTree({ tree, index, isInView }: SkillTreeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="bg-gradient-to-br from-[#0c1624] to-[#162a43] rounded-lg overflow-hidden border border-[#162a43] hover:border-[#00aaff]/50 transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-[#00aaff]/20 p-3 rounded-full mr-3">{tree.icon}</div>
          <h3 className="text-xl font-bold text-white">{tree.name} Tree</h3>
        </div>

        <p className="text-gray-400 mb-6">{tree.description}</p>

        <div className="space-y-4">
          {tree.branches.map((branch) => (
            <div key={branch.name} className="bg-[#162a43]/50 rounded-lg p-4 border border-[#00aaff]/10">
              <h4 className="text-white font-medium mb-2">{branch.name} Branch</h4>
              <div className="grid grid-cols-2 gap-2">
                {branch.skills.map((skill) => (
                  <div key={skill} className="bg-[#0c1624] rounded p-2 text-center">
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

