"use client"

import { motion } from "framer-motion"
import { Button } from "../button"
import { Sword, Server, MessageSquare, BookOpen } from "lucide-react"

export function ChoosingFaction() {
  const benefits = [
    {
      icon: <Sword />,
      title: "Abilities & Combat",
      description: "Your abilities and combat style will be shaped by your faction's specializations.",
    },
    {
      icon: <Server />,
      title: "Technology Access",
      description: "Your access to technology and resources will depend on your faction's strengths.",
    },
    {
      icon: <MessageSquare />,
      title: "NPC Interactions",
      description: "Your interactions with NPCs and faction members will be influenced by your allegiance.",
    },
    {
      icon: <BookOpen />,
      title: "Storyline",
      description: "Your storyline and progression will follow unique paths based on your faction choice.",
    },
  ]

  const cardStyles = "bg-[#09162B] p-6 rounded-lg border border-[#0a3653]"
  const buttonStyles = "px-8 py-6 text-lg font-semibold duration-500"

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full py-12"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="border border-[#0a3653] rounded-xl p-8 bg-[#0B1B32]"
        >
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-[#00FFFF] mb-6"
          >
            🎮 Choosing Your Faction
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Your choice of faction will define your experience in Arcanis, influencing:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className={`${cardStyles}`}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <div className="text-2xl mb-3">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className={`bg-[#00FFFF] hover:bg-[#00CCCC] text-gray-800 ${buttonStyles}`}
              aria-label="Play Now"
            >
              🎮 Play Now
            </Button>
            <Button
              variant="outline"
              className={`border-[#00FFFF] text-gray-800 hover:text-gray-100 hover:bg-[#0a3653] ${buttonStyles}`}
              aria-label="Join Community"
            >
              🤝 Join Community
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}