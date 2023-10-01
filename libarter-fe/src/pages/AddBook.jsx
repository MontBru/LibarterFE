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

const AddBook = () => {
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
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if(isNaN(parseFloat(price)))
        {
            setError(true)
            return null;
        }

        e.preventDefault()
        const book={name,author,description, price, userId: uid, photos:photos, isNew:isNew, acceptsTrade:acceptsTrade, tags}
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
 
export default AddBook;