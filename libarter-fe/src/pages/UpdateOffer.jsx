import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import { routes } from "../constants.jsx";
import { dbAdress } from "../constants.jsx";
import FormInputComponent from "../components/FormInputComponent.jsx"
import ChangeBook from '../components/ChangeBook';

const UpdateOffer = (  ) => {
    const {state} = useLocation();

    const [name, setName] = useState(state?.name);
    const [author, setAuthor] = useState(state?.author);
    const [description, setDescription] = useState(state?.description);
    const [price, setPrice] = useState(state?.price)
    const [error, setError] = useState(false)
    const [photos, setPhotos] = useState(state?.photos)
    const [isNew, setIsNew] = useState(state?.new)
    const [acceptsTrade, setAcceptsTrade] = useState(state?.acceptsTrade )
    const [tags, setTags] = useState(state?.tags)

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(state === null){
            return null;
        }

        if(isNaN(parseFloat(price)))
        {
            setError(true)
            return null;
        }

        const book={name,author,description, price, photos:photos, isNew:isNew, acceptsTrade:acceptsTrade, tags}
        
        fetch(dbAdress + `user/book/updateById/${state.id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
          })
          .then((response) => {
              if (response.ok) {
                navigate(routes.myOffers)
              }
              else{
                setError(true) 
              }
                
            });  
            
        
    }

    return ( 
        <ChangeBook
        handleSubmit={handleSubmit}
        photos={photos}
        setPhotos={setPhotos}
        name={name}
        setName={setName}
        error={error}
        setError={setError}
        author={author} 
        setAuthor={setAuthor}
        price={price}
        setPrice={setPrice}
        isNew={isNew}
        setIsNew={setIsNew}
        acceptsTrade={acceptsTrade} 
        setAcceptsTrade={setAcceptsTrade}
        tags={tags}
        setTags={setTags}
        description={description}
        setDescription={setDescription}
        />
    );
}
 
export default UpdateOffer;