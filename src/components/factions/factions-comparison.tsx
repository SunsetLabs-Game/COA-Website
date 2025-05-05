"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Sword, Shield } from "lucide-react";

const factionRelations = [
  {
    title: "Syndicate vs. Collective",
    icon: <Zap className="w-4 h-4 mr-2" aria-label="Zap Icon" />,
    borderColor: "border-[#00ffff]/20",
    textColor: "text-[#00ffff]",
    description:
      "The Neon Syndicate views the Chrome Collective as dangerously primitive, focusing too much on physical power and not enough on digital evolution. The Collective sees the Syndicate as physically weak and disconnected from reality.",
  },
  {
    title: "Collective vs. Protocol",
    icon: <Sword className="w-4 h-4 mr-2" aria-label="Sword Icon" />,
    borderColor: "border-[#ff0033]/20",
    textColor: "text-[#ff0033]",
    description:
      "The Chrome Collective considers the Shadow Protocol to be cowards who hide in the shadows rather than facing challenges directly. The Protocol views the Collective as predictable brutes whose strength is easily manipulated.",
  },
  {
    title: "Protocol vs. Syndicate",
    icon: <Shield className="w-4 h-4 mr-2" aria-label="Shield Icon" />,
    borderColor: "border-[#00aaff]/20",
    textColor: "text-[#00aaff]",
    description:
      "The Shadow Protocol and Neon Syndicate frequently clash over information control and espionage. The Protocol infiltrates Syndicate networks, while the Syndicate works to expose Protocol operations through digital surveillance.",
  },
];

export default function FactionRelations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cardStyles =
    "bg-[#0c1624] p-4 rounded-lg border text-gray-400 text-sm";
  const containerStyles =
    "mt-12 bg-[#162a43]/50 border border-[#00ffff]/20 rounded-lg p-6";

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className={containerStyles}
      >
        <h3 className="text-xl font-bold text-white mb-4">Faction Relations</h3>
        <p className="text-gray-400 mb-6">
          The three factions exist in a state of uneasy tension, with shifting
          alliances and conflicts based on their competing interests:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {factionRelations.map((relation, index) => (
            <div
              key={index}
              className={`${cardStyles} ${relation.borderColor}`}
            >
              <h4
                className={`${relation.textColor} font-medium mb-2 flex items-center`}
              >
                {relation.icon}
                {relation.title}
              </h4>
              <p>{relation.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}