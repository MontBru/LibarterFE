import React from 'react';
import { useState } from 'react';
import RangeSlider from './RangeSlider';
import Popup from './Popup';

function FilterPopup({ isOpen, onClose, priceRange, setPriceRange }) {
  const [maxPrice, setMaxPrice] = useState(10000000);
  if (!isOpen) return null;

  const handleRangeChange = (values) => {
    setPriceRange(values);
  };

  return (
    <Popup children={
      <div>
        <h2 className="text-xl font-semibold mb-4 text-customColors-secondary">Apply filters</h2>

        <h3 className='mb-2 text-customColors-secondary'>
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
    }
    onClose={onClose} />
  );
}

export default FilterPopup;
