import { motion } from "framer-motion";
import Image from "next/image";
import { Sword } from "lucide-react";
interface FactionTrait {
  label: string;
  value: string;
}

const factionTraits: FactionTrait[] = [
  {
    label: "HEADQUARTERS",
    value: "The Forge (Industrial Zone)",
  },
  {
    label: "POPULATION",
    value: "~95,000 members",
  },
  {
    label: "PRIMARY RESOURCE",
    value: "Rare Metals & Alloys",
  },
  {
    label: "FACTION CURRENCY",
    value: "ChromeCoin (CHRM)",
  },
];

export function ChromeCollectiveProfile() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full py-12"
    >
      <div className="w-full max-w-6xl px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Content */}
            <div className="flex-1">
              {/* Faction Header */}
              <div className="mb-8">
                <div className="inline-flex items-center text-red-7 font-semibold text-red-600 px-4 py-2 rounded-full bg-pink-950/50 border border-red-800/30 mb-4">
                  <Sword className="w-4 h-4  mr-2" />
                  <span className=" text-sm">Chrome Collective</span>
                </div>
                <h1 className="text-4xl font-bold text-white mb-6">
                  Forged in Steel and Power
                </h1>

                {/* Description Paragraphs */}
                <div className="space-y-4 text-gray-400">
                  <p>
                    {`The Chrome Collective was founded by former military
                    supersoldiers and industrial workers who saw the potential of
                    cybernetic enhancement to transcend human limitations. They
                    believe that humanity's future lies in the perfect fusion of
                    flesh and machine, creating a new species that is stronger,
                    faster, and more resilient.`}
                  </p>
                  <p>
                    Members of the Collective view the human body as an
                    imperfect vessel that can be improved through technology.
                    They constantly seek to push the boundaries of augmentation,
                    replacing biological systems with mechanical alternatives
                    that offer superior performance.
                  </p>
                </div>
              </div>

              {/* Faction Traits */}
              <div className="mt-8 bg-[rgb(var(--background-start-rgb))] border-[0.5px] border-red-600/30  border-t-2 py-7 px-5">
                <h2 className="text-xl font-semibold mb-4 text-white">
                  Faction Traits
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4  rounded-lg  ">
                  {factionTraits.map((trait) => (
                    <div
                      key={trait.label}
                      className="space-y-1 bg-[#0B1B32] brightness-125 p-2 rounded-lg"
                    >
                      {/* <div key={trait.label} className='space-y-1 bg-[#0B1B32]'> */}
                      <div className="text-xs text-gray-400">{trait.label}</div>
                      <div className="text-white">{trait.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="lg:flex-1 w-full h-[400px] justify-center items-center my-auto relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder_image.svg"
                alt="Chrome Collective Industrial Zone"
                fill
                className="object-cover"
                priority
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B32]  via-[#0B1B32]/20 to-transparent" />

              {/* Territory Information */}
              <div className="mt-8 p-6 absolute bottom-3 left-3 right-3 rounded-lg bg-[#0B1B32]/80 border border-red-600/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-600"></div>
                  <h3 className="text-red-600 uppercase text-sm tracking-wider font-semibold">
                    Chrome Collective Territory
                  </h3>
                </div>
                <p className="text-gray-400">
                  The Industrial Zone is a sprawling complex of factories,
                  research facilities, and training grounds where the Collective
                  develops and implements their augmentation technologies.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
