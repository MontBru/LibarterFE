const RequestOfferSelector = ({isRequest, setIsRequest}) => {
    return ( 
        <ul className=' bg-white flex flex-row justify-around shadow-black shadow-md h-12'>
                <li className='w-full my-3'>
                    <button
                        className='w-full text-customColors-darkBrown'
                        onClick={()=>{setIsRequest(false)}}
                    >
                        Offer
                    </button>
                </li>
                <li className='w-full my-3  text-customColors-darkBrown border-l border-solid border-black'>
                    <button
                        className='w-full'
                        onClick={()=>{setIsRequest(true)}}
                    >
                        Request
                    </button>
                </li>
            </ul>
     );
}
 
export default RequestOfferSelector;