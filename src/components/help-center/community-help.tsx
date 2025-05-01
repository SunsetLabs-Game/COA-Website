import { Users } from "lucide-react"
import Link from "next/link"

export default function CommunityHelp() {
  return (
    <section className="bg-[#1a2235] border border-[#2a3347] rounded-lg p-6 animate-fade-in animation-delay-500">
      <h2 className="text-2xl font-bold mb-4">Community Help</h2>
      <p className="text-gray-400 text-sm mb-6">
        Join our community forums to get help from other players and share your knowledge.
      </p>
      <Link
        href="/forums"
        className="flex items-center justify-center gap-2 w-full bg-transparent hover:bg-[#232b3d] text-white border border-[#2a3347] py-3 px-4 rounded-md transition-colors"
      >
        <Users className="h-5 w-5" />
        Visit Forums
      </Link>
    </section>
  )
}
