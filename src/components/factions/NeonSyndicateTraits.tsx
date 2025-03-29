"use client";

import { motion } from "framer-motion";

interface NeonSyndicateTraitsProps {
  variants: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
}

export function NeonSyndicateTraits({ variants }: NeonSyndicateTraitsProps) {
  return (
    <motion.div variants={variants}>
      <h2 className="text-2xl font-semibold mb-4 text-white">Faction Traits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="p-4 bg-[#09162B] bg-opacity-80 border border-cyan-400 border-opacity-30 rounded-lg">
          <h3 className="text-lg font-semibold text-cyan-400">Headquarters</h3>
          <p className="text-gray-300">The Nexus (Neon District)</p>
        </div>
        <div className="p-4 bg-[#09162B] bg-opacity-80 border border-cyan-400 border-opacity-30 rounded-lg">
          <h3 className="text-lg font-semibold text-cyan-400">Population</h3>
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
  );
}