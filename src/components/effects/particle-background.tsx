"use client"

import { useEffect, useRef } from "react"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    interface Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      alpha: number
    }

    const particles: Particle[] = []
    const count = 60

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() - 0.5,
        speedY: Math.random() - 0.5,
        alpha: Math.random() * 0.5 + 0.5,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 255, 255, ${p.alpha})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    const animation = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animation)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" />
  )
}
