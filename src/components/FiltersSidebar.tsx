import React, { useState } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";
import { BsFilter } from "react-icons/bs";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface FiltersSidebarProps {
  categories?: string[];
  priceRange?: { min: number; max: number };
  rarities?: string[];
  types?: string[];
  onFilterChange: (filters: SelectedFilters) => void;
  initialFilters?: Partial<SelectedFilters>;
}

interface SelectedFilters {
  categories: string[];
  priceRange: [number, number];
  rarities: string[];
  types: string[];
}

const FiltersSidebar: React.FC<FiltersSidebarProps> = ({
  categories = [],
  priceRange = { min: 0, max: 1000 },
  rarities = [],
  types = [],
  onFilterChange,
  initialFilters = {},
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    categories: initialFilters.categories || [],
    priceRange: initialFilters.priceRange || [priceRange.min, priceRange.max],
    rarities: initialFilters.rarities || [],
    types: initialFilters.types || [],
  });
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    category: true,
    price: true,
    rarity: true,
    type: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFilterSelect = (filterKey: keyof SelectedFilters, filterValue: string) => {
    setSelectedFilters((prev) => {
      const updatedValues = (prev[filterKey] as string[]).includes(filterValue)
        ? (prev[filterKey] as string[]).filter((value) => value !== filterValue)
        : [...(prev[filterKey] as string[]), filterValue];

      const updatedFilters = { ...prev, [filterKey]: updatedValues };
      // We will call onFilterChange only when selectedFilters change
      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  const handlePriceChange = (value: number | number[]) => {
    const range = value as [number, number];
    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev, priceRange: range };
      // Call onFilterChange when the price range changes
      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  const clearAllFilters = () => {
    const clearedFilters: SelectedFilters = {
      categories: [],
      priceRange: [priceRange.min, priceRange.max],
      rarities: [],
      types: [],
    };
    setSelectedFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="relative">
      <div className="md:hidden p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition-all"
        >
          <BsFilter className="text-xl" />
          <span>Filters</span>
        </button>
      </div>

      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed md:static left-0 top-0 min-h-screen md:h-auto w-80 bg-gradient-to-br from-blue-50 to-white backdrop-blur-lg shadow-xl transition-transform duration-300 ease-in-out overflow-y-auto z-50`}
      >
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
            {Object.values(selectedFilters).some(
              (value) => Array.isArray(value) && value.length > 0
            ) && (
              <button
                onClick={clearAllFilters}
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                Clear All
              </button>
            )}
          </div>

          {/* Selected Items Section */}
          {Object.entries(selectedFilters)
            .filter(([key]) => key !== "priceRange")
            .flatMap(([key, values]) =>
              Array.isArray(values) && values.length > 0
                ? values.map((value) => (
                    <span
                      key={value}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 group transition-all duration-200 hover:bg-blue-200 mr-2 mb-2"
                    >
                      {value}
                      <button
                        onClick={() => handleFilterSelect(key as keyof SelectedFilters, value)}
                        className="ml-2 group-hover:scale-110 transition-transform"
                      >
                        <FiX className="h-4 w-4" />
                      </button>
                    </span>
                  ))
                : []
            )}

          <div className="space-y-4">
            {/* Categories Section */}
            <div className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleSection("category")}
                className="flex justify-between items-center w-full py-2 text-left focus:outline-none focus:ring-2 focus:ring-blue-200 rounded"
              >
                <span className="font-medium text-gray-700">Categories</span>
                <FiChevronDown
                  className={`transform transition-transform ${
                    expandedSections.category ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedSections.category && (
                <div className="mt-2 space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center space-x-3 group cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters.categories.includes(category)}
                        onChange={() => handleFilterSelect("categories", category)}
                        className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-200 transition duration-150 ease-in-out"
                      />
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Price Range Section */}
            <div className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleSection("price")}
                className="flex justify-between items-center w-full py-2 text-left focus:outline-none focus:ring-2 focus:ring-blue-200 rounded"
              >
                <span className="font-medium text-gray-700">Price Range</span>
                <FiChevronDown
                  className={`transform transition-transform ${
                    expandedSections.price ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedSections.price && (
                <div className="mt-4 px-2">
                  <Slider
                    range
                    min={priceRange.min}
                    max={priceRange.max}
                    value={selectedFilters.priceRange}
                    onChange={handlePriceChange}
                    className="mb-6"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${selectedFilters.priceRange[0]}</span>
                    <span>${selectedFilters.priceRange[1]}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Rarities Section */}
            <div className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleSection("rarity")}
                className="flex justify-between items-center w-full py-2 text-left focus:outline-none focus:ring-2 focus:ring-blue-200 rounded"
              >
                <span className="font-medium text-gray-700">Rarities</span>
                <FiChevronDown
                  className={`transform transition-transform ${
                    expandedSections.rarity ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedSections.rarity && (
                <div className="mt-2 space-y-2">
                  {rarities.map((rarity) => (
                    <label
                      key={rarity}
                      className="flex items-center space-x-3 group cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters.rarities.includes(rarity)}
                        onChange={() => handleFilterSelect("rarities", rarity)}
                        className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-200 transition duration-150 ease-in-out"
                      />
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                        {rarity}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Types Section */}
            <div className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleSection("type")}
                className="flex justify-between items-center w-full py-2 text-left focus:outline-none focus:ring-2 focus:ring-blue-200 rounded"
              >
                <span className="font-medium text-gray-700">Types</span>
                <FiChevronDown
                  className={`transform transition-transform ${
                    expandedSections.type ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedSections.type && (
                <div className="mt-2 space-y-2">
                  {types.map((type) => (
                    <label
                      key={type}
                      className="flex items-center space-x-3 group cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters.types.includes(type)}
                        onChange={() => handleFilterSelect("types", type)}
                        className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-200 transition duration-150 ease-in-out"
                      />
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;
