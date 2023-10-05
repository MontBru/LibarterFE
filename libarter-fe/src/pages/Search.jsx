import React from 'react';
import SearchBar from "../components/SearchBar";
import DisplayAllOffers from "../components/DisplayAllOffers"
import { useEffect } from "react";
import { useState } from "react";
import { dbAdress } from "../constants";
import PageSelector from "../components/PageSelector";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants";
import DropdownButton from '../components/DropdownButton';

const Search = () => {
    const [myOffersList, setMyOffersList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNum, setPageNum] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchType, setSearchType] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
      if(searchType==1)
      {
        fetch(dbAdress + `user/book/getBooksBySearch`, {
          method: "POST",
          headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({searchTerm: searchTerm, pageNum: pageNum-1})
        })
          .then(async (response) => {
            if (response.ok) {
              const data = await response.json();
              setMyOffersList(data.books);
              setTotalPages(data.totalPageCount)
            } else {
              console.error("Couldn't load your offers");
            }
          });
      }
      else if(searchType==2)
      {
        fetch(dbAdress + `user/book/getBooksByAuthorSearch`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({searchTerm: searchTerm, pageNum: pageNum-1})
          })
            .then(async (response) => {
              if (response.ok) {
                const data = await response.json();
                setMyOffersList(data.books);
                setTotalPages(data.totalPageCount)
              } else {
                console.error("Couldn't load your offers");
              }
            });
      }
      else 
      {
        console.log("search by tags")
        fetch(dbAdress + `user/book/getBooksByTagSearch`, {
          method: "POST",
          headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({searchTerm: searchTerm, pageNum: pageNum-1})
        })
          .then(async (response) => {
            if (response.ok) {
              const data = await response.json();
              setMyOffersList(data.books);
              setTotalPages(data.totalPageCount)
            } else {
              console.error("Couldn't load your offers");
            }
          });
      }
      }, [searchTerm, pageNum, searchType]);

    return ( 
        <main className='flex flex-col h-full w-full bg-customColors-white overflow-y-scroll'>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSearchType={setSearchType}/>
          
          <PageSelector currentPage={pageNum} totalPages={totalPages} onPageChange={(newPage)=>{setPageNum(newPage)}}/>
          <DisplayAllOffers 
              offers={myOffersList}
              handleClick={(index)=>{
                  navigate(routes.offerPage, {state: myOffersList[index]})
              }}    
          />
        </main>
     );
}
 
export default Search;