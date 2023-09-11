import { useLocation } from "react-router-dom";

const OfferPage = () => {
    const state = useLocation();

    const book = state.state;

    return ( 
            <div className='bg-customColors-white w-screen h-screen overflow-y-scroll'>
                <div className='flex flex-col px-5 py-5 h-full'>
                    <div className="text-2xl font-bold mb-4 text-customColors-darkBrown flex justify-center">
                        Offer
                    </div>
                    <image/>

                    <div className="flex flex-row my-7">
                        <div className="mr-3 font-bold">
                            {book.name}
                        </div>
                        <div className="mr-3 font-thin">
                            by
                        </div>
                        <div className="font-bold">
                            {book.author}
                        </div>
                    </div>
                    
                    <div>
                        {book.description}
                    </div>
                </div>
            </div>
     );
}
 
export default OfferPage;