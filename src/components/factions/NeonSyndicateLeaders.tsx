"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import cipher_img from "../../../public/images/cipher.jpg";
import nova_img from "../../../public/images/nova.jpg";
import pulse_img from "../../../public/images/pulse.jpg";

interface NeonSyndicateLeadersProps {
  variants: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
  leaderCardVariants: {
    hover: { scale: number; transition: { duration: number } };
  };
}

export function NeonSyndicateLeaders({
  variants,
  leaderCardVariants,
}: NeonSyndicateLeadersProps) {
  return (
    <motion.div variants={variants}>
      <h2 className="text-2xl font-semibold mb-4 text-white text-center mt-20">
        Key Leaders
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cipher */}
        <motion.div
          className="p-4 bg-[#09162B] bg-opacity-80 border border-cyan-400 border-opacity-30 rounded-lg"
          whileHover="hover"
          variants={leaderCardVariants}
        >
          <h3 className="text-xl font-bold text-cyan-400">Cipher</h3>
          <p className="text-gray-400 mb-2">The Architect</p>
          <div className="h-40 rounded-lg overflow-hidden mb-4">
            <Image
              src={cipher_img}
              alt="Cipher"
              width={300}
              height={160}
              className="w-full h-full object-cover "
            />
          </div>
          <p className="text-gray-300">
            The enigmatic founder of the Neon Syndicate, whose true identity
            remains unknown. Cipher appears only as a digital avatar in the
            network, issuing directives and shaping the Syndicate’s vision.
          </p>
        </motion.div>

        {/* Nova */}
        <motion.div
          className="p-4 bg-[#09162B] bg-opacity-80 border border-cyan-400 border-opacity-30 rounded-lg"
          whileHover="hover"
          variants={leaderCardVariants}
        >
          <h3 className="text-xl font-bold text-cyan-400">Nova</h3>
          <p className="text-gray-400 mb-2">Head of Operations</p>
          <div className="h-40 rounded-lg overflow-hidden mb-4">
            <Image
              src={nova_img}
              alt="Nova"
              width={300}
              height={160}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <p className="text-gray-300">
            A former corporate AI developer who now leads the day-to-day
            operations. Nova is known for her brilliant tactical mind and
            ruthless efficiency.
          </p>
        </motion.div>

        {/* Pulse */}
        <motion.div
          className="p-4 bg-[#09162B] bg-opacity-80 border border-cyan-400 border-opacity-30 rounded-lg"
          whileHover="hover"
          variants={leaderCardVariants}
        >
          <h3 className="text-xl font-bold text-cyan-400">Pulse</h3>
          <p className="text-gray-400 mb-2">Chief of Security</p>
          <div className="h-40 rounded-lg overflow-hidden mb-4">
            <Image
              src={pulse_img}
              alt="Pulse"
              width={300}
              height={160}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <p className="text-gray-300">
            A legendary hacker who now protects the Syndicate’s digital
            infrastructure. Pulse can detect and neutralize threats before they
            materialize.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}