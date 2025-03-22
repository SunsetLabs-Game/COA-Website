import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC<{ className?: string }> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full bg-[#0a1929] backdrop-blur-md z-50 ${className}`}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/icons/citizen.png" alt="Logo" width={100} height={50} />
        </div>

        {/* Hamburger Icon */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Links Centrados */}
        <div className={`flex-col md:flex-row md:flex justify-center items-center space-x-4 md:space-x-6 flex-grow ${isOpen ? 'flex' : 'hidden md:flex'}`}>
          <Link href="/" className="text-white hover:text-[#497897] transition">Home</Link>
          <Link href="/features" className="text-white hover:text-[#03b3fe] transition">Features</Link>
          <Link href="/factions" className="text-white hover:text-[#03b3fe] transition">Factions</Link>
          <Link href="/gameplay" className="text-white hover:text-[#03b3fe] transition">Gameplay</Link>
          <Link href="/marketplace" className="text-white hover:text-[#03b3fe] transition">Marketplace</Link>
          <Link href="/community" className="text-white hover:text-[#03b3fe] transition">Community</Link>
        </div>

        {/* Botón Play Now */}
        <div className="hidden md:block">
          <Link href="/play" className="bg-[#03b3fe] text-white font-bold px-4 py-2 rounded hover:bg-cyan-600 transition">
            Play Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
