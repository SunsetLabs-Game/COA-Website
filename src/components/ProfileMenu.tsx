'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import defaultProfileImage from '@/assets/images/profileAvatar.svg';
import profileIcon from '@/assets/icons/profileIcon.svg';
import settingsIcon from '@/assets/icons/settingsIcon.svg';
import helpIcon from '@/assets/icons/helpIcon.svg';

interface MenuItem {
    label: string;
    href: string;
    icon: string;
}

interface ProfileMenuProps {
    profileImage?: string;
    menuItems?: MenuItem[];
    bgColor?: string;
    hoverColor?: string;
    textColor?: string;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({
    profileImage = defaultProfileImage,
    menuItems = [
        { label: 'My Profile', href: '#my-profile', icon: profileIcon },
        { label: 'Settings', href: '#settings', icon: settingsIcon },
        { label: 'Help', href: '#help', icon: helpIcon },
    ],
    bgColor = 'bg-[#e5e8e8]',
    hoverColor = 'hover:bg-[#d5d8d8]',
    textColor = 'text-black',
}) => {
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
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                </button>

                {/* Dropdown Menu */}
                <div
                    className={`absolute right-0 mt-2 w-48 ${bgColor} border border-gray-200 rounded-md shadow-lg z-10 overflow-hidden transition-all duration-300 ease-out transform ${isMenuOpen
                        ? 'max-h-[300px] opacity-100 scale-100 translate-y-0'
                        : 'max-h-0 opacity-0 scale-95 -translate-y-4 pointer-events-none'
                        }`}
                    role="menu"
                >
                    <ul className="flex flex-col divide-y divide-gray-300">
                        {menuItems.map((item, index) => (
                            <li role="none" key={index}>
                                <a
                                    href={item.href}
                                    className={`flex items-center gap-2 px-4 py-2 ${textColor} ${hoverColor} transition-colors duration-300`}
                                    role="menuitem"
                                >
                                    {/* Icon */}
                                    <Image
                                        src={item.icon}
                                        alt={`${item.label} icon`}
                                        width={30}
                                        height={30}
                                        className="rounded mr-2"
                                    />
                                    {/* Label */}
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfileMenu;
