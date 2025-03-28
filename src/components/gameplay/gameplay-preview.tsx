"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import Image from "next/image"
import { Play } from "lucide-react"

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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

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

  const handlePlayClick = () => {
    setIsVideoPlaying(true)
    // In a real implementation, you would play a video here
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

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
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="w-full max-w-7xl mx-auto px-4 z-10 relative"
      >
        <motion.h2
          variants={itemVariants}
          className="text-center text-3xl md:text-5xl font-bold mb-2 text-[#00ffff]"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-4xl mx-auto group"
        >
          {/* Video container with glitch effect border */}
          <div className="relative rounded-lg overflow-hidden">
            {/* Glitch border effect */}
            <div className="absolute inset-0 border-2 border-[#00ffff] rounded-lg glitch-border"></div>

            {/* Video placeholder */}
            <div className="aspect-video bg-[#0a0a0a] relative overflow-hidden">
              <Image 
                src="/images/gameplay.png" // Replace with actual gameplay image
                alt="Gameplay preview"
                fill
                className="object-cover opacity-80"
                priority
              />

              {/* Dark overlay for better button visibility */}
              <div className="absolute inset-0 bg-black/30"></div>
              
              {!isVideoPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePlayClick}
                    className="w-20 h-20 rounded-full bg-[#00aaff]/80 flex items-center justify-center group"
                  >
                    <div className="absolute inset-0 rounded-full bg-[#00aaff]/30 animate-ping"></div>
                    <Play className="w-10 h-10 text-white fill-white ml-1" />
                  </motion.button>
                </div>
              )}
            </div>
          </div>         
        </motion.div>
      </motion.div>
    </div>
  )
} 