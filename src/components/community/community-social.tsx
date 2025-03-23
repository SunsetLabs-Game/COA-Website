"use client"

import { motion } from "framer-motion"
import { Twitter, Instagram, Youtube, Twitch, DiscIcon as Discord } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CommunitySocial() {
  const socialLinks = [
    {
      platform: "Discord",
      icon: <Discord className="w-5 h-5" />,
      handle: "Join our server",
      url: "#",
      color: "bg-[#5865F2]/20 text-[#5865F2]",
      buttonColor: "bg-[#5865F2] hover:bg-[#5865F2]/80",
    },
    {
      platform: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      handle: "@CitizenOfArcanis",
      url: "#",
      color: "bg-[#1DA1F2]/20 text-[#1DA1F2]",
      buttonColor: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/80",
    },
    {
      platform: "Twitch",
      icon: <Twitch className="w-5 h-5" />,
      handle: "CitizenOfArcanis",
      url: "#",
      color: "bg-[#9146FF]/20 text-[#9146FF]",
      buttonColor: "bg-[#9146FF] hover:bg-[#9146FF]/80",
    },
    {
      platform: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      handle: "Citizen of Arcanis",
      url: "#",
      color: "bg-[#FF0000]/20 text-[#FF0000]",
      buttonColor: "bg-[#FF0000] hover:bg-[#FF0000]/80",
    },
    {
      platform: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      handle: "@citizenofarcanisgame",
      url: "#",
      color: "bg-[#E1306C]/20 text-[#E1306C]",
      buttonColor: "bg-[#E1306C] hover:bg-[#E1306C]/80",
    },
  ]

  return (
    <section>
      <div className="bg-[#0c1624] border border-[#162a43] rounded-lg overflow-hidden">
        <div className="p-4 border-b border-[#162a43]">
          <h2 className="text-lg font-bold text-white">Connect With Us</h2>
        </div>

        <div className="p-4 space-y-4">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.platform}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center"
            >
              <div className={`p-2 rounded-full mr-3 ${social.color}`}>{social.icon}</div>

              <div className="flex-grow">
                <div className="font-medium text-white">{social.platform}</div>
                <div className="text-xs text-gray-400">{social.handle}</div>
              </div>

              <Link href={social.url}>
                <Button className={`text-white ${social.buttonColor}`} size="sm">
                  Follow
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

