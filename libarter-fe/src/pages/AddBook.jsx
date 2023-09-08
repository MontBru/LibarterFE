import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import { dbAdress } from "../constants";
import BookInputComponent from "../components/BookInputComponent.jsx";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants";

const AddBook = () => {
    const uid = localStorage.getItem("UID");
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const [photo, setPhoto] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        const book={name,author,description, userId: uid}
        console.log(book)
        fetch(dbAdress+"user/book/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(book)
            }
        
        ).then(()=>{
            navigate(routes.myOffers)
        })
    }

    return ( 
        <div className='bg-customColors-white w-screen h-screen overflow-y-scroll'>
            <div className='flex flex-col px-5 py-5 h-full'>
                <div className="text-2xl font-bold mb-4 text-customColors-darkBrown flex justify-center">
                    Add a new Book
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="relative flex justify-center items-center">
                        <button
                            type="button"
                            className=" w-52 bg-customColors-darkBrown text-white font-bold text-xl mb-4 rounded-md py-2 px-4 flex justify-center items-center text-center">
                            Add Photos
                        </button>
                        <input
                            type="file"
                            accept="image/*"
                            id="photoInput"
                            onChange={(event) => {
                            setPhoto(event.target.files[0]);
                            }}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                    </div>

                    <BookInputComponent field={"Title"} value={name} setValue={setName}/>
                    <BookInputComponent field={"Author"} value={author} setValue={setAuthor}/>
                    <BookInputComponent field={"Description"} value={description} setValue={setDescription} rows={5}/>
                    <SubmitButton value={"Create offer"}/>
                    <div className="h-3">

                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default AddBook;