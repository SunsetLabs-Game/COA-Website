import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sword } from 'lucide-react';
interface FactionTrait {
    label: string;
    value: string;
}

const factionTraits: FactionTrait[] = [
    {
        label: 'HEADQUARTERS',
        value: 'The Veil (Underground Network)',
    },
    {
        label: 'POPULATION',
        value: 'Unknown (Est. 70,000)',
    },
    {
        label: 'PRIMARY RESOURCE',
        value: 'Information & Secrets',
    },
    {
        label: 'FACTION CURRENCY',
        value: 'ShadowScript (SHAD)',
    },
];

export function ShadowProtocolProfile() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className='w-full py-12'
        >
            <div className='w-full max-w-6xl px-6 mx-auto'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className=''
                >
                    <div className='flex flex-col lg:flex-row gap-8'>
                        {/* Left Content */}
                        <div className='flex-1'>
                            {/* Faction Header */}
                            <div className='mb-8'>
                                <div className='inline-flex items-center text-red-7 font-semibold text-blue-500 px-4 py-2 rounded-full bg-blue-950/90 border border-red-800/30 mb-4'>
                                    <Sword className='w-4 h-4  mr-2' />
                                    <span className=' text-sm'>Shadow Protocol</span>
                                </div>
                                <h1 className='text-4xl font-bold text-white mb-6'>
                                    Masters of Secrecy & Influence
                                </h1>

                                {/* Description Paragraphs */}
                                <div className='space-y-4 text-gray-400'>
                                    <p>
                                        {`The Shadow Protocol emerged from a coalition of intelligence operatives, 
                                        political dissidents, and corporate spies who recognized that true power lies not 
                                        in open confrontation, but in controlling information and operating from the shadows. 
                                        They have built an intricate network of agents and informants throughout Arcanis.`}
                                    </p>
                                    <p>
                                        {`Members of the Protocol believe that direct control is inefficient and vulnerable. 
                                        Instead, they prefer to manipulate events from behind the scenes, using 
                                        carefully placed agents and strategic information to guide outcomes in their favor 
                                        without revealing their hand.`}
                                    </p>
                                </div>
                            </div>

                            {/* Faction Traits */}
                            <div className='mt-8 bg-[rgb(var(--background-start-rgb))] border-[0.5px] border-blue-900  border-t-2 py-7 px-5'>
                                <h2 className='text-xl font-semibold mb-4 text-white'>
                                    Faction Traits
                                </h2>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4  rounded-lg  '>
                                    {factionTraits.map((trait) => (
                                        <div
                                            key={trait.label}
                                            className='space-y-1 bg-[#0B1B32] brightness-125 p-2 rounded-lg text-[15px]'
                                        >
                                            {/* <div key={trait.label} className='space-y-1 bg-[#0B1B32]'> */}
                                            <div className='text-xs text-gray-400'>{trait.label}</div>
                                            <div className='text-white'>{trait.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Image */}
                        <div className='lg:flex-1 w-full h-[400px] justify-center items-center my-auto relative rounded-lg overflow-hidden'>
                            <Image
                                src='/placeholder_image.svg'
                                alt='Chrome Collective Industrial Zone'
                                fill
                                className='object-cover'
                                priority
                            />

                            {/* Gradient Overlay */}
                            <div className='absolute inset-0 bg-gradient-to-t from-[#0B1B32]  via-[#0B1B32]/20 to-transparent' />

                            {/* Territory Information */}
                            <div className='mt-8 p-6 absolute bottom-3 left-3 right-3 rounded-lg bg-[#0B1B32]/80 border border-blue-500 backdrop-blur-sm'>
                                <div className='flex items-center gap-2 mb-2'>
                                    <div className='w-2 h-2 rounded-full bg-blue-500'></div>
                                    <h3 className='text-blue-500 uppercase text-sm tracking-wider font-semibold'>
                                        Shadow Protocol Territory
                                    </h3>
                                </div>
                                <p className='text-gray-400 text-[14px]'>
                                    {`The Underground Network is a labyrinth of hidden passages, secret facilities, and
                                    safe houses that spans beneath the city. Few know its full extent, and fewer
                                    still can navigate it safely without Protocol guidance.`}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
