"use client";

import Hero from "@/components/hero/hero";
import Gamefeatures from "@/components/game-features/game-features";
import GameplayPreview from "@/components/gameplay/gameplay-preview";
import TradingEcosystem from "@/components/marketplace/trading-ecosystem";
import MarketplaceSection from "@/components/home/marketplace-section";
import CommunitySection from "@/components/home/community-section";

export default function Home() {
  const navItems = [
    { label: "CITIZEN of ARCANIS", href: "/" },
    { label: "COMMUNITY", href: "/community" },
    { label: "HELP", href: "/features" },
    { label: "MY ITEMS", href: "/contact" },
    { label: "ACCOUNT", href: "/account" },
  ];

  return (
    <div className="min-h-screen flex flex-col relative w-full">
      <div
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/background-coa.jpg')",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
          filter: "brightness(50%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))",
        }}
      />

      <div className="relative z-10 text-white">
        <Hero className="text-center px-4 md:px-8" />
        <Gamefeatures className="px-4 md:px-8" />
      </div>
      
      <GameplayPreview />
      
      <TradingEcosystem />
       <MarketplaceSection />
      <CommunitySection /> 
    </div>
  );
}
