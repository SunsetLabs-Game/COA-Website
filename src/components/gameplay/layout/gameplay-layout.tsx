"use client"

import type { ReactNode } from "react"

interface GameplayLayoutProps {
  children: ReactNode
}

export default function GameplayLayout({ children }: GameplayLayoutProps) {
  return <main className="min-h-screen bg-[#0e1a2b]">{children}</main>
}

