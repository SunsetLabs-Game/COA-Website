import React from "react";
import { FiX } from "react-icons/fi";

interface FilterBadgeProps {
  value: string;
  onRemove: () => void;
}

export const FilterBadge: React.FC<FilterBadgeProps> = ({ value, onRemove }) => {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 group transition-all duration-200 hover:bg-blue-200 mr-2 mb-2">
      {value}
      <button onClick={onRemove} className="ml-2 group-hover:scale-110 transition-transform">
        <FiX className="h-4 w-4" />
      </button>
    </span>
  );
};
