import CenteredBox from "./CenteredBox";
import PhotoInput from "./PhotoInput";
import FormInputComponent from "./FormInputComponent";
import Switch from "./Switch";
import TagAdd from "./TagAdd";
import TagList from "./TagList";
import SubmitButton from "./SubmitButton";
import ISBNInput from "./ISBNInput";
import { useEffect } from "react";
import { dbAdress } from "../constants";
import { useState } from "react";
import DisplayAllOffers from "./DisplayAllOffers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const ChangeBook = ({
    isRequest,
    handleSubmit,
    photos, setPhotos,
    name, setName,
    error, setError,
    author, setAuthor,
    price, setPrice,
    isNew, setIsNew,
    acceptsTrade, setAcceptsTrade,
    tags, setTags,
    description, setDescription,
    isbn, setIsbn,
    publisher, setPublisher,
    language, setLanguage,
    yearPublished,setYearPublished}) => {

    const [pressed, setPressed] = useState(false)
    const [suggestedOffers, setSuggestedOffers] = useState([])

    useEffect(()=>{
        if(isbn!=="" && pressed==true)
        {
            fetch(dbAdress + `user/book/getBookByISBN/${isbn}`, {
                method: "GET"
            })
            .then(async (response) => {
                setPressed(false);
                if (response.ok) {
                    setError(false)
                    const data = await response.json()
                    setName(data?.name)
                    setAuthor(data?.author)
                    setDescription(data?.description)
                    setPublisher(data?.publisher)
                    setYearPublished(data?.yearPublished)
                }
                else{
                    setError(true);
                    console.log("book with this isbn wasn't found")
                }        
            }); 
        }
         
    },[pressed]);
    
    return ( 
        <main className='bg-customColors-white w-screen h-screen overflow-y-scroll'>
            <CenteredBox>
                <div className='flex flex-col'>
                    <h1 className="text-2xl font-bold mb-4 text-customColors-darkBrown flex justify-center">
                        {isRequest?"Add a request":"Add a new Book"}
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <PhotoInput photos={photos} setPhotos={setPhotos}/>
                        
                        <ISBNInput setPressed={setPressed} isbn={isbn} setIsbn={setIsbn} error={error} setError={setError}/>

                        <FormInputComponent field={"Title"} type={"text"} value={name} setValue={setName} isError={error} setIsError={setError}/>
                        <FormInputComponent field={"Author"} type={"text"} value={author} setValue={setAuthor} isError={error} setIsError={setError}/>
                        <FormInputComponent field={"Price"} type={"text"} value={price} setValue={setPrice} isError={error} setIsError={setError}/>
                        <FormInputComponent field={"Publisher"} type={"text"} value={publisher} setValue={setPublisher} isError={error} setIsError={setError}/>
                        <FormInputComponent field={"Language"} type={"text"} value={language} setValue={setLanguage} isError={error} setIsError={setError}/>
                        <FormInputComponent field={"Year Published"} type={"text"} value={yearPublished} setValue={setYearPublished} isError={error} setIsError={setError}/>

                        <Switch isChecked={isNew} setIsChecked={setIsNew} label={"Is the book new"}/>

                        <Switch isChecked={acceptsTrade} setIsChecked={setAcceptsTrade} label={"Do you accept barters"}/>

                        <TagAdd tags={tags} setTags={setTags}/>

                        <TagList tags={tags} setTags={setTags} removable={true}/>

                        <FormInputComponent field={"Description"} type={"description"} value={description} setValue={setDescription} isError={error} setIsError={setError}/>

                        <div className="flex flex-row items-center gap-4">
                            <div>{isRequest?"Search for people with similar offers:":"Search for people with similar requests:"}</div>
                            <button 
                            type="button"
                            className=" text-customColors-lightBrown bg-customColors-darkBrown p-3 rounded-md"
                            onClick={()=>{
                                const book={isRequest:!isRequest, name, author, description, price, photos:photos, isNew:isNew, acceptsTrade:acceptsTrade, tags, publisher, yearPublished, language, isbn}

                                fetch(dbAdress + `user/book/getBookSuggestions`, {
                                    method: "POST",
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(book)
                                  })
                                  .then(async (response) => {
                                      if (response.ok) {
                                        setSuggestedOffers(await response.json())
                                        console.log(suggestedOffers)
                                      }
                                      else{
                                        setError(true) 
                                      }
                                        
                                    });  
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