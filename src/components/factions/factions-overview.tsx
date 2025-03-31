"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Sword, Shield } from "lucide-react"

export default function FactionsOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const factions = [
    {
      name: "Neon Syndicate",
      icon: <Zap className="w-10 h-10 text-[#00ffff]" />,
      color: "from-[#00ffff]/20 to-transparent",
      borderColor: "border-[#00ffff]",
      description:
        "Masters of technology and digital warfare. The Syndicate controls the flow of information and digital currency throughout Arcanis.",
      philosophy:
        "Information is power. The physical world is merely a shell for the digital realm where true power resides.",
    },
    {
      name: "Chrome Collective",
      icon: <Sword className="w-10 h-10 text-[#ff0033]" />,
      color: "from-[#ff0033]/20 to-transparent",
      borderColor: "border-[#ff0033]",
      description:
        "Augmented warriors with enhanced physical abilities. The Collective believes in transcending humanity through cybernetic enhancement.",
      philosophy: "The flesh is weak. Only through technological enhancement can humanity reach its true potential.",
    },
    {
      name: "Shadow Protocol",
      icon: <Shield className="w-10 h-10 text-[#00aaff]" />,
      color: "from-[#00aaff]/20 to-transparent",
      borderColor: "border-[#00aaff]",
      description:
        "Mysterious operatives with advanced stealth and espionage capabilities. The Protocol works from the shadows, manipulating events to their advantage.",
      philosophy: "True power lies in secrecy. Control the information, control the narrative, control the world.",
    },
  ]

  return (
    <section className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#00ffff]">Choose Your Allegiance</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Your choice of faction will shape your experience in Arcanis, granting you unique abilities, equipment, and
          storylines. Each faction controls different territories and offers distinct advantages in the ongoing power
          struggle.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {factions.map((faction, index) => (
          <motion.div
            key={faction.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-gradient-to-br from-[#0c1624] to-[#162a43] rounded-lg overflow-hidden border ${faction.borderColor} hover:shadow-lg hover:shadow-${faction.borderColor.replace("border-", "")}/20 transition-all duration-300`}
            id={faction.name.toLowerCase().replace(" ", "-")}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-[#0c1624]/80 p-3 rounded-full mr-3">{faction.icon}</div>
                <h3 className="text-2xl font-bold text-white">{faction.name}</h3>
              </div>
              <p className="text-gray-400 mb-4">{faction.description}</p>
              <div className="bg-[#162a43]/50 p-4 rounded-lg">
                <h4 className="text-white font-medium mb-2">Philosophy</h4>
                <p className="text-gray-300 italic">"{faction.philosophy}"</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

