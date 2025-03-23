"use client"

import { motion } from "framer-motion"

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      <div className="w-8 h-12 rounded-full border-2 border-[#00aaff] flex justify-center">
        <motion.div
          className="w-1 h-3 bg-[#00aaff] rounded-full mt-2"
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  )
}

