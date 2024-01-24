import React, { useEffect } from 'react';
import CenteredBox from '../components/CenteredBox';
import TagList from '../components/TagList';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getBookById from '../service/public/getBookById';
import getUserById from '../service/public/getUserById';
import Background from '../components/Background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import addConversation from '../service/addConversation';
import { image, routes } from '../constants';

const OfferPage = () => {
    const {offerId} = useParams();

    const [book, setBook] = useState(null);
    const [seller, setSeller] = useState(null);

    const navigate = useNavigate();

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
                    <h3 className="font-bold text-customColors-primary mr-3">
                        NEW
                    </h3>:
                    null
                }
                <h3 className="mr-3 font-bold text-customColors-primary">
                    {book.name}
                </h3>
                <h4 className="mr-3 font-thin text-customColors-primary">
                    by
                </h4>
                <h3 className="font-bold text-customColors-primary">
                    {book.author}
                </h3>
            </div>

        );
    }
    
    if(book === null)
    {
        return <div>Loading</div>
    }

    const handleMessage = async () => {
        const conversationId = await addConversation(offerId);
        if(conversationId === -1)
            console.error("error");
        else
            navigate(`${routes.messages}/${conversationId}`);
    }

    const textColor = 'text-customColors-primary';

    return ( 
        <Background>
            <CenteredBox>
                <div className='flex flex-col'>

                    <h1 className="text-2xl font-bold mb-4 text-customColors-primary flex justify-center">
                        {book.name}
                    </h1>

                    <div className='relative w-full flex justify-center mb-4'>
                        <ul className='flex flex-wrap overflow-clip gap-3 mb-4'>
                            {
                                book.photos.map((photo, i)=>{
                                    return (
                                        <li key={i}>
                                            <img
                                            className='w-64 h-64 shadow-md shadow-customColors-primary'
                                            src={photo}
                                            alt="Couldn't load image"
                                            />
                                        </li>    
                                    );
                                })
                            }
                        </ul>
                        

                        <button className='absolute -bottom-3 -right-3 w-14 h-14 bg-customColors-primary rounded-full flex justify-center items-center'
                            onClick={()=>{
                                handleMessage();
                            }}
                        >
                            <FontAwesomeIcon icon={faMessage} className='text-white text-2xl'/>
                        </button>
                    </div>
                    
                    <div className='p-3 h-full'>
                        
                        <div className='flex flex-row'>
                            <h3 className='border border-customColors-primary rounded-sm px-2 text-customColors-primary font-bold text-xl mr-2'>
                                {book.price} BGN
                            </h3>
                            {
                                book.acceptsTrade === true?
                                <h3 className="text-customColors-primary mb-3 text-xl">
                                    / ACCEPTS TRADES
                                </h3>:
                                null
                            }
                        </div>
                        

                        
                        <DisplayBookNameAndAuthor/>

                        <div className="border-t border-gray-300 mb-4 mt-8"/>

                        <h4 className={`${textColor} mt-3`}>
                            Publisher: {book?.publisher}
                        </h4>

                        <h4 className={`${textColor} mt-3`}>
                            Year Published: {book?.yearPublished}
                        </h4>

                        <h4 className={`${textColor} mt-3`}>
                            Language: {book?.language}
                        </h4>

                        <TagList tags={book.tags}/>

                        <div className="border-t border-gray-300 mb-4 mt-8"/>

                        <p className={`${textColor} mt-1`}>
                            Description: {book.description}
                        </p>

                        <section>
                            <div className="border-t border-gray-300 mb-4 mt-8"/>

                            <h2 className={`${textColor} text-2xl mb-4`}>
                                Contact Info
                            </h2>

                            {
                                seller !== null?
                                <ul>
                                    <li className={`${textColor} mb-2`}>Username: {seller.username}</li>
                                    <li className={`${textColor} mb-2`}>Email: {seller.email}</li>
                                    <li className={`${textColor} mb-2`}>Phone Number: {seller.phoneNumber}</li>
                                </ul>:
                                null
                            }

                        </section>
                        
                    </div>
                </div>
            </CenteredBox>
        </Background>
     );
}
 
export default OfferPage;