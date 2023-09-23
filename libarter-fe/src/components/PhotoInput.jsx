import React, { useState } from 'react';

const PhotoInput = () => {
  const [photos, setPhotos] = useState([]);
  const [fileInputs, setFileInputs] = useState([0]);

  const handleFileInputChange = (index, event) => {
    console.log("in handle file input change")
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const updatedPhotos = [...photos];
      const reader = new FileReader();
  
      reader.onload = (e) => {
        console.log(e.target.result); 
        updatedPhotos[index] = e.target.result;
        setPhotos(updatedPhotos);
        console.log(photos)
        if (index < 4) {
          // Add a new file input field if there are less than 5 photos
          setFileInputs([...fileInputs, index + 1]);
        }
      };
  
      reader.readAsDataURL(selectedFile);
    }
  };

  const renderPhotoInputs = () => {
    return fileInputs.map((ind) => (
      <div key={ind} className="p-2 flex justify-center items-center">
          {photos[ind] ? (
            <img 
            src={photos[ind]} 
            alt={`Uploaded ${ind}`} 
            className='w-36 h-36 shadow-mf rounded-md'
            />
          ) : (
            <div
              className="bg-customColors-darkBrown text-white font-bold h-36 w-36 shadow-md rounded-md flex flex-col justify-center items-center text-3xl relative"
            >
              <label htmlFor={`photo-input-${ind}`} className="cursor-pointer">
                +
                <input
                  type="file"
                  id={`photo-input-${ind}`}
                  accept="image/*"
                  onChange={(e) => {
                    console.log("changed");
                    handleFileInputChange(ind, e);
                  }}
                  className="opacity-0 absolute inset-0 w-36 h-36"
                />
              </label>
            </div>
          )}
          
      </div>
    ));
    // return (
    //   <div>
    //     <input
    //       type="file"
    //       id={`photo-input`}
    //       accept="image/*"
    //       onChange={(e) => {
    //           console.log("changed")
    //       }}
    //     />
    //   </div>
    // );
  };

  return (
    <div>
      {renderPhotoInputs()}
    </div>
  );
};

export default PhotoInput;
