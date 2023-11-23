import React, { useState, useEffect } from "react";
import { routes } from "../constants";
import { useNavigate } from "react-router-dom";
import DisplayAllOffers from "../components/DisplayAllOffers";
import RequestOfferSelector from "../components/RequestOfferSelector";
import getAllBooksOfLoggedUser from "../service/getAllBooksOfLoggedUser";

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
    <main className='flex flex-col h-full w-full bg-customColors-white overflow-y-scroll z-0'>
        <RequestOfferSelector isRequest={isRequest} setIsRequest={setIsRequest}/>
        <h1 className="text-2xl sticky p-3 top-0 bg-white rounded-b-md shadow-lg font-bold text-customColors-darkBrown m-4 mt-0 flex justify-center">
          {isRequest?"My Requests":"My Offers"}
        </h1>

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
    </main>
  );
};

export default MyOffers;