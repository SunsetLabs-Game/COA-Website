'use client';

import React from 'react';
import { Star } from 'lucide-react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import gamegun from '../assets/items/gamegun.jpg';

interface ItemCardProps {
  imageUrl?: string | StaticImageData;
  name: string;
  price: number;
  rarity: string;
  rating: number;
  onInspect?: () => void;
  onBuy?: () => void;
}

const ItemCard = ({
  imageUrl = gamegun,
  name = 'Game Gun',
  price = 40,
  rarity = 'Rare',
  rating = 4,
  onInspect = () => {},
  onBuy = () => {}
}: ItemCardProps) => {
  return (
    <div className="w-64 bg-gray-800 rounded-lg overflow-hidden shadow-xl">
      <div className="relative">
        <Image 
          src={imageUrl}
          alt={name}
          width={256}
          height={192}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 px-2 py-1 bg-blue-500 text-white text-sm rounded">
          {rarity}
        </div>
      </div>
      {/* Rest of the component remains the same */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xl text-white font-semibold">${price}</span>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={16}
                className={`${
                  index < rating ? 'text-yellow-400' : 'text-gray-600'
                }`}
                fill={index < rating ? 'currentColor' : 'none'}
              />
            ))}
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={onInspect}
            className="flex-1 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Inspect
          </button>
          <button
            onClick={onBuy}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;