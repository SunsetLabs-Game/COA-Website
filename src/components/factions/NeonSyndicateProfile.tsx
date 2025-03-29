"use client";

import { motion } from "framer-motion";
import { NeonSyndicateHeader } from "./NeonSyndicateHeader";
import { NeonSyndicatePhilosophy } from "./NeonSyndicatePhilosophy";
import { NeonSyndicateTraits } from "./NeonSyndicateTraits";
import { NeonSyndicateTerritory } from "./NeonSyndicateTerritory";
import { NeonSyndicateLeaders } from "./NeonSyndicateLeaders";

interface NeonSyndicateProfileProps {
  sectionVariants: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
  leaderCardVariants: {
    hover: { scale: number; transition: { duration: number } };
  };
}

export function NeonSyndicateProfile({
  sectionVariants,
  leaderCardVariants,
}: NeonSyndicateProfileProps) {
  return (
    <motion.section
      className="max-w-6xl mx-auto px-4 md:px-8 py-16 relative"
      style={{ zIndex: 10 }}
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="rounded-xl p-6 md:p-10 bg-[#09162B] bg-opacity-80 border border-opacity-30 border-[#00FFFF]">
        <NeonSyndicateHeader variants={sectionVariants} />
        <NeonSyndicatePhilosophy variants={sectionVariants} />
        <NeonSyndicateTraits variants={sectionVariants} />
        <NeonSyndicateTerritory variants={sectionVariants} />
        <NeonSyndicateLeaders
          variants={sectionVariants}
          leaderCardVariants={leaderCardVariants}
        />
      </div>
    </motion.section>
  );
}