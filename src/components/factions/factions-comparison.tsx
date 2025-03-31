"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Sword, Shield } from "lucide-react"

export default function FactionRelations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 bg-[#162a43]/50 border border-[#00ffff]/20 rounded-lg p-6"
      >
        <h3 className="text-xl font-bold text-white mb-4">Faction Relations</h3>
        <p className="text-gray-400 mb-6">
          The three factions exist in a state of uneasy tension, with shifting alliances and conflicts based on their
          competing interests:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0c1624] p-4 rounded-lg border border-[#00ffff]/20">
            <h4 className="text-[#00ffff] font-medium mb-2 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Syndicate vs. Collective
            </h4>
            <p className="text-gray-400 text-sm">
              The Neon Syndicate views the Chrome Collective as dangerously primitive, focusing too much on physical
              power and not enough on digital evolution. The Collective sees the Syndicate as physically weak and
              disconnected from reality.
            </p>
          </div>

          <div className="bg-[#0c1624] p-4 rounded-lg border border-[#ff0033]/20">
            <h4 className="text-[#ff0033] font-medium mb-2 flex items-center">
              <Sword className="w-4 h-4 mr-2" />
              Collective vs. Protocol
            </h4>
            <p className="text-gray-400 text-sm">
              The Chrome Collective considers the Shadow Protocol to be cowards who hide in the shadows rather than
              facing challenges directly. The Protocol views the Collective as predictable brutes whose strength is
              easily manipulated.
            </p>
          </div>

          <div className="bg-[#0c1624] p-4 rounded-lg border border-[#00aaff]/20">
            <h4 className="text-[#00aaff] font-medium mb-2 flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Protocol vs. Syndicate
            </h4>
            <p className="text-gray-400 text-sm">
              The Shadow Protocol and Neon Syndicate frequently clash over information control and espionage. The
              Protocol infiltrates Syndicate networks, while the Syndicate works to expose Protocol operations through
              digital surveillance.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
