import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { routes } from "../constants.jsx";
import ChangeBook from '../components/ChangeBook';
import RequestOfferSelector from '../components/RequestOfferSelector';
import updateBookById from '../service/updateBookById';

const UpdateOffer = (  ) => {
    const {state} = useLocation();

    const [error, setError] = useState(false)

    const [book, setBook] = useState(
      {
        isRequest: state?.isRequest!==null?state?.isRequest:false,
        photos: state?.photos !== null?state?.photos:[],
        name: state?.name !== null?state?.name:'',
        author: state?.author !== null?state?.author:'',
        description: state?.description !== null?state?.description:'',
        price: state?.price !== null?state?.price:0,
        isNew: state?.new !== null?state?.new:false,
        acceptsTrade: state?.acceptsTrade !== null?state?.acceptsTrade:false,
        tags: state?.tags !== null? state?.tags: [], 
        isbn: state?.isbn !== null?state?.isbn:'', 
        publisher: state?.publisher !== null?state?.publisher:'', 
        language: state?.language !== null?state?.language:'', 
        yearPublished: state?.yearPublished !== null?state?.yearPublished:''
      }
    );

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(state === null){
            return null;
        }

        if(isNaN(parseFloat(book.price)))
        {
            setError(true)
            return null;
        }


        const updateDB = async () => {
          const successfulUpdate = updateBookById(state.id, book);
          if(successfulUpdate)
            navigate(routes.myOffers);
          else
            setError(true);
        }
        updateDB();
    }

    return ( 
      <div>
        <RequestOfferSelector
            isRequest={book.isRequest}
            setIsRequest={(newIsRequest)=>{
                let bookCopy = {...book};
                bookCopy.isRequest = newIsRequest;
                setBook(bookCopy);
            }}
        />
        <ChangeBook
          handleSubmit={handleSubmit}
          error={error}
          setError={setError}
          book={book}
          setBook={setBook}
        />
      </div>
        
    );
}
 
export default UpdateOffer;