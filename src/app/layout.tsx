import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import StarknetProvider from "@/context/starknet-provider"
import { MetaMaskProvider } from "../context/metamask"; 
import { Toaster } from "react-hot-toast"
import ElectricCursor from "@/components/effects/electric-cursor"
import Navbar from "@/components/navbar/navbar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Citizen of Arcanis",
  description: "Immerse yourself in the cyberpunk world of Arcanis",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-[#0e1a2b]`}
      >
        <div className="relative z-10">
          <StarknetProvider>
            <MetaMaskProvider>
              <Navbar />
              {children}
              <Toaster />
            </MetaMaskProvider>
          </StarknetProvider>
        </div>
        <ElectricCursor />
      </body>
    </html>
  )
}
