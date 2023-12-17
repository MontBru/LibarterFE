import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import readBarcode from '../service/readBarcode';

const ISBNInput = ({setPressed, isbn, setIsbn, error, setError}) => {
    const [isbnTmp, setIsbnTmp] = useState(isbn);
    const [imageData, setImageData] = useState(null);

    const handleImageCapture = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (event) => {
                setImageData(event.target.result);
                const image = event.target.result;
                setIsbnTmp(await readBarcode(image));
            };
            reader.readAsDataURL(file);


        }
    };

    const handleIsbnChange = (e) => {
        setIsbnTmp(e.target.value);
        setError(false);
    };

    return (
        <div className="flex items-center space-x-4">

            <div className='flex flex-col'>
                <div className='text-customColors-primary'> 
                    Capture ISBN or type it in (ISBN is the barcode behind the book):
                </div>
                {/* Image Capture */}
                <div className='flex flex-row my-3'>
                    <div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageCapture}
                            className="hidden"
                            id="imageInput"
                        />
                        <label htmlFor="imageInput" className="cursor-pointer">
                            {imageData ? (
                                <img src={imageData} alt="Captured ISBN" className="w-20 h-20" />
                            ) : (
                                <div className=" w-20 h-20 bg-customColors-secondary rounded-full text-center flex items-center justify-center">
                                    <div className="flex text-customColors-accent">Capture ISBN</div>
                                </div>
                            )}
                        </label>
                    </div>

                    {/* ISBN Input */}
                    <div className=' h-20 ml-2 flex items-center justify-center'>
                        <input
                            type="text"
                            placeholder="Enter ISBN"
                            value={isbnTmp}
                            onChange={handleIsbnChange}
                            className={`w-48 h-10 px-2 py-1 border-2 border-gray-300 text-customColors-secondary focus:border-customColors-complementary focus:outline-none rounded-md ${error ? 'border-red-500' : ''}`}
                        />
                    </div>
                    <div className='h-20 flex items-center ml-2 text-xl'>
                        <button
                        type='button'
                        className=' text-green-500'
                        onClick={()=>{
                            setPressed(true)
                            setIsbn(isbnTmp)
                            }}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ISBNInput;
