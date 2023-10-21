import React from 'react';
import BookCard from "./BookCard";
import { useState } from 'react';
import { useEffect } from 'react';
import { dbAdress } from '../constants';

const DisplayAllOffers = ({ offers, handleClick, maxCols = 10, center = true }) => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleDelete = (index) => {
    fetch(dbAdress + `user/book/deleteById/${offers[index].id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    }

    ).then((response) => {
      if (response.ok) {
        window.location.reload();
      }
      else {
        setError(true);
      }
    })
  }

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

    <span>
      {offers.length === 0 ? (
        <div className={`flex h-full justify-center items-center`}>
          Nothing here :/
        </div>
      ) : (
        <div className={`flex ${center ? "justify-center" : ""} overflow-x-hidden`}>
          <ul className="grid gap-3" style={{ gridTemplateColumns: `repeat(${parseInt(screenWidth / 280) > maxCols ? maxCols : parseInt(screenWidth / 280)}, minmax(256px, 1fr))` }}>
            {offers.map((book, index) => (
              <li key={index} className='inline'>
                <BookCard
                  book={book}
                  handleClick={() => handleClick(index)}
                  handleDelete={() => handleDelete(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </span>
  );
};

export default DisplayAllOffers;