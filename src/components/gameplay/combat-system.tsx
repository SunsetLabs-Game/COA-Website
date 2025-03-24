"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Sword, Shield, Zap, Crosshair } from "lucide-react"
import SectionContainer from "@/components/ui/section-container"
import SectionTitle from "@/components/ui/section-title"
import FeatureCard from "@/components/ui/feature-card"
import InfoBox from "@/components/ui/info-box"

export default function CombatSystem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const combatStyles = [
    {
      name: "Melee Combat",
      description: "Close-quarters combat with cybernetic blades, neural whips, and gravity hammers.",
      icon: <Sword className="w-8 h-8 text-[#ff0033]" />,
      features: [
        "Combo system with timing-based attacks",
        "Parry and counter mechanics",
        "Area-of-effect attacks",
        "Neural link enhancements for speed",
      ],
    },
    {
      name: "Ranged Combat",
      description: "Engage enemies from a distance with precision firearms and energy weapons.",
      icon: <Crosshair className="w-8 h-8 text-[#00aaff]" />,
      features: [
        "Cover system with destructible environments",
        "Weak point targeting",
        "Ammunition types with different effects",
        "Scope and targeting enhancements",
      ],
    },
    {
      name: "Energy Combat",
      description: "Harness quantum energy to unleash devastating attacks and manipulate the battlefield.",
      icon: <Zap className="w-8 h-8 text-[#00ffff]" />,
      features: [
        "Energy management system",
        "Area denial capabilities",
        "Chain reaction effects",
        "Environmental interactions",
      ],
    },
    {
      name: "Defensive Combat",
      description: "Focus on survival with shields, counter-measures, and tactical positioning.",
      icon: <Shield className="w-8 h-8 text-[#00aaff]" />,
      features: [
        "Active and passive defense systems",
        "Threat redirection",
        "Team protection abilities",
        "Regenerative capabilities",
      ],
    },
  ]

  return (
    <SectionContainer id="combat" ref={ref}>
      <SectionTitle
        title="⚔️ Combat System"
        description="Experience fluid, responsive combat with multiple fighting styles. Adapt your approach based on enemies, environment, and your character build."
        isInView={isInView}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-lg overflow-hidden"
        >
          <div className="aspect-video bg-[#0c1624] relative">
            <Image
               src="/images/combat.png"
              alt="Combat gameplay"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />

            {/* Overlay with glitch effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1624] via-transparent to-transparent"></div>

            {/* Combat UI elements */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-[#0c1624]/80 border border-[#00aaff]/30 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-[#00aaff] mr-2 animate-pulse"></div>
                  <span className="text-[#00aaff] font-mono text-sm">COMBAT SYSTEM v3.2</span>
                </div>
                <p className="text-gray-300 text-sm">
                  The combat system adapts to your playstyle, learning from your techniques and adjusting enemy AI
                  accordingly for a constantly evolving challenge.
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
          <InfoBox title="Key Combat Features">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Real-time combat with physics-based interactions</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Adaptive enemy AI that learns from your tactics</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Environmental hazards and advantages to exploit</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Companion synergy with coordinated attacks</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00aaff] mr-2">✓</span>
                <span className="text-gray-300">Dynamic difficulty that scales with your skill</span>
              </li>
            </ul>
          </InfoBox>

          <div className="bg-[#162a43]/50 border border-[#00aaff]/30 rounded-lg p-4 mt-6">
            <p className="text-[#00ffff] italic">
              "The combat in Citizen of Arcanis feels responsive and impactful, with each weapon having a distinct
              weight and purpose." - CyberGamer Magazine
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {combatStyles.map((style, index) => (
          <FeatureCard
            key={style.name}
            title={style.name}
            description={style.description}
            icon={style.icon}
            features={style.features}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </SectionContainer>
  )
}

