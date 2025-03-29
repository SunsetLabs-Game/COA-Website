"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Calendar,
  Trophy,
  Swords,
  Zap,
  Fingerprint,
  Users,
} from "lucide-react";

const events = [
  {
    title: "Faction Wars",
    frequency: "Monthly",
    icon: Swords,
    description:
      "Massive territory control battles between the three factions that determine resource distribution and storyline progression.",
    rewards: "Territory Control, Unique Gear, Faction Currency",
    tagColor: "bg-[#039fe1] text-white",
  },
  {
    title: "Neon Arena",
    frequency: "Weekly",
    icon: Zap,
    description:
      "Competitive PvP tournaments with various combat modes, from solo duels to team-based objective matches.",
    rewards: "Ranking Points, Combat Gear, Titles",
    tagColor: "bg-cyan-500/20 text-cyan-300",
  },
  {
    title: "Cyber Heist",
    frequency: "Bi-weekly",
    icon: Fingerprint,
    description:
      "Cooperative missions to infiltrate heavily guarded corporate facilities and extract valuable data or technology.",
    rewards: "Rare Technology, Augmentations, Credits",
    tagColor: "bg-purple-500/20 text-purple-300",
  },
];

export default function EpicEvents() {
  return (
    <div>
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-cyan-300 inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            🚀 Epic Events
          </motion.h2>
        </div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Participate in regular events that shape the world of Arcanis. From
          massive faction battles to high-stakes heists, these events offer
          unique rewards and unforgettable experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-b from-gray-800/50 to-blue-900/30 rounded-xl overflow-hidden border border-blue-800/30"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative h-48 bg-gradient-to-b from-gray-500 to-gray-700 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <event.icon className="w-12 h-12 text-gray-300 opacity-50" />
              </div>
            </div>

            <div className="p-5">
              <div
                className={`bg-[#039fe1] text-sm font-medium py-1 px-2 rounded inline-flex items-center mb-4`}
              >
                <Calendar className="w-3 h-3 mr-1" />
                {event.frequency}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {event.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4">{event.description}</p>

              <div className="flex items-center">
                <Trophy className="w-4 h-4 text-cyan-400 mr-2" />
                <p className="text-sm text-gray-300">
                  <span className="text-cyan-300 font-medium">Rewards:</span>{" "}
                  {event.rewards}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-[#0d1524]/80 rounded-xl border border-blue-800/30 p-4 mb-8">
        <div className="flex">
          <div className="bg-blue-500/20 p-2 rounded-full mr-3 flex-shrink-0">
            <Rocket className="w-5 h-5 text-cyan-300" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">
              World-Changing Events
            </h3>
            <p className="text-gray-300 text-xs mb-2 leading-relaxed">
              Major events in Arcanis have lasting consequences on the game
              world. Player actions during these events can permanently alter
              territories, unlock new storylines, or even change the balance of
              power between factions.
            </p>
            <p className="text-xs text-cyan-200 flex items-center">
              <Users className="w-3 h-3 mr-1 inline" />
              Last major event had 10,000+ participants
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
