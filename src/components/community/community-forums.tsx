"use client"

import { motion } from "framer-motion"
import { MessageSquare, Users, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CommunityForums() {
  const forumCategories = [
    {
      id: "1",
      name: "General Discussion",
      description: "Chat about anything related to Citizen of Arcanis",
      topics: 324,
      posts: 1876,
      lastActive: "10 minutes ago",
    },
    {
      id: "2",
      name: "Faction Strategies",
      description: "Share tactics and coordinate with your faction members",
      topics: 156,
      posts: 982,
      lastActive: "25 minutes ago",
    },
    {
      id: "3",
      name: "Marketplace Trading",
      description: "Discuss prices, trades, and marketplace strategies",
      topics: 208,
      posts: 1243,
      lastActive: "5 minutes ago",
    },
    {
      id: "4",
      name: "Bug Reports & Support",
      description: "Report issues and get help from the community",
      topics: 97,
      posts: 542,
      lastActive: "1 hour ago",
    },
  ]

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Forums</h2>
        <Link
          href="/community/forums"
          className="text-[#00aaff] hover:text-[#00ffff] flex items-center transition-colors"
        >
          View all <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>

      <div className="bg-[#0c1624] border border-[#162a43] rounded-lg overflow-hidden">
        <div className="p-4 border-b border-[#162a43] grid grid-cols-12 text-gray-400 text-sm hidden md:grid">
          <div className="col-span-6">Forum</div>
          <div className="col-span-2 text-center">Topics</div>
          <div className="col-span-2 text-center">Posts</div>
          <div className="col-span-2 text-center">Last Active</div>
        </div>

        {forumCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="border-b border-[#162a43] last:border-b-0 hover:bg-[#162a43]/30 transition-colors"
          >
            <Link href={`/community/forums/${category.id}`} className="block p-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="col-span-6">
                  <div className="flex items-start">
                    <div className="bg-[#00aaff]/20 p-2 rounded mr-3 hidden sm:block">
                      <MessageSquare className="w-6 h-6 text-[#00aaff]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{category.name}</h3>
                      <p className="text-gray-400 text-sm">{category.description}</p>

                      <div className="flex flex-wrap items-center text-xs text-gray-500 mt-2 md:hidden">
                        <div className="flex items-center mr-4 mb-1">
                          <MessageSquare className="w-3 h-3 mr-1" />
                          <span>{category.topics} topics</span>
                        </div>
                        <div className="flex items-center mr-4 mb-1">
                          <Users className="w-3 h-3 mr-1" />
                          <span>{category.posts} posts</span>
                        </div>
                        <div className="flex items-center mb-1">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{category.lastActive}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-2 text-center hidden md:block">
                  <div className="text-white">{category.topics}</div>
                  <div className="text-xs text-gray-500">topics</div>
                </div>

                <div className="col-span-2 text-center hidden md:block">
                  <div className="text-white">{category.posts}</div>
                  <div className="text-xs text-gray-500">posts</div>
                </div>

                <div className="col-span-2 text-center hidden md:block">
                  <div className="text-[#00aaff]">{category.lastActive}</div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

