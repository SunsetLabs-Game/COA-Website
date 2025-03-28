import React from 'react';
import { Sword, Hammer, Crosshair, Cog } from 'lucide-react';

const specializations = [
  {
    title: 'Combat Augmentations',
    Icon: Sword,
    description: 'Enhance your body with military-grade combat systems and reinforced skeletal structures to integrated weapon systems.',
  },
  {
    title: 'Industrial Enhancements',
    Icon: Hammer,
    description: 'Augment your strength and endurance with hydraulic systems. Reinforced musculature for unparalleled physical capabilities.',
  },
  {
    title: 'Cybernetic Integration',
    Icon: Cog,
    description: 'Replace biological systems with superior mechanical alternatives, achieving perfect integration between flesh and machine.',
  },
  {
    title: 'Tactical Systems',
    Icon: Crosshair,
    description: 'Implement advanced targeting, threat assessment, and battlefield systems directly into your neural network.',
  },
];

export default function Specializations() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-8 text-center">Collective Specializations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {specializations.map((spec) => (
          <div
            key={spec.title}
            className="p-6 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 hover:bg-gray-900/70 transition-colors duration-300 electric-border-hover group augmentation-path"
          >
            <div className="flex mb-4">
              <div className="w-10 h-10 rounded-full bg-red-900/20 flex items-center justify-center border border-red-600 group-hover:electric-border-hover">
                <spec.Icon className="w-6 h-6 text-red-500" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{spec.title}</h3>
            <p className="text-gray-300 text-sm">{spec.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 