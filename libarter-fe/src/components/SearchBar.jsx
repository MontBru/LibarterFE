import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import DropdownButton from './DropdownButton';
import SortButton from './SortButton';

const SearchBar = ({searchTerm, setSearchTerm, setSearchType, priceRange, setPriceRange}) => {
    const [searchTermVar, setSearchTermVar] = useState(searchTerm);

  const handleInputChange = (e) => {
    setSearchTermVar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchTermVar);
  };

  return (
    <div className='absolute -bottom-5 w-full flex justify-center'>
      <div className='flex items-center justify-center w-full max-w-sm h-14 bg-white rounded-md shadow-lg shadow-customColors-primary px-9'>
        <form onSubmit={handleSubmit} className="w-fit search-bar flex justify-center h-12">
            <div className='flex flex-row w-fit m-3'>
                <input
                    className=' text-customColors-primary border-none outline-none font-bold w-40 custom-1:w-52'
                    type="text"
                    placeholder="Search book..."
                    value={searchTermVar}
                    onChange={handleInputChange}
                />
                <button type="submit" className='w-12 flex justify-center items-center rounded-full text-customColors-secondary ext-customColors-secondary hover:bg-customColors-complementary hover:text-customColors-accent'>
                  <FontAwesomeIcon icon = {faSearch} className='flex justify-center '/>
                </button>
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