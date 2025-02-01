import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {

  const navItems = [
    { label: "Trending", bgColor: "text-white", border: "border-customCyan", activeColor: "active:bg-blue-500" },
    { label: "Buy", bgColor: "text-white", border: "border-customCyan", activeColor: "active:bg-blue-500" },
    { label: "Sell", bgColor: "text-white", border: "border-customCyan", activeColor: "active:bg-blue-500" },
    { label: "Auction", bgColor: "text-white", border: "border-customCyan", activeColor: "active:bg-blue-500" },
    { label: "Profile", bgColor: "text-black bg-white", border: "border-customCyan", activeColor: "active:bg-blue-500" },
  ];

  return (
    <header className="relative text-white px-6 py-4 bg-cover bg-no-repeat bg-[url('/images/citizen.png')]">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between z-20 relative">
        
        {/* Logo */}
        <div className="z-20">
          <Image
            src="/images/WHITE.svg"
            alt="Logo"
            width={120}      
            height={40}
            objectFit="contain" 
            className="w-[100px] sm:w-[120px]"
          />
        </div>

        {/* Navigation */}
        <nav className="z-20 hidden lg:block">
          <ul className="flex gap-4 flex-wrap justify-center sm:justify-end">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  className={`w-[140px] ${item.bgColor} px-6 py-3 rounded-lg border-2 ${item.border} ${item.activeColor} active:text-white`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#37ABF0] via-[#37ABF0] to-[#37ABF073] opacity-60 z-10"></div>
    </header>
  );
};

export default Header;
