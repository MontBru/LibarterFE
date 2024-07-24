import React from 'react';
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { routes } from "../constants";
import { Link } from 'react-router-dom';
import HomeButton from "./HomeButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faBook, faInfoCircle, faMessage } from '@fortawesome/free-solid-svg-icons';
import languageStore from '../zustand/languageStore';

const Navbar = ({show, onMenuClick}) => {
    const location = useLocation();
    const navbarRef = useRef(null);

    const {language, setLanguage} = languageStore();
    let text = language === "EN"?["Search for Books", "Add Offer", "My offers", "Chat", "About Us"]:["Търси Книги", "Добави Обява", "Моите Обяви", "Чат", "За Нас"];

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            onMenuClick();
        }
        };
    
        if (show) {
        document.addEventListener("mousedown", handleClickOutside);
        } else {
        document.removeEventListener("mousedown", handleClickOutside);
        }
    
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [show, onMenuClick]);

    // const resetPasswordPattern = /^\/reset-password\/[^\/]*$/;


    // if(location.pathname === routes.checkEmail || location.pathname === routes.register || location.pathname === routes.forgotPassword || resetPasswordPattern.test(location.pathname))
    // {
    //     return null;
    // }

    

    

    const NavButton = ({route, text, icon}) => {
        return ( 
            <Link to={route} 
            className='hover:bg-orange-200 hover:bg-opacity-50 h-10 flex items-center rounded-md'
            onClick = {()=>{onMenuClick()}}>
                <FontAwesomeIcon icon={icon} className=' ml-3 mr-7'/>
                {text}
            </Link>
        );
    }

    if(show === true)
    {
        return (
            <nav className="relative z-50">
                <div className="fixed inset-0 bg-black opacity-50"/>
                <div ref={navbarRef} className={`fixed left-0 top-0 h-full w-[15rem] bg-customColors-secondary text-white p-4`}>
                    <HomeButton onMenuClick={onMenuClick}/>
                    <ul className='flex flex-col mt-6'>
                        <li><NavButton route={routes.search} text={text[0]} icon={faSearch}/></li>
                        <li><NavButton route={routes.addBook} text={text[1]} icon={faPlus}/></li>
                        <li><NavButton route={routes.myOffers} text={text[2]} icon={faBook}/></li>
                        <li><NavButton route={routes.conversations} text={text[3]} icon={faMessage}/></li>
                        <li><NavButton route={routes.aboutus} text={text[4]} icon={faInfoCircle}/></li>
                    </ul>
                    
                </div>
            </nav>
        );
    }
    
}
 
export default Navbar;
