import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import { dbAdress } from "../constants";
import BookInputComponent from "../components/BookInputComponent.jsx";


const AddBook = () => {
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        const book={name,author,description}
        console.log(book)
        fetch(dbAdress+"book/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(book)
            }
        
        ).then(()=>{
            console.log("book is added")
        })
    }

    return ( 
        <div className='bg-customColors-white w-screen h-screen overflow-y-scroll'>
            <div className='flex flex-col px-5 py-5 h-full'>
                <div className="text-2xl font-bold mb-4 text-customColors-darkBrown">
                    Add a new Book
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="submit"
                        value="Add photos"
                        className='w-full h-24 bg-customColors-darkBrown text-white font-bold text-xl mb-4 rounded-md'
                    />
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