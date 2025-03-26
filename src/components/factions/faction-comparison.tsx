"use client"

import { motion } from "framer-motion"

interface ComparisonRowProps {
  category: string
  neon: string
  chrome: string
  shadow: string
  index: number
}

const ComparisonRow = ({ category, neon, chrome, shadow, index }: ComparisonRowProps) => {
  return (
    <motion.tr
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      className={index % 2 === 0 ? "bg-[#09162B]" : "bg-[#0B1B32]"}
    >
      <td className="p-4 border-b border-[#0a3653] font-medium">{category}</td>
      <td className="py-4 border-b border-[#0a3653] text-cyan-300"><p className="border-l pl-1 border-[#215e5e]">{neon}</p></td>
      <td className="p-4 border-b border-[#0a3653] text-red-300"><p className="border-l pl-1 border-[#215e5e]">{chrome}</p></td>
      <td className="p-4 border-b border-[#0a3653] text-blue-300"><p className="border-l pl-1 border-[#215e5e]">{shadow}</p></td>
    </motion.tr>
  )
}

export function FactionComparison() {
  const comparisonData = [
    {
      category: "Combat Style",
      neon: "Digital warfare, energy weapons, drone support",
      chrome: "Direct combat, melee specialization, overwhelming force",
      shadow: "Stealth operations, precision strikes, tactical advantage",
    },
    {
      category: "Territory",
      neon: "Neon District, Data Centers, Financial Zones",
      chrome: "Industrial Zone, Manufacturing Plants, Training Grounds",
      shadow: "Underground Network, Border Regions, Infiltrated Areas",
    },
    {
      category: "Resources",
      neon: "Quantum Computing, Digital Currency, Information",
      chrome: "Rare Metals, Manufacturing Capacity, Military Hardware",
      shadow: "Intelligence Networks, Political Influence, Contraband",
    },
    {
      category: "Weaknesses",
      neon: "Physical vulnerability, power dependency, digital countermeasures",
      chrome: "Technological dependency, resource intensive, limited subtlety",
      shadow: "Fragmented leadership, limited direct power, internal secrecy",
    },
    {
      category: "Allies",
      neon: "Tech corporations, AI collectives, data brokers",
      chrome: "Military contractors, industrial workers, mercenary groups",
      shadow: "Political dissidents, smugglers, independent operatives",
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full py-12"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="border border-[#0a3653] rounded-xl p-8 bg-[#0B1B32]"
        >
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-[#00FFFF] mb-4"
          >
            Faction Comparison
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-gray-400 mb-10 max-w-3xl mx-auto"
          >
            Each faction offers distinct advantages and challenges. Compare their strengths and weaknesses to find your
            perfect match in the world of Arcanis.
          </motion.p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left border-b border-[#0a3653] bg-[#0B1B32]">Category</th>
                  <th className="p-4 text-left border-b border-[#0a3653] bg-[#09162B]">
                    <span className="flex items-center text-cyan-400">
                      <span className="mr-2">⚡</span> Neon Syndicate
                    </span>
                  </th>
                  <th className="p-4 text-left border-b border-[#0a3653] bg-[#09162B]">
                    <span className="flex items-center text-red-400">
                      <span className="mr-2">🔴</span> Chrome Collective
                    </span>
                  </th>
                  <th className="p-4 text-left border-b border-[#0a3653] bg-[#09162B]">
                    <span className="flex items-center text-blue-400">
                      <span className="mr-2">⚫</span> Shadow Protocol
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <ComparisonRow
                    key={row.category}
                    category={row.category}
                    neon={row.neon}
                    chrome={row.chrome}
                    shadow={row.shadow}
                    index={index}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 bg-[#09162B] rounded-lg p-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Faction Relations</h3>
            <p className="text-gray-400 mb-6">
              The three factions exist in a state of uneasy tension, with shifting alliances and conflicts based on
              their competing interests:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#0B1B32] p-4 rounded-lg border-l-4 border-cyan-400">
                <h4 className="text-cyan-400 font-semibold mb-2">Syndicate vs. Collective</h4>
                <p className="text-gray-400 text-sm">
                  The Neon Syndicate views the Chrome Collective as dangerously primitive, focusing too much on physical
                  power and not enough on digital evolution.
                </p>
              </div>

              <div className="bg-[#0B1B32] p-4 rounded-lg border-l-4 border-red-400">
                <h4 className="text-red-400 font-semibold mb-2">Collective vs. Protocol</h4>
                <p className="text-gray-400 text-sm">
                  The Chrome Collective considers the Shadow Protocol to be cowards who hide in the shadows rather than
                  facing challenges directly.
                </p>
              </div>

              <div className="bg-[#0B1B32] p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="text-blue-400 font-semibold mb-2">Protocol vs. Syndicate</h4>
                <p className="text-gray-400 text-sm">
                  The Shadow Protocol and Neon Syndicate frequently clash over information control and espionage, with
                  each trying to infiltrate the other.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

