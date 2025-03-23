import type React from "react"
import Link from "next/link"
import { ShoppingCart, Zap, Shield } from "lucide-react"

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div
    className="rounded-lg border border-[#1E3A5F] overflow-hidden transition-all duration-300 hover:border-[#0DABFF]"
    style={{ background: "linear-gradient(135deg, #0D1E33 0%, #152A46 100%)" }}
  >
    <div className="p-6">
      <div className="mb-4">
        <div className="bg-[#0D3B5C] p-3 rounded-full w-12 h-12 flex items-center justify-center">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2 text-left">{title}</h3>
      <p className="text-gray-400 text-left">{description}</p>
    </div>
  </div>
)

export default function MarketplaceSection() {
  return (
    <section className="w-full py-16 flex flex-col items-center text-center px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0DABFF]">Explore Our Marketplace</h2>
      <p className="text-gray-300 max-w-3xl mb-8">
        Discover rare items, powerful weapons, and cutting-edge augmentations to enhance your gameplay experience.
      </p>

      <Link href="/marketplace" className="mb-16">
        <button className="bg-[#0DABFF] text-white px-8 py-3 rounded-md flex items-center gap-2 hover:bg-[#0D9AEE] transition-all duration-300">
          <ShoppingCart size={20} />
          Visit Marketplace
        </button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <FeatureCard
          icon={<ShoppingCart size={24} className="text-[#0DABFF]" />}
          title="Extensive Inventory"
          description="Browse thousands of items across multiple categories, from weapons to augmentations."
        />

        <FeatureCard
          icon={<Zap size={24} className="text-[#0DABFF]" />}
          title="Instant Delivery"
          description="All purchases are instantly delivered to your inventory, ready for immediate use."
        />

        <FeatureCard
          icon={<Shield size={24} className="text-[#0DABFF]" />}
          title="Secure Transactions"
          description="All marketplace transactions are secured with advanced encryption technology."
        />
      </div>
    </section>
  )
}

