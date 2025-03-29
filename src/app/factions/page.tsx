'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavMenu from "@/components/layaout/nav-menu";
import KeyLeaders from '@/components/factions/key-leaders';
import Specializations from '@/components/factions/specializations';
import JoiningSection from '@/components/factions/joining-section';
import Navbar from '@/components/navbar/navbar';

export default function FactionsPage() {
  const navItems = [
    { label: "CITIZEN of ARCANIS", href: "/" },
    { label: "FACTIONS", href: "/factions" },
    { label: "COMMUNITY", href: "/about" },
    { label: "HELP", href: "/features" },
    { label: "MY ITEMS", href: "/contact" },
    { label: "ACCOUNT", href: "/account" },
  ];

  const cursorRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector('.cursor-glow::before') as HTMLElement;
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };

    document.querySelectorAll('.section-fade-in').forEach(section => {
      section.classList.add('visible');
    });

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen text-white cursor-glow animated-bg">
      {/* <header className="w-full flex justify-between items-center p-6 relative h-[200px]">
        <Link href="/" className="z-10">
          <Image
            src="/icons/citizen.png"
            alt="Logo"
            width={300}
            height={150}
            className="w-[300px] h-[150px] object-contain absolute top-6 left-6 md:w-[200px] md:h-[100px] sm:w-[120px] sm:h-[60px] sm:top-4 sm:left-4"
          />
        </Link>

        <nav className="hidden lg:flex items-center justify-center w-full">
          <NavMenu items={navItems} />
        </nav>
        
        <Image
          src="/icons/myProfile.png"
          alt="Profile"
          width={120}
          height={120}
          className="hidden sm:block absolute top-6 right-6 w-[120px] h-[120px] object-cover rounded-full md:w-[80px] md:h-[80px]"
        />
      </header> */}
      <Navbar className="flex justify-between items-center px-4 md:px-8" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <KeyLeaders />
        
        <div className="augmentation-path rounded-lg bg-gray-900/50 p-8 section-fade-in">
          <Specializations />
          <JoiningSection />
        </div>
      </div>
    </div>
  );
} 