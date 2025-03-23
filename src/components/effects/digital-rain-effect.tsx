"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function DigitalRainEffect() {
  const [isClient, setIsClient] = useState(false)
  const [windowHeight, setWindowHeight] = useState(1000)
  const [raindrops, setRaindrops] = useState([])

  useEffect(() => {
    setIsClient(true)
    setWindowHeight(window.innerHeight)

    const drops = Array.from({ length: 10 }).map((_, i) => ({
      id: `rain-${i}`,
      left: `${Math.random() * 100}%`,
      height: `${100 + Math.random() * 300}px`,
      opacity: 0.3 + Math.random() * 0.7,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 2,
    }))

    setRaindrops(drops)

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {raindrops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute w-[1px] bg-gradient-to-b from-transparent via-[#00aaff] to-transparent"
          style={{
            left: drop.left,
            height: drop.height,
            opacity: drop.opacity,
          }}
          initial={{ y: -400 }}
          animate={{ y: windowHeight }}
          transition={{
            duration: drop.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: drop.delay,
          }}
        />
      ))}
    </div>
  )
}

