"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { FileText, Target, Users, Briefcase } from "lucide-react"
import SectionContainer from "@/components/ui/section-container"
import SectionTitle from "@/components/ui/section-title"

export default function MissionsQuests() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const missionTypes = [
    {
      type: "Story Missions",
      description:
        "Follow the main narrative through a series of interconnected missions that reveal the secrets of Arcanis.",
      icon: <FileText className="w-8 h-8 text-[#00ffff]" />,
      features: [
        "Branching storylines based on choices",
        "Multiple endings per story arc",
        "Cinematic cutscenes and dialogue",
        "Major character development",
      ],
      image: "/images/mission1.png",
    },
    {
      type: "Faction Contracts",
      description: "Take on missions for your chosen faction to increase your standing and unlock exclusive rewards.",
      icon: <Briefcase className="w-8 h-8 text-[#00aaff]" />,
      features: [
        "Faction-specific objectives",
        "Reputation system with tiers",
        "Competing faction interference",
        "Territory control mechanics",
      ],
      image: "/images/mission2.png",
    },
    {
      type: "Bounty Hunts",
      description: "Track down and eliminate high-value targets across Arcanis for substantial rewards.",
      icon: <Target className="w-8 h-8 text-[#ff0033]" />,
      features: [
        "Investigation mechanics",
        "Target tracking system",
        "Multiple approach options",
        "Escalating difficulty tiers",
      ],
      image: "/images/mission3.png",
    },
    {
      type: "Co-op Operations",
      description: "Team up with other players to tackle challenging missions that require coordination and teamwork.",
      icon: <Users className="w-8 h-8 text-[#00aaff]" />,
      features: [
        "Role-based objectives",
        "Shared rewards system",
        "Tactical coordination tools",
        "Scaling difficulty based on team size",
      ],
      image: "/images/mission4.png",
    },
  ]

  return (
    <SectionContainer id="missions" ref={ref}>
      <SectionTitle
        title="📋 Missions & Quests"
        description="Engage in diverse mission types that challenge your skills and shape your character's journey through the world of Arcanis."
        isInView={isInView}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {missionTypes.map((mission, index) => (
          <motion.div
            key={mission.type}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="bg-gradient-to-br from-[#0c1624] to-[#162a43] rounded-lg overflow-hidden border border-[#162a43] hover:border-[#00aaff]/50 transition-all duration-300 flex flex-col"
          >
            <div className="relative h-48">
              <Image
                src={mission.image || "/placeholder.svg"}
                alt={mission.type}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1624] to-transparent"></div>

              <div className="absolute bottom-4 left-4 flex items-center">
                <div className="bg-[#0c1624]/80 p-2 rounded-full mr-2">{mission.icon}</div>
                <h3 className="text-xl font-bold text-white">{mission.type}</h3>
              </div>
            </div>

            <div className="p-6 flex-grow">
              <p className="text-gray-400 mb-4">{mission.description}</p>

              <div>
                <h4 className="text-sm text-gray-500 uppercase mb-2">Features</h4>
                <ul className="space-y-2">
                  {mission.features.map((feature) => (
                    <li key={feature} className="text-gray-300 text-sm flex items-start">
                      <span className="text-[#00aaff] mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
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
        <h3 className="text-xl font-bold text-white mb-4">Dynamic Mission System</h3>
        <p className="text-gray-400 mb-6">
          Missions in Citizen of Arcanis are generated based on your character&apos;s actions, faction standing, and world
          events. No two players will experience the same mission flow, creating a truly personalized adventure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#162a43]/50 p-4 rounded-lg border border-[#00aaff]/10">
            <h4 className="text-white font-medium mb-2">Adaptive Difficulty</h4>
            <p className="text-gray-400 text-sm">
              Missions scale in difficulty based on your level, equipment, and past performance.
            </p>
          </div>

          <div className="bg-[#162a43]/50 p-4 rounded-lg border border-[#00aaff]/10">
            <h4 className="text-white font-medium mb-2">Consequence System</h4>
            <p className="text-gray-400 text-sm">
              Your choices in missions have lasting effects on the world and future mission availability.
            </p>
          </div>

          <div className="bg-[#162a43]/50 p-4 rounded-lg border border-[#00aaff]/10">
            <h4 className="text-white font-medium mb-2">Time-Limited Events</h4>
            <p className="text-gray-400 text-sm">
              Special missions appear based on real-time events and limited-time opportunities.
            </p>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  )
}

