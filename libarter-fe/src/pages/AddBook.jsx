import React from 'react';
import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import { dbAdress } from "../constants";import { useNavigate } from "react-router-dom";
import { routes } from "../constants";
import FormInputComponent from "../components/FormInputComponent";
import CenteredBox from "../components/CenteredBox"
import PhotoInput from '../components/PhotoInput';
import Switch from '../components/Switch';
import TagList from '../components/TagList';
import TagAdd from '../components/TagAdd';
import ChangeBook from '../components/ChangeBook';
import RequestOfferSelector from '../components/RequestOfferSelector';

const AddBook = () => {
    const [isRequest, setIsRequest] = useState(false);
    const uid = sessionStorage.getItem("UID");
    const [photos,setPhotos] = useState([]); 
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [error, setError] = useState(false);
    const [isNew, setIsNew] = useState(false);
    const [acceptsTrade, setAcceptsTrade] = useState(false);
    const [tags, setTags] = useState([]);
    const [isbn, setIsbn] = useState('');
    const [publisher, setPublisher] = useState('');
    const [language, setLanguage] = useState('');
    const [yearPublished, setYearPublished] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if(isNaN(parseFloat(price)))
        {
            setError(true)
            return null;
        }

        e.preventDefault()
        const book={isRequest, name,author,description, price, userId: uid, photos:photos, isNew:isNew, acceptsTrade:acceptsTrade, tags, publisher, yearPublished, language, isbn}
        fetch(dbAdress+"user/book/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(book)
            }
        
        ).then((response)=>{
            if(response.ok)
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
 
export default AddBook;