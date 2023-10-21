import React from 'react';
import TagList from './TagList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const BookCard = ({ book, handleClick, handleDelete = null }) => {
    return (
        <div className={handleDelete!==null?'relative':''}>
            <button className="w-64 m-4 bg-customColors-darkBrown shadow-md shadow-gray-500 rounded-b-md"
                onClick={() => handleClick()}>
                <img className=" top-0 object-cover h-64 w-64" alt="Couldn't load image" />
                {
                    book.new === true ?
                        <h3 className="font-bold text-white mb-3">
                            NEW
                        </h3> :
                        null
                }
                <div className="flex flex-row justify-center m-3">
                    <h3 className="font-bold text-white pr-2">
                        {book.name}
                    </h3>
                    <h4 className=' font-extralight text-white pr-2'>
                        by
                    </h4>
                    <h3 className="font-bold text-white pr-2">
                        {book.author}
                    </h3>
                </div>
                <h3 className="font-bold text-white mb-3">
                    {book.price} BGN
                </h3>



                {
                    book.acceptsTrade === true ?
                        <h3 className="font-bold text-white mb-3">
                            ACCEPTS TRADES
                        </h3> :
                        null
                }

                {
                    book.tags === null ?
                        null :
                        <TagList tags={book.tags} setTags={null} />
                }

            </button>
            {
                handleDelete!==null?
                <button
                    type="button"
                    className="absolute top-0 right-0 p-2 text-red-500 text-2xl rounded-md shadow-md opacity-90"
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