import React from 'react';
import Image from 'next/image';

interface Leader {
  name: string;
  title: string;
  description: string;
  image: string;
}

const leaders: Leader[] = [
  {
    name: 'Phantom',
    title: 'The Unseen Director',
    description: 'The mysterious leader of the Shadow Protocol.Phantom’s true identity is unknown, even to most members. Communicates through encrypted channels and proxies, directing covert operations from the shadows.',
    image: '/',
  },
  {
    name: 'Wraith',
    title: 'Intelligence Commander',
    description: 'A master of espionage and information gathering. Oversees the Protocol’s vast intelligence network and coordinates covert operations across Arcanis.',
    image: '/',
  },
  {
    name: 'Specter',
    title: 'Infiltration Specialist',
    description: 'An elite operative with unparalleled stealth capabilities. Trains agents in infiltration, blackmail, and extraction techniques.',
    image: '/',
  },
];

export default function KeyLeaders() {
  return (
    <section className="mb-12 section-fade-in w-full max-w-6xl px-6 mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">Key Leaders</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {leaders.map((leader) => (
          <div
            key={leader.name}
            className="overflow-hidden rounded-lg bg-gradient-to-b bg-blue-950 hover:bg-blue-950/15 transition-colors duration-300 group augmentation-path"
          >
            <div className="flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-[2px] overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={800}
                    height={600}
                    className="transform group-hover:scale-105 transition-transform duration-500 ease-out object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t bg-gray-400 to-transparent z-10" />
                  
                  <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end p-4">
                    <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
                    <p className="text-blue-700 text-sm">{leader.title}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1">
                <p className="text-gray-300 text-sm">{leader.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
