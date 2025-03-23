"use client"

import { motion } from "framer-motion"

export default function DigitalRainEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`rain-${i}`}
          className="absolute w-[1px] bg-gradient-to-b from-transparent via-[#00aaff] to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            height: `${100 + Math.random() * 300}px`,
            opacity: 0.3 + Math.random() * 0.7,
          }}
          initial={{ y: -400 }}
          animate={{ y: window.innerHeight }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

