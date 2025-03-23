"use client"

import { motion } from "framer-motion"

interface SectionTitleProps {
  title: string
  description: string
  isInView: boolean
}

export default function SectionTitle({ title, description, isInView }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#00ffff]">{title}</h2>
      <p className="text-gray-400 max-w-3xl mx-auto text-lg">{description}</p>
    </motion.div>
  )
}

