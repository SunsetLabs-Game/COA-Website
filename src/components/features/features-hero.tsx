"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function FeaturesHero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/features/background-hero.webp"
          alt="Cyberpunk cityscape"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1a2b]/80 via-[#0e1a2b]/70 to-[#0e1a2b]"></div>
      </div>

      {/* Digital rain effect */}
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

      <div className="container mx-auto px-4 relative z-20 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#00ffff] mb-6">Game Features</h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover the revolutionary gameplay mechanics that make Citizen of Arcanis the most immersive cyberpunk
            experience ever created.
          </p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-3xl mx-auto">
            {["Factions", "Resurrection", "Companions", "Marketplace", "Events", "Customization"].map(
              (feature, index) => (
                <motion.a
                  key={feature}
                  href={`#${feature.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-[#162a43]/50 border border-[#00aaff]/30 rounded-lg p-3 text-center hover:bg-[#00aaff]/20 transition-colors"
                >
                  <span className="text-white text-sm">{feature}</span>
                </motion.a>
              ),
            )}
          </div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
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
    </section>
  )
}

