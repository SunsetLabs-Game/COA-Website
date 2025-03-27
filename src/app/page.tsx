"use client";

import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import Gamefeatures from "@/components/game-features/game-features";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/background-coa.jpg')",
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
        <Navbar className="flex justify-between items-center px-4 md:px-8" />
        <Hero className="text-center px-4 md:px-8" />
        <Gamefeatures className="px-4 md:px-8" />
      </div>
    </div>
  );
}
