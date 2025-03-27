"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/button"
import { ShadowProtocolSpecializations } from "@/components/factions/shadow-protocol-specialization"
import { FactionComparison } from "@/components/factions/faction-comparison"
import { ChoosingFaction } from "@/components/factions/choosing-faction"
import DigitalRainEffect from "@/components/effects/digital-rain-effect"

export default function FactionsPage() {
    const [activeTab, setActiveTab] = useState("neon")

    const factionData = {
        neon: {
            name: "Neon Syndicate",
            icon: "⚡",
            color: "from-cyan-500 to-blue-500",
            bgColor: "bg-[#09162B]",
            accentColor: "bg-cyan-400",
            textColor: "text-[#00FFFF]",
            borderColor: "border-[#00FFFF]",
            description: "Digital pioneers pushing the boundaries of technology and virtual reality.",
        },
        chrome: {
            name: "Chrome Collective",
            icon: "🔴",
            color: "from-red-500 to-orange-500",
            bgColor: "bg-[#09162B]",
            accentColor: "bg-red-400",
            textColor: "text-red-400",
            borderColor: "border-red-400",
            description: "Augmented warriors who believe in strength through technological enhancement.",
        },
        shadow: {
            name: "Shadow Protocol",
            icon: "⚫",
            color: "from-purple-500 to-indigo-500",
            bgColor: "bg-[#09162B]",
            accentColor: "bg-blue-400",
            textColor: "text-blue-400",
            borderColor: "border-blue-400",
            description: "Masters of espionage, stealth, and strategic manipulation operating from the shadows.",
        },
    }

    const activeFaction = factionData[activeTab as keyof typeof factionData]

    return (
        <div className="min-h-screen bg-[#0B1B32] text-white relative overflow-hidden">
            <DigitalRainEffect />
            <header className="relative pt-16 pb-8 px-4 md:px-8 text-center" style={{ zIndex: 10 }}>
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
            <section className="relative max-w-6xl mx-auto px-4 md:px-8 mb-12" style={{ zIndex: 10 }}>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {Object.entries(factionData).map(([key, faction]) => (
                        <Button
                            key={key}
                            variant={activeTab === key ? "default" : "outline"}
                            className={`text-lg px-6 py-6 ${activeTab === key ? faction.bgColor : "bg-transparent"} ${activeTab === key ? "text-white" : faction.textColor} border ${faction.borderColor} transition-all duration-300`}
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
                            <h2 className={`text-2xl font-bold mb-4 ${activeFaction.textColor}`}>
                                {activeFaction.name} {activeFaction.icon}
                            </h2>
                            <p className="text-gray-300 mb-6">{activeFaction.description}</p>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold">Faction Benefits</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <ChevronRight className={`h-5 w-5 ${activeFaction.textColor}`} />
                                        <span>Unique technology access</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <ChevronRight className={`h-5 w-5 ${activeFaction.textColor}`} />
                                        <span>Specialized training programs</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <ChevronRight className={`h-5 w-5 ${activeFaction.textColor}`} />
                                        <span>Faction-specific missions</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <ChevronRight className={`h-5 w-5 ${activeFaction.textColor}`} />
                                        <span>Exclusive gear and upgrades</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="md:w-2/3">
                            <h3 className="text-2xl font-semibold mb-6">Faction Overview</h3>
                            <p className="text-gray-300 mb-4">
                                {activeFaction.name} operates with a distinct philosophy and approach to the challenges of Arcanis.
                                Their methods and technologies reflect their core values and strategic objectives.
                            </p>
                            <p className="text-gray-300">
                                Joining this faction will grant you access to unique abilities, equipment, and storylines that align
                                with their vision for the future of Arcanis.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            <div style={{ zIndex: 10, position: "relative" }}>
                {activeTab === "shadow" && <ShadowProtocolSpecializations />}
            </div>

            <div style={{ zIndex: 10, position: "relative" }}>
                <FactionComparison />
            </div>

            <div style={{ zIndex: 10, position: "relative" }}>
                <ChoosingFaction />
            </div>
        </div>
    )
}

