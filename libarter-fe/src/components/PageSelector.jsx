import React from 'react';
import languageStore from '../zustand/languageStore';

const PageSelector = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const {language, setLanguage} = languageStore();
  let text = language === "EN"?["Page", "of"]:["Страница", "от"];

  return (
    <div className="flex justify-center items-center space-x-2 my-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className=" bg-customColors-primary text-customColors-accent px-2 py-1 rounded shadow-md shadow-customColors-primary"
      >
        {"<"}
      </button>
      <span className="text-customColors-primary">{text[0]} {currentPage} {text[1]} {totalPages}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className=" bg-customColors-primary text-customColors-accent px-2 py-1 rounded shadow-md shadow-customColors-primary"
      >
        {">"}
      </button>
    </div>
  );
};

export default PageSelector;
