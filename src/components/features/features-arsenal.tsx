"use client"

import { Crosshair, Zap, Sword, Shield } from "lucide-react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function FeaturesArsenal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      className="min-h-screen text-white p-4 md:p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4" />

          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffff]"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            ⚔️ Arsenal & Equipment
          </motion.h1>

          <motion.p
            className="text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            Equip yourself with cutting-edge weapons and gear. From energy blasters to neural-linked blades, your
            arsenal defines your combat style.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[ // Weapon card data and icons
            { icon: <Zap className="w-6 h-6 text-[#4fd1d9]" />, title: "Energy Weapons", img: "/placeholder.svg?height=300&width=300", color: "#00aaff" },
            { icon: <Sword className="w-6 h-6 text-[#ff0033]" />, title: "Melee Weapons", img: "/placeholder.svg?height=300&width=300", color: "#00aaff" },
            { icon: <Crosshair className="w-6 h-6 text-[#00aaff]" />, title: "Firearms", img: "/placeholder.svg?height=300&width=300", color: "#00aaff" },
            { icon: <Shield className="w-6 h-6 text-[#00aaff]" />, title: "Defense Systems", img: "/placeholder.svg?height=300&width=300", color: "#00aaff" },
          ].map((weapon, i) => {
            const items = {
              "Energy Weapons": ["Plasma Rifles", "Quantum Blasters", "Energy Gauntlets", "Particle Cannons"],
              "Melee Weapons": ["Vibro-Blades", "Quantum Edge Swords", "Neural Whips", "Gravity Hammers"],
              "Firearms": ["Smart Pistols", "Rail Guns", "Gauss Rifles", "Explosive Ordinance"],
              "Defense Systems": ["Energy Shields", "Reactive Armor", "Stealth Systems", "Counter-Measures"],
            }[weapon.title] || []

            return (
              <motion.div
                key={weapon.title}
                className="bg-gradient-to-br from-[#0c1624] to-[#162a43] rounded-lg border border-[#162a43] hover:border-[#00aaff]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              >
                <div className="flex">
                  <div className="w-1/2">
                    <Image
                      src={weapon.img}
                      width={300}
                      height={300}
                      alt={weapon.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-1/2 p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#162a43] flex items-center justify-center mr-2">
                        {weapon.icon}
                      </div>
                      <h2 className="text-xl font-bold">{weapon.title}</h2>
                    </div>

                    <p className="text-sm text-gray-400 mb-4">
                      {weapon.title === "Energy Weapons" && "Advanced weapons that harness quantum energy for devastating attacks."}
                      {weapon.title === "Melee Weapons" && "Close-combat weapons enhanced with cutting-edge technology."}
                      {weapon.title === "Firearms" && "Traditional ballistic weapons upgraded with modern technology."}
                      {weapon.title === "Defense Systems" && "Protective gear and countermeasures for survival in combat."}
                    </p>

                    <div className="mb-4">
                      <h3 className="text-xs text-gray-500 mb-2">EXAMPLES</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {items.map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-center h-10 bg-[#162a43]/50 border border-[#00aaff]/30 text-xs rounded-lg text-center"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="px-4 py-2 text-xs text-[#00aaff] bg-[#162a43]/50 border border-[#00aaff]/30 rounded-md">
                      All weapons can be modified, upgraded, and customized to match your playstyle.
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}