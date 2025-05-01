import { BookOpen, Shield, Gamepad2, ShoppingCart, Users, Wrench, CreditCard, FileText } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    icon: <BookOpen className="h-8 w-8 text-cyan-400" />,
    title: "Getting Started",
    description: "New to Arcanis? Start here for basic guides and tutorials.",
    articles: 24,
    href: "/help/getting-started",
  },
  {
    icon: <Shield className="h-8 w-8 text-cyan-400" />,
    title: "Account & Security",
    description: "Manage your account, security settings, and privacy options.",
    articles: 18,
    href: "/help/account-security",
  },
  {
    icon: <Gamepad2 className="h-8 w-8 text-red-500" />,
    title: "Gameplay Guides",
    description: "Combat, missions, progression, and other gameplay mechanics.",
    articles: 42,
    href: "/help/gameplay-guides",
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-cyan-400" />,
    title: "Marketplace & Trading",
    description: "How to buy, sell, trade, and craft items in Arcanis.",
    articles: 16,
    href: "/help/marketplace-trading",
  },
  {
    icon: <Users className="h-8 w-8 text-cyan-400" />,
    title: "Community & Social",
    description: "Guilds, events, communication, and player interaction.",
    articles: 12,
    href: "/help/community-social",
  },
  {
    icon: <Wrench className="h-8 w-8 text-cyan-400" />,
    title: "Technical Support",
    description: "Troubleshooting, system requirements, and performance issues.",
    articles: 30,
    href: "/help/technical-support",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-cyan-400" />,
    title: "Billing & Subscriptions",
    description: "Payment methods, subscriptions, and purchase issues.",
    articles: 14,
    href: "/help/billing-subscriptions",
  },
  {
    icon: <FileText className="h-8 w-8 text-red-500" />,
    title: "Rules & Policies",
    description: "Code of conduct, terms of service, and reporting violations.",
    articles: 8,
    href: "/help/rules-policies",
  },
]

export default function HelpCategories() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8">Help Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link
            href={category.href}
            key={category.title}
            className="bg-[#1a2235] border border-[#2a3347] rounded-lg p-6 hover:border-cyan-500 transition-all duration-300 animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col h-full">
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-lg font-bold mb-2">{category.title}</h3>
              <p className="text-sm text-gray-400 mb-4 flex-grow">{category.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm text-cyan-400">{category.articles} articles</span>
                <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
