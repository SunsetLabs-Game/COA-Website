"use client"

import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  variant?: "default" | "outline"
  className?: string
  onClick?: () => void
}

export function Button({ children, variant = "default", className = "", onClick }: ButtonProps) {
  const baseStyle = `rounded-md font-bold py-2 px-4 transition-colors duration-300`

  const variantStyles = {
    default: `bg-[#00aaff] hover:bg-[#00aaff]/80 text-white border border-[#00aaff]/30 shadow-[0_0_15px_rgba(0,170,255,0.5)] hover:shadow-[0_0_25px_rgba(0,170,255,0.8)]`,
    outline: `bg-transparent text-[#00ffff] border border-[#00ffff]/50 hover:bg-[#00ffff]/10 shadow-[0_0_10px_rgba(0,255,255,0.3)] hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]`,
  }

  return (
    <button onClick={onClick} className={`${baseStyle} ${variantStyles[variant]} ${className}`}>
      {children}
    </button>
  )
}

