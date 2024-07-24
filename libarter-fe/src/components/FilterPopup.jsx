import React from 'react';
import { useState } from 'react';
import RangeSlider from './RangeSlider';
import Popup from './Popup';
import languageStore from '../zustand/languageStore';

function FilterPopup({ onClose, priceRange, setPriceRange }) {
  const [maxPrice, setMaxPrice] = useState(10000000);

  const {language, setLanguage} = languageStore();
  let text = language === "EN"?["Select price range"]:["Ценови диапазон:"];

  const handleRangeChange = (values) => {
    setPriceRange(values);
  };

  return (
    <Popup children={
      <div>
        <h3 className='mb-2 text-customColors-secondary'>
          {text[0]}
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
              {"0-999"}
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
              {"1K-999K"}
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
              {"1M-10M"}
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
