import { useState } from "react";
import { dbAdress } from "../constants";
import { routes } from "../constants";
import { useNavigate } from "react-router-dom";
import BookCard from "../components/BookCard";
import DisplayAllOffers from "../components/DisplayAllOffers";

const MyOffers = () => {
    const uid=702;
    const myOffersList = [{name:"HP", author: "JKR", description: "engaging"},
                            {name:"HP2", author:"JKR", description:"sequel"}];
    const navigate = useNavigate();
    //const myOffersList = [{name:"Hello"}];

    // fetch(dbAdress+`user/getAllBooksByUID/${uid}`,{
    //     method:"GET"
    //     }
    
    // ).then((response)=>{
    //     if(response.ok)
    //     {
    //         return ( 
    //             <div>
                    
    //             </div>
    //         );
    //     }
    //     else{
    //         return (
    //             <div>
    //                 couldn't load your offers
    //             </div>
    //         )
    //     } 
    // })

    return ( 
        <div className='h-full w-full bg-customColors-white overflow-y-scroll'>
            <div className="flex h-full flex-col">
                <div className="bg-white rounded-b-md shadow-lg">
                    <div className="text-2xl font-bold mb-4 text-customColors-darkBrown m-4 flex justify-center">
                    My Offers
                    </div>
                </div>
                
                <DisplayAllOffers 
                    offers={myOffersList} 
                    handleClick={(index)=>{navigate(routes.updateOffer, {state: myOffersList[index]})}}
                />
            </div>
            
            
        </div>
    );


}
 
export default MyOffers;