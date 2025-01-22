import React from 'react';
import NavMenu from '../../components/NavMenu';
import Footer from '../../components/Footer';
import './index.css';

export default function Home() {
  const navItems = [
    { label: "CITIZEN of ARCANIS", href: "/" },
    { label: "COMMUNITY", href: "/about" },
    { label: "HELP", href: "/features" },
    { label: "MY ITEMS", href: "/contact" },
    { label: "ACCOUNT", href: "/contact" },
  ];

  return (
    <div className="w-screen h-screen flex flex-col body-background">
      <header className="w-full flex items-center justify-between p-4">
        <img src="/icons/citizen.png" alt="Logo" className="logo" />
        <nav className="hidden lg:flex"> 
          <NavMenu items={navItems} />
        </nav>
        <img src="/icons/myProfile.png" alt="Profile" className="profile-image" />
      </header>

      <main className="main-content">
        <div className="text-container">
          <img src="/assets/Welcome.png" alt="Welcome" className="welcome-image" />
          <div className="buttons-container">
            <button className="common-market">COMMON MARKET</button>
            <button className="black-market">BLACK MARKET</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}