"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function GameplayCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.7 })

  return (
    <section className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-[#0c1624] to-[#162a43] rounded-lg border border-[#00aaff]/30 p-8 md:p-12 text-center relative overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#00aaff]"
              style={{
                width: Math.random() * 4 + 1 + "px",
                height: Math.random() * 4 + 1 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#00ffff]">Experience Arcanis Today</h2>
          <p className="text-gray-300 text-lg mb-8">
            Dive into a world of endless possibilities, where your choices shape your destiny and every battle tests
            your skills. The streets of Arcanis await your arrival.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#00aaff] hover:bg-[#00aaff]/80 text-white font-bold py-6 px-10 text-lg rounded-md border border-[#00aaff]/30 shadow-[0_0_15px_rgba(0,170,255,0.5)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,170,255,0.8)] group">
              <span className="group-hover:animate-pulse">Play Now</span>
            </Button>
            <Link href="/features">
              <Button
                variant="outline"
                className="bg-transparent text-[#00ffff] border border-[#00ffff]/50 hover:bg-[#00ffff]/10 font-bold py-6 px-10 text-lg rounded-md shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]"
              >
                Explore Features <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

