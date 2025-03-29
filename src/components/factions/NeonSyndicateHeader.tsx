"use client";

import { motion } from "framer-motion";

interface NeonSyndicateHeaderProps {
  variants: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
}

export function NeonSyndicateHeader({ variants }: NeonSyndicateHeaderProps) {
  return (
    <motion.div variants={variants}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
        Masters of the Digital Realm
      </h2>
      <p className="text-gray-300 mb-6 max-w-3xl">
        The Neon Syndicate emerged from the collapse of the old financial system,
        when a group of elite hackers and AI specialists seized control of the
        digital infrastructure. Today, they are the undisputed rulers of the
        information economy, controlling data flows, cryptocurrency markets, and
        the digital backbone of Arcanis.
      </p>
    </motion.div>
  );
}