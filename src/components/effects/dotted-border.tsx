"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface DottedBorderProps {
  children: React.ReactNode
  className?: string
}

export default function DottedBorder({ children, className = "" }: DottedBorderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match parent container
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation variables
    const dots: { x: number; y: number; angle: number; speed: number }[] = []
    const dotCount = 30 // Reduced dot count for subtlety
    const dotRadius = 1.5 // Smaller dots
    const dotColor = "rgba(13, 171, 255, 0.6)" // More transparent dots

    // Initialize dots - position them around the border
    for (let i = 0; i < dotCount; i++) {
      // Distribute dots evenly around the perimeter
      let x, y
      const side = Math.floor(Math.random() * 4) // 0: top, 1: right, 2: bottom, 3: left

      if (side === 0) {
        // top
        x = Math.random() * canvas.width
        y = Math.random() * 10
      } else if (side === 1) {
        // right
        x = canvas.width - Math.random() * 10
        y = Math.random() * canvas.height
      } else if (side === 2) {
        // bottom
        x = Math.random() * canvas.width
        y = canvas.height - Math.random() * 10
      } else {
        // left
        x = Math.random() * 10
        y = Math.random() * canvas.height
      }

      const angle = Math.random() * Math.PI * 2
      dots.push({
        x,
        y,
        angle,
        speed: 0.1 + Math.random() * 0.2, // Slower movement
      })
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw dots
      dots.forEach((dot) => {
        // Move dot
        dot.x += Math.cos(dot.angle) * dot.speed
        dot.y += Math.sin(dot.angle) * dot.speed

        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.width) {
          dot.angle = Math.PI - dot.angle
        }
        if (dot.y < 0 || dot.y > canvas.height) {
          dot.angle = -dot.angle
        }

        // Draw dot
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2)
        ctx.fillStyle = dotColor
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className={`relative ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

