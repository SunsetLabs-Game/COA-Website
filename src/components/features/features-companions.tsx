"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { BirdIcon as Dragon, Zap, Shield, Crosshair } from "lucide-react"

export default function FeaturesCompanions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const companions = [
    {
      name: "Cyber Dragon",
      type: "Aerial",
      abilities: ["Reconnaissance", "Air Support", "Data Theft"],
      description: "A winged cybernetic companion that provides aerial support and reconnaissance.",
      icon: <Dragon className="w-8 h-8 text-[#00ffff]" />,
    },
    {
      name: "Guardian Mech",
      type: "Defense",
      abilities: ["Shield Generation", "Crowd Control", "Repair"],
      description: "A heavily armored companion focused on protection and defensive capabilities.",
      icon: <Shield className="w-8 h-8 text-[#00aaff]" />,
    },
    {
      name: "Hunter Drone",
      type: "Offense",
      abilities: ["Target Marking", "Precision Strikes", "Stealth"],
      description: "A stealthy combat drone specialized in marking targets and offensive operations.",
      icon: <Crosshair className="w-8 h-8 text-[#ff0033]" />,
    },
    {
      name: "Pulse Hound",
      type: "Support",
      abilities: ["Energy Transfer", "Hacking Assist", "Resource Gathering"],
      description: "A quadruped companion that enhances your energy systems and assists with hacking.",
      icon: <Zap className="w-8 h-8 text-[#00aaff]" />,
    },
  ]

  return (
    <section id="companions" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#00ffff]">🐉 Cybernetic Companions</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Forge a bond with advanced AI companions that evolve alongside you. Customize their abilities, appearance, and
          combat style to complement your playstyle.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-lg overflow-hidden"
        >
          <div className="aspect-video bg-[#0c1624] relative">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Cybernetic companions"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />

            {/* Overlay with glitch effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1624] via-transparent to-transparent"></div>

            {/* Holographic UI elements */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-[#0c1624]/80 border border-[#00aaff]/30 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-[#00aaff] mr-2 animate-pulse"></div>
                  <span className="text-[#00aaff] font-mono text-sm">COMPANION SYSTEM v2.5</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Companions learn from your combat style and adapt their behavior accordingly. The more you fight
                  together, the stronger your neural link becomes.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {companions.map((companion, index) => (
              <motion.div
                key={companion.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-br from-[#0c1624] to-[#162a43] p-6 rounded-lg border border-[#162a43] hover:border-[#00aaff]/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#00aaff]/20 p-2 rounded-full mr-3">{companion.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{companion.name}</h3>
                    <span className="text-xs text-[#00aaff]">{companion.type} Type</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4">{companion.description}</p>

                <div>
                  <h4 className="text-xs text-gray-500 uppercase mb-2">Abilities</h4>
                  <div className="flex flex-wrap gap-2">
                    {companion.abilities.map((ability) => (
                      <span key={ability} className="bg-[#162a43] text-white text-xs px-2 py-1 rounded-full">
                        {ability}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 bg-[#162a43]/50 border border-[#00aaff]/30 rounded-lg p-4">
            <h3 className="text-white font-bold mb-2">Companion Evolution</h3>
            <p className="text-gray-400 text-sm">
              As you progress, your companions can be upgraded with advanced cybernetic parts, new abilities, and
              enhanced AI. Each companion can evolve along multiple paths, creating a unique combat partner.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

