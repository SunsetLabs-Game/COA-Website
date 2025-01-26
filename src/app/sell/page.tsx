"use client"

import { useState } from "react"
import { Search, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

export default function GameMarketplace() {
  const [priceRange, setPriceRange] = useState([0, 1000])

  return (
    <div className="min-h-screen bg-[url('/images/BACKGROUND_CITIZEN_OF_ARCANIS.jpg')] bg-cover bg-center">
      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="search"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-200 hover:bg-gray-300">
              New
            </Button>
            <Button variant="ghost" className="text-gray-200 hover:bg-gray-300">
              Price ascending
            </Button>
            <Button variant="ghost" className="text-gray-200 hover:bg-gray-300">
              Price descending
            </Button>
            <Button variant="ghost" className="text-gray-200 hover:bg-gray-300">
              Rarity
            </Button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar */}
          <div
            className="w-64 bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700 flex flex-col"
            style={{ height: "min-content", flex: "0 0 auto" }}
          >
            <div className="mb-6">
              <h3 className="text-gray-200 font-semibold mb-3">Filters</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="text-black">
                    SWORD
                    <span className="ml-2">×</span>
                  </Button>
                  <Button variant="outline" size="sm" className="text-black">
                    GUN
                    <span className="ml-2">×</span>
                  </Button>
                </div>
                <Button variant="outline" size="sm" className="text-black">
                  SHIELD
                  <span className="ml-2">×</span>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-gray-200 font-semibold mb-3">PRICE</h3>
                <Slider
                  defaultValue={[0, 1000]}
                  max={1000}
                  step={1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="my-4"
                />
                <div className="text-gray-400 text-sm">
                  ${priceRange[0]}-${priceRange[1]}
                </div>
              </div>

              <div>
                <h3 className="text-gray-200 font-semibold mb-3">RARITY</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="rare" />
                    <label htmlFor="rare" className="ml-2 text-gray-200">
                      RARE
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="mythical" />
                    <label htmlFor="mythical" className="ml-2 text-gray-200">
                      MYTHICAL
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="legendary" />
                    <label htmlFor="legendary" className="ml-2 text-gray-200">
                      LEGENDARY
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-gray-200 font-semibold mb-3">TYPE</h3>
                <div className="space-y-2">
                  {["Label 1", "Label 2", "Label 3"].map((label) => (
                    <div key={label} className="flex items-center">
                      <Checkbox id={label} />
                      <label htmlFor={label} className="ml-2 text-gray-200">
                        {label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {Array.from({ length: 15 }).map((_, i) => (
                <Card key={i} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <div className="absolute inset-0 bg-blue-500/10 rounded-t-lg" />
                      <img
                        src="/images/weapon.png"
                        alt="Weapon"
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2 p-3">
                    <div className="flex justify-between items-center w-full">
                      <Button variant="secondary" size="sm" className="text-white bg-black">
                        INSPECT
                      </Button>
                      <Button variant="destructive" size="sm">
                        BUY
                      </Button>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <span className="text-gray-200">$40</span>
                      <span className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-300">Rare</span>
                    </div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn("w-4 h-4", i < 3 ? "text-yellow-400 fill-yellow-400" : "text-gray-600")}
                        />
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

