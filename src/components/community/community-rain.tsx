"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function DigitalRainBackground() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Generate more rain lines for larger screens
  const rainCount = Math.max(20, Math.floor(windowSize.width / 50))

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {Array.from({ length: rainCount }).map((_, i) => {
        const uniqueId = `rain-${Math.random().toString(36).substr(2, 9)}`
        
        return (
          <motion.div
            key={uniqueId}
            className="absolute w-[1px] bg-gradient-to-b from-transparent via-[#00aaff] to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${80 + Math.random() * 300}px`,
              opacity: 0.1 + Math.random() * 0.2,
            }}
            initial={{ y: -400 }}
            animate={{ y: windowSize.height }}
            transition={{
              duration: 1.5 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * 3,
            }}
          />
        )
      })}
    </div>
  )
}