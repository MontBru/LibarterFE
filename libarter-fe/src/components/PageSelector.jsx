import React from 'react';

const PageSelector = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2 my-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className=" bg-customColors-accent text-customColors-primary px-2 py-1 rounded shadow-md shadow-customColors-primary"
      >
        {"<"}
      </button>
      <span className="text-customColors-accent">Page {currentPage} of {totalPages}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className=" bg-customColors-accent text-customColors-primary px-2 py-1 rounded shadow-md shadow-customColors-primary"
      >
        {">"}
      </button>
    </div>
  );
};

export default PageSelector;
