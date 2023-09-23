import React from 'react';
import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import { dbAdress } from "../constants";import { useNavigate } from "react-router-dom";
import { routes } from "../constants";
import FormInputComponent from "../components/FormInputComponent";
import CenteredBox from "../components/CenteredBox"
import PhotoInput from '../components/PhotoInput';

const AddBook = () => {
    const uid = localStorage.getItem("UID");
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const [photo, setPhoto] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        const book={name,author,description, price, userId: uid}
        console.log(book)
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
        <div className='bg-customColors-white w-screen h-screen overflow-y-scroll'>
            <CenteredBox>
                <div className='flex flex-col h-full'>
                    <div className="text-2xl font-bold mb-4 text-customColors-darkBrown flex justify-center">
                        Add a new Book
                    </div>
                    <form onSubmit={handleSubmit}>
                        <PhotoInput/>
                        

                        <FormInputComponent field={"Title"} type={"text"} value={name} setValue={setName} isError={error} setIsError={setError}/>
                        <FormInputComponent field={"Author"} type={"text"} value={author} setValue={setAuthor} isError={error} setIsError={setError}/>
                        <FormInputComponent field={"Price"} type={"text"} value={price} setValue={setPrice} isError={error} setIsError={setError}/>
                        <FormInputComponent field={"Description"} type={"text"} value={description} setValue={setDescription} isError={error} setIsError={setError}/>
                        <SubmitButton value={"Create offer"}/>
                        <div className="h-3"/>
                    </form>
                </div>
            </CenteredBox>
            
        </div>
     );
}
 
export default AddBook;