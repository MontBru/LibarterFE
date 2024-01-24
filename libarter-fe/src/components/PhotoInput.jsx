import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useEffect } from 'react';

const PhotoInput = ({photos, setPhotos}) => {

  const InputButton = () => {
    return ( 
      <div className='w-full flex justify-center'>
          <div
            className="bg-customColors-secondary text-white 
            font-bold h-64 w-64 shadow-md shadow-customColors-primary flex justify-center
            rounded-md items-center text-3xl 
            relative m-2" 
          >
            <label htmlFor={`photo-input`} className='cursor-pointer'>
              +
              <input
                type="file"
                id={`photo-input`}
                accept="image/*"
                onChange={(e) => {
                  handleFileInputChange(e);
                }}
                className="opacity-0 absolute inset-0 w-64 h-64"
              />
            </label>
          </div>
        </div>
     );
  }

  const handleFileInputChange = ( event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const updatedPhotos = [...photos];
      const reader = new FileReader();

      reader.onload = (e) => {
        updatedPhotos.push(e.target.result);
        setPhotos(updatedPhotos);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const handleImageClick = (index) => {
    // Implement zoom-in functionality here (you can use a modal or lightbox component)
    // Example: set a state to open a modal with the enlarged image
  };

  const handleRemoveImage = (index) => {
    const updatedPhotos = photos.filter((value,ind)=>ind!==index);
    setPhotos(updatedPhotos);
  };

  const renderPhotoInputs = () => {
        return photos.map((value,ind) => (
        <li key={ind} className="p-2 relative">
          <img
            src={photos[ind]}
            alt={`Uploaded ${ind}`}
            className=" w-64 h-64 object-cover shadow-md shadow-customColors-primary rounded-md cursor-pointer"
            onClick={() => handleImageClick(ind)}
          />
          <button
            type="button"
            className="absolute top-0 right-0 p-2 text-red-500 text-2xl rounded-md shadow-md shadow-customColors-primary opacity-90"
            onClick={() => handleRemoveImage(ind)}
          >
            <FontAwesomeIcon icon={faTrash}/>
          </button>
        </li>
      ));
  };

  if(photos!== null)
  {
  return (
  <div >

      <ul className='flex flex-wrap justify-center overflow-clip'>
        {renderPhotoInputs()}

        {
          photos.length < 5 &&
          <InputButton/>
        }
      </ul>
    
    
  </div>
    );
  }else{
    return null;
  }
};

export default PhotoInput;
