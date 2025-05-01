import Link from "next/link"

const updates = [
  {
    title: "New Faction Territories in Update 2.5",
    tag: { name: "gameplay", color: "text-red-500" },
    time: "3 days ago",
    href: "/help/updates/faction-territories",
  },
  {
    title: "Changes to the Marketplace Trading System",
    tag: { name: "marketplace", color: "text-cyan-400" },
    time: "1 week ago",
    href: "/help/updates/marketplace-changes",
  },
  {
    title: "Important Security Update for All Players",
    tag: { name: "account", color: "text-cyan-400" },
    time: "2 weeks ago",
    href: "/help/updates/security-update",
  },
]

export default function RecentUpdates() {
  return (
    <section className="bg-[#1a2235] border border-[#2a3347] rounded-lg p-6 animate-fade-in animation-delay-300">
      <h2 className="text-2xl font-bold mb-6">Recent Updates</h2>
      <div className="space-y-6">
        {updates.map((update) => (
          <Link
            href={update.href}
            key={update.title}
            className="block p-4 hover:bg-[#232b3d] rounded-lg transition-colors"
          >
            <h3 className="font-medium mb-2">{update.title}</h3>
            <div className="flex items-center gap-4">
              <span className={`text-xs ${update.tag.color}`}>{update.tag.name}</span>
              <span className="text-xs text-gray-400">{update.time}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
