import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import CenteredBox from '../components/CenteredBox';
import TagList from '../components/TagList';
import { useState } from 'react';
import { dbAdress } from '../constants';

const OfferPage = () => {
    const state = useLocation();

    const book = state.state;
    const [seller, setSeller] = useState(null);

    useEffect(
        ()=>{
            if(book.userId !== null)
            {
                fetch(dbAdress + `user/getUser/${book.userId}`, {
                method: "GET"
            })
            .then(async (response) => {
                if (response.ok) {
                    
                    const data = await response.json()
                    setSeller(data);
                }
                else{
                    throw console.error();
                }
                    
                });  
            }
            
        },[book]
    )
    

    return ( 
        <div className='bg-customColors-white w-screen h-screen overflow-y-scroll'>
            <CenteredBox>
                <div className='flex flex-col h-full'>
                    <div className="text-2xl font-bold mb-4 text-customColors-darkBrown flex justify-center">
                        {book.name}
                    </div>
                        
                    <div className='flex flex-col px-5 py-5 h-full'>
                        <image/>

                        <div className='flex flex-row'>
                            <div className=' text-customColors-darkBrown font-bold text-xl mr-2'>
                                {book.price} BGN
                            </div>
                            {
                                book.acceptsTrade === true?
                                <div className="text-customColors-darkBrown mb-3 text-xl">
                                    / ACCEPTS TRADES
                                </div>:
                                null
                            }
                        </div>
                        

                        
                        <div className="flex flex-row my-7">
                            {
                                book.new === true?
                                <div className="font-bold text-customColors-darkBrown mr-3">
                                    NEW
                                </div>:
                                null
                            }
                            <div className="mr-3 font-bold text-customColors-darkBrown">
                                {book.name}
                            </div>
                            <div className="mr-3 font-thin text-customColors-darkBrown">
                                by
                            </div>
                            <div className="font-bold text-customColors-darkBrown">
                                {book.author}
                            </div>
                        </div>

                        <TagList tags={book.tags}/>

                        <div className=' text-customColors-darkBrown mt-3'>
                            {book.description}
                        </div>

                        <div className="border-t border-gray-300 mb-4 mt-8"/>

                        <div className='text-2xl mb-4'>
                            Contact Info
                        </div>

                        {
                            seller !== null?
                            <div>
                                <div className="mb-2">Username: {seller.username}</div>
                                <div className="mb-2">Email: {seller.email}</div>
                                <div className="mb-2">Phone Number: {seller.phoneNumber}</div>
                            </div>:
                            null
                        }

                    </div>
                </div>
            </CenteredBox>
        </div>
     );
}
 
export default OfferPage;