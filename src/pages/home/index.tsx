import React from "react";
import NavMenu from "../../components/NavMenu";
import Footer from "../../components/Footer";
import "./index.css";

export default function Home() {
  const navItems = [
    { label: "CITIZEN of ARCANIS", href: "/" },
    { label: "COMMUNITY", href: "/about" },
    { label: "HELP", href: "/features" },
    { label: "MY ITEMS", href: "/contact" },
    { label: "ACCOUNT", href: "/contact" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/backgroundImage.png')" }}
    >
      <header className="w-full flex justify-between items-center p-4 relative">
        <img
          src="/icons/citizen.png"
          alt="Logo"
          className="logo"
        />
        <nav className="hidden lg:flex justify-center nav-menu">
          <NavMenu items={navItems} />
        </nav>
        <img
          src="/icons/myProfile.png"
          alt="Profile"
          className="profile-image"
        />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="text-container">
          <img
            src="/assets/Welcome.png"
            alt="Welcome"
            className="welcome-image"
          />
          <div className="buttons-container">
            <button className="common-market">COMMON MARKET</button>
            <button className="black-market">BLACK MARKET</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
