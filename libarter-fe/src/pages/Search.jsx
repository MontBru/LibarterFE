import React from 'react';
import SearchBar from "../components/SearchBar";
import DisplayAllOffers from "../components/DisplayAllOffers"
import { useEffect } from "react";
import { useState } from "react";
import PageSelector from "../components/PageSelector";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants";
import RequestOfferSelector from '../components/RequestOfferSelector';
import getBooksBySearch from '../service/public/getBooksBySearch';
import Background from '../components/Background';
import Footer from '../components/Footer';

const Search = () => {
  const [isRequest, setIsRequest] = useState(false);
  const [myOffersList, setMyOffersList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchType, setSearchType] = useState(1);

  const [priceRange, setPriceRange] = useState([0, 10000000]);

  const navigate = useNavigate();

  useEffect(() => {
    let endpoint = "";
    if (searchType == 1) {
      endpoint = "public/book/getBooksBySearch"
    }
    else if (searchType == 2) {
      endpoint = "public/book/getBooksByAuthorSearch"
    }
    else {
      endpoint = "public/book/getBooksByTagSearch"
    }


    const loadDTO = { isRequest, searchTerm: searchTerm, pageNum: pageNum - 1, minPrice: priceRange[0], maxPrice: priceRange[1] };

    const fetchData = async () => {
      let data = await getBooksBySearch(endpoint, loadDTO);
      if (data === null)
        data = { books: [], totalPageCount: 1 };
      setMyOffersList(data.books);
      setTotalPages(data.totalPageCount);
    }

    fetchData();

  }, [searchTerm, pageNum, searchType, priceRange, isRequest]);

  return (
    <Background>
      <div className=' bg-gradient-to-b from-customColors-primary to-customColors-complementary'>

      

      <div className="lg:flex relative mb-10 border-b-4 border-white shadow-lg shadow-customColors-primary">
        <div className="lg:w-1/2 lg:static">
          <div className=" lg:h-full w-full bg-customColors-homeImageBg shadow-lg shadow-customColors-primary lg:shadow-none border-b-4 border-white lg:border-none">
            <img
              src="WelcomeToLibarter.png"
              alt=""
              className=' w-full object-contain'
              style={{maxHeight: '50vh'}}
            />

          </div>
        </div>

        <div className="lg:w-1/2 lg:mt-0">
          <div className="h-full pt-10 pb-6 flex justify-center bg-customColors-homeImageBg">
            <RequestOfferSelector isRequest={isRequest} setIsRequest={setIsRequest} />
          </div>
        </div>

        <div className="absolute bottom-0 w-full">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setSearchType={setSearchType}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>
      </div>


      <DisplayAllOffers
        offers={myOffersList}
        handleClick={(index) => {
          navigate(`${routes.offerPage}/${myOffersList[index].id}`)
        }}
      />

      <PageSelector
        currentPage={pageNum}
        totalPages={totalPages}
        onPageChange={(newPage) => {
          setPageNum(newPage)
        }}
      />
      </div>
    </Background>
  );
}

export default Search;