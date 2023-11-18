import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import { routes } from "../constants.jsx";
import { dbAdress } from "../constants.jsx";
import FormInputComponent from "../components/FormInputComponent.jsx"
import ChangeBook from '../components/ChangeBook';
import RequestOfferSelector from '../components/RequestOfferSelector';
import axiosInstance from '../axios/axiosInstance';

const UpdateOffer = (  ) => {
    const {state} = useLocation();

    const [isRequest, setIsRequest] = useState(state?.isRequest!==null?state?.isRequest:false);
    const [name, setName] = useState(state?.name !== null?state?.name:'');
    const [author, setAuthor] = useState(state?.author !== null?state?.author:'');
    const [description, setDescription] = useState(state?.description !== null?state?.description:'');
    const [price, setPrice] = useState(state?.price !== null?state?.price:0)
    const [error, setError] = useState(false)
    const [photos, setPhotos] = useState(state?.photos !== null?state?.photos:[])
    const [isNew, setIsNew] = useState(state?.new !== null?state?.new:false)
    const [acceptsTrade, setAcceptsTrade] = useState(state?.acceptsTrade !== null?state?.acceptsTrade:false)
    const [tags, setTags] = useState(state?.tags)
    const [isbn, setIsbn] = useState(state?.isbn !== null?state?.isbn:'')
    const [publisher, setPublisher] = useState(state?.publisher !== null?state?.publisher:'');
    const [language, setLanguage] = useState(state?.language !== null?state?.language:'');
    const [yearPublished, setYearPublished] = useState(state?.yearPublished !== null?state?.yearPublished:'');

    if(tags === null)
    {
      setTags([]);
    }
    if(photos === null)
    {
      setPhotos([]);
    }

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

        const book={isRequest, name, author, description, price, photos:photos, isNew:isNew, acceptsTrade:acceptsTrade, tags, publisher, yearPublished, language, isbn} 
            
        axiosInstance.put(`user/book/updateById/${state.id}`, book)
          .then((response) => {
            if (response.status === 200) {
              navigate(routes.myOffers)
            }
            else{
              setError(true) 
            }
              
          }); 
    }

    return ( 
      <div>
        <RequestOfferSelector isRequest={isRequest} setIsRequest={setIsRequest}/>
        <ChangeBook
        isRequest={isRequest}
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
        isbn={isbn}
        setIsbn={setIsbn}
        publisher={publisher}
        setPublisher={setPublisher}
        language={language}
        setLanguage={setLanguage}
        yearPublished={yearPublished}
        setYearPublished={setYearPublished}
        />
      </div>
        
    );
}
 
export default UpdateOffer;