"use client";

import { motion } from "framer-motion";

interface NeonSyndicatePhilosophyProps {
  variants: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
}

export function NeonSyndicatePhilosophy({
  variants,
}: NeonSyndicatePhilosophyProps) {
  return (
    <motion.div variants={variants}>
      <p className="text-gray-300 mb-8 max-w-3xl">
        Members of the Syndicate believe that the physical world is merely a shell
        for the digital realm, where true power resides. They seek to transcend
        physical limitations through technology, creating a world where
        information is the ultimate currency.
      </p>
    </motion.div>
  );
}