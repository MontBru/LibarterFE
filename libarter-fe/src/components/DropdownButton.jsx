import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';

const DropdownButton = ({setSearchType}) => {
  const [isOpen, setIsOpen] = useState(false);

  const SearchOptionButton = ({name, handleClick}) =>
  {
    return (
        <button
            onClick={() => handleClick()}
            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
        >
            {name}
        </button>
    );
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex items-center justify-center w-full px-4 h-full text-lg text-customColors-darkBrown"
      >
        <FontAwesomeIcon icon = {faMagnifyingGlassPlus}/>
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <SearchOptionButton name={"Search by Title"} handleClick={()=>{setSearchType(1); setIsOpen(false)}}/>
            <SearchOptionButton name={"Search by Author"} handleClick={()=>{setSearchType(2); setIsOpen(false)}}/>
            <SearchOptionButton name={"Search by Tags"} handleClick={()=>{setSearchType(3); setIsOpen(false)}}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
