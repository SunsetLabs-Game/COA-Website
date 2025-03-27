"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Sword, Shield, Zap } from "lucide-react"

export default function FeaturesFactions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const factions = [
    {
      name: "Neon Syndicate",
      description:
        "Masters of technology and digital warfare. The Syndicate controls the flow of information and digital currency throughout Arcanis.",
      icon: <Zap className="w-10 h-10 text-[#00ffff]" />,
      color: "from-[#00ffff]/20 to-transparent",
      borderColor: "border-[#00ffff]",
      image: "/placeholder.svg?height=400&width=600",
      strengths: ["Hacking", "Digital Currency Manipulation", "Stealth Tech"],
      territory: "Neon District",
    },
    {
      name: "Chrome Collective",
      description:
        "Augmented warriors with enhanced physical abilities. The Collective believes in transcending humanity through cybernetic enhancement.",
      icon: <Sword className="w-10 h-10 text-[#ff0033]" />,
      color: "from-[#ff0033]/20 to-transparent",
      borderColor: "border-[#ff0033]",
      image: "/placeholder.svg?height=400&width=600",
      strengths: ["Combat", "Augmentation", "Physical Prowess"],
      territory: "Industrial Zone",
    },
    {
      name: "Shadow Protocol",
      description:
        "Mysterious operatives with advanced stealth and espionage capabilities. The Protocol works from the shadows, manipulating events to their advantage.",
      icon: <Shield className="w-10 h-10 text-[#00aaff]" />,
      color: "from-[#00aaff]/20 to-transparent",
      borderColor: "border-[#00aaff]",
      image: "/placeholder.svg?height=400&width=600",
      strengths: ["Espionage", "Assassination", "Political Influence"],
      territory: "Underground Network",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { scale: 1, rotate: 0, transition: { duration: 0.5 } },
    hover: { rotate: 15, scale: 1.1, transition: { duration: 0.2 } },
  }

  const strengthVariants = {
    hover: { y: -3, x: 2, transition: { duration: 0.2 } },
  }

  return (
    <section id="factions" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-4 text-[#00ffff]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          ⚔️ Faction Warfare
        </motion.h2>
        <motion.p 
          className="text-gray-400 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Choose your allegiance and fight for dominance in the fractured world of Arcanis. Each faction offers unique
          abilities, territories, and storylines.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {factions.map((faction, index) => (
          <motion.div
            key={faction.name}
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className={`bg-gradient-to-br from-[#0c1624] to-[#162a43] rounded-lg overflow-hidden border ${faction.borderColor} hover:shadow-lg hover:shadow-${faction.borderColor.replace("border-", "")}/20 transition-all duration-300`}
          >
            <div className="relative h-48 overflow-hidden">
              <motion.div
                whileHover="hover"
              >
                <motion.div variants={imageVariants}>
                  <Image
                    src={faction.image || "/placeholder.svg"}
                    alt={faction.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
              <div className={`absolute inset-0 bg-gradient-to-t ${faction.color}`}></div>
              <motion.div 
                className="absolute top-4 left-4 bg-[#0c1624]/80 p-2 rounded-full"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                {faction.icon}
              </motion.div>
            </div>

            <div className="p-6">
              <motion.h3 
                className="text-2xl font-bold text-white mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              >
                {faction.name}
              </motion.h3>
              <motion.p 
                className="text-gray-400 mb-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 * (index + 1) }}
              >
                {faction.description}
              </motion.p>

              <motion.div 
                className="mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.4 * (index + 1) }}
              >
                <h4 className="text-sm text-gray-500 uppercase mb-2">Strengths</h4>
                <div className="flex flex-wrap gap-2">
                  {faction.strengths.map((strength) => (
                    <motion.span 
                      key={strength} 
                      className="bg-[#162a43] text-white text-xs px-3 py-1 rounded-full"
                      variants={strengthVariants}
                      whileHover="hover"
                    >
                      {strength}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.5 * (index + 1) }}
              >
                <h4 className="text-sm text-gray-500 uppercase mb-2">Territory</h4>
                <span className="text-white">{faction.territory}</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

