"use client"

import { Button } from "@/components/button"
import { Checkbox } from "@/components/check-box"
import { Slider } from "@/components/common/slider"

interface FilterSectionProps {
  priceRange: number[];
  onPriceRangeChange: (value: number[]) => void;
  onRarityChange: (rarity: string, checked: boolean) => void;
  onTypeChange: (type: string, checked: boolean) => void;
  selectedTypes: string[];
}

export function FilterSection({
  priceRange,
  onPriceRangeChange,
  onRarityChange,
  onTypeChange,
  selectedTypes,
}: FilterSectionProps) {
  return (
    <div
      className="w-64 bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700 flex flex-col"
      style={{ height: "min-content", flex: "0 0 auto" }}
    >
      <div className="mb-6">
        <h3 className="text-gray-200 font-semibold mb-3">Filters</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            {selectedTypes.map((type) => (
              <Button
                key={type}
                variant="outline"
                size="sm"
                className="text-black"
                onClick={() => onTypeChange(type, false)}
              >
                {type}
                <span className="ml-2">×</span>
              </Button>
            ))}
          </div>
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
            onValueChange={onPriceRangeChange}
            className="my-4"
          />
          <div className="text-gray-400 text-sm">
            ${priceRange[0]}-${priceRange[1]}
          </div>
        </div>

        <div>
          <h3 className="text-gray-200 font-semibold mb-3">RARITY</h3>
          <div className="space-y-2">
            {["RARE", "MYTHICAL", "LEGENDARY"].map((rarity) => (
              <div key={rarity} className="flex items-center">
                <Checkbox
                  id={rarity.toLowerCase()}
                  onCheckedChange={(checked) =>
                    onRarityChange(rarity, checked as boolean)
                  }
                />
                <label
                  htmlFor={rarity.toLowerCase()}
                  className="ml-2 text-gray-200"
                >
                  {rarity}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-gray-200 font-semibold mb-3">TYPE</h3>
          <div className="space-y-2">
            {["SWORD", "GUN", "SHIELD"].map((type) => (
              <div key={type} className="flex items-center">
                <Checkbox
                  id={type.toLowerCase()}
                  onCheckedChange={(checked) =>
                    onTypeChange(type, checked as boolean)
                  }
                />
                <label
                  htmlFor={type.toLowerCase()}
                  className="ml-2 text-gray-200"
                >
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
