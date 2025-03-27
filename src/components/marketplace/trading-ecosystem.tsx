"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { ShoppingCart, Skull } from "lucide-react"

interface TradingEcosystemProps {
  title?: string
  description?: string
  className?: string
}

export default function TradingEcosystem({
  title = "Trading Ecosystem",
  description = "Choose your marketplace: safe and regulated or risky with higher rewards",
  className = "",
}: TradingEcosystemProps) {
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
          className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-7xl mx-auto"
        >
          {/* Official Marketplace Card */}
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 8px 30px rgba(0, 218, 255, 0.15)" }}
            className="bg-gradient-to-b from-[#0a1c2e]/10 to-[#0a1c2e] rounded-lg w-full mx-auto overflow-hidden border border-[#00daff]/20 h-full"
          >
            <div className="p-8 flex flex-col h-full">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#0a3b53] flex items-center justify-center">
                  <ShoppingCart className="text-[#00daff] size-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Official Marketplace</h3>
              <div className="flex-grow space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-[#00daff] flex-shrink-0">✔</span>
                  <p className="text-gray-400">Secure transactions with buyer protection</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00daff] flex-shrink-0">✔</span>
                  <p className="text-gray-400">Verified sellers and authentic items</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00daff] flex-shrink-0">✔</span>
                  <p className="text-gray-400">Standard market rates with low fees</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00daff] flex-shrink-0">✔</span>
                  <p className="text-gray-400">Legal items and regulated trading</p>
                </div>
              </div>
              <button 
                className="bg-[#00aaff] hover:bg-[#00aaff]/80 text-white font-bold py-3 px-6 text-lg rounded-md border border-[#00aaff]/30 shadow-[0_0_15px_rgba(0,170,255,0.5)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,170,255,0.8)] group"
              >
                Visit Marketplace
              </button>
            </div>
          </motion.div>

          {/* Black Market Card */}
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 8px 30px rgba(0, 218, 255, 0.15)" }}
            className="bg-gradient-to-b from-[#0a1c2e]/10 to-[#0a1c2e] rounded-lg w-full mx-auto overflow-hidden border border-[#00daff]/20 h-full"
          >
            <div className="p-8 flex flex-col h-full">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#0a3b53] flex items-center justify-center">
                  <Skull className="text-[#00daff] size-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Black Market</h3>
              <div className="flex-grow space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-[#00daff] flex-shrink-0">⚠</span>
                  <p className="text-gray-400">High-risk, high-reward transactions</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00daff] flex-shrink-0">⚠</span>
                  <p className="text-gray-400">Rare and exclusive contraband items</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00daff] flex-shrink-0">⚠</span>
                  <p className="text-gray-400">Volatile prices with potential for huge profits</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00daff] flex-shrink-0">⚠</span>
                  <p className="text-gray-400">No buyer protection – trade at your own risk</p>
                </div>
              </div>
              <button 
                className="bg-[#00aaff] hover:bg-[#00aaff]/80 text-white font-bold py-3 px-6 text-lg rounded-md border border-[#00aaff]/30 shadow-[0_0_15px_rgba(0,170,255,0.5)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,170,255,0.8)] group"
              >
                Enter Black Market
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
} 