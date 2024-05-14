import React from 'react';
import TagList from './TagList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import noImgForThisBook from '../assets/NoImgForThisBook.jpeg';
import { useState } from 'react';
import { useEffect } from 'react';

const BookCard = ({ book, handleClick, handleDelete = null }) => {

    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        async function fetchImage() {
            if(!book.photos.length)
                return;
            const response = await fetch(`https://bryanlibarter.blob.core.windows.net/test/${book.photos[0]}`);
            const blobData = await response.blob();

            // Read the blob data as a base64 string
            const reader = new FileReader();
            reader.readAsDataURL(blobData);
            reader.onloadend = () => {
            const base64Data = reader.result;
            // Get the MIME type from the blob data
            const mimeType = blobData.type;
            // Prepend the base64 string with the appropriate data URL prefix
            setImageSrc(`data:${mimeType};base64,${base64Data.split(',')[1]}`);
            console.log(base64Data);
            };
        }
    
        fetchImage();
      }, []);

    return (
        <div className={handleDelete!==null ? 'relative':''}>
            <button style={{height:"27.5rem"}} 
            className="py-0 w-64 m-4 bg-customColors-secondary shadow-md shadow-customColors-primary rounded-b-md"
            onClick={() => handleClick()}>
                <div className='relative top-0'>
                    <img className="top-0 object-cover h-64 w-64" alt="Couldn't load image" src={imageSrc?imageSrc:noImgForThisBook}/>
                    {
                        book.new === true ?
                            <h3 className="absolute bottom-0 right-4 bg-customColors-primary py-1 px-3 rounded-xl shadow-md font-bold text-white mb-3">
                                NEW
                            </h3> :
                            null
                    }
                </div>
                
                <div className="flex flex-row justify-center mt-3">
                    <h3 className="line-clamp-1 font-bold text-customColors-accent pr-2">
                        {book.name}
                    </h3>
                    
                </div>

                <div className='px-4'>
                    
                    <div className='line-clamp-1 text-customColors-accent'>
                        {
                            book.tags && book.tags.length ?
                            <TagList tags={book.tags} setTags={null}/>:
                            <div className='h-12'></div>
                        }
                    </div>
                    

                    <p className='h-11 line-clamp-2 text-left font-light text-customColors-accent'>
                        {book.description}
                    </p>

                    <div className='flex flex-row justify-between pt-4'>
                        <h3 className="h-6 line-clamp-1 w-fit font-bold text-customColors-accent">
                            {book.author}
                        </h3> 
                        <h3 className="line-clamp-1 flex-shrink-0 rounded-sm font-bold px-1 text-white mb-3 border border-white w-fit">
                            {book.price} BGN
                            {
                                book.acceptsTrade &&
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
                handleDelete!==null &&
                <button
                    type="button"
                    className="absolute top-0 right-0 p-2 text-red-500 text-2xl bg-customColors-accent rounded-md shadow-md bg-opacity-60"
                    onClick={() => handleDelete()}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            }
            
        </div>

    );
}

export default BookCard;