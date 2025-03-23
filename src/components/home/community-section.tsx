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
      avatar: "/assets/avatar-blue.png",
    },
    {
      id: 2,
      username: "QuantumRider",
      faction: "Chrome Collective",
      factionColor: "border-red-500",
      textColor: "text-red-400",
      quote: "My cyber companions have saved me countless times. The customization options are incredible!",
      avatar: "/assets/avatar-red.png",
    },
    {
      id: 3,
      username: "NightBlade99",
      faction: "Shadow Protocol",
      factionColor: "border-gray-600",
      textColor: "text-gray-400",
      quote: "The Black Market is where the real action happens. High risk, but the rewards are worth it!",
      avatar: "/assets/avatar-black.png",
    },
  ]

  return (
    <section className="w-screen bg-[#0A1B32] py-16 flex flex-col items-center text-center px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0DABFF]">Join Our Community</h2>
      <p className="text-gray-300 max-w-3xl mb-12">
        Connect with thousands of players in the most vibrant cyberpunk community.
      </p>

      <DottedBorder className="w-full max-w-6xl mb-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-lg border border-[#1E3A5F] overflow-hidden transition-all duration-300 hover:border-[#0DABFF] hover:scale-105 hover:shadow-[0_0_15px_rgba(13,171,255,0.3)] group"
              style={{ background: "linear-gradient(135deg, #0D1E33 0%, #152A46 100%)" }}
            >
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-full overflow-hidden border-2 ${testimonial.factionColor} flex-shrink-0`}
                  >
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.username}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-bold">{testimonial.username}</h3>
                    <p className={`text-sm ${testimonial.textColor}`}>{testimonial.faction}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic text-left">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </DottedBorder>

      <Link href="https://discord.gg/citizensofarcanis" target="_blank" rel="noopener noreferrer">
        <button className="bg-[#0DABFF] text-white px-8 py-3 rounded-md flex items-center gap-2 hover:bg-[#0D9AEE] transition-all duration-300">
          <MessageCircle size={20} />
          Join Our Discord
        </button>
      </Link>
    </section>
  )
}

