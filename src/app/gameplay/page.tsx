import type { Metadata } from "next/types"
import GameplayHero from "@/components/gameplay/hero-section"
import CombatSystem from "@/components/gameplay/combat-system"
import ProgressionSystem from "@/components/gameplay/progression-system"
import MissionsQuests from "@/components/gameplay/missions-quests"
import PvpCompetitive from "@/components/gameplay/pvp-competitive"
import SkillSystem from "@/components/gameplay/skill-system"
import CraftingResources from "@/components/gameplay/crafting-resources"
import SocialFeatures from "@/components/gameplay/social-features"
import GameplayCTA from "@/components/gameplay/gameplay-cta"
import DigitalRainEffect from "@/components/effects/digital-rain-effect"

export const metadata: Metadata = {
  title: "Gameplay | Citizen of Arcanis",
  description: "Explore the immersive gameplay features of Citizen of Arcanis, from combat to crafting and beyond.",
}

export default function GameplayPage() {
  return (
    <main className="relative min-h-screen bg-[#0e1a2b] overflow-hidden">

      <div className="fixed inset-0 z-0">
        <DigitalRainEffect />
      </div>

      <div className="relative z-10">
        <GameplayHero />
        <div className="container mx-auto px-4">
          <CombatSystem />
          <ProgressionSystem />
          <MissionsQuests />
          <PvpCompetitive />
          <SkillSystem />
          <CraftingResources />
          <SocialFeatures />
          <GameplayCTA />
        </div>
      </div>
    </main>
  )
}
