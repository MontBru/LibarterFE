import React from 'react';
import TagList from './TagList';

const BookCard = ( {book, handleClick} ) => {
    return ( 
        <button className=" w-64 m-4 bg-customColors-darkBrown shadow-md shadow-gray-500 rounded-b-md"
        onClick={()=>handleClick()}>
            <img className=" top-0 object-cover h-64 w-64" alt="Couldn't load image"/>
            {
                book.new === true?
                <div className="font-bold text-white mb-3">
                    NEW
                </div>:
                null
            }
            <div className="flex flex-row justify-center m-3">
                <div className="font-bold text-white pr-2">
                    {book.name}
                </div>
                <div className=' font-extralight text-white pr-2'>
                    by
                </div>
                <div className="font-bold text-white pr-2">
                    {book.author}
                </div>
            </div>
            <div className="font-bold text-white mb-3">
                {book.price} BGN
            </div>
              
            
            
            {
                book.acceptsTrade === true?
                <div className="font-bold text-white mb-3">
                    ACCEPTS TRADES
                </div>:
                null
            }
            
            {
                book.tags === null?
                null:
                <TagList tags={book.tags} setTags={null}/>
            }
            
        </button>
     );
}
 
export default BookCard;