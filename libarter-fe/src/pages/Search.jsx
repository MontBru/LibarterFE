import SearchBar from "../components/SearchBar";
import DisplayAllOffers from "../components/DisplayAllOffers"
import { useEffect } from "react";
import { useState } from "react";
import { dbAdress } from "../constants";

const Search = () => {
    // const myOffersList = [{name:"HP", author: "JKR", description: "engaging"},
    // {name:"HP2", author:"JKR", description:"sequel"},
    // {name:"HP2", author:"JKR", description:"sequel"},
    // {name:"HP2", author:"JKR", description:"sequel"},
    // {name:"HP2", author:"JKR", description:"sequel"},
    // {name:"HP2", author:"JKR", description:"sequel"}];
    const [myOffersList, setMyOffersList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        fetch(dbAdress + `user/book/getBooksBySearch`, {
          method: "POST",
          headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({searchTerm: searchTerm, pageNum: 0})
        })
          .then(async (response) => {
            if (response.ok) {
              const data = await response.json();
              setMyOffersList(data);
            } else {
              console.error("Couldn't load your offers");
            }
          });
      }, [searchTerm]);

    return ( 
        <div className='h-full w-full bg-customColors-white overflow-y-scroll'>
            <div className="flex h-full flex-col">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <DisplayAllOffers 
                    offers={myOffersList}
                    handleClick={()=>{}}    
                />
            </div>
            
            
        </div>
     );
}
 
export default Search;