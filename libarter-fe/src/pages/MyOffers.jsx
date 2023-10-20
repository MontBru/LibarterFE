import React, { useState, useEffect } from "react";
import { dbAdress } from "../constants";
import { routes } from "../constants";
import { useNavigate } from "react-router-dom";
import DisplayAllOffers from "../components/DisplayAllOffers";
import RequestOfferSelector from "../components/RequestOfferSelector";

const MyOffers = () => {
  const [isRequest, setIsRequest] = useState(false);
  const uid = sessionStorage.getItem("UID");
  const navigate = useNavigate();
  const [myOffersList, setMyOffersList] = useState([]);
  const [loading, setLoading] = useState(true); 
  
  useEffect(() => {
    fetch(dbAdress + `user/getAllBooksByUID/${uid}/${isRequest}`, {
      method: "GET",
    })
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          setMyOffersList(data);
        } else {
          console.error("Couldn't load your offers");
        }
        setLoading(false); // Update loading state
      });
  }, [uid, isRequest]);

  return (
    <main className='flex flex-col h-full w-full bg-customColors-white overflow-y-scroll'>
        <RequestOfferSelector isRequest={isRequest} setIsRequest={setIsRequest}/>
        <h1 className="text-2xl sticky p-3 top-0 bg-white rounded-b-md shadow-lg font-bold text-customColors-darkBrown m-4 mt-0 flex justify-center">
          {isRequest?"My Requests":"My Offers"}
        </h1>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <DisplayAllOffers
            offers={myOffersList}
            handleClick={(index) => {
              navigate(routes.updateOffer, { state: myOffersList[index] });
            }}
          />
        )}
    </main>
  );
};

export default MyOffers;