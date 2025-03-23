"use client"

import { motion } from "framer-motion"
import { Calendar, MessageSquare, Eye, ArrowRight } from "lucide-react"
import { Button } from "@/components/button"
import Link from "next/link"
import Image from "next/image"

export default function CommunityNews() {
  const newsItems = [
    {
      id: "1",
      title: "Major Update 2.5: New Faction Territories",
      excerpt: "Explore the newly expanded territories and claim your stake in the ongoing faction wars.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-13%2010.31.07%20-%20A%20futuristic%20cyberpunk%20cityscape%20in%20a%20wide%20panoramic%20view.%20The%20scene%20features%20towering%20skyscrapers%20with%20neon%20signs%20glowing%20in%20electric%20blue%2C%20red%2C%20and%20-QCaiJV3KFxBMIT5zi8Qyu0TugWr4nv.webp",
      date: "March 12, 2025",
      comments: 42,
      views: 1256,
      featured: true,
    },
    {
      id: "2",
      title: "New Weapons Added to the Arsenal",
      excerpt: "Check out the latest additions to the marketplace, including the legendary Quantum Edge Blade.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-14%2021.14.29%20-%20A%20cybernetic%20sword%20with%20a%20sleek%20metallic%20design%2C%20glowing%20neon%20edges%2C%20and%20an%20energy-infused%20core.%20The%20handle%20features%20advanced%20technology%20with%20intricat-uX3webqzqpenARg0eGpBdJmOeBZ9DN.webp",
      date: "March 10, 2025",
      comments: 28,
      views: 876,
    },
    {
      id: "3",
      title: "Community Tournament: Battle for Neon District",
      excerpt: "Join the upcoming tournament for a chance to win exclusive gear and STRK tokens.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-14%2021.24.27%20-%20A%20futuristic%20energy%20sniper%20rifle%20with%20a%20sleek%20metallic%20design%2C%20glowing%20neon%20energy%20core%2C%20and%20an%20advanced%20technology%20interface.%20The%20rifle%20features%20an%20e-ZwRtclr31jalYSu9s4eq2KW1oAZDT9.webp",
      date: "March 8, 2025",
      comments: 56,
      views: 1432,
    },
  ]

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Latest News</h2>
        <Link
          href="/community/news"
          className="text-[#00aaff] hover:text-[#00ffff] flex items-center transition-colors"
        >
          View all <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-8">
        {newsItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`bg-[#0c1624] border border-[#162a43] rounded-lg overflow-hidden hover:border-[#00aaff]/50 transition-all duration-300 ${
              item.featured ? "lg:flex" : ""
            }`}
          >
            <div className={`relative ${item.featured ? "lg:w-2/5" : ""}`}>
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={800}
                height={400}
                className="w-full h-48 object-cover"
              />
              {item.featured && (
                <div className="absolute top-2 left-2 bg-[#00aaff] text-white text-xs font-bold px-2 py-1 rounded">
                  Featured
                </div>
              )}
            </div>

            <div className={`p-6 ${item.featured ? "lg:w-3/5" : ""}`}>
              <h3 className="text-xl font-bold text-white mb-2 hover:text-[#00aaff] transition-colors">
                <Link href={`/community/news/${item.id}`}>{item.title}</Link>
              </h3>

              <p className="text-gray-400 mb-4">{item.excerpt}</p>

              <div className="flex flex-wrap items-center text-sm text-gray-500">
                <div className="flex items-center mr-4 mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center mr-4 mb-2">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  <span>{item.comments} comments</span>
                </div>
                <div className="flex items-center mb-2">
                  <Eye className="w-4 h-4 mr-1" />
                  <span>{item.views} views</span>
                </div>
              </div>

              <div className="mt-4">
                <Link href={`/community/news/${item.id}`}>
                  <Button 
                    variant="outline" 
                    className="bg-black border-[#00aaff]/30 text-[#00ffff] hover:bg-black/80 hover:text-[#00ffff] transition-all duration-300 hover:border-[#00ffff] hover:shadow-[0_0_8px_rgba(0,255,255,0.5)] hover:scale-105"
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

