"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Skull, Clock, Repeat, Crosshair } from "lucide-react"

export default function FeaturesResurrection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const resurrectionSteps = [
    {
      icon: <Skull className="w-10 h-10 text-[#00ffff]" />,
      title: "Death",
      description: "When you fall in battle, your consciousness is uploaded to the Resurrection Network.",
    },
    {
      icon: <Clock className="w-10 h-10 text-[#00ffff]" />,
      title: "Limbo",
      description: "Experience a unique limbo state where you can observe the world and make critical decisions.",
    },
    {
      icon: <Repeat className="w-10 h-10 text-[#00ffff]" />,
      title: "Rebirth",
      description: "Return to the world in a new body, with memories intact but potentially altered by your choices.",
    },
    {
      icon: <Crosshair className="w-10 h-10 text-[#00ffff]" />,
      title: "Consequences",
      description: "Each resurrection changes your character and the world around you in meaningful ways.",
    },
  ]

  return (
    <section id="resurrection" className="py-20" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#00ffff]">💀 Resurrection System</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Death is just the beginning in Arcanis. Our revolutionary resurrection system transforms the traditional
            respawn mechanic into a core gameplay element with meaningful choices and consequences.
          </p>

          <div className="bg-[#0c1624] border border-[#162a43] rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Persistent memory across resurrections</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Branching storylines based on resurrection choices</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Unique abilities unlocked through multiple deaths</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Reputation system affected by resurrection patterns</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#162a43]/50 border border-[#00aaff]/30 rounded-lg p-4">
            <p className="text-[#00ffff] italic">
              "Death is not the end, but a doorway to new possibilities. How you die and how you return shapes your
              destiny in Arcanis."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Animated circuit background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,170,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,170,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 rounded-lg"></div>

          <div className="relative z-10 bg-[#0c1624]/80 border border-[#162a43] rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resurrectionSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-br from-[#162a43]/80 to-[#0c1624] p-6 rounded-lg border border-[#00aaff]/20 hover:border-[#00aaff]/50 transition-all duration-300"
                >
                  <div className="bg-[#00aaff]/10 p-3 rounded-full inline-block mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

