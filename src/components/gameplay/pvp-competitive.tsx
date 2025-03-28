"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Swords, Trophy, Flag, Shield } from "lucide-react"
import SectionContainer from "@/components/ui/section-container"

export default function PvpCompetitive() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const pvpModes = [
    {
      name: "Arena Battles",
      description: "Compete in structured 1v1 or team-based matches in specialized arenas with various rule sets.",
      icon: <Swords className="w-6 h-6 text-[#ff0033]" />,
      rewards: ["Ranking Points", "Arena Tokens", "Exclusive Gear", "Titles"],
    },
    {
      name: "Faction Warfare",
      description: "Join massive battles between factions for control of territories and resources.",
      icon: <Flag className="w-6 h-6 text-[#00aaff]" />,
      rewards: ["Territory Control", "Faction Currency", "Resource Bonuses", "Faction Rank"],
    },
    {
      name: "Tournaments",
      description: "Participate in scheduled tournaments with elimination brackets and substantial prizes.",
      icon: <Trophy className="w-6 h-6 text-[#00ffff]" />,
      rewards: ["Tournament Trophies", "Rare Equipment", "Currency Rewards", "Global Recognition"],
    },
    {
      name: "Open World PvP",
      description: "Engage in spontaneous combat in designated PvP zones with risk-reward mechanics.",
      icon: <Shield className="w-6 h-6 text-[#00aaff]" />,
      rewards: ["Stolen Resources", "Bounty Rewards", "Territory Influence", "Kill Tracking"],
    },
  ]

  return (
    <SectionContainer id="pvp" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#00ffff]">⚔️ PvP & Competitive Play</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Test your skills against other players in various competitive modes, from one-on-one duels to massive
            faction battles.
          </p>

          <div className="bg-[#0c1624] border border-[#162a43] rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-white mb-4">Balanced Competition</h3>
            <p className="text-gray-400 mb-4">
              Our PvP systems are designed with competitive balance in mind, while still allowing for character build
              diversity and strategic depth:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Skill-based matchmaking for fair competition</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Equipment normalization options for pure skill testing</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Anti-cheat systems to ensure fair play</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Seasonal rankings with exclusive rewards</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Spectator mode for watching top players</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#162a43]/50 border border-[#00aaff]/30 rounded-lg p-4">
            <p className="text-[#00ffff] italic">
              "The PvP in Citizen of Arcanis strikes the perfect balance between accessibility and depth, rewarding both
              quick reflexes and strategic thinking." - Esports Weekly
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-lg overflow-hidden"
        >
          <div className="aspect-video bg-[#0c1624] relative">
            <Image
              src="/images/pvp.png"
              alt="PvP combat"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />

            {/* Overlay with glitch effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1624] via-transparent to-transparent"></div>

            {/* PvP UI elements */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-[#0c1624]/80 border border-[#00aaff]/30 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff0033] mr-2 animate-pulse"></div>
                  <span className="text-[#ff0033] font-mono text-sm">LIVE PVP MATCH</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#162a43] rounded-full mr-2"></div>
                    <span className="text-white">NeonShadow</span>
                  </div>
                  <div className="text-[#00aaff] font-bold">VS</div>
                  <div className="flex items-center">
                    <span className="text-white">QuantumRider</span>
                    <div className="w-8 h-8 bg-[#162a43] rounded-full ml-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pvpModes.map((mode, index) => (
          <motion.div
            key={mode.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className="bg-gradient-to-br from-[#0c1624] to-[#162a43] p-6 rounded-lg border border-[#162a43] hover:border-[#00aaff]/50 transition-all duration-300"
          >
            <div className="bg-[#00aaff]/10 p-3 rounded-full inline-block mb-4">{mode.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{mode.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{mode.description}</p>

            <div>
              <h4 className="text-xs text-gray-500 uppercase mb-2">Rewards</h4>
              <div className="flex flex-wrap gap-2">
                {mode.rewards.map((reward) => (
                  <span key={reward} className="bg-[#162a43] text-white text-xs px-2 py-1 rounded-full">
                    {reward}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 bg-[#0c1624] border border-[#162a43] rounded-lg p-6"
      >
        <h3 className="text-xl font-bold text-white mb-4">Esports Integration</h3>
        <p className="text-gray-400">
          Citizen of Arcanis features built-in esports functionality, including tournament organization tools, team
          management systems, and broadcasting capabilities. Join or create your own competitive team and participate in
          official tournaments with substantial prize pools.
        </p>
      </motion.div>
    </SectionContainer>
  )
}

