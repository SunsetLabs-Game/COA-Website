'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import profileImage from '@/assets/images/profileAvatar.svg';

export default function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div className="relative">
            {/* Profile Image */}
            <button
                onClick={toggleMenu}
                className="flex items-center focus:outline-none"
                aria-expanded={isMenuOpen}
            >
                <Image
                    src={profileImage}
                    alt="Profile"
                    width={50}
                    height={50}
                />
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
                <ul
                    className="absolute right-0 mt-2 w-48 bg-[#e5e8e8] border border-gray-200 rounded-md shadow-lg focus:outline-none z-10"
                    role="menu"
                >
                    <li role="none">
                        <a
                            href="#my-profile"
                            className="block px-4 py-2 text-gray-700 hover:bg-[#ccd1d1]"
                            role="menuitem"
                        >
                            My Profile
                        </a>
                    </li>
                    <li role="none">
                        <a
                            href="#settings"
                            className="block px-4 py-2 text-gray-700 hover:bg-[#ccd1d1]"
                            role="menuitem"
                        >
                            Settings
                        </a>
                    </li>
                    <li role="none">
                        <a
                            href="#help"
                            className="block px-4 py-2 text-gray-700 hover:bg-[#ccd1d1]"
                            role="menuitem"
                        >
                            Help
                        </a>
                    </li>
                </ul>
            )}
        </div>
    );
};

