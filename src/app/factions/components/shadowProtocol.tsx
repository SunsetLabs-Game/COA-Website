import Image from "next/image"
import { ShieldAlert } from "lucide-react"

export default function ShadowProtocol() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#0a1525] to-[#0a0f18] text-gray-200 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                {/* Header */}
                <div className="flex items-center gap-2 text-cyan-400 mb-8">
                    <ShieldAlert size={20} className="text-cyan-400" />
                    <span className="text-sm font-medium">Shadow Protocol</span>
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Masters of Secrecy and Influence</h1>
                        <div className="space-y-6 text-sm md:text-base text-gray-300">
                            <p>
                                The Shadow Protocol emerged from a coalition of intelligence operatives, political dissidents, and
                                corporate spies who recognized that true power lies not in open confrontation, but in controlling
                                information and operating from the shadows. They have built an intricate network of agents and
                                informants throughout Arcanis.
                            </p>
                            <p>
                                Members of the Protocol believe that direct control is inefficient and vulnerable. Instead, they prefer
                                to manipulate events from behind the scenes, using carefully placed agents and strategic information to
                                guide outcomes in their favor without revealing their hand.
                            </p>
                        </div>

                        {/* Faction Traits */}
                        <div className="mt-8 border border-gray-700 rounded-lg overflow-hidden bg-[#0c1729]/50">
                            <div className="p-4 border-b border-gray-700">
                                <h2 className="text-xl font-semibold text-white">Faction Traits</h2>
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-700">
                                <div className="p-4 border-b border-gray-700">
                                    <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-2">HEADQUARTERS</h3>
                                    <p className="text-white">The Veil (Underground Network)</p>
                                </div>
                                <div className="p-4 border-b border-gray-700">
                                    <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-2">POPULATION</h3>
                                    <p className="text-white">Unknown (Est. 70,000)</p>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-2">PRIMARY RESOURCE</h3>
                                    <p className="text-white">Information & Secrets</p>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-2">FACTION CURRENCY</h3>
                                    <p className="text-white">ShadowScript (SHAD)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative flex items-center justify-center">
                        <div className="relative w-full max-w-md rounded-lg overflow-hidden border border-gray-700">
                            {/* Image */}
                            <div className="h-48 md:h-64 w-full">
                                <Image
                                    src="/images/background-coa.jpg"
                                    alt="The Underground Network"
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-[#0c1729] bg-opacity-80 p-4 rounded-b-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-[#4a9eff]"></div>
                                    <span className="text-[#4a9eff] text-xs font-medium uppercase">SHADOW PROTOCOL TERRITORY</span>
                                </div>
                                <p className="text-sm text-gray-300">
                                    The Underground Network is a labyrinth of hidden passages, secret facilities, and safe houses that
                                    spans beneath the city. Few know its full extent, and fewer still can navigate it safely without
                                    Protocol guidance.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Key Leaders Section */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-white text-center mb-8">Key Leaders</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Leader 1 */}
                        <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-lg overflow-hidden border border-gray-700 relative group">
                            <div className="h-48 bg-gray-700 flex items-center justify-center">
                                <Image
                                    src="/placeholder.svg?height=300&width=400"
                                    alt="Phantom"
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-cyan-900/30">
                                <h3 className="text-xl font-semibold text-white mb-1">Phantom</h3>
                                <p className="text-cyan-400 text-sm mb-3">The Unseen Director</p>
                                <p className="text-sm text-gray-300">
                                    The mysterious leader of the Shadow Protocol whose true identity is unknown even to most members.
                                    Phantom communicates through encrypted channels and proxies, directing operations from the shadows.
                                </p>
                            </div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-cyan-400"></div>
                        </div>

                        {/* Leader 2 */}
                        <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-lg overflow-hidden border border-gray-700 relative group">
                            <div className="h-48 bg-gray-700 flex items-center justify-center">
                                <Image
                                    src="/placeholder.svg?height=300&width=400"
                                    alt="Wraith"
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-cyan-900/30">
                                <h3 className="text-xl font-semibold text-white mb-1">Wraith</h3>
                                <p className="text-cyan-400 text-sm mb-3">Intelligence Commander</p>
                                <p className="text-sm text-gray-300">
                                    A master of espionage and information gathering. Wraith oversees the Protocol&apos;s vast intelligence
                                    network and coordinates covert operations across Arcanis.
                                </p>
                            </div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-cyan-400"></div>
                        </div>

                        {/* Leader 3 */}
                        <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-lg overflow-hidden border border-gray-700 relative group">
                            <div className="h-48 bg-gray-700 flex items-center justify-center">
                                <Image
                                    src="/placeholder.svg?height=300&width=400"
                                    alt="Specter"
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4 border-t border-cyan-900/30">
                                <h3 className="text-xl font-semibold text-white mb-1">Specter</h3>
                                <p className="text-cyan-400 text-sm mb-3">Infiltration Specialist</p>
                                <p className="text-sm text-gray-300">
                                    An elite operative with unparalleled stealth capabilities. Specter trains the Protocol&apos;s agents in the
                                    art of infiltration and extraction.
                                </p>
                            </div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-cyan-400"></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

