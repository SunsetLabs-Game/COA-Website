"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Eye, Brain, Target, Building2 } from "lucide-react"

interface SpecializationCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

const SpecializationCard = ({ icon, title, description, delay }: SpecializationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-[#09162B] rounded-lg p-6 flex flex-col gap-3"
    >
      <div className="bg-[#0a3653] rounded-full p-3 w-12 h-12 flex items-center justify-center text-[#00FFFF]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  )
}

export function ShadowProtocolSpecializations() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Lightning animation
    let animationFrameId: number
    const particles: { x: number; y: number; vx: number; vy: number; life: number; size: number; color: string }[] = []

    const createLightning = () => {
      // Starting point (bottom right)
      let x = canvas.width - 20
      let y = canvas.height - 20

      // End point (random position in top right quadrant)
      const endX = canvas.width - Math.random() * (canvas.width / 2)
      const endY = Math.random() * (canvas.height / 2)

      // Draw lightning path
      ctx.beginPath()
      ctx.moveTo(x, y)

      // Create jagged path
      while (Math.abs(x - endX) > 10 || Math.abs(y - endY) > 10) {
        const dx = (endX - x) * 0.3
        const dy = (endY - y) * 0.3

        // Add randomness to path
        x += dx + (Math.random() * 20 - 10)
        y += dy + (Math.random() * 20 - 10)

        ctx.lineTo(x, y)

        // Add particles along the path
        if (Math.random() > 0.5) {
          particles.push({
            x,
            y,
            vx: Math.random() * 2 - 1,
            vy: Math.random() * 2 - 1,
            life: Math.random() * 20 + 10,
            size: Math.random() * 2 + 1,
            color: `rgba(0, 255, 255, ${Math.random() * 0.5 + 0.5})`,
          })
        }
      }

      // Finish at end point
      ctx.lineTo(endX, endY)

      // Style and draw the lightning
      ctx.strokeStyle = "#00FFFF"
      ctx.lineWidth = 2
      ctx.globalAlpha = 0.7
      ctx.stroke()

      // Add glow effect
      ctx.shadowColor = "#00FFFF"
      ctx.shadowBlur = 10
      ctx.globalAlpha = 0.3
      ctx.stroke()

      // Reset shadow and alpha
      ctx.shadowBlur = 0
      ctx.globalAlpha = 1
    }

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Occasionally create new lightning (10% chance per frame)
      if (Math.random() < 0.01) {
        createLightning()
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy
        p.life--

        if (p.life <= 0) {
          particles.splice(i, 1)
          i--
          continue
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const specializations = [
    {
      icon: <Eye className="size-5" />,
      title: "Stealth Technology",
      description:
        "Master advanced cloaking systems and noise suppression technology to move unseen and unheard through any environment.",
    },
    {
      icon: <Brain className="size-5" />,
      title: "Espionage Networks",
      description:
        "Develop and maintain networks of informants and surveillance systems to gather critical intelligence across Arcanis.",
    },
    {
      icon: <Target className="size-5" />,
      title: "Precision Operations",
      description:
        "Execute surgical strikes and targeted operations with minimal footprint and maximum impact on strategic objectives.",
    },
    {
      icon: <Building2 className="size-5" />,
      title: "Political Influence",
      description:
        "Manipulate political and economic systems through carefully placed agents and strategic information control.",
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
          className="relative border border-[#0a3653] rounded-xl p-8 bg-[#0B1B32] overflow-hidden"
        >
          {/* Canvas for lightning animation */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl leading-none md:text-4xl font-bold text-center text-[#00FFFF] mb-8 relative z-10"
          >
            Protocol Specializations
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {specializations.map((spec, index) => (
              <SpecializationCard
                key={spec.title}
                icon={spec.icon}
                title={spec.title}
                description={spec.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 bg-[#09162B] rounded-lg p-6 relative z-10"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Joining the Protocol</h3>
            <p className="text-gray-400 leading-relaxed">
              The Shadow Protocol rarely recruits openly. Instead, promising candidates are observed, tested without
              their knowledge, and approached only if they demonstrate the necessary skills and discretion. New members
              undergo extensive training in espionage, information analysis, and covert operations before being assigned
              to a cell within the organization.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

