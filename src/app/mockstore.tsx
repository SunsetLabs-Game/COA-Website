import React from 'react';
import { Star } from 'lucide-react';

interface ItemCardProps {
  imageUrl: string;
  name: string;
  price: number;
  rarity: string;
  rating: number;
  onInspect?: () => void;
  onBuy?: () => void;
}

const ItemCard = ({
  imageUrl = '/gamegun.jpg',
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
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 px-2 py-1 bg-blue-500 text-white text-sm rounded">
          {rarity}
        </div>
      </div>
      
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

const MockStore = () => {
  const handleInspect = () => console.log('Inspecting item');
  const handleBuy = () => console.log('Buying item');

  const items = [
    { name: "Game Gun", price: 40, rarity: "Rare", rating: 4 },
    { name: "Laser Rifle", price: 65, rarity: "Epic", rating: 5 },
    { name: "Plasma Pistol", price: 35, rarity: "Common", rating: 3 },
    { name: "Energy Sword", price: 55, rarity: "Rare", rating: 4 },
    { name: "Quantum Blaster", price: 75, rarity: "Legendary", rating: 5 },
    { name: "Rail Gun", price: 50, rarity: "Epic", rating: 4 },
    { name: "Pulse Rifle", price: 45, rarity: "Rare", rating: 3 },
    { name: "Phase Pistol", price: 30, rarity: "Common", rating: 2 }
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <ItemCard
            key={index}
            imageUrl="/gamegun.jpg"
            name={item.name}
            price={item.price}
            rarity={item.rarity}
            rating={item.rating}
            onInspect={handleInspect}
            onBuy={handleBuy}
          />
        ))}
      </div>
    </div>
  );
};

export default MockStore;