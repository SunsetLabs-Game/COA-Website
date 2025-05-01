import { FileText } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    icon: <FileText className="h-5 w-5 text-cyan-400" />,
    title: "How to Change Your Faction",
    tag: { name: "gameplay", color: "text-red-500" },
    views: "24,563 views",
    href: "/help/articles/change-faction",
  },
  {
    icon: <FileText className="h-5 w-5 text-cyan-400" />,
    title: "Resetting Your Password",
    tag: { name: "account", color: "text-cyan-400" },
    views: "18,921 views",
    href: "/help/articles/reset-password",
  },
  {
    icon: <FileText className="h-5 w-5 text-cyan-400" />,
    title: "Advanced Crafting Guide",
    tag: { name: "gameplay", color: "text-red-500" },
    views: "15,782 views",
    href: "/help/articles/advanced-crafting",
  },
  {
    icon: <FileText className="h-5 w-5 text-cyan-400" />,
    title: "Supported Payment Methods",
    tag: { name: "billing", color: "text-cyan-400" },
    views: "12,453 views",
    href: "/help/articles/payment-methods",
  },
  {
    icon: <FileText className="h-5 w-5 text-cyan-400" />,
    title: "Creating and Managing a Guild",
    tag: { name: "community", color: "text-cyan-400" },
    views: "10,876 views",
    href: "/help/articles/manage-guild",
  },
]

export default function PopularArticles() {
  return (
    <section className="bg-[#1a2235] border border-[#2a3347] rounded-lg p-6 animate-fade-in animation-delay-200">
      <h2 className="text-2xl font-bold mb-6">Popular Articles</h2>
      <div className="space-y-6">
        {articles.map((article) => (
          <Link
            href={article.href}
            key={article.title}
            className="flex items-start gap-4 p-4 hover:bg-[#232b3d] rounded-lg transition-colors"
          >
            {article.icon}
            <div className="flex-1">
              <h3 className="font-medium mb-2">{article.title}</h3>
              <div className="flex items-center gap-4">
                <span className={`text-xs ${article.tag.color}`}>{article.tag.name}</span>
                <span className="text-xs text-gray-400">{article.views}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          href="/help/articles"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          View All Articles
          <svg className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
