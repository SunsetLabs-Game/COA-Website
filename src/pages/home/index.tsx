import React from "react";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
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
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: "url('/assets/backgroundImage.png')" }}
    >
<header className="w-full flex justify-between items-center p-6 relative h-[200px]">
  {/* Logo Citizen */}
  <img
    src="/icons/citizen.png"
    alt="Logo"
    className="w-[300px] h-[150px] object-contain absolute top-6 left-6 md:w-[200px] md:h-[100px] sm:w-[120px] sm:h-[60px] sm:top-4 sm:left-4"
  />
  
  {/* Navigation Menu */}
  <nav className="hidden lg:flex items-center justify-center w-full">
    <NavMenu items={navItems} />
  </nav>
  
  {/* Profile Image */}
  <img
    src="/icons/myProfile.png"
    alt="Profile"
    className="hidden sm:block absolute top-6 right-6 w-[120px] h-[120px] object-cover rounded-full md:w-[80px] md:h-[80px]"
  />
</header>




      <main className="flex-1 flex flex-col items-center justify-center w-full">
        <div
          className="flex justify-center items-center text-center p-6 rounded-md text-white max-w-[90%] w-full flex-col h-full"
        >
          <img
            src="/assets/Welcome.png"
            alt="Welcome"
            className="max-w-[40rem] mb-16 w-full h-auto md:max-w-[25rem]"
          />
          {/* Ajuste en los botones para dispositivos móviles */}
          <div className="flex flex-col gap-6 w-full md:flex-row md:justify-center md:gap-[30rem]">
            <button className="bg-[#2C2C2C] text-[#0DABFF] px-8 py-3 rounded-full cursor-pointer transition-all duration-300 ease-out text-base uppercase hover:opacity-80 w-full md:w-auto">
              COMMON MARKET
            </button>
            <button className="bg-[#2C2C2C] text-red-500 px-8 py-3 rounded-full cursor-pointer transition-all duration-300 ease-out text-base uppercase hover:opacity-80 w-full md:w-auto">
              BLACK MARKET
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
