import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm)
  };

  return (
    <div className='sticky w-screen flex justify-center h-14 top-0'>
        <div className="bg-white rounded-b-md shadow-lg max-w-96 px-9">
            <form onSubmit={handleSubmit} className="search-bar flex justify-center h-12">
                <div className='flex flex-row'>
                    <input
                        className=' text-customColors-lightBrown border-none outline-none'
                        type="text"
                        placeholder="Search book..."
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className='w-12'>
                        <FontAwesomeIcon icon = {faSearch} className='flex justify-center ml-3 mr-7 text-customColors-darkBrown'/>
                    </button>
                </div>
                
            </form>
        </div>
    </div>
    
  );
};

export default SearchBar;