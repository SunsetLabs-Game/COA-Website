"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface NeonSyndicateTerritoryProps {
  variants: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
}

export function NeonSyndicateTerritory({
  variants,
}: NeonSyndicateTerritoryProps) {
  return (
    <motion.div variants={variants}>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Neon Syndicate Territory
          </h2>
          <p className="text-gray-300 md:pr-6 mt-2">
            The Neon District is the technological heart of Arcanis, where massive
            data centers and holographic interfaces dominate the landscape. Here,
            the Syndicate’s influence is absolute.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/neon-district.jpg"
            alt="Neon District"
            width={500}
            height={256}
            className="rounded-lg object-cover w-full h-64"
          />
        </div>
      </div>
    </motion.div>
  );
}