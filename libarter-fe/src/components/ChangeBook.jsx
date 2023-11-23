import CenteredBox from "./CenteredBox";
import PhotoInput from "./PhotoInput";
import FormInputComponent from "./FormInputComponent";
import Switch from "./Switch";
import TagAdd from "./TagAdd";
import TagList from "./TagList";
import SubmitButton from "./SubmitButton";
import ISBNInput from "./ISBNInput";
import { useEffect } from "react";
import { useState } from "react";
import DisplayAllOffers from "./DisplayAllOffers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import getBookByISBN from "../service/getBookByISBN";
import getBookSuggestions from "../service/getBookSuggestions";

const ChangeBook = ({
    book,
    setBook,
    handleSubmit,
    error, setError,
}) => {

    const [pressed, setPressed] = useState(false)
    const [suggestedOffers, setSuggestedOffers] = useState([])

    useEffect(()=>{
        if(book.isbn!=="" && pressed==true)
        {
            const getData = async ()=>{
                const data = await getBookByISBN(book.isbn);
                setPressed(false);
                if (data !== null) {
                    setError(false)

                    let bookCopy = {...book};
                    bookCopy.name = data?.name;
                    bookCopy.author = data?.author;
                    bookCopy.description = data?.description;
                    bookCopy.publisher = data?.publisher;
                    bookCopy.yearPublished = data?.yearPublished;
                    setBook(bookCopy);
                }
                else{
                    setError(true);
                }   
            }
            getData();
        }
         
    },[pressed]);
    
    const setVal = (key, val) => {
        let bookCopy = {...book};
        bookCopy[key] = val;
        setBook(bookCopy);
    } 

    return ( 
        <main className='bg-customColors-white w-screen h-screen overflow-y-scroll'>
            <CenteredBox>
                <div className='flex flex-col'>
                    <h1 className="text-2xl font-bold mb-4 text-customColors-darkBrown flex justify-center">
                        {book.isRequest?"Add a request":"Add a new Book"}
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <PhotoInput 
                            photos={book.photos} 
                            setPhotos={(newPhotos)=>{
                                setVal("photos", newPhotos);
                        }}/>
                        
                        <ISBNInput 
                            setPressed={setPressed} 
                            isbn={book.isbn} 
                            setIsbn={(newIsbn)=>{
                                setVal("isbn", newIsbn);
                            }} 
                            error={error} 
                            setError={setError}
                        />

                        <FormInputComponent field={"Title"} type={"text"} value={book.name} setValue={(newName)=>{setVal("name", newName)}} isError={error} setIsError={setError}/>
                        <FormInputComponent field={"Author"} type={"text"} value={book.author} setValue={(newAuthor)=>{setVal("author", newAuthor)}} isError={error} setIsError={setError}/>
                        <FormInputComponent field={"Price"} type={"text"} value={book.price} setValue={(newPrice)=>{setVal("price", newPrice)}} isError={error} setIsError={setError}/>
                        <FormInputComponent field={"Publisher"} type={"text"} value={book.publisher} setValue={(newPublisher)=>{setVal("publisher", newPublisher)}} isError={error} setIsError={setError}/>
                        <FormInputComponent field={"Language"} type={"text"} value={book.language} setValue={(newLanguage)=>{setVal("language", newLanguage)}} isError={error} setIsError={setError}/>
                        <FormInputComponent field={"Year Published"} type={"text"} value={book.yearPublished} setValue={(newYearPublished)=>{setVal("yearPublished", newYearPublished)}} isError={error} setIsError={setError}/>

                        <Switch isChecked={book.isNew} setIsChecked={(isNew)=>{setVal("isNew", isNew)}} label={"Is the book new"}/>

                        <Switch isChecked={book.acceptsTrade} setIsChecked={(newAccTrade)=>{setVal("acceptsTrade", newAccTrade)}} label={"Do you accept barters"}/>

                        <TagAdd tags={book.tags} setTags={(newTags)=>{setVal("tags", newTags)}}/>

                        <TagList tags={book.tags} setTags={(newTags)=>{setVal("tags", newTags)}} removable={true}/>

                        <FormInputComponent field={"Description"} type={"description"} value={book.description} setValue={(newDescr)=>{setVal("description", newDescr)}} isError={error} setIsError={setError}/>

                        <div className="flex flex-row items-center gap-4">
                            <div>{book.isRequest?"Search for people with similar offers:":"Search for people with similar requests:"}</div>
                            <button 
                            type="button"
                            className=" text-customColors-lightBrown bg-customColors-darkBrown p-3 rounded-md"
                            onClick={()=>{
                                const getSuggestions = async () => {
                                    const data = await getBookSuggestions(book);
                                    if(data === null)
                                        setError(true);
                                    else
                                        setSuggestedOffers(data);                                
                                }
                            }}>
                                <FontAwesomeIcon icon={faSearch}/>
                            </button>
                        </div>
                        
                        <DisplayAllOffers 
                        center={false}
                        maxCols={3}
                        offers={suggestedOffers}
                        handleClick={(index)=>{
                            navigate(routes.offerPage, {state: myOffersList[index]})
                        }}   />
                        <div className="h-3"/>
                        <SubmitButton value={"Create offer"}/>
                        <div className="h-3"/>
                    </form>
                </div>
            </CenteredBox>
            
        </main>
     );
}
 
export default ChangeBook;