import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import BookInputComponent from "../components/BookInputComponent.jsx";
import SubmitButton from "../components/SubmitButton";
import { routes } from "../constants.jsx";
import { dbAdress } from "../constants.jsx";
import FormInputComponent from "../components/FormInputComponent.jsx"

const UpdateOffer = (  ) => {
    const {state} = useLocation();

    const [name, setName] = useState(state?.name || '');
    const [author, setAuthor] = useState(state?.author || '');
    const [description, setDescription] = useState(state?.description || '');
    const [price, setPrice] = useState(state?.price || 0)
    const [error, setError] = useState(false)

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

        fetch(dbAdress + `user/book/updateById/${state.id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name: name, author:author, description:description, price, id:state.id})
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
        <div className='bg-customColors-white w-screen h-screen overflow-y-scroll'>
            <div className='flex flex-col px-5 py-5 h-full'>
                <div className="text-2xl font-bold mb-4 text-customColors-darkBrown">
                    Update Book
                </div>
                <form onSubmit={handleSubmit}>
                    <image/>
                    <FormInputComponent field={"Title"} type={"text"} value={name} setValue={setName} isError={error} setIsError={setError}/>
                    <FormInputComponent field={"Author"} type={"text"} value={author} setValue={setAuthor} isError={error} setIsError={setError}/>
                    <FormInputComponent field={"Price"} type={"text"} value={price} setValue={setPrice} isError={error} setIsError={setError}/>
                    <FormInputComponent field={"Description"} type={"text"} value={description} setValue={setDescription} isError={error} setIsError={setError}/>
                    <SubmitButton value={"Update offer"}/>
                    <div className="h-3"/>
                </form>
            </div>
        </div>
    );
}
 
export default UpdateOffer;