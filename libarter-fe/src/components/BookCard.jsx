import React from 'react';
import TagList from './TagList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { image } from '../constants';

const BookCard = ({ book, handleClick, handleDelete = null }) => {
    
    const displayName = book.name.length<=28?book.name: `${book.name.substring(0, 25)}...`;
    const displayAuthor = book.author.length<=13?book.author: `${book.author.substring(0,10)}...`;
    const displayDescription = book.description<=58?book.description : `${book.description.substring(0, 55)}...`;

    return (
        <div className={handleDelete!==null?'relative':''}>
            <button className="w-64 m-4 bg-customColors-secondary shadow-md shadow-customColors-primary rounded-b-md"
                onClick={() => handleClick()}>
                <img className=" top-0 object-cover h-64 w-64" alt="Couldn't load image" src={image}/>
                {
                    book.new === true ?
                        <h3 className="font-bold text-white mb-3">
                            NEW
                        </h3> :
                        null
                }
                <div className="flex flex-row justify-center mt-3">
                    <h3 className="font-bold text-customColors-accent pr-2">
                        {displayName}
                    </h3>
                    
                </div>

                <div className='px-4'>
                    {
                        book.tags &&
                        <TagList tags={book.tags} setTags={null} />
                    }

                    <p className=' text-left font-light text-customColors-accent'>
                        {displayDescription}
                    </p>

                    <div className='flex flex-row justify-between pt-4'>
                        <h3 className="font-bold text-customColors-accent">
                            {displayAuthor}
                        </h3> 
                        <h3 className="rounded-sm font-bold px-1 text-white mb-3 border border-white w-fit">
                            {book.price} BGN
                            {
                                !book.acceptsTrade &&
                                <>
                                    |
                                    <FontAwesomeIcon icon={faRightLeft}/>
                                </>
                                
                            }
                        </h3>
                    </div>
                </div>
                

            </button>
            {
                handleDelete!==null?
                <button
                    type="button"
                    className="absolute top-0 right-0 p-2 text-red-500 text-2xl bg-customColors-accent rounded-md shadow-md bg-opacity-60"
                    onClick={() => handleDelete()}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>:
                null
            }
            
        </div>

    );
}

export default BookCard;