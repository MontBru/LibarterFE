import React from 'react';
import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import { dbAdress } from "../constants";import { useNavigate } from "react-router-dom";
import { routes } from "../constants";
import ChangeBook from '../components/ChangeBook';
import RequestOfferSelector from '../components/RequestOfferSelector';
import addBook from '../service/addBook';


const AddBook = () => {
    const [error, setError] = useState(false);

    const [book, setBook] = useState({isRequest:false, photos: [], name:"", author:"", description:"", price: 0, isNew: false, acceptsTrade: false, tags:[], isbn: "", publisher: "", language: "", yearPublished: ""});

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if(isNaN(parseFloat(book.price)))
        {
            setError(true)
            return null;
        }

        e.preventDefault()
        
        const handleAddBook = async () => {
            const data = await addBook(book);
            if(data)
                navigate(routes.myOffers);
            else 
                setError(true);
        }
        
        handleAddBook();
    }

    return ( 
        
        <>            
            <ChangeBook
            type={"Add"}
            handleSubmit={handleSubmit}
            error={error}
            setError={setError}
            book={book}
            setBook={setBook}
            />
        </>
        
     );
}
 
export default AddBook;