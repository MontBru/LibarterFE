import CenteredBox from "./CenteredBox";
import PhotoInput from "./PhotoInput";
import FormInputComponent from "./FormInputComponent";
import Switch from "./Switch";
import TagAdd from "./TagAdd";
import TagList from "./TagList";
import SubmitButton from "./SubmitButton";

const ChangeBook = ({handleSubmit,
    photos, setPhotos,
    name, setName,
    error, setError,
    author, setAuthor,
    price, setPrice,
    isNew, setIsNew,
    acceptsTrade, setAcceptsTrade,
    tags, setTags,
    description, setDescription}) => {
    return ( 
        <div className='bg-customColors-white w-screen h-screen overflow-y-scroll'>
            <CenteredBox>
                <div className='flex flex-col h-full'>
                    <div className="text-2xl font-bold mb-4 text-customColors-darkBrown flex justify-center">
                        Add a new Book
                    </div>
                    <form onSubmit={handleSubmit}>
                        <PhotoInput photos={photos} setPhotos={setPhotos}/>
                        

                        <FormInputComponent field={"Title"} type={"text"} value={name} setValue={setName} isError={error} setIsError={setError}/>
                        <FormInputComponent field={"Author"} type={"text"} value={author} setValue={setAuthor} isError={error} setIsError={setError}/>
                        <FormInputComponent field={"Price"} type={"text"} value={price} setValue={setPrice} isError={error} setIsError={setError}/>

                        <Switch isChecked={isNew} setIsChecked={setIsNew} label={"Is the book new"}/>

                        <Switch isChecked={acceptsTrade} setIsChecked={setAcceptsTrade} label={"Do you accept barters"}/>

                        <TagAdd tags={tags} setTags={setTags}/>

                        <TagList tags={tags} setTags={setTags} removable={true}/>

                        <FormInputComponent field={"Description"} type={"description"} value={description} setValue={setDescription} isError={error} setIsError={setError}/>

                        <SubmitButton value={"Create offer"}/>
                        <div className="h-3"/>
                    </form>
                </div>
            </CenteredBox>
            
        </div>
     );
}
 
export default ChangeBook;