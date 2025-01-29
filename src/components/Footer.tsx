import React from "react";
import Image from "next/image";


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-6">
        {/* Texto de presentación */}
        <div className="flex-1 min-w-[200px] text-center md:text-left">
          <h2 className="text-xl font-semibold">CITIZEN OF ARCANIS</h2>
          <p className="text-sm mt-2">
            Explore a cyberpunk universe where your decisions shape the world.
          </p>
        </div>

        {/* Enlaces de navegación */}
        <ul className="flex flex-wrap justify-center space-x-6 min-w-[200px]">
          <li>
            <a
              href="/common-market"
              className="hover:text-gray-400 transition-colors text-sm"
            >
              Common Market
            </a>
          </li>
          <li>
            <a
              href="/black-market"
              className="hover:text-gray-400 transition-colors text-sm"
            >
              Black Market
            </a>
          </li>
          <li>
            <a
              href="/help"
              className="hover:text-gray-400 transition-colors text-sm"
            >
              Help
            </a>
          </li>
        </ul>

        {/* Iconos sociales */}
        <div className="flex space-x-4 justify-center min-w-[200px]">
          <a
            href="https://t.me/yourtelegramlink"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-400 transition-colors"
          >
            <Image
              src="/icons/telegrama.png" 
              alt="Telegram"
              width={24}
              height={24}
              style={{ display: "block", maxWidth: "100%", height: "auto" }}
            />
            <span className="text-sm">Telegram</span>
          </a>

          <a
            href="https://twitter.com/yourtwitterlink"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-400 transition-colors"
          >
            <Image
              src="/icons/logotypes.png"
              width={24}
              height={24}
              style={{ display: "block", maxWidth: "100%", height: "auto" }} alt={""}            />
            <span className="text-sm">Twitter</span>
          </a>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="mt-6 text-center text-sm text-gray-400">
        © 2025 Citizen of Arcanis. All rights reserved.
      </div>
    </footer>
  );
};


export default Footer;
