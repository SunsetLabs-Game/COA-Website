"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CommunityEvents() {
  const events = [
    {
      id: "1",
      title: "Battle for Neon District",
      description: "Compete in the ultimate faction showdown for control of the Neon District.",
      date: "March 20, 2025",
      time: "8:00 PM UTC",
      location: "Neon District Arena",
      participants: 128,
      maxParticipants: 256,
      rewards: "50,000 STRK + Legendary Gear",
    },
    {
      id: "2",
      title: "Developer Q&A Session",
      description: "Join our developers for a live Q&A about upcoming features and updates.",
      date: "March 25, 2025",
      time: "6:00 PM UTC",
      location: "Virtual Auditorium",
      participants: 342,
      maxParticipants: 1000,
      rewards: "Limited Edition Avatar",
    },
    {
      id: "3",
      title: "Marketplace Trading Event",
      description: "Special discounts and rare items will be available during this limited-time event.",
      date: "April 1, 2025",
      time: "All Day",
      location: "Central Marketplace",
      participants: 1256,
      maxParticipants: null,
      rewards: "Trading Bonuses",
    },
  ]

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
        <Link
          href="/community/events"
          className="text-[#00aaff] hover:text-[#00ffff] flex items-center transition-colors"
        >
          View all <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-[#0c1624] border border-[#162a43] rounded-lg overflow-hidden hover:border-[#00aaff]/50 transition-all duration-300"
          >
            <div className="p-6">
              <div className="bg-[#00aaff]/10 p-3 rounded-lg inline-block mb-4">
                <Calendar className="w-6 h-6 text-[#00aaff]" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{event.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm">
                  <Calendar className="w-4 h-4 text-[#00aaff] mr-2" />
                  <span className="text-gray-300">
                    {event.date} • {event.time}
                  </span>
                </div>

                <div className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 text-[#00aaff] mr-2" />
                  <span className="text-gray-300">{event.location}</span>
                </div>

                <div className="flex items-center text-sm">
                  <Users className="w-4 h-4 text-[#00aaff] mr-2" />
                  <span className="text-gray-300">
                    {event.participants} / {event.maxParticipants || "∞"} participants
                  </span>
                </div>
              </div>

              <div className="bg-[#162a43] p-3 rounded-lg mb-4">
                <div className="text-xs text-gray-400 mb-1">Rewards:</div>
                <div className="text-[#00ffff]">{event.rewards}</div>
              </div>

              <Link href={`/community/events/${event.id}`}>
                <Button 
                  className="w-full bg-black border-[#00aaff]/30 text-[#00ffff] hover:bg-black/80 hover:text-[#00ffff] transition-all duration-300 hover:border-[#00ffff] hover:shadow-[0_0_8px_rgba(0,255,255,0.5)] hover:scale-105"
                >
                  Join Event
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

