import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import BookInputComponent from "../components/BookInputComponent.jsx";
import SubmitButton from "../components/SubmitButton";
import { routes } from "../constants.jsx";
import { dbAdress } from "../constants.jsx";

const UpdateOffer = (  ) => {
    const {state} = useLocation();

    const [name, setName] = useState(state?.name || '');
    const [author, setAuthor] = useState(state?.author || '');
    const [description, setDescription] = useState(state?.description || '');

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(state === null){
            return null;
        }

        fetch(dbAdress + `user/book/updateById/${state.id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name: name, author:author, description:description, id:state.id})
          })
          .then((response) => {
              if (response.ok === false) {
                console.error("Couldn't load your offers");
              } 
                console.log("navigating to my offers")
                navigate(routes.myOffers)
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
                    <BookInputComponent field={"Title"} value={name} setValue={setName}/>
                    <BookInputComponent field={"Author"} value={author} setValue={setAuthor}/>
                    <BookInputComponent field={"Description"} value={description} setValue={setDescription} rows={5}/>
                    <SubmitButton value={"Update offer"}/>
                    <div className="h-3"/>
                </form>
            </div>
        </div>
    );
}
 
export default UpdateOffer;