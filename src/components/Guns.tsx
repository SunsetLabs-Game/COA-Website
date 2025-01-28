import React from 'react'
import Image from 'next/image'

const Guns = () => {
  return (
    <div className="px-4 py-4 border-2 border-customCyan rounded-[18px] bg-[#35B4FFDB] w-full sm:w-[220px] h-auto sm:h-[280px] flex flex-col items-center mx-auto">
      
      <div className="relative w-full sm:w-[195px] sm:h-[190px] rounded-[18px] overflow-hidden mb-4">
        <Image
          src="/images/guns.jpg"
          alt="Icon 3"
          width={195}
          height={190}
          objectFit="contain"
        />
      </div>

      <div className="flex justify-between items-center md:items-start w-full px-4 sm:px-0">
        <div className="flex flex-col">
          <p className="text-white text-sm sm:text-base">Makarati #8</p>
          <p className="text-white text-[10px] sm:text-[13px]">Gunwear</p>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="/images/bitcoin-ic 4.svg"
            alt="Icon 3"
            width={24}
            height={24}
            objectFit="contain"
            className="w-3 sm:w-4"
          />
          <p className="text-white text-[10px] sm:text-[12px]">8.10 ETH</p>
        </div>
      </div>
    </div>
  )
}

export default Guns;
