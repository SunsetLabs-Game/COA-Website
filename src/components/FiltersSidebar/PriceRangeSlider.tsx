import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: number | number[]) => void;
}

export const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({ min, max, value, onChange }) => {
  return (
    <div className="mt-4 px-2">
      <Slider range min={min} max={max} value={value} onChange={onChange} className="mb-6" />
      <div className="flex justify-between text-sm text-gray-600">
        <span>${value[0]}</span>
        <span>${value[1]}</span>
      </div>
    </div>
  );
};
