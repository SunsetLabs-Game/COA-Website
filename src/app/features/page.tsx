"use client";

import FeaturesCompanions from "@/components/features/features-companions";
import FeaturesFactions from "@/components/features/features-factions";
import FeaturesResurrection from "@/components/features/features-resurrection";
import FeaturesHero from "@/components/features/features-hero";
import FeaturesCustomization from "@/components/features/features-customization";
import FeaturesArsenal from "@/components/features/features-arsenal";
import FeaturesWorldExploration from "@/components/features/features-world-exploration";
import FeaturesDualEcononomic from "@/components/features/features-dual-economic";
import DigitalRainEffect from "@/components/effects/digital-rain-effect";
import FeaturesEpicEvents from "@/components/features/features-epic-events";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function FeaturesPage() {
  return (
    <main className="relative min-h-screen bg-[#0e1a2b] text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <FeaturesHero />
      </motion.div>

      <DigitalRainEffect />

      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <FeaturesResurrection />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <FeaturesFactions />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <FeaturesCompanions />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <FeaturesCustomization />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <FeaturesArsenal />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <FeaturesWorldExploration />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <FeaturesDualEcononomic />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <FeaturesEpicEvents />
        </motion.div>
      </motion.div>
    </main>
  );
}

