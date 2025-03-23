'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavMenu from "@/components/layaout/nav-menu";
import './styles.css';

interface Leader {
  name: string;
  title: string;
  description: string;
  image: string;
}

interface Specialization {
  title: string;
  icon: string;
  description: string;
}

const leaders: Leader[] = [
  {
    name: 'Titanium',
    title: 'The Augmented One',
    description: 'The founder of the Chrome Collective, Titanium was once a military supersoldier who rebelled against his creators. Now over 80% cybernetic, he leads the Collective with unmatched strength and vision.',
    image: '/assets/leaders/titanium.png',
  },
  {
    name: 'Forge',
    title: 'Master Engineer',
    description: 'The brilliant mind behind the Collective\'s most advanced augmentations. Forge constantly pushes the boundaries of what\'s possible in cybernetic enhancement.',
    image: '/assets/leaders/forge.png',
  },
  {
    name: 'Valkyrie',
    title: 'Combat Commander',
    description: 'A legendary warrior with cutting-edge combat augmentations. Valkyrie leads the Collective\'s military operations and training programs.',
    image: '/assets/leaders/valkyrie.png',
  },
];

const specializations: Specialization[] = [
  {
    title: 'Combat Augmentations',
    icon: '💥',
    description: 'Enhance your body with military-grade combat systems and reinforced skeletal structures to integrated weapon systems.',
  },
  {
    title: 'Industrial Enhancements',
    icon: '🏗',
    description: 'Augment your strength and endurance with hydraulic systems. Reinforced musculature for unparalleled physical capabilities.',
  },
  {
    title: 'Cybernetic Integration',
    icon: '🧠',
    description: 'Replace biological systems with superior mechanical alternatives, achieving perfect integration between flesh and machine.',
  },
  {
    title: 'Tactical Systems',
    icon: '🎯',
    description: 'Implement advanced targeting, threat assessment, and battlefield systems directly into your neural network.',
  },
];

export default function FactionsPage() {
  const navItems = [
    { label: "CITIZEN of ARCANIS", href: "/" },
    { label: "FACTIONS", href: "/factions" },
    { label: "COMMUNITY", href: "/about" },
    { label: "HELP", href: "/features" },
    { label: "MY ITEMS", href: "/contact" },
    { label: "ACCOUNT", href: "/contact" },
  ];

  useEffect(() => {
    // Add cursor tracking animation
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.leader-card, .specialization-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <header className="w-full flex justify-between items-center p-6 relative h-[200px] bg-[#0a0a0f]/80">

        <nav className="hidden lg:flex items-center justify-center w-full">
          <NavMenu items={navItems} />
        </nav>
        
        <Image
          src="/icons/myProfile.png"
          alt="Profile"
          width={120}
          height={120}
          className="hidden sm:block absolute top-6 right-6 w-[120px] h-[120px] object-cover rounded-full md:w-[80px] md:h-[80px]"
        />
      </header>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        <h1 className="text-4xl font-bold text-center mb-16 text-cyan-400">
          Chrome Collective
        </h1>

        {/* Key Leaders Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">Key Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="leader-card relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
                <div className="h-48 mb-4 relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    layout="fill"
                    objectFit="cover"
                    className="transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-cyan-400">{leader.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{leader.title}</p>
                <p className="text-gray-300">{leader.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Specializations Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">Collective Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec) => (
              <div
                key={spec.title}
                className="specialization-card bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{spec.icon}</div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">{spec.title}</h3>
                <p className="text-gray-300 text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Joining Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">Joining the Collective</h2>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl">
            <p className="text-gray-300 mb-4">
              To join the Chrome Collective, candidates must demonstrate physical prowess and a willingness to embrace augmentation. New recruits undergo a series of physical trials, followed by their first augmentation procedure. As members prove their worth, they gain access to more advanced enhancements and greater responsibilities within the faction.
            </p>
            <button className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-full transition-colors duration-300">
              Apply Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
} 