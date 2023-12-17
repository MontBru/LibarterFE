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
      if(data === null)
        data = {books:[], totalPageCount: 1};
      setMyOffersList(data.books);
      setTotalPages(data.totalPageCount);
    }

    fetchData();

  }, [searchTerm, pageNum, searchType, priceRange, isRequest]);

  return (
    <Background>

    
    {/* <main className='z-0 flex flex-col h-full w-full bg-customColors-complementary overflow-y-scroll'> */}
    
      <div className="relative h-3/5 w-full shadow-lg shadow-customColors-primary border-b-4 border-white mb-16">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover overflow-hidden"
          style={{
            backgroundImage: `url(WelcomeToLibarter.png)`,
            backgroundPosition: '20% 38%',
          }}
        />
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

      <RequestOfferSelector isRequest={isRequest} setIsRequest={setIsRequest} />
      

      

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
    {/* </main> */}
    </Background>
  );
}

export default Search;