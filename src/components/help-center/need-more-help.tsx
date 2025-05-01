import { MessageSquare, Video } from "lucide-react"
import Link from "next/link"

export default function NeedMoreHelp() {
  return (
    <section className="bg-[#1a2235] border border-[#2a3347] rounded-lg p-6 animate-fade-in animation-delay-400">
      <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
      <p className="text-gray-400 text-sm mb-6">
        Can't find what you're looking for? Our support team is ready to assist you.
      </p>
      <div className="space-y-3">
        <Link
          href="/support"
          className="flex items-center justify-center gap-2 w-full bg-[#3b82f6] hover:bg-blue-600 text-white py-3 px-4 rounded-md transition-colors"
        >
          <MessageSquare className="h-5 w-5" />
          Contact Support
        </Link>
        <Link
          href="/tutorials"
          className="flex items-center justify-center gap-2 w-full bg-transparent hover:bg-[#232b3d] text-white border border-[#2a3347] py-3 px-4 rounded-md transition-colors"
        >
          <Video className="h-5 w-5" />
          Video Tutorials
        </Link>
      </div>
    </section>
  )
}
