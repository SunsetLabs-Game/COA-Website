"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/button";
import DigitalRainEffect from "@/components/effects/digital-rain-effect";
import FactionsOverview from "@/components/factions/factions-overview";
import FactionComparison from "@/components/factions/factions-comparison";
import { ChoosingFaction } from "@/components/factions/choosing-faction";
import { SyndicateSpecializations } from "@/components/factions/SyndicateSpecializations";
import FactionRelations from "@/components/factions/factions-comparison";
import ChooseYourPath from "@/components/factions/factions-cta";

import { NeonSyndicateProfile } from "@/components/factions/NeonSyndicateProfile";
import { ChromeCollectiveProfile } from "@/components/factions/ChromeCollectiveProfile";
import { ShadowProtocolSpecializations } from "@/components/factions/shadow-protocol-specialization";

import { Globe, Shield, Cpu } from "lucide-react";

// Define entrance animation variants
const pageVariants = {
  hidden: { opacity: 0, y: 20 }, // Initial state
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Final state
};

type FactionKey = "neon" | "chrome" | "shadow";

const factionData: Record<
  FactionKey,
  {
    name: string;
    icon: React.ReactNode;
    color: string;
    bgColor: string;
    accentColor: string;
    textColor: string;
    borderColor: string;
    description: string;
  }
> = {
  neon: {
    name: "Neon Syndicate",
    icon: <Cpu />,
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-[#09162B]",
    accentColor: "bg-cyan-400",
    textColor: "text-cyan-400",
    borderColor: "border-[#00FFFF]",
    description:
      "Digital pioneers pushing the boundaries of technology and virtual reality.",
  },
  chrome: {
    name: "Chrome Collective",
    icon: <Globe />,
    color: "from-red-500 to-orange-500",
    bgColor: "bg-[#09162B]",
    accentColor: "bg-red-400",
    textColor: "text-red-400",
    borderColor: "border-red-400",
    description:
      "Augmented warriors who believe in strength through technological enhancement.",
  },
  shadow: {
    name: "Shadow Protocol",
    icon: <Shield />,
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-[#09162B]",
    accentColor: "bg-blue-400",
    textColor: "text-blue-400",
    borderColor: "border-blue-400",
    description:
      "Masters of espionage, stealth, and strategic manipulation operating from the shadows.",
  },
};

// Define variants outside the JSX for better readability
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 20, 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3, 
    },
  },
};

const leaderCardVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};

export default function FactionsPage() {
  const [activeTab, setActiveTab] = useState<FactionKey>("neon");
  const cursorRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector(
        ".cursor-glow::before"
      ) as HTMLElement;
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };

    const debouncedMouseMove = debounce((e: MouseEvent) => handleMouseMove(e), 10);
    document.addEventListener("mousemove", debouncedMouseMove);
    return () => {
      document.removeEventListener("mousemove", debouncedMouseMove);
    };
  }, []);

  const activeFaction = factionData[activeTab];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="min-h-screen text-white cursor-glow animated-bg relative overflow-hidden"
    >
      <DigitalRainEffect />

      <header className="w-full flex justify-between items-center p-6 relative h-[200px]">
        <Link href="/" aria-label="Home">
          <Image
            src="/icons/citizen.png"
            alt="Logo"
            width={300}
            height={150}
            className="w-[300px] h-[150px] object-contain absolute top-6 left-6 md:w-[200px] md:h-[100px] sm:w-[120px] sm:h-[60px] sm:top-4 sm:left-4"
          />
        </Link>

        <Image
          src="/icons/profile.jpg"
          alt="Profile"
          width={120}
          height={120}
          className="hidden sm:block absolute top-6 right-6 w-[120px] h-[120px] object-cover rounded-full md:w-[80px] md:h-[80px]"
        />
      </header>

      <section className="relative pt-10 pb-8 px-4 md:px-8 text-center z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 text-[#00FFFF]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Factions of Arcanis
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Choose your allegiance in the battle for the future of Arcanis
        </motion.p>
      </section>

      <section className="relative max-w-6xl mx-auto px-4 md:px-8 mb-12 z-10">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(factionData).map(([key, faction]) => (
            <Button
              key={key}
              variant={activeTab === key ? "default" : "outline"}
              className={`text-lg px-6 py-6 ${
                activeTab === key ? faction.bgColor : "bg-transparent"
              } ${
                activeTab === key ? "text-white" : faction.textColor
              } border ${faction.borderColor} transition-all duration-300`}
              onClick={() => setActiveTab(key as FactionKey)}
              aria-label={`Select ${faction.name}`}
            >
              <span className="mr-2">{faction.icon}</span>
              {faction.name}
            </Button>
          ))}
        </div>

        <FactionsOverview />

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`rounded-xl p-6 md:p-10 ${activeFaction.bgColor} bg-opacity-80 border border-opacity-30 ${activeFaction.borderColor}`}
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h2
                className={`text-2xl font-bold mb-4 ${activeFaction.textColor}`}
              >
                {activeFaction.name} {activeFaction.icon}
              </h2>
              <p className="text-gray-300 mb-6">{activeFaction.description}</p>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Faction Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight
                      className={`h-5 w-5 ${activeFaction.textColor}`}
                    />
                    <span>Unique technology access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight
                      className={`h-5 w-5 ${activeFaction.textColor}`}
                    />
                    <span>Specialized training programs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight
                      className={`h-5 w-5 ${activeFaction.textColor}`}
                    />
                    <span>Faction-specific missions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight
                      className={`h-5 w-5 ${activeFaction.textColor}`}
                    />
                    <span>Exclusive gear and upgrades</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-6">Faction Overview</h3>
              <p className="text-gray-300 mb-4">
                {activeFaction.name} operates with a distinct philosophy and
                approach to the challenges of Arcanis.
              </p>
              <p className="text-gray-300">
                Joining this faction grants you access to unique abilities,
                gear, and storylines aligned with their vision.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {activeTab === "neon" && (
        <NeonSyndicateProfile
          sectionVariants={sectionVariants}
          leaderCardVariants={leaderCardVariants}
        />
      )}
      {activeTab === "chrome" && <ChromeCollectiveProfile />}
      {activeTab === "shadow" && <ShadowProtocolSpecializations />}

      <FactionComparison />
      <ChoosingFaction />
      <SyndicateSpecializations />
      <FactionRelations />
      <ChooseYourPath />
    </motion.div>
  );
}

// Utility function for debouncing
function debounce<T extends (...args: unknown[]) => void>(func: T, wait: number): T {
  let timeout: NodeJS.Timeout;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }) as T;
}