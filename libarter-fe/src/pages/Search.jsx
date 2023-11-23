import React from 'react';
import SearchBar from "../components/SearchBar";
import DisplayAllOffers from "../components/DisplayAllOffers"
import { useEffect } from "react";
import { useState } from "react";
import PageSelector from "../components/PageSelector";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants";
import RequestOfferSelector from '../components/RequestOfferSelector';
import getBooksBySearch from '../service/getBooksBySearch';

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
      const data = await getBooksBySearch(endpoint, loadDTO);
      if(data === null)
        data = [];
        setMyOffersList(data.books);
        setTotalPages(data.totalPageCount);
    }

    fetchData();

  }, [searchTerm, pageNum, searchType, priceRange, isRequest]);

  return (
    <main className='z-0 flex flex-col h-full w-full bg-customColors-white overflow-y-scroll'>
      <RequestOfferSelector isRequest={isRequest} setIsRequest={setIsRequest} />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSearchType={setSearchType}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />

      <PageSelector
        currentPage={pageNum}
        totalPages={totalPages}
        onPageChange={(newPage) => {
          setPageNum(newPage)
        }}
      />
      <DisplayAllOffers
        offers={myOffersList}
        handleClick={(index) => {
          navigate(`${routes.offerPage}/${myOffersList[index].id}`)
        }}
      />
    </main>
  );
}

export default Search;