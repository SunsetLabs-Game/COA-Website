import Image from "next/image"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import DottedBorder from "../effects/dotted-border"

type Testimonial = {
  id: number
  username: string
  faction: string
  factionColor: string
  textColor: string
  quote: string
  avatar: string
  imageFilter: string
}

export default function CommunitySection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      username: "CyberHunter_42",
      faction: "Neon Syndicate",
      factionColor: "border-blue-500",
      textColor: "text-[#0DABFF]",
      quote: "The faction wars are intense! I've never experienced such adrenaline in any other game.",
      avatar: "/images/profile.jpg",
      imageFilter: "brightness(1) contrast(1.2) hue-rotate(180deg)",
    },
    {
      id: 2,
      username: "QuantumRider",
      faction: "Chrome Collective",
      factionColor: "border-red-500",
      textColor: "text-red-400",
      quote: "My cyber companions have saved me countless times. The customization options are incredible!",
      avatar: "/images/profile.jpg",
      imageFilter: "brightness(1) contrast(1.2) hue-rotate(320deg) saturate(1.5)",
    },
    {
      id: 3,
      username: "NightBlade99",
      faction: "Shadow Protocol",
      factionColor: "border-gray-600",
      textColor: "text-gray-400",
      quote: "The Black Market is where the real action happens. High risk, but the rewards are worth it!",
      avatar: "/images/profile.jpg",
      imageFilter: "brightness(0.8) contrast(1.4) grayscale(0.5)",
    },
  ]

  return (
    <section className="flex justify-center w-full py-16 px-4">
      <div className="relative z-30 w-full max-w-6xl bg-black/20 rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0DABFF]">Join Our Community</h2>
        <p className="text-gray-300 max-w-3xl mb-12 text-center">
          Connect with thousands of players in the most vibrant cyberpunk community.
        </p>
        <DottedBorder className="w-full mb-12 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="rounded-lg border border-[#1E3A5F] p-6 overflow-hidden transition-all duration-300 hover:border-[#0DABFF] hover:scale-105 hover:shadow-[0_0_15px_rgba(13,171,255,0.3)] group"
                style={{ background: "linear-gradient(135deg, #0D1E33 0%, #152A46 100%)" }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-full overflow-hidden border-2 ${testimonial.factionColor} flex-shrink-0`}
                  >
                    <div style={{ filter: testimonial.imageFilter }}>
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.username}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-bold">{testimonial.username}</h3>
                    <p className={`text-sm ${testimonial.textColor}`}>{testimonial.faction}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic text-left">&quot;{testimonial.quote}&quot;</p>
              </div>
            ))}
          </div>
        </DottedBorder>
        <Link href="https://discord.gg/citizensofarcanis" target="_blank" rel="noopener noreferrer">
          <button className="bg-[#0DABFF] relative z-30 text-white px-8 py-3 rounded-md flex items-center gap-2 hover:bg-[#0D9AEE] transition-all duration-300">
            <MessageCircle size={20} />
            Join Our Discord
          </button>
        </Link>
      </div>
    </section>
  )
}

