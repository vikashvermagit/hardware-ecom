import React, { useState } from "react";

function DualRangeSlider() {
  const [minPrice, setMinPrice] = useState(0); // Initial minimum price
  const [maxPrice, setMaxPrice] = useState(100); // Initial maximum price

  const handleMinPriceChange = (e) => {
    const newMinPrice = parseInt(e.target.value);
    setMinPrice(newMinPrice);
    if (newMinPrice > maxPrice) {
      setMaxPrice(newMinPrice);
    }
  };

  const handleMaxPriceChange = (e) => {
    const newMaxPrice = parseInt(e.target.value);
    setMaxPrice(newMaxPrice);
    if (newMaxPrice < minPrice) {
      setMinPrice(newMaxPrice);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <label
        htmlFor="priceRange"
        className="block text-sm font-medium text-gray-700"
      >
        Price Range (INR):
      </label>
      <div className="flex items-center mt-2">
        <input
          type="range"
          id="minPriceRange"
          name="minPriceRange"
          min="0"
          max="2000"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="block w-full h-1 bg-gray-300 rounded-lg appearance-none focus:outline-none focus:bg-blue-500"
          aria-describedby="minPriceRangeDescription"
        />
        <input
          type="range"
          id="maxPriceRange"
          name="maxPriceRange"
          min="2001"
          max="5000"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="block w-full h-1 bg-gray-300 rounded-lg appearance-none focus:outline-none focus:bg-blue-500 ml-2"
          aria-describedby="maxPriceRangeDescription"
        />
      </div>
      <div className="flex justify-between mt-4 text-sm text-gray-600">
        <span>₹{minPrice}</span>
        <span>₹{maxPrice}</span>
      </div>
      <div className="mt-4">
        <label
          htmlFor="selectedPrice"
          className="block text-sm font-medium text-gray-700"
        >
          Selected Price Range:
        </label>
        <output
          id="selectedPrice"
          className="block mt-1 w-full text-lg font-semibold text-gray-900"
        >
          ₹{minPrice} - ₹{maxPrice}
        </output>
      </div>
    </div>
  );
}

export default DualRangeSlider;
