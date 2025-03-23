"use client"

import { useEffect, useRef, useState } from "react"

export default function ElectricCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [prevMousePosition, setPrevMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPrevMousePosition(mousePosition)
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mousePosition])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Draw electric trail
    const drawElectricTrail = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (prevMousePosition.x === 0 && prevMousePosition.y === 0) return

      // Draw lightning between previous and current position
      const points = generateLightningPoints(
        prevMousePosition.x,
        prevMousePosition.y,
        mousePosition.x,
        mousePosition.y,
        5,
      )

      ctx.beginPath()
      ctx.moveTo(points[0].x, points[0].y)

      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y)
      }

      ctx.strokeStyle = "#00ffff"
      ctx.lineWidth = 2
      ctx.stroke()

      // Add glow effect
      ctx.beginPath()
      ctx.moveTo(points[0].x, points[0].y)

      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y)
      }

      ctx.strokeStyle = "rgba(0, 255, 255, 0.3)"
      ctx.lineWidth = 6
      ctx.stroke()

      // Add particles at the cursor position
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.arc(
          mousePosition.x + (Math.random() * 10 - 5),
          mousePosition.y + (Math.random() * 10 - 5),
          Math.random() * 2 + 1,
          0,
          Math.PI * 2,
        )
        ctx.fillStyle = "#00ffff"
        ctx.fill()
      }
    }

    const generateLightningPoints = (x1: number, y1: number, x2: number, y2: number, displacementFactor: number) => {
      const points = [{ x: x1, y: y1 }]
      let currentX = x1
      let currentY = y1
      const targetX = x2
      const targetY = y2

      const distance = Math.sqrt(Math.pow(targetX - currentX, 2) + Math.pow(targetY - currentY, 2))
      const numSegments = Math.floor(distance / 10)

      if (numSegments <= 1) {
        points.push({ x: targetX, y: targetY })
        return points
      }

      const dx = (targetX - currentX) / numSegments
      const dy = (targetY - currentY) / numSegments

      for (let i = 0; i < numSegments - 1; i++) {
        currentX += dx
        currentY += dy

        const displaceX = (Math.random() - 0.5) * displacementFactor * 2
        const displaceY = (Math.random() - 0.5) * displacementFactor * 2

        points.push({
          x: currentX + displaceX,
          y: currentY + displaceY,
        })
      }

      points.push({ x: targetX, y: targetY })
      return points
    }

    const animationFrame = requestAnimationFrame(function animate() {
      drawElectricTrail()
      requestAnimationFrame(animate)
    })

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrame)
    }
  }, [mousePosition, prevMousePosition])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" />
}