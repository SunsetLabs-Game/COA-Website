"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  Star,
  Sparkles,
  Hammer,
  Clock,
  FileText,
  Skull,
  Zap,
  Ban,
  UserX,
  Users,
  Cpu,
  Building,
} from "lucide-react";

const officialFeatures = [
  {
    icon: <ShoppingCart className="w-5 h-5 mr-2" />,
    text: "Player-to-player trading with secure transactions",
  },
  {
    icon: <Star className="w-5 h-5 mr-2" />,
    text: "Rare and legendary items with unique properties",
  },
  {
    icon: <Sparkles className="w-5 h-5 mr-2" />,
    text: "Dynamic pricing based on supply and demand",
  },
  {
    icon: <Hammer className="w-5 h-5 mr-2" />,
    text: "Crafting and modification system",
  },
  {
    icon: <Clock className="w-5 h-5 mr-2" />,
    text: "Limited edition event items",
  },
  {
    icon: <FileText className="w-5 h-5 mr-2" />,
    text: "NFT integration for true ownership",
  },
];

const blackMarketFeatures = [
  {
    icon: <Zap className="w-5 h-5 mr-2" />,
    text: "High-risk, high-reward transactions",
  },
  {
    icon: <Ban className="w-5 h-5 mr-2" />,
    text: "Contraband and illegal modifications",
  },
  {
    icon: <UserX className="w-5 h-5 mr-2" />,
    text: "Anonymous trading with potential scams",
  },
  {
    icon: <Users className="w-5 h-5 mr-2" />,
    text: "Faction-specific black market access",
  },
  {
    icon: <Cpu className="w-5 h-5 mr-2" />,
    text: "Stolen technology and prototype weapons",
  },
  {
    icon: <Building className="w-5 h-5 mr-2" />,
    text: "Underground fighting rings and betting",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Dual Economy System */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 text-cyan-300 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              🎭 Dual Economy System
            </motion.h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Navigate between the regulated Marketplace and the dangerous Black
              Market, each offering unique opportunities and risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-br from-blue-900/40 to-cyan-900/30 p-8 rounded-xl border border-cyan-800/50 backdrop-blur-sm relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
              <div className="flex items-center mb-6">
                <div className="bg-cyan-500/20 p-3 rounded-full mr-4">
                  <ShoppingCart className="w-6 h-6 text-cyan-300" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-300">
                  Official Marketplace
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                The regulated marketplace offers secure transactions with buyer
                protection. All items are verified and transactions are recorded
                on the blockchain.
              </p>
              <ul className="space-y-3 mb-8">
                {officialFeatures.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center text-gray-200"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-cyan-400 flex items-center">
                      {feature.icon}
                    </div>
                    {feature.text}
                  </motion.li>
                ))}
              </ul>
              <motion.button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium py-2 px-6 rounded-md hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                Visit Marketplace
              </motion.button>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-900/40 to-cyan-900/30 p-8 rounded-xl border border-cyan-800/50 backdrop-blur-sm relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />

              <div className="flex items-center mb-6">
                <div className="bg-cyan-500/20 p-3 rounded-full mr-4">
                  <Skull className="w-6 h-6 text-cyan-300" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-300">
                  Black Market
                </h3>
              </div>

              <p className="text-gray-300 mb-6">
                The unregulated black market offers rare and illegal items, but
                comes with significant risks. No buyer protection, no
                guarantees, but potentially massive rewards.
              </p>

              <ul className="space-y-3 mb-8">
                {blackMarketFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-200"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-cyan-400 flex items-center">
                      {feature.icon}
                    </div>
                    {feature.text}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium py-2 px-6 rounded-md hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center">
                  Enter Black Market
                  <motion.span
                    className="ml-2"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                    }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
