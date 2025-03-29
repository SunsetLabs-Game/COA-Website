"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0c1624]/90 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLANCO%20PNG-mWusWcCIl2oz2CL9Pt347SVAC3rupv.png"
              alt="Citizen of Arcanis"
              width={200}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors ${isActive("/") ? "text-[#00aaff]" : "text-white hover:text-[#00aaff]"}`}
            >
              Home
            </Link>
            <Link
              href="/features"
              className={`transition-colors ${isActive("/features") ? "text-[#00aaff]" : "text-white hover:text-[#00aaff]"}`}
            >
              Features
            </Link>
            <Link
              href="/factions"
              className={`transition-colors ${isActive("/factions") ? "text-[#00aaff]" : "text-white hover:text-[#00aaff]"}`}
            >
              Factions
            </Link>
            <Link
              href="/gameplay"
              className={`transition-colors ${isActive("/gameplay") ? "text-[#00aaff]" : "text-white hover:text-[#00aaff]"}`}
            >
              Gameplay
            </Link>
            <Link
              href="/marketplace"
              className={`transition-colors ${isActive("/marketplace") ? "text-[#00aaff]" : "text-white hover:text-[#00aaff]"}`}
            >
              Marketplace
            </Link>
            <Link
              href="/community"
              className={`transition-colors ${isActive("/community") ? "text-[#00aaff]" : "text-white hover:text-[#00aaff]"}`}
            >
              Community
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-[#00aaff] hover:bg-[#00aaff]/80 text-white">Play Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0c1624] border-t border-[#162a43] mt-3">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`py-2 transition-colors ${isActive("/") ? "text-[#00aaff]" : "text-white hover:text-[#00aaff]"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/features"
                className={`py-2 transition-colors ${isActive("/features") ? "text-[#00aaff]" : "text-white hover:text-[#00aaff]"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/factions"
                className={`py-2 transition-colors ${isActive("/factions") ? "text-[#00aaff]" : "text-white hover:text-[#00aaff]"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Factions
              </Link>
              <Link
                href="/gameplay"
                className={`py-2 transition-colors ${isActive("/gameplay") ? "text-[#00aaff]" : "text-white hover:text-[#00aaff]"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gameplay
              </Link>
              <Link
                href="/marketplace"
                className={`py-2 transition-colors ${isActive("/marketplace") ? "text-[#00aaff]" : "text-white hover:text-[#00aaff]"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Marketplace
              </Link>
              <Link
                href="/community"
                className={`py-2 transition-colors ${isActive("/community") ? "text-[#00aaff]" : "text-white hover:text-[#00aaff]"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Community
              </Link>
              <Button className="bg-[#00aaff] hover:bg-[#00aaff]/80 text-white w-full">Play Now</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
