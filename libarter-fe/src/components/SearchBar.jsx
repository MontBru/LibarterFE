import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import DropdownButton from './DropdownButton';
import SortButton from './SortButton';

const SearchBar = ({searchTerm, setSearchTerm, setSearchType, priceRange, setPriceRange}) => {

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='absolute -bottom-5 w-full flex justify-center'>
      <div className='flex items-center justify-center w-full max-w-sm h-14 bg-customColors-primary rounded-md shadow-lg shadow-customColors-primary px-9'>
        <form className="w-fit search-bar flex justify-center h-12">
            <div className='flex flex-row w-fit m-3'>
                <input
                    className=' bg-customColors-primary placeholder:text-customColors-accent text-customColors-complementary border-none outline-none font-bold w-40 custom-1:w-52'
                    type="text"
                    placeholder="Search book..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                
                <DropdownButton setSearchType={setSearchType}/>
                <SortButton
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                />
            </div>
            
        </form>
      </div>
    </div>
    
    
  );
};

export default SearchBar;