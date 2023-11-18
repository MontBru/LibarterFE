import React from 'react';
import BookCard from "./BookCard";
import { useState } from 'react';
import { useEffect } from 'react';
import { dbAdress } from '../constants';
import axiosInstance from '../axios/axiosInstance';

const DisplayAllOffers = ({ offers, handleClick, maxCols = 10, center = true, canDelete = false }) => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [offerState, setOffers] = useState(offers);

  const handleDelete = (index) => {

    axiosInstance.delete(`user/book/deleteById/${offers[index].id}`)
      .then((response) => {
        if (response.status !== 200) 
        {
          setError(true);
        }
      })
      offers.splice(index, 1)
      setOffers(offers);
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

    <span className='-z-10'>
      {offers.length === 0 ? (
        <div className={`flex h-full justify-center items-center`}>
          Nothing here :/
        </div>
      ) : (
        <div className={`flex ${center ? "justify-center" : ""} overflow-x-hidden`}>
          <ul className="grid gap-3" style={{ gridTemplateColumns: `repeat(${parseInt(screenWidth / 280) > maxCols ? maxCols : parseInt(screenWidth / 280)}, minmax(256px, 1fr))` }}>
            {offers.map((book, index) => (
              <li key={index} className='inline'>
                {
                  canDelete?
                  <BookCard
                    book={book}
                    handleClick={() => handleClick(index)}
                    handleDelete={() => handleDelete(index)}
                  />:
                  <BookCard
                    book={book}
                    handleClick={() => handleClick(index)}
                  />
                }
              </li>
            ))}
          </ul>
        </div>
      )}
    </span>
  );
};

export default DisplayAllOffers;