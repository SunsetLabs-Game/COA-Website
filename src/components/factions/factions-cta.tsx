"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Particle {
  width: string;
  height: string;
  left: string;
  top: string;
  delay: number;
  duration: number;
}

export default function ChooseYourPath() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () =>
      Array.from({ length: 20 }).map(() => ({
        width: `${Math.random() * 4 + 1}px`,
        height: `${Math.random() * 4 + 1}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
      }));

    setParticles(generateParticles());
  }, []);

  const buttonStyles =
    "font-bold py-6 px-10 text-lg rounded-md transition-all duration-300";

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0c1624] to-[#162a43] rounded-lg border border-[#00aaff]/30 p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Particle Effects */}
          <div className="absolute inset-0 z-0">
            {particles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-[#00aaff]"
                style={{
                  width: p.width,
                  height: p.height,
                  left: p.left,
                  top: p.top,
                }}
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#00ffff]">
              Choose Your Path
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              The future of Arcanis will be shaped by the faction that emerges
              victorious from the coming conflicts. Will you join the digital
              revolution of the Neon Syndicate, embrace the physical power of
              the Chrome Collective, or master the art of manipulation with the
              Shadow Protocol?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className={`bg-[#00aaff] hover:bg-[#00aaff]/80 text-white ${buttonStyles} border border-[#00aaff]/30 shadow-[0_0_15px_rgba(0,170,255,0.5)] hover:shadow-[0_0_25px_rgba(0,170,255,0.8)] group`}
                aria-label="Join a Faction"
              >
                <span className="group-hover:animate-pulse">
                  Join a Faction
                </span>
              </Button>
              <Link href="/gameplay">
                <Button
                  variant="outline"
                  className={`bg-transparent text-[#00ffff] border border-[#00ffff]/50 hover:bg-[#00ffff]/10 hover:text-gray-100 ${buttonStyles} shadow-[0_0_10px_rgba(0,255,255,0.3)] hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]`}
                  aria-label="Explore Gameplay"
                >
                  Explore Gameplay <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
