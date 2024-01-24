import React, { useState, useEffect } from "react";
import { routes } from "../constants";
import { useNavigate } from "react-router-dom";
import DisplayAllOffers from "../components/DisplayAllOffers";
import RequestOfferSelector from "../components/RequestOfferSelector";
import getAllBooksOfLoggedUser from "../service/getAllBooksOfLoggedUser";
import Background from "../components/Background";

const MyOffers = () => {
  const [isRequest, setIsRequest] = useState(false);
  const navigate = useNavigate();
  const [myOffersList, setMyOffersList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleGetAll = async () => {
      const data = await getAllBooksOfLoggedUser(isRequest);
      setLoading(false);
      setMyOffersList(data);
    }
    handleGetAll();
  }, [isRequest]);

  return (
    // <main className='flex flex-col h-full w-full bg-customColors-complementary overflow-y-scroll z-0'>
      <Background> 

        <img src="myOffersWide.png" alt="" 
        className="w-full object-cover border-b-4 border-white hidden md:block shadow-lg shadow-customColors-primary"
        style={{height:"40vh"}}
        />

        <img src="myOffers.png" alt="" 
          className="h-2/5 w-full object-cover border-b-4 border-white md:hidden shadow-lg shadow-customColors-primary"
        />
      
        <h1 className="text-2xl z-40 sticky p-3 top-0 bg-white rounded-b-md shadow-lg shadow-customColors-primary font-bold text-customColors-secondary m-4 mt-0 flex justify-center">
          {isRequest?"My Requests":"My Offers"}
        </h1>

        <RequestOfferSelector isRequest={isRequest} setIsRequest={setIsRequest}/>

        {loading === true ? (
          <div>Loading...</div>
        ) : (
          <DisplayAllOffers
            offers={myOffersList}
            handleClick={(index) => {
              navigate(routes.updateOffer, { state: myOffersList[index] });
            }}
            canDelete = {true}
          />
        )}{/* </main> */}
        </Background>
        
    
    
  );
};

export default MyOffers;