"use client"

import { useEffect, useRef } from "react"

export function DigitalRainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    class RainDrop {
      x: number
      y: number
      speed: number
      length: number
      color: string
      width: number
      active: boolean

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * -canvasHeight
        this.speed = Math.random() * 1.5 + 0.5
        this.length = Math.random() * 80 + 40
        this.color =
          Math.random() > 0.6
            ? `rgba(0, 255, 255, ${Math.random() * 0.4 + 0.3})`
            : `rgba(100, 150, 200, ${Math.random() * 0.3 + 0.2})`
        this.width = Math.random() > 0.8 ? 2 : 1
        this.active = true
      }

      update(canvasHeight: number) {
        this.y += this.speed

        if (this.y > canvasHeight) {
          this.active = false
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath()
        context.moveTo(this.x, this.y)
        context.lineTo(this.x, this.y - this.length)
        context.strokeStyle = this.color
        context.lineWidth = this.width
        context.stroke()
      }
    }

    let raindrops: RainDrop[] = []

    for (let i = 0; i < 50; i++) {
      raindrops.push(new RainDrop(canvas.width, canvas.height))
    }

    const animate = () => {
      ctx.fillStyle = "rgba(11, 27, 50, 0.3)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      raindrops.forEach((drop) => {
        drop.update(canvas.height)
        drop.draw(ctx)
      })

      // Remove inactive raindrops
      raindrops = raindrops.filter((drop) => drop.active)

      if (Math.random() > 0.9 || raindrops.length < 30) {
        raindrops.push(new RainDrop(canvas.width, canvas.height))
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-60"
      style={{ zIndex: 0 }}
    />
  )
}

