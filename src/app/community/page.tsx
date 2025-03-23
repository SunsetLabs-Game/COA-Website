import CommunityHero from "@/components/community/community-hero"
import CommunityForums from "@/components/community/community-forums"
import CommunityEvents from "@/components/community/community-events"
import CommunityLeaderboard from "@/components/community/community-leaderboard"
import CommunityNews from "@/components/community/community-news"
import CommunitySocial from "@/components/community/community-social"
import DigitalRainBackground from "@/components/community/community-rain"

export default function CommunityPage() {
  return (
    
    <main className="min-h-screen bg-[#0e1a2b] relative">
      <DigitalRainBackground />
      <div className="pt-24 pb-16 relative z-10">
        <CommunityHero />

        <div className="container mx-auto px-4 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CommunityNews />
              <CommunityForums />
              <CommunityEvents />
            </div>

            <div className="space-y-8">
              <CommunityLeaderboard />
              <CommunitySocial />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

