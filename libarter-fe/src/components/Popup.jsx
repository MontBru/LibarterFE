import React from 'react';
import { useState } from 'react';
import RangeSlider from './RangeSlider';

function Popup({ isOpen, onClose, priceRange, setPriceRange }) {
  const [maxPrice, setMaxPrice] = useState(10000000);
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
        <ul className='flex flex-row mb-2'>
          <li>
            <button
              className='mr-2 p-1 border border-black bg-gray-200'
              onClick={() => {
                setMaxPrice(999)
                setPriceRange([0, 999])
              }}
            >
              low
            </button >
          </li>
          <li>
            <button
              className='mr-2 p-1 border border-black bg-gray-200'
              onClick={() => {
                setMaxPrice(999000)
                setPriceRange([0, 999000])
              }}
            >
              K
            </button>
          </li>
          <li>
            <button
              className='mr-2 p-1 border border-black bg-gray-200'
              onClick={() => {
                setMaxPrice(10000000)
                setPriceRange([0, 10000000])
              }}
            >
              M
            </button>
          </li>
        </ul>
        <RangeSlider min={0} max={maxPrice} values={priceRange} onChange={handleRangeChange} />
      </div>
    </div>
  );
}

export default Popup;
