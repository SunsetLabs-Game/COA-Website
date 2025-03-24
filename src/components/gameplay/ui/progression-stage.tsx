"use client"

import { motion } from "framer-motion"

interface ProgressionStageProps {
  stage: {
    stage: string
    level: string
    description: string
    unlocks: string[]
  }
  index: number
  isInView: boolean
}

export default function ProgressionStage({ stage, index, isInView }: ProgressionStageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
      className="relative pl-10"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#162a43] border-2 border-[#00aaff] flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-[#00aaff]"></div>
      </div>

      <div className="bg-[#162a43]/30 rounded-lg p-4 border border-[#162a43]">
        <div className="flex flex-wrap items-center justify-between mb-2">
          <h4 className="text-lg font-bold text-white">{stage.stage}</h4>
          <span className="text-[#00aaff] text-sm">Level {stage.level}</span>
        </div>

        <p className="text-gray-400 mb-3">{stage.description}</p>

        <div>
          <h5 className="text-xs text-gray-500 uppercase mb-2">Key Unlocks</h5>
          <div className="flex flex-wrap gap-2">
            {stage.unlocks.map((unlock) => (
              <span key={unlock} className="bg-[#0c1624] text-white text-xs px-2 py-1 rounded-full">
                {unlock}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

