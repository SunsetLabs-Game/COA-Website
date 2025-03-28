"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, MessageSquare, Home, Briefcase } from "lucide-react"
import SectionContainer from "@/components/ui/section-container"
import SectionTitle from "@/components/ui/section-title"

export default function SocialFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const socialFeatures = [
    {
      name: "Guilds & Clans",
      description: "Form or join player organizations with shared goals and resources.",
      icon: <Users className="w-8 h-8 text-[#00aaff]" />,
      features: [
        "Hierarchical structure with roles",
        "Shared storage and resources",
        "Guild headquarters customization",
        "Guild-exclusive missions and events",
      ],
    },
    {
      name: "Communication Systems",
      description: "Stay connected with other players through various communication channels.",
      icon: <MessageSquare className="w-8 h-8 text-[#00ffff]" />,
      features: [
        "Voice and text chat",
        "Holographic messaging",
        "Encrypted private channels",
        "Broadcast announcements",
      ],
    },
    {
      name: "Player Housing",
      description: "Establish and customize your personal space in the world of Arcanis.",
      icon: <Home className="w-8 h-8 text-[#ff0033]" />,
      features: [
        "Apartment and safehouse options",
        "Furniture and decoration system",
        "Trophy displays and collections",
        "Security and access controls",
      ],
    },
    {
      name: "Trading & Economy",
      description: "Engage in player-to-player commerce and economic activities.",
      icon: <Briefcase className="w-8 h-8 text-[#00aaff]" />,
      features: [
        "Secure trading interface",
        "Auction house system",
        "Market price tracking",
        "Contract and escrow services",
      ],
    },
  ]

  return (
    <SectionContainer id="social" ref={ref}>
      <SectionTitle
        title="👥 Social Features"
        description="Connect with other players and build lasting relationships in the shared world of Arcanis through robust social systems."
        isInView={isInView}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {socialFeatures.map((feature, index) => (
          <motion.div
            key={feature.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="bg-gradient-to-br from-[#0c1624] to-[#162a43] rounded-lg overflow-hidden border border-[#162a43] hover:border-[#00aaff]/50 transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-[#00aaff]/20 p-3 rounded-full mr-3">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white">{feature.name}</h3>
              </div>

              <p className="text-gray-400 mb-6">{feature.description}</p>

              <div>
                <h4 className="text-xs text-gray-500 uppercase mb-2">Key Features</h4>
                <ul className="space-y-2">
                  {feature.features.map((item) => (
                    <li key={item} className="text-gray-300 text-sm flex items-start">
                      <span className="text-[#00aaff] mr-2">•</span>
                      <span>{item}</span>
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
        <h3 className="text-xl font-bold text-white mb-4">Community Events</h3>
        <p className="text-gray-400 mb-6">
          Citizen of Arcanis features regular community events that bring players together for shared experiences:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#162a43]/50 p-4 rounded-lg border border-[#00aaff]/10">
            <h4 className="text-white font-medium mb-2">Player-Run Events</h4>
            <p className="text-gray-400 text-sm">
              Tools for players to organize and host their own events, from combat tournaments to social gatherings.
            </p>
          </div>

          <div className="bg-[#162a43]/50 p-4 rounded-lg border border-[#00aaff]/10">
            <h4 className="text-white font-medium mb-2">Developer Interactions</h4>
            <p className="text-gray-400 text-sm">
              Regular Q&A sessions, gameplay streams, and in-game appearances by the development team.
            </p>
          </div>

          <div className="bg-[#162a43]/50 p-4 rounded-lg border border-[#00aaff]/10">
            <h4 className="text-white font-medium mb-2">Seasonal Celebrations</h4>
            <p className="text-gray-400 text-sm">
              Special events tied to real-world holidays and in-game seasonal changes with unique rewards.
            </p>
          </div>

          <div className="bg-[#162a43]/50 p-4 rounded-lg border border-[#00aaff]/10">
            <h4 className="text-white font-medium mb-2">Community Challenges</h4>
            <p className="text-gray-400 text-sm">
              Server-wide objectives that require cooperation among all players for massive shared rewards.
            </p>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  )
}

