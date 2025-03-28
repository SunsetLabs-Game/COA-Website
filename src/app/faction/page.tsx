"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/button";
import { ShadowProtocolSpecializations } from "@/components/factions/shadow-protocol-specialization";
import { FactionComparison } from "@/components/factions/faction-comparison";
import { ChoosingFaction } from "@/components/factions/choosing-faction";
import DigitalRainEffect from "@/components/effects/digital-rain-effect";
import { SyndicateSpecializations } from "@/components/factions/SyndicateSpecializations";
import { ChromeCollectiveProfile } from "@/components/factions/ChromeCollectiveProfile";
import Image from "next/image";

export default function FactionsPage() {
  const [activeTab, setActiveTab] = useState("neon");

  const factionData = {
    neon: {
      name: "Neon Syndicate",
      icon: "⚡",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-[#09162B]",
      accentColor: "bg-cyan-400",
      textColor: "text-[#00FFFF]",
      borderColor: "border-[#00FFFF]",
      description:
        "Digital pioneers pushing the boundaries of technology and virtual reality.",
    },
    chrome: {
      name: "Chrome Collective",
      icon: "🔴",
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
      icon: "⚫",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-[#09162B]",
      accentColor: "bg-blue-400",
      textColor: "text-blue-400",
      borderColor: "border-blue-400",
      description:
        "Masters of espionage, stealth, and strategic manipulation operating from the shadows.",
    },
  };

  const activeFaction = factionData[activeTab as keyof typeof factionData];

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const leaderCardVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-[#0B1B32] text-white relative overflow-hidden">
      <DigitalRainEffect />
      <header
        className="relative pt-16 pb-8 px-4 md:px-8 text-center"
        style={{ zIndex: 10 }}
      >
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
      </header>

      {/* Faction Tabs */}
      <section
        className="relative max-w-6xl mx-auto px-4 md:px-8 mb-12"
        style={{ zIndex: 10 }}
      >
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
              onClick={() => setActiveTab(key)}
            >
              <span className="mr-2">{faction.icon}</span>
              {faction.name}
            </Button>
          ))}
        </div>

        {/* Active Faction Content */}
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
                approach to the challenges of Arcanis. Their methods and
                technologies reflect their core values and strategic
                objectives.
              </p>
              <p className="text-gray-300">
                Joining this faction will grant you access to unique abilities,
                equipment, and storylines that align with their vision for the
                future of Arcanis.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Neon Syndicate Detailed Section */}
      {activeTab === "neon" && (
        <motion.section
          className="max-w-6xl mx-auto px-4 md:px-8 py-16 relative"
          style={{ zIndex: 10 }}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="rounded-xl p-6 md:p-10 bg-[#09162B] bg-opacity-80 border border-opacity-30 border-[#00FFFF]">
            {/* Header */}
            <motion.div variants={sectionVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
                Masters of the Digital Realm
              </h2>
              <p className="text-gray-300 mb-6 max-w-3xl">
                The Neon Syndicate emerged from the collapse of the old
                financial system, when a group of elite hackers and AI
                specialists seized control of the digital infrastructure.
                Today, they are the undisputed rulers of the information
                economy, controlling data flows, cryptocurrency markets, and
                the digital backbone of Arcanis.
              </p>
            </motion.div>

            {/* Philosophy */}
            <motion.div variants={sectionVariants}>
              <p className="text-gray-300 mb-8 max-w-3xl">
                Members of the Syndicate believe that the physical world is
                merely a shell for the digital realm, where true power resides.
                They seek to transcend physical limitations through technology,
                creating a world where information is the ultimate currency.
              </p>
            </motion.div>

            {/* Faction Traits */}
            <motion.div variants={sectionVariants}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Faction Traits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-[#09162B] bg-opacity-80 border border-cyan-400 border-opacity-30 rounded-lg">
                  <h3 className="text-lg font-semibold text-cyan-400">
                    Headquarters
                  </h3>
                  <p className="text-gray-300">The Nexus (Neon District)</p>
                </div>
                <div className="p-4 bg-[#09162B] bg-opacity-80 border border-cyan-400 border-opacity-30 rounded-lg">
                  <h3 className="text-lg font-semibold text-cyan-400">
                    Population
                  </h3>
                  <p className="text-gray-300">~120,000 members</p>
                </div>
                <div className="p-4 bg-[#09162B] bg-opacity-80 border border-cyan-400 border-opacity-30 rounded-lg">
                  <h3 className="text-lg font-semibold text-cyan-400">
                    Primary Resource
                  </h3>
                  <p className="text-gray-300">Quantum Processing Power</p>
                </div>
                <div className="p-4 bg-[#09162B] bg-opacity-80 border border-cyan-400 border-opacity-30 rounded-lg">
                  <h3 className="text-lg font-semibold text-cyan-400">
                    Faction Currency
                  </h3>
                  <p className="text-gray-300">NeonCoin (NEON)</p>
                </div>
              </div>
            </motion.div>

            {/* Territory */}
            <motion.div variants={sectionVariants}>
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-semibold mb-4 text-white">
                    Neon Syndicate Territory
                  </h2>
                  <p className="text-gray-300 md:pr-6 mt-2">
                    The Neon District is the technological heart of Arcanis,
                    where massive data centers and holographic interfaces
                    dominate the landscape. Here, the Syndicate’s influence is
                    absolute.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/images/neon-district.jpg"
                    alt="Neon District"
                    width={500}
                    height={256}
                    className="rounded-lg object-cover w-full h-64"
                  />
                </div>
              </div>
            </motion.div>

            {/* Key Leaders */}
            <motion.div variants={sectionVariants}>
              <h2 className="text-2xl font-semibold mb-4 text-white text-center">
                Key Leaders
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Cipher */}
                <motion.div
                  className="p-4 bg-[#09162B] bg-opacity-80 border border-cyan-400 border-opacity-30 rounded-lg"
                  whileHover="hover"
                  variants={leaderCardVariants}
                >
                  <h3 className="text-xl font-bold text-cyan-400">Cipher</h3>
                  <p className="text-gray-400 mb-2">The Architect</p>
                  <div className="h-40 rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/cipher.jpg"
                      alt="Cipher"
                      width={300}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-300">
                    The enigmatic founder of the Neon Syndicate, whose true
                    identity remains unknown. Cipher appears only as a digital
                    avatar in the network, issuing directives and shaping the
                    Syndicate’s vision.
                  </p>
                </motion.div>

                {/* Nova */}
                <motion.div
                  className="p-4 bg-[#09162B] bg-opacity-80 border border-cyan-400 border-opacity-30 rounded-lg"
                  whileHover="hover"
                  variants={leaderCardVariants}
                >
                  <h3 className="text-xl font-bold text-cyan-400">Nova</h3>
                  <p className="text-gray-400 mb-2">Head of Operations</p>
                  <div className="h-40 rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/nova.jpg"
                      alt="Nova"
                      width={300}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-300">
                    A former corporate AI developer who now leads the
                    day-to-day operations. Nova is known for her brilliant
                    tactical mind and ruthless efficiency.
                  </p>
                </motion.div>

                {/* Pulse */}
                <motion.div
                  className="p-4 bg-[#09162B] bg-opacity-80 border border-cyan-400 border-opacity-30 rounded-lg"
                  whileHover="hover"
                  variants={leaderCardVariants}
                >
                  <h3 className="text-xl font-bold text-cyan-400">Pulse</h3>
                  <p className="text-gray-400 mb-2">Chief of Security</p>
                  <div className="h-40 rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/pulse.jpg"
                      alt="Pulse"
                      width={300}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-300">
                    A legendary hacker who now protects the Syndicate’s digital
                    infrastructure. Pulse can detect and neutralize threats
                    before they materialize.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Chrome Collective and Shadow Protocol Sections */}
      {activeTab === "chrome" && (
        <div style={{ zIndex: 10, position: "relative" }}>
          <ChromeCollectiveProfile />
        </div>
      )}
      {activeTab === "shadow" && (
        <div style={{ zIndex: 10, position: "relative" }}>
          <ShadowProtocolSpecializations />
        </div>
      )}

      {/* Additional Sections */}
      <div style={{ zIndex: 10, position: "relative" }}>
        <FactionComparison />
      </div>
      <div style={{ zIndex: 10, position: "relative" }}>
        <ChoosingFaction />
      </div>
      <div style={{ zIndex: 10, position: "relative" }}>
        <SyndicateSpecializations />
      </div>
    </div>
  );
}