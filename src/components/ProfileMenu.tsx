'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import defaultProfileImage from '@/assets/images/profileAvatar.svg';

export default function ProfileMenu({
    profileImage = defaultProfileImage,
    menuItems = [
        { label: 'My Profile', href: '#my-profile' },
        { label: 'Settings', href: '#settings' },
        { label: 'Help', href: '#help' },
    ],
    bgColor = 'bg-[#e5e8e8]',
    hoverColor = 'hover:bg-[#ccd1d1]',
    textColor = 'text-gray-700',
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative bg-white rounded-full">
                {/* Profile Image */}
                <button
                    onClick={toggleMenu}
                    className="flex items-center focus:outline-none"
                    aria-expanded={isMenuOpen}
                >
                    <Image
                        src={profileImage}
                        alt="Profile"
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                </button>

                {/* Dropdown Menu */}
                <div
                    className={`absolute right-0 mt-2 w-48 ${bgColor} border border-gray-200 rounded-md shadow-lg focus:outline-none z-10 transition-all duration-500 transform origin-top-right ${
                        isMenuOpen ? 'opacity-100 scale-100 translate-y-0 rotate-0' : 'opacity-0 scale-95 -translate-y-4 rotate-3 pointer-events-none'
                    }`}
                    role="menu"
                >
                    <ul>
                        {menuItems.map((item, index) => (
                            <li role="none" key={index}>
                                <a
                                    href={item.href}
                                    className={`block px-4 py-2 ${textColor} ${hoverColor} transition-colors duration-300`}
                                    role="menuitem"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}


