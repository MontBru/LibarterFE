import React, { useState, useEffect } from "react";
import { dbAdress } from "../constants";
import { routes } from "../constants";
import { useNavigate } from "react-router-dom";
import DisplayAllOffers from "../components/DisplayAllOffers";

const MyOffers = () => {
  const uid = sessionStorage.getItem("UID");
  const navigate = useNavigate();
  const [myOffersList, setMyOffersList] = useState([]);
  const [loading, setLoading] = useState(true); 
  
  useEffect(() => {
    fetch(dbAdress + `user/getAllBooksByUID/${uid}`, {
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
  }, [uid]);

  return (
    <div className='h-full w-full bg-customColors-white overflow-y-scroll'>
      <div className="flex h-full flex-col">
        <div className="sticky top-0 bg-white rounded-b-md shadow-lg">
          <div className="text-2xl font-bold mb-4 text-customColors-darkBrown m-4 flex justify-center">
            My Offers
          </div>
        </div>

        {/* Conditional rendering based on loading state */}
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
      </div>
    </div>
  );
};

export default MyOffers;