import React, { useState, useEffect } from "react";
import { routes } from "../constants";
import { useNavigate } from "react-router-dom";
import DisplayAllOffers from "../components/DisplayAllOffers";
import RequestOfferSelector from "../components/RequestOfferSelector";
import getAllBooksOfLoggedUser from "../service/getAllBooksOfLoggedUser";
import Background from "../components/Background";
import myOffersWideImg from '../assets/myOffersWide.png';
import myOffersImg from '../assets/myOffers.png';

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
      <Background> 

        <img src={myOffersWideImg} alt="" 
        className="w-full object-cover border-b-4 border-white hidden md:block shadow-lg shadow-customColors-primary"
        style={{height:"40vh"}}
        />

        <img src={myOffersImg} alt="" 
          className="h-2/5 w-full object-cover border-b-4 border-customColors-secondary md:hidden shadow-lg shadow-customColors-primary"
        />
      
        <h1 className="text-2xl z-40 sticky p-3 top-0 bg-customColors-secondary rounded-b-md shadow-lg shadow-customColors-primary font-bold text-customColors-accent m-4 mt-0 flex justify-center">
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
        )}
        </Background>
        
    
    
  );
};

export default MyOffers;