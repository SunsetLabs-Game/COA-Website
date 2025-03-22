import React from 'react';

const Hero: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`hero bg-cover bg-center h-screen ${className}`}>
      <div className="container mx-auto flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#03b3fe]">🔥 Rise, Fight & Conquer in a Cyber World 🔥</h1>
        <p className="text-lg md:text-2xl mb-8">Join the battle in a world where only the strongest rewrite history.</p>
        <div className="flex space-x-4">
          <button className="bg-[#03b3fe] text-white font-bold px-6 py-3 rounded hover:bg-cyan-600 transition">Join Now</button>
          <button className="bg-transparent border-2 border-[#03b3fe] text-[#03b3fe] font-bold px-6 py-3 rounded hover:bg-[#03b3fe] hover:text-black transition">Visit Marketplace</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
