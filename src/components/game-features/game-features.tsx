"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

const GameFeatures: React.FC<{ className?: string }> = ({ className }) => {
  const features = [
    { icon: '/icons/sword.png', title: 'Faction Battles', description: 'Join one of three factions and dominate the world through strategic alliances and conquests.' },
    { icon: '/icons/skull.png', title: 'Resurrection & Choices', description: 'Every choice changes your story and shapes your character\'s destiny in the world of Arcanis.' },
    { icon: '/icons/bird.png', title: 'Cybernetic Companions', description: 'Breed and customize your armed pets with unique abilities and combat enhancements.' },
    { icon: '/icons/bag.png', title: 'Marketplace & Black Market', description: 'Buy, sell, and bet with NFTs and resources in both legitimate and underground economies.' },
    { icon: '/icons/rocket.png', title: 'Epic Events', description: 'Earn exclusive rewards in high-risk challenges and limited-time world events.' },
    { icon: '/icons/arrow.png', title: 'Character Progression', description: 'Develop your character through unique skill trees, specializations, and legendary equipment.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`flex flex-col items-center justify-center py-20 mt-16 bg-black/30 rounded-xl shadow-lg ${className}`}>
      <div className="container mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffff]">
            Game Features
            <div className="h-1 w-24 bg-[#00ffff] mx-auto mt-2 animate-pulse"></div>
          </h2>
          <p className="text-lg md:text-xl mt-6 max-w-3xl mx-auto">
            Explore the chaotic world of Arcanis with these groundbreaking features
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-gradient-to-b from-[#1a2b3c] to-[#0d1824] p-6 rounded-lg shadow-lg border border-[#1a2b3c]/50 hover:border-[#00ffff]/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="text-left mb-4 bg-[#071628] p-4 rounded-lg cursor-pointer hover:bg-[#0a1f35] transition-colors duration-300 flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-left text-[#00ffff]">{feature.title}</h3>
              <p className='text-left text-gray-300'>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GameFeatures;
