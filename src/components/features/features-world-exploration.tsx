"use client";

import type React from "react";

import { motion, useInView } from "framer-motion";
import { ChevronRight, Compass, Building, Map, RadioTower } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface LocationCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  delay: number;
  imageSrc: string;
}

export default function FeaturesWorldExploration() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <div className="relative py-16 " ref={sectionRef}>
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 xl:gap-8">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded">
                <Image
                  src="/images/world-exploration-avatar.png?height=40&width=40"
                  alt="World icon"
                  width={40}
                  height={40}
                  className="text-[#00e5ff]"
                />
              </div>
              <h2 className="text-4xl font-bold text-[#00e5ff]">
                World Exploration
              </h2>
            </div>
            <div className="space-y-8 max-w-xl">
              <motion.p
                className="text-sm leading-relaxed text-gray-300/60"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2 }}
              >
                Explore the vast, interconnected world of Arcanis. From towering
                megacorporation headquarters to the irradiated wastes beyond the
                city, every location tells a story.
              </motion.p>

              {/* Dynamic World Features */}
              <motion.div
                className="p-6 rounded-lg border border-[#1a2035] bg-[#0c1624] backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1a2035] text-[#00e5ff]">
                    <Compass className="h-6 p-0.5" />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    Dynamic World
                  </h3>
                </div>
                <p className="mb-4 text-xs text-gray-400">
                  The world of Arcanis is constantly evolving based on player
                  actions and events:
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    "Faction control changes territory appearance and access",
                    "Weather and time systems affect gameplay and visibility",
                    "Hidden locations and secret areas to discover",
                    "Environmental hazards and benefits",
                    "Procedurally generated missions and encounters",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-2 text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                      }
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <span className="mt-1 text-[#00aaff]">✓</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 w-full space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Location Cards */}
            <LocationCard
              title="Neon District"
              icon={<Building className="w-5 h-5" />}
              description="The glittering heart of Arcanis, where corporations rule and the wealthy live in luxury above the streets."
              delay={0.5}
              imageSrc="/placeholder.svg?height=200&width=400"
              isInView={isInView}
            />

            <LocationCard
              title="The Undercity"
              icon={<Map className="w-5 h-5 text-red-700" />}
              description="Beneath the neon lights lies a labyrinth of forgotten infrastructure where the outcasts and rebels make their home."
              delay={0.7}
              imageSrc="/placeholder.svg?height=200&width=400"
              isInView={isInView}
            />

            <LocationCard
              title="The Wastes"
              icon={<RadioTower className="w-5 h-5" />}
              description="The irradiated outskirts of the city, home to mutants, scavengers, and ancient technology waiting to be discovered."
              delay={0.9}
              imageSrc="/placeholder.svg?height=200&width=400"
              isInView={isInView}
            />
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="p-8 mt-16 xl:mt-20 text-center rounded-lg border border-[#00aaff]/30 bg-gradient-to-r from-[#0c1624] to-[#162a43]/50"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.1 }}
        >
          <h3 className="mb-4 text-3xl font-bold text-[#00e5ff]">
            Ready to Join the Fight?
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            The world of Arcanis awaits. Choose your faction, customize your
            character, and carve your path through this cyberpunk universe.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#" className="group">
              <motion.div
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-[#00a2ff] hover:bg-[#00b8ff] text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Play Now
              </motion.div>
            </Link>
            <Link href="#" className="group">
              <motion.div
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-md border border-[#00a2ff] bg-transparent text-[#00a2ff] transition-all duration-300"
                whileHover={{
                  boxShadow: "0 0 5px 2px #00e5ff",
                }}
                style={{ boxShadow: "0 0 3px 1px #00e5ff" }}
              >
                Join Community
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Helper component for location cards
function LocationCard({
  title,
  icon,
  description,
  delay,
  imageSrc,
  isInView,
}: LocationCardProps & { isInView: boolean }) {
  return (
    <motion.div
      className="relative flex flex-col justify-end h-[200px] w-full md:w-full overflow-hidden rounded-lg border border-[#1a2035] bg-gradient-to-b from-gray-200 via-gray-800 to-[#0c1624] group"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.3 + delay }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background image */}
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover"
      />

      {/* Hover effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-100 via-[#263041] to-[#0e1a2b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex flex-col justify-end h-full">
        <div className="flex items-center gap-1 px-3 mb-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1a2035] text-[#00e5ff]">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="p-3 text-sm text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}
