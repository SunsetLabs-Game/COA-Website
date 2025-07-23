"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import GameplayNavigation from "@/components/gameplay/ui/gameplay-navigation"
import ScrollIndicator from "@/components/gameplay/ui/scroll-indicator"
import DigitalRainEffect from "@/components/gameplay/ui/digital-rain-effect"
import GameplayVideo from "../ui/gameplay-video"

export default function GameplayHero() {

  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-13%2010.31.07%20-%20A%20futuristic%20cyberpunk%20cityscape%20in%20a%20wide%20panoramic%20view.%20The%20scene%20features%20towering%20skyscrapers%20with%20neon%20signs%20glowing%20in%20electric%20blue%2C%20red%2C%20and%20-QCaiJV3KFxBMIT5zi8Qyu0TugWr4nv.webp"
          alt="Cyberpunk cityscape"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1a2b]/80 via-[#0e1a2b]/70 to-[#0e1a2b]"></div>
      </div>

      {/* Digital rain effect */}
      <DigitalRainEffect />

      <div className="container mx-auto px-4 relative z-20 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#00ffff] mb-6">Gameplay Experience</h1>
          <p className="text-xl text-gray-300 mb-8">
            Immerse yourself in the adrenaline-fueled action of Citizen of Arcanis, where every decision shapes your
            destiny and every battle tests your skills.
          </p>

          <GameplayNavigation />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-4xl mx-auto group"
        >
          {/* Video container with glitch effect border */}
          <div className="relative rounded-lg overflow-hidden">
            {/* Glitch border effect - positioned behind the video */}
            <div className="absolute inset-0 border-2 border-[#00ffff] rounded-lg glitch-border" style={{ zIndex: 10 }}></div>
            
            {/* YouTube video */}
            <GameplayVideo />
          </div>

          <div className="mt-4 text-center text-gray-400 text-sm">
            Watch the gameplay trailer to see Citizen of Arcanis in action
          </div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  )
}

