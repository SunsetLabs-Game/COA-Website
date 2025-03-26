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
    name: 'Titanium',
    title: 'The Augmented One',
    description: 'The founder of the Chrome Collective, Titanium was once a military supersoldier who rebelled against his creators. Now over 80% cybernetic, he leads the Collective with unmatched strength and vision.',
    image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1',
  },
  {
    name: 'Forge',
    title: 'Master Engineer',
    description: 'The brilliant mind behind the Collective\'s most advanced augmentations. Forge constantly pushes the boundaries of what\'s possible in cybernetic enhancement.',
    image: 'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb',
  },
  {
    name: 'Valkyrie',
    title: 'Combat Commander',
    description: 'A legendary warrior with cutting-edge combat augmentations. Valkyrie leads the Collective\'s military operations and training programs.',
    image: 'https://images.unsplash.com/photo-1604076913837-52ab5629fba9',
  },
];

export default function KeyLeaders() {
  return (
    <section className="mb-12 section-fade-in">
      <h2 className="text-3xl font-semibold mb-8 text-center">Key Leaders</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {leaders.map((leader) => (
          <div
            key={leader.name}
            className="overflow-hidden rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 hover:bg-gray-900/70 transition-colors duration-300 electric-border-hover group augmentation-path"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent z-10" />
                  
                  <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end p-4">
                    <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
                    <p className="text-red-500 text-sm">{leader.title}</p>
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
