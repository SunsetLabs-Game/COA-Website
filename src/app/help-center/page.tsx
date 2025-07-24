"use client"

import Navbar from "@/components/navbar/navbar"
import HelpCategories from "@/components/help-center/help-categories"
import PopularArticles from "@/components/help-center/popular-articles"
import RecentUpdates from "@/components/help-center/recent-updates"
import NeedMoreHelp from "@/components/help-center/need-more-help"
import CommunityHelp from "@/components/help-center/community-help"
import ParticleBackground from "@/components/effects/particle-background"

export default function HelpCenter() {
  return (
    <div className="min-h-screen text-white relative">
      <ParticleBackground />
      <Navbar />

      <main className="mt-[4rem] container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-12 mt-8 animate-fade-in">
          <h1 className="text-5xl font-bold text-cyan-300 mb-4">Help Center</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find guides, tutorials, and answers to all your questions about Citizen of Arcanis
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto mb-16 animate-fade-in animation-delay-100">
          <div className="flex">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full py-3 px-4 pr-10 rounded-l-md bg-[#1a2235] border border-[#2a3347] focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <button className="bg-[#3b82f6] hover:bg-blue-600 text-white px-6 rounded-r-md transition-colors">
              Search
            </button>
          </div>
        </div>

        <HelpCategories />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          <div className="lg:col-span-2">
            <PopularArticles />
          </div>
          <div className="space-y-8">
            <RecentUpdates />
            <NeedMoreHelp />
            <CommunityHelp />
          </div>
        </div>
      </main>
    </div>
  )
}
