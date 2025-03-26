"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function CommunityHero() {
  return (
    <div className="relative bg-[#0c1624] border-b border-[#162a43]">

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffff]">Arcanis Community</h1>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Connect with fellow citizens, share strategies, and stay updated on the latest events in the world of
              Arcanis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  placeholder="Search the community..."
                  className="bg-[#162a43] border-[#00aaff]/30 pl-10 pr-4 py-6 w-full text-white placeholder:text-gray-500 focus:border-[#00aaff] transition-colors"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              </div>

              <Button className="bg-[#00aaff] hover:bg-[#00aaff]/80 text-white py-6 px-8">Search</Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button 
                variant="outline" 
                className="bg-black border-[#00aaff]/30 text-[#00ffff] hover:bg-black/80 hover:text-[#00ffff] transition-all duration-300 hover:border-[#00ffff] hover:shadow-[0_0_8px_rgba(0,255,255,0.5)] hover:scale-105"
              >
                Latest News
              </Button>
              <Button 
                variant="outline" 
                className="bg-black border-[#00aaff]/30 text-[#00ffff] hover:bg-black/80 hover:text-[#00ffff] transition-all duration-300 hover:border-[#00ffff] hover:shadow-[0_0_8px_rgba(0,255,255,0.5)] hover:scale-105"
              >
                Forums
              </Button>
              <Button 
                variant="outline" 
                className="bg-black border-[#00aaff]/30 text-[#00ffff] hover:bg-black/80 hover:text-[#00ffff] transition-all duration-300 hover:border-[#00ffff] hover:shadow-[0_0_8px_rgba(0,255,255,0.5)] hover:scale-105"
              >
                Events
              </Button>
              <Button 
                variant="outline" 
                className="bg-black border-[#00aaff]/30 text-[#00ffff] hover:bg-black/80 hover:text-[#00ffff] transition-all duration-300 hover:border-[#00ffff] hover:shadow-[0_0_8px_rgba(0,255,255,0.5)] hover:scale-105"
              >
                Leaderboards
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

