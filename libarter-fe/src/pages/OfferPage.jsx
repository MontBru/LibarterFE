import React, { useEffect } from 'react';
import CenteredBox from '../components/CenteredBox';
import TagList from '../components/TagList';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import getBookById from '../service/getBookById';
import getUserById from '../service/getUserById';

const OfferPage = () => {
    const {offerId} = useParams();

    const [book, setBook] = useState(null);
    const [seller, setSeller] = useState(null);

    useEffect(
        ()=>{
            const fetchData = async () => {
                const data = await getBookById(offerId);
                setBook(data);

                if(data !== null && data.userId !== null)
                {
                    const userData = await getUserById(data.userId);
                    setSeller(userData);
                }
            }

            fetchData();
            
        },[offerId]
    )

    const DisplayBookNameAndAuthor = ()=>
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
    
    if(book === null)
    {
        return <div>Loading</div>
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
                        

                        
                        <DisplayBookNameAndAuthor/>

                        <h4 className=' text-customColors-darkBrown mt-3'>
                            Publisher: {book?.publisher}
                        </h4>

                        <h4 className=' text-customColors-darkBrown mt-3'>
                            Year Published: {book?.yearPublished}
                        </h4>

                        <h4 className=' text-customColors-darkBrown mt-3'>
                            Language: {book?.language}
                        </h4>

                        <TagList tags={book.tags}/>

                        <h4 className=' text-customColors-darkBrown mt-3'>
                            Description:
                        </h4>
                        <p className=' text-customColors-darkBrown mt-1'>
                            {book.description}
                        </p>

                        <section>
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

                        </section>
                        
                    </div>
                </div>
            </CenteredBox>
        </main>
     );
}
 
export default OfferPage;