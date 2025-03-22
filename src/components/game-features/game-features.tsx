import React from 'react';

const GameFeatures: React.FC<{ className?: string }> = ({ className }) => {
  const features = [
    { icon: '/icons/sword.png', title: '⚔️ Batallas de facciones', description: 'Únete a una de las tres facciones y domina el mundo.' },
    { icon: '/icons/skull.png', title: '💀 Resurrección y Decisiones', description: 'Cada elección cambia tu historia.' },
    { icon: '/icons/bird.png', title: '🐉 Compañeros Cybernéticos', description: 'Cría y personaliza tus mascotas armadas.' },
    { icon: '/icons/bag.png', title: '🎭 Mercado y Black Market', description: 'Compra, vende y apuesta con NFTs y recursos.' },
    { icon: '/icons/rocket.png', title: '🚀 Eventos Épicos', description: 'Gana recompensas exclusivas en desafíos de alto riesgo.' },
  ];

  return (
    <div className={`py-20 mt-16 bg-gradient-to-b from-transparent via-[#071628] to-[#071628] ${className}`}>
      <div className="container mx-auto text-center text-white mt-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#03b3fe]">Game Features</h2>
        <p className="text-lg md:text-xl mb-12">Explore the chaotic world of Arcanis with these groundbreaking features</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#1a2b3c] p-6 rounded-lg shadow-lg">
              <div className="text-left mb-4 bg-[#071628] p-4 rounded-lg cursor-pointer hover:border-2 hover:border-[#03b3fe] focus:border-2 focus:border-[#03b3fe]">
                <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-left">{feature.title}</h3>
              <p className='text-left'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameFeatures;
