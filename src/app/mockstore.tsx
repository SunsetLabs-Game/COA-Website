'use client';
import React from 'react';
import { Star } from 'lucide-react';
import gamegun from '../assets/items/gamegun.jpg';

const ItemCard = ({ name = 'Game Gun', price = 40, rarity = 'Rare', rating = 4, onInspect = () => {}, onBuy = () => {} }) => {
 return (
   <div className="w-64 h-96 bg-gray-900 rounded-lg overflow-hidden shadow-xl">
     <div className="relative h-3/4 p-2 bg-gray-800">
       <img 
         src={gamegun.src}
         alt={name}
         className="w-full h-full object-cover rounded-lg"
       />
     </div>
     
     <div className="p-3 flex flex-col justify-between h-1/4">
       <div className="flex justify-between items-center">
         <span className="text-white font-bold">${price}</span>
         <span className="px-2 py-1 text-white text-xs rounded bg-gray-700">{rarity}</span>
         <div className="flex">
           {[...Array(5)].map((_, index) => (
             <Star
               key={index}
               size={14}
               className={index < rating ? 'text-yellow-400' : 'text-gray-600'}
               fill={index < rating ? 'currentColor' : 'none'}
             />
           ))}
         </div>
       </div>
       
       <div className="flex gap-2">
         <button
           onClick={onInspect}
           className="flex-1 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
         >
           INSPECT
         </button>
         <button
           onClick={onBuy}
           className="flex-1 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition-colors"
         >
           BUY
         </button>
       </div>
     </div>
   </div>
 );
};

export default function MockStore() {
 const handleInspect = () => console.log('Inspecting item');
 const handleBuy = () => console.log('Buying item');

 const items = [
   { name: "Game Gun", price: 40, rarity: "Rare", rating: 4 },
   { name: "Laser Rifle", price: 65, rarity: "Epic", rating: 5 },
   { name: "Plasma Pistol", price: 35, rarity: "Common", rating: 3 },
   { name: "Quantum Blaster", price: 80, rarity: "Legendary", rating: 5 },
   { name: "Pulse Rifle", price: 55, rarity: "Rare", rating: 4 },
   { name: "Ion Cannon", price: 70, rarity: "Epic", rating: 5 },
   { name: "Fusion Gun", price: 90, rarity: "Legendary", rating: 5 },
   { name: "Plasma Shotgun", price: 45, rarity: "Rare", rating: 4 }
 ];

 return (
   <div className="min-h-screen bg-gray-900 p-8">
     <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {items.map((item, index) => (
         <ItemCard
           key={index}
           {...item}
           onInspect={handleInspect}
           onBuy={handleBuy}
         />
       ))}
     </div>
   </div>
 );
}