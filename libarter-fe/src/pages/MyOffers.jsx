import { useState } from "react";
import { dbAdress } from "../constants";
import { routes } from "../constants";
import { useNavigate } from "react-router-dom";

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
        <div className='h-screen w-screen bg-customColors-white'>
            <div className="flex h-full flex-col">
                <div className="bg-white rounded-b-md shadow-lg">
                    <div className="text-2xl font-bold mb-4 text-customColors-darkBrown m-4 flex justify-center">
                    My Offers
                    </div>
                </div>
                
                {
                    myOffersList.length === 0?
                    <div className='flex h-full justify-center items-center'>
                        You have no offers
                    </div>
                    :
                    <ul>
                        {myOffersList.map((book, index) =>{
                            return(
                                <li key={index} className="flex justify-center itmes-center">
                                    <button className=" max-w-xs m-4 bg-customColors-darkBrown shadow-md shadow-gray-500 rounded-b-md"
                                    onClick={()=>navigate(routes.updateOffer, {state: book})}>
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
                                </li>
                            );
                        }
                        )}
                    </ul>
                }
            </div>
            
            
        </div>
    );


}
 
export default MyOffers;