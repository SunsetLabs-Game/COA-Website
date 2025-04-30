"use client";

import React, { useState } from "react";
import Image from "next/image";
import Guns from "@/components/misc/guns";
import Header from "@/components/layaout/header";

const HomePage = () => {
  const svgImages = [
    { src: "/images/X.svg", alt: "Icon 1" },
    { src: "/images/insta.svg", alt: "Icon 2" },
    { src: "/images/telegram.svg", alt: "Icon 3" },
    { src: "/images/discord.svg", alt: "Icon 3" },
  ];

  const [activeItem, setActiveItem] = useState(0);
  const navItems = [
    {
      label: "Collected",
      bgColor: "bg-blue-500",
      border: "border-blue-600",
      activeColor: "text-white",
      value: "home",
    },
    {
      label: "Created",
      bgColor: "bg-green-500",
      border: "border-green-600",
      activeColor: "text-white",
      value: "about",
    },
    {
      label: "Favourites",
      bgColor: "bg-red-500",
      border: "border-red-600",
      activeColor: "text-white",
      value: "services",
    },
    {
      label: "Activity",
      bgColor: "bg-yellow-500",
      border: "border-yellow-600",
      activeColor: "text-white",
      value: "contact",
    },
    {
      label: "Watchlist",
      bgColor: "bg-red-500",
      border: "border-red-600",
      activeColor: "text-white",
      value: "services",
    },
    {
      label: "Transaction",
      bgColor: "bg-yellow-500",
      border: "border-yellow-600",
      activeColor: "text-white",
      value: "contact",
    },
  ];

  const handleClick = (index: number) => {
    setActiveItem(index);
  };

  return (
    <>
      <Header />
      <div className="relative ">
        {/* Background Image */}
        <Image
          src="/images/face.png"
          alt="Top image"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />

        {/* Main Section with background image and gradient overlay */}
        <div className="w-full bg-[url('/images/citizen.png')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#37ABF0] via-[#37ABF0] to-[#37ABF073] opacity-40 z-0"></div>
          <div className="max-w-6xl mx-auto px-6 py-12 relative">
            <div className="flex flex-col sm:flex-row items-center gap-4 z-10 absolute -top-5">
              {/* Profile Image */}
              <div className="w-[153px] h-[153px] rounded-full overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  width={900}
                  height={900}
                  objectFit="contain"
                />
              </div>

              {/* User Info */}
              <div className="flex flex-col gap-1 text-center sm:text-left">
                <h2 className="text-2xl text-white font-bold">@King_Joe</h2>
                <div className="w-auto gap-3 h-[38px] text-white px-2 py-3 rounded-lg border-2 border-customCyan bg-customBlue flex items-center justify-between">
                  <Image
                    src="/images/ethereum.svg"
                    alt="Ethereum Icon"
                    width={16}
                    height={16}
                    objectFit="contain"
                  />
                  <button className="">0xB8c7...A1B2</button>

                  <Image
                    src="/images/verified.svg"
                    alt="Ethereum Icon"
                    width={16}
                    height={16}
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col right-0 gap-4 absolute top-5 sm:top-4">
              <div className="flex flex-wrap gap-4 justify-center sm:justify-end">
                {svgImages.map((image, index) => (
                  <div key={index} className="w-[20px] h-[20px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={64}
                      height={64}
                      objectFit="contain"
                    />
                  </div>
                ))}
              </div>

              {/* Share Profile Button */}
              <button className="w-auto gap-3 h-[38px] text-white px-2 py-3 rounded-lg border-2 border-customCyan bg-customBlue flex items-center justify-between mt-4 sm:mt-0">
                Share Profile
                <Image
                  src="/images/edit.svg"
                  alt={"edit"}
                  width={24}
                  height={24}
                  objectFit="contain"
                />
              </button>
            </div>

            {/* Navbar */}
            <div className="bg-[#37abf0] mt-[160px] rounded-[12px] px-6 py-4">
              <nav className="z-20 py-4 max-w-6xl mx-auto">
                <div>
                  <ul className="flex flex-wrap justify-center sm:justify-start gap-4">
                    {navItems.map((item, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleClick(index)} // Handle active item on click
                          className={`w-[140px] px-6 py-3 rounded-lg border-2 border-customCyan ${
                            activeItem === index
                              ? "bg-white text-black"
                              : "bg-transparent text-white"
                          } ${activeItem === index ? "bg-opacity-90" : ""}`}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>

            <div className="mt-8">
              {navItems[activeItem].value === "home" ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    <Guns />
                    <Guns />
                    <Guns />
                    <Guns />
                    <Guns />
                    <Guns />
                  </div>
                </>
              ) : activeItem === 1 ? (
                <>
                  <div className="text-white mt-6">
                    About section content goes here!
                  </div>
                </>
              ) : activeItem === 2 ? (
                <>
                  <div className="text-white mt-6">
                    Services section content goes here!
                  </div>
                </>
              ) : activeItem === 3 ? (
                <>
                  <div className="text-white mt-6">
                    Contact section content goes here!
                  </div>
                </>
              ) : activeItem === 4 ? (
                <>
                  <div className="text-white mt-6">
                    Contact section content goes here!
                  </div>
                </>
              ) : (
                <div className="text-white mt-6">
                  Please select a valid option.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
