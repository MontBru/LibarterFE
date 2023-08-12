import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import { dbAdress } from "../constants";


const InputComponent = ({field, value, setValue, rows}) => {
    if(rows==null)
        rows=1;
    return ( 
        <div>
            <label className="block mb-1 text-customColors-darkBrown">
                {field}
            </label>
            <textarea
                rows={rows}
                id={field}
                name={field}
                placeholder={"Enter the book's " + field}
                required
                className={`w-full border-2 border-gray-300 text-customColors-darkBrown focus:border-customColors-lightBrown focus:outline-none rounded-md px-3 py-2 mb-4`}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </div>
        );
}


const Home = () => {
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
        <div className=' bg-customColors-white w-screen h-screen'>
            <div className='px-5 py-5'>
                <div className="text-2xl font-bold mb-4 text-customColors-darkBrown">
                    Add a new Book
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="submit"
                        value="Add photos"
                        className='w-full h-24 bg-customColors-darkBrown text-white font-bold text-xl mb-4 rounded-md'
                    />
                    <InputComponent field={"Title"} value={name} setValue={setName}/>
                    <InputComponent field={"Author"} value={author} setValue={setAuthor}/>
                    <InputComponent field={"Description"} value={description} setValue={setDescription} rows={5}/>
                    <SubmitButton value={"Create offer"}/>
                </form>
            </div>
        </div>
     );
}
 
export default Home;