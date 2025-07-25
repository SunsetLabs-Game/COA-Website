"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import GameplayVideo from "./ui/gameplay-video"

interface GameplayPreviewProps {
  title?: string
  description?: string
  className?: string
}

export default function GameplayPreview({
  title = "Gameplay Preview",
  description = "Experience the adrenaline-fueled action of Citizen of Arcanis",
  className = "",
}: GameplayPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const controls = useAnimation()
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setCursorPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  // Video playback is now handled by the YouTube iframe

  // Animation controls are now handled directly in the motion components

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative py-20 overflow-hidden ${className}`}
    >
      {/* Background grid lines - horizontal */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`h-line-${i}`}
          className="absolute w-full h-[1px] bg-[#0a192f]/20"
          style={{ top: `${(i + 1) * 10}%` }}
        />
      ))}

      {/* Background grid lines - vertical */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`v-line-${i}`}
          className="absolute h-full w-[1px] bg-[#0a192f]/20"
          style={{ left: `${(i + 1) * 10}%` }}
        />
      ))}

      {/* Cursor tracking effect */}
      <div
        className="absolute pointer-events-none w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#00ffff]/10 to-transparent"
        style={{
          left: `${cursorPosition.x - 250}px`,
          top: `${cursorPosition.y - 250}px`,
          opacity: isInView ? 0.3 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl mx-auto px-4 z-10 relative"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-3xl md:text-5xl font-bold mb-2 text-[#00ffff]"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-4xl mx-auto group"
        >
          {/* Video container with glitch effect border */}
          <div className="relative rounded-lg overflow-hidden">
            {/* Glitch border effect - positioned behind the video */}
            <div className="absolute inset-0 border-2 border-[#00ffff] rounded-lg glitch-border" style={{ zIndex: 10 }}></div>
            
            {/* YouTube video */}
            <GameplayVideo />
          </div>         
        </motion.div>
      </motion.div>
    </div>
  )
} 