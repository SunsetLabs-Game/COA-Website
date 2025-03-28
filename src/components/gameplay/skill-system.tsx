"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Zap, Brain, Crosshair, Shield } from "lucide-react"
import SectionContainer from "@/components/ui/section-container"
import SectionTitle from "@/components/ui/section-title"

export default function SkillSystem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skillTrees = [
    {
      name: "Combat",
      icon: <Crosshair className="w-8 h-8 text-[#ff0033]" />,
      description: "Master the art of warfare with skills focused on dealing damage and eliminating threats.",
      branches: [
        {
          name: "Precision",
          skills: ["Critical Strike", "Weak Point Analysis", "Headhunter", "Steady Aim"],
        },
        {
          name: "Devastation",
          skills: ["Area Impact", "Explosive Force", "Collateral Damage", "Shockwave"],
        },
        {
          name: "Lethality",
          skills: ["Bleed Effect", "Poison Mastery", "Execution", "Assassinate"],
        },
      ],
    },
    {
      name: "Technology",
      icon: <Zap className="w-8 h-8 text-[#00aaff]" />,
      description: "Harness advanced technology to manipulate the environment and enhance your capabilities.",
      branches: [
        {
          name: "Hacking",
          skills: ["System Breach", "Security Override", "Data Extraction", "Neural Hijack"],
        },
        {
          name: "Engineering",
          skills: ["Drone Control", "Turret Deployment", "Field Repairs", "Improvised Explosives"],
        },
        {
          name: "Energy",
          skills: ["Power Surge", "Energy Shield", "Electromagnetic Pulse", "Quantum Manipulation"],
        },
      ],
    },
    {
      name: "Augmentation",
      icon: <Brain className="w-8 h-8 text-[#00ffff]" />,
      description: "Enhance your cybernetic implants to unlock superhuman abilities and adaptations.",
      branches: [
        {
          name: "Neural",
          skills: ["Reflex Boost", "Sensory Enhancement", "Time Perception", "Neural Network"],
        },
        {
          name: "Physical",
          skills: ["Hydraulic Strength", "Reinforced Frame", "Kinetic Absorption", "Adaptive Musculature"],
        },
        {
          name: "Stealth",
          skills: ["Active Camouflage", "Sound Suppression", "Thermal Masking", "Ghost Protocol"],
        },
      ],
    },
    {
      name: "Survival",
      icon: <Shield className="w-8 h-8 text-[#00aaff]" />,
      description: "Focus on staying alive in the harsh world of Arcanis with defensive and recovery skills.",
      branches: [
        {
          name: "Defense",
          skills: ["Damage Reduction", "Reactive Armor", "Threat Diversion", "Fortification"],
        },
        {
          name: "Recovery",
          skills: ["Rapid Healing", "Emergency Protocols", "Adaptive Regeneration", "Second Wind"],
        },
        {
          name: "Adaptation",
          skills: ["Environmental Resistance", "Toxin Immunity", "Radiation Processing", "Survival Instinct"],
        },
      ],
    },
  ]

  return (
    <SectionContainer id="skills" ref={ref}>
      <SectionTitle
        title="🧠 Skill System"
        description="Develop your character's abilities through an extensive skill system with multiple specialization paths and synergistic combinations."
        isInView={isInView}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillTrees.map((tree, index) => (
          <motion.div
            key={tree.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="bg-gradient-to-br from-[#0c1624] to-[#162a43] rounded-lg overflow-hidden border border-[#162a43] hover:border-[#00aaff]/50 transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-[#00aaff]/20 p-3 rounded-full mr-3">{tree.icon}</div>
                <h3 className="text-xl font-bold text-white">{tree.name} Tree</h3>
              </div>

              <p className="text-gray-400 mb-6">{tree.description}</p>

              <div className="space-y-4">
                {tree.branches.map((branch) => (
                  <div key={branch.name} className="bg-[#162a43]/50 rounded-lg p-4 border border-[#00aaff]/10">
                    <h4 className="text-white font-medium mb-2">{branch.name} Branch</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {branch.skills.map((skill) => (
                        <div key={skill} className="bg-[#0c1624] rounded p-2 text-center">
                          <span className="text-gray-300 text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
        <h3 className="text-xl font-bold text-white mb-4">Skill Synergies</h3>
        <p className="text-gray-400 mb-6">
          Skills in Citizen of Arcanis aren't isolated abilities - they interact with each other to create powerful
          combinations and emergent gameplay:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#162a43]/50 p-4 rounded-lg border border-[#00aaff]/10">
            <h4 className="text-white font-medium mb-2">Cross-Tree Combinations</h4>
            <p className="text-gray-400 text-sm">
              Combine skills from different trees for unique effects, like merging Hacking with Combat for automated
              targeting systems.
            </p>
          </div>

          <div className="bg-[#162a43]/50 p-4 rounded-lg border border-[#00aaff]/10">
            <h4 className="text-white font-medium mb-2">Skill Evolution</h4>
            <p className="text-gray-400 text-sm">
              Skills change and evolve based on how you use them, adapting to your playstyle over time.
            </p>
          </div>

          <div className="bg-[#162a43]/50 p-4 rounded-lg border border-[#00aaff]/10">
            <h4 className="text-white font-medium mb-2">Team Synergies</h4>
            <p className="text-gray-400 text-sm">
              Skills can interact with teammates' abilities, creating powerful cooperative combinations in group play.
            </p>
          </div>

          <div className="bg-[#162a43]/50 p-4 rounded-lg border border-[#00aaff]/10">
            <h4 className="text-white font-medium mb-2">Environmental Interactions</h4>
            <p className="text-gray-400 text-sm">
              Many skills interact with the environment, allowing for creative problem-solving and combat strategies.
            </p>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  )
}

