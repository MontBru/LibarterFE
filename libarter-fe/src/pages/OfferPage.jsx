import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import CenteredBox from '../components/CenteredBox';
import TagList from '../components/TagList';
import { useState } from 'react';
import { dbAdress } from '../constants';

const OfferPage = () => {
    const state = useLocation();

    const book = state.state;
    console.log(book)
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

    const displayBookNameAndAuthor = ()=>
    {
        return (
            <div className="flex flex-row my-7">
                {
                    book.new === true?
                    <h3 className="font-bold text-customColors-darkBrown mr-3">
                        NEW
                    </h3>:
                    null
                }
                <h3 className="mr-3 font-bold text-customColors-darkBrown">
                    {book.name}
                </h3>
                <h4 className="mr-3 font-thin text-customColors-darkBrown">
                    by
                </h4>
                <h3 className="font-bold text-customColors-darkBrown">
                    {book.author}
                </h3>
            </div>

        );
    }
    

    return ( 
        <main className='bg-customColors-white w-screen h-screen overflow-y-scroll'>
            <CenteredBox>
                <div className='flex flex-col'>

                    <h1 className="text-2xl font-bold mb-4 text-customColors-darkBrown flex justify-center">
                        {book.name}
                    </h1>
                        
                    <div className='p-3 h-full'>
                        <image/>

                        <div className='flex flex-row'>
                            <h3 className=' text-customColors-darkBrown font-bold text-xl mr-2'>
                                {book.price} BGN
                            </h3>
                            {
                                book.acceptsTrade === true?
                                <h3 className="text-customColors-darkBrown mb-3 text-xl">
                                    / ACCEPTS TRADES
                                </h3>:
                                null
                            }
                        </div>
                        

                        
                        <displayBookNameAndAuthor/>

                        <TagList tags={book.tags}/>

                        <p className=' text-customColors-darkBrown mt-3'>
                            {book.description}
                        </p>

                        <div className="border-t border-gray-300 mb-4 mt-8"/>

                        <h2 className='text-2xl mb-4'>
                            Contact Info
                        </h2>

                        {
                            seller !== null?
                            <ul>
                                <li className="mb-2">Username: {seller.username}</li>
                                <li className="mb-2">Email: {seller.email}</li>
                                <li className="mb-2">Phone Number: {seller.phoneNumber}</li>
                            </ul>:
                            null
                        }

                    </div>
                </div>
            </CenteredBox>
        </main>
     );
}
 
export default OfferPage;