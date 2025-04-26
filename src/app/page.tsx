"use client";

import Hero from "@/components/hero/hero";
import Gamefeatures from "@/components/game-features/game-features";
import GameplayPreview from "@/components/gameplay/gameplay-preview";
import TradingEcosystem from "@/components/marketplace/trading-ecosystem";
import MarketplaceSection from "@/components/home/marketplace-section";
import CommunitySection from "@/components/home/community-section";
import DigitalRainEffect from "@/components/effects/digital-rain-effect";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0e1a2b] text-white">
      {/* Background Image Container */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1.5 }}
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/images/background-coa.jpg')",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.5)',
        }}
      />
      
      {/* Overlay para mejorar la legibilidad del contenido */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="fixed inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(14, 26, 43, 0.8), rgba(14, 26, 43, 0.95))',
        }}
      />

      {/* Contenido Principal */}
      <div className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.div>

        <DigitalRainEffect />

        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Gamefeatures />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <GameplayPreview />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TradingEcosystem />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <MarketplaceSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <CommunitySection />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
