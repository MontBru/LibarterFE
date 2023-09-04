const BookCard = ( {book, handleClick} ) => {
    return ( 
        <button className=" max-w-xs m-4 bg-customColors-darkBrown shadow-md shadow-gray-500 rounded-b-md"
        onClick={()=>handleClick()}>
            <img className="object-cover h-64 w-64"/>
            <div className="flex flex-row justify-center m-3">
                <div className="font-bold text-white pr-2">
                    {book.name}
                </div>
                <div className=' font-extralight text-white pr-2'>
                    by
                </div>
                <div className="font-bold text-white pr-2">
                    {book.author}
                </div>
            </div>
              
        </button>
     );
}
 
export default BookCard;