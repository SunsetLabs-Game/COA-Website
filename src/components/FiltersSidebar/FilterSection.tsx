import React from "react";
import { FiChevronDown } from "react-icons/fi";

interface FilterSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export const FilterSection: React.FC<FilterSectionProps> = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-2 text-left focus:outline-none focus:ring-2 focus:ring-blue-200 rounded"
      >
        <span className="font-medium text-gray-700">{title}</span>
        <FiChevronDown className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <div className="mt-2 space-y-2">{children}</div>}
    </div>
  );
};
