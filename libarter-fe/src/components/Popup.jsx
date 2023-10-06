import React from 'react';
import { useState } from 'react';
import RangeSlider from './RangeSlider';

function Popup({ isOpen, onClose, priceRange, setPriceRange, maxPrice }) {
  if (!isOpen) return null;

  const handleRangeChange = (values) => {
    setPriceRange(values);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
      <div className="bg-white rounded-md m-2 p-7 pt-0 z-50">
        <div className='w-full flex justify-end'>
            <button
              className="font-bold p-2 text-2xl text-gray-700 hover:text-gray-900"
              onClick={onClose}
            >
              &times;
            </button>
        </div>
        <h2 className="text-xl font-semibold mb-4 text-customColors-darkBrown">Apply filters</h2>
        
        <h3 className='mb-2 text-customColors-darkBrown'>
            Select price range
        </h3>
        <RangeSlider min={0} max={maxPrice} values={priceRange} onChange={handleRangeChange}/>
      </div>
    </div>
  );
}

export default Popup;
