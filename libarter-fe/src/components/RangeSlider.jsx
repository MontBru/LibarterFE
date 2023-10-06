import React, { useState } from 'react';

function RangeSlider({ min, max, values, onChange }) {

  const handleMinChange = (e) => {
    let newValue = parseInt(e.target.value, 10);
    if (newValue >= values[1]) {
      newValue = values[1];
    }
    onChange([newValue, values[1]]);
  };

  const handleMaxChange = (e) => {
    let newValue = parseInt(e.target.value, 10);
    if (newValue <= values[0]) {
      newValue = values[0];
    }
    onChange([values[0], newValue]);
  };

  return (
    <div className="flex items-center space-x-4">
        <div
                className='px-2 rounded-md border border-gray-400'
            >
            {values[0]}
        </div>
        <div>
            <div className='w-full -mb-5 h-2 rounded-md bg-gray-300'/>
            <div className=' -mb-6'>
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={1}
                    value={values[0]}
                    onChange={handleMinChange}
                    className="w-full h-1 bg-transparent appearance-none"
                />
            </div>
            <input
                type="range"
                min={min}
                max={max}
                step={1}
                value={values[1]}
                onChange={handleMaxChange}
                className="w-full h-1 bg-transparent appearance-none"
            />
        </div>
        
        <div
                className='px-2 rounded-md border border-gray-400'
            >
            {values[1]}
        </div>
    </div>
  );
}

export default RangeSlider;
