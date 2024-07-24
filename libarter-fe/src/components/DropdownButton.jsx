import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import languageStore from '../zustand/languageStore';

const DropdownButton = ({setSearchType}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {language, setLanguage} = languageStore();

  const SearchOptionButton = ({name, handleClick}) =>
  {
    return (
        <button
            onClick={() => handleClick()}
            className="block w-full px-4 py-2 text-sm text-customColors-primary hover:bg-customColors-accent hover:text-customColors-secondary"
            role="menuitem"
        >
            {name}
        </button>
    );
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  let text = language === "EN"? ["Search by Title","Search by Author","Search by Tags"]:["Търси по Заглавие", "Търси по Автор", "Търси по Таг"];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex items-center justify-center w-full px-4 h-full text-lg text-customColors-accent rounded-full hover:bg-customColors-form_bg hover:text-customColors-complementary"
      >
        <FontAwesomeIcon icon = {faMagnifyingGlassPlus}/>
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg shadow-customColors-primary bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <SearchOptionButton name={text[0]} handleClick={()=>{setSearchType(1); setIsOpen(false)}}/>
            <SearchOptionButton name={text[1]} handleClick={()=>{setSearchType(2); setIsOpen(false)}}/>
            <SearchOptionButton name={text[2]} handleClick={()=>{setSearchType(3); setIsOpen(false)}}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
