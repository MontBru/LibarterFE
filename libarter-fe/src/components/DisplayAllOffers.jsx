import React from 'react';
import BookCard from "./BookCard";
import { useState } from 'react';
import { useEffect } from 'react';import deleteBookById from '../service/deleteBookById';
import languageStore from '../zustand/languageStore';

const DisplayAllOffers = ({ offers, handleClick, maxCols = 10, center = true, canDelete = false }) => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [offerState, setOffers] = useState([...offers]);
  const [rerender, setRerender] = useState(false);
  
  useEffect(()=>{
    setRerender(true);
  }, [offers])
  
  const handleDelete = (index) => {

    deleteBookById(offers[index].id);
    offers.splice(index, 1);
    setRerender(true);
  }

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const {language, setLanguage} = languageStore();
  let text = language === "EN"?["No offers"]:["Няма обяви"];

  if(rerender === true){
    setOffers([...offers]);
    setRerender(false);    
  }



  return (

    <span className='-z-10'>
      {offerState.length === 0 ? (
        <div className={`flex h-full justify-center items-center`}>
          {text[0]}
        </div>
      ) : (
        <div className={`flex ${center ? "justify-center" : ""} overflow-x-hidden`}>
          <ul className="grid gap-3" style={{ gridTemplateColumns: `repeat(${parseInt(screenWidth / 280) > maxCols ? maxCols : parseInt(screenWidth / 280)}, minmax(256px, 1fr))` }}>
            {offerState.map((book, index) => (
              <li key={index} className='inline'>
                <BookCard
                  book={book}
                  handleClick={() => handleClick(index)}
                  handleDelete={canDelete?() => handleDelete(index):null}
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