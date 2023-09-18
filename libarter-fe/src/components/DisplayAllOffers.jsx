import React from 'react';
import BookCard from "./BookCard";

const DisplayAllOffers = ({ offers, handleClick }) => {
  return (
    <div>
      {offers.length === 0 ? (
        <div className='flex h-full justify-center items-center'>
          Nothing here :/
        </div>
      ) : (
        <ul className="grid grid-cols-1
         custom-1:grid-cols-2 
         custom-2:grid-cols-3 
         custom-3:grid-cols-4 
         custom-4:grid-cols-5 
         custom-5:grid-cols-6 
         custom-6:grid-cols-7 
         custom-7:grid-cols-8 
         gap-4">
          {offers.map((book, index) => (
            <li key={index} className="flex justify-center">
              <BookCard
                book={book}
                handleClick={() => handleClick(index)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayAllOffers;