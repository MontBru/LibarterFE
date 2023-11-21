import React from 'react';
import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import { dbAdress } from "../constants";import { useNavigate } from "react-router-dom";
import { routes } from "../constants";
import ChangeBook from '../components/ChangeBook';
import RequestOfferSelector from '../components/RequestOfferSelector';
import axiosInstance from '../axios/axiosInstance';


const AddBook = () => {
    const [error, setError] = useState(false);

    const [book, setBook] = useState({isRequest:false, photos: [], name:"", author:"", description:"", price: 0, isNew: false, acceptsTrade: false, tags:[], isbn: "", publisher: "", language: "", yearPublished: ""});

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if(isNaN(parseFloat(price)))
        {
            setError(true)
            return null;
        }

        e.preventDefault()
        
        axiosInstance.post("user/book/add", book)
            .then((response)=>{
                if(response.status === 200)
                {
                    navigate(routes.myOffers)
                }
                else
                {
                    setError(true);
                }
            })
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
 
export default AddBook;