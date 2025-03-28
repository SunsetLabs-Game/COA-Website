"use client"

import { motion } from "framer-motion"
import { Trophy, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CommunityLeaderboard() {
  const topPlayers = [
    {
      id: "1",
      name: "NeonShadow",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile.jpg-wsgdi5GgAQvFNXfyOarqqM6aS7c5NH.jpeg",
      faction: "Neon Syndicate",
      score: 12568,
      rank: 1,
    },
    {
      id: "2",
      name: "QuantumRider",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile.jpg-wsgdi5GgAQvFNXfyOarqqM6aS7c5NH.jpeg",
      faction: "Chrome Collective",
      score: 11982,
      rank: 2,
    },
    {
      id: "3",
      name: "CyberHunter_42",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile.jpg-wsgdi5GgAQvFNXfyOarqqM6aS7c5NH.jpeg",
      faction: "Shadow Protocol",
      score: 10756,
      rank: 3,
    },
    {
      id: "4",
      name: "NightBlade99",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile.jpg-wsgdi5GgAQvFNXfyOarqqM6aS7c5NH.jpeg",
      faction: "Neon Syndicate",
      score: 9845,
      rank: 4,
    },
    {
      id: "5",
      name: "ElectricDreamer",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile.jpg-wsgdi5GgAQvFNXfyOarqqM6aS7c5NH.jpeg",
      faction: "Chrome Collective",
      score: 9321,
      rank: 5,
    },
  ]

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "text-yellow-400"
      case 2:
        return "text-gray-300"
      case 3:
        return "text-amber-600"
      default:
        return "text-gray-500"
    }
  }

  return (
    <section>
      <div className="bg-[#0c1624] border border-[#162a43] rounded-lg overflow-hidden">
        <div className="p-4 border-b border-[#162a43] flex justify-between items-center">
          <div className="flex items-center">
            <Trophy className="w-5 h-5 text-[#00aaff] mr-2" />
            <h2 className="text-lg font-bold text-white">Top Players</h2>
          </div>

          <Link
            href="/community/leaderboard"
            className="text-[#00aaff] hover:text-[#00ffff] flex items-center text-sm transition-colors"
          >
            View all <ArrowRight className="ml-1 w-3 h-3" />
          </Link>
        </div>

        <div>
          {topPlayers.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border-b border-[#162a43] last:border-b-0 hover:bg-[#162a43]/30 transition-colors"
            >
              <Link href={`/community/players/${player.id}`} className="block p-4">
                <div className="flex items-center">
                  <div className={`font-bold mr-3 w-6 text-center ${getRankColor(player.rank)}`}>{player.rank}</div>

                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-[#00aaff]">
                    <Image
                      src={player.avatar || "/placeholder.svg"}
                      alt={player.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-grow">
                    <div className="font-medium text-white">{player.name}</div>
                    <div className="text-xs text-[#00aaff]">{player.faction}</div>
                  </div>

                  <div className="text-right">
                    <div className="font-bold text-white">{player.score.toLocaleString()}</div>
                    <div className="text-xs text-gray-400">points</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

