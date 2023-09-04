import SearchBar from "../components/SearchBar";
import DisplayAllOffers from "../components/DisplayAllOffers"

const Search = () => {
    const myOffersList = [{name:"HP", author: "JKR", description: "engaging"},
    {name:"HP2", author:"JKR", description:"sequel"},
    {name:"HP2", author:"JKR", description:"sequel"},
    {name:"HP2", author:"JKR", description:"sequel"},
    {name:"HP2", author:"JKR", description:"sequel"},
    {name:"HP2", author:"JKR", description:"sequel"}];

    return ( 
        <div className='h-full w-full bg-customColors-white overflow-y-scroll'>
            <div className="flex h-full flex-col">
                <SearchBar/>
                <DisplayAllOffers 
                    offers={myOffersList}
                    handleClick={()=>{}}    
                />
            </div>
            
            
        </div>
     );
}
 
export default Search;