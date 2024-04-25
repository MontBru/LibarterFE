import React from 'react';
import HomeButton from './HomeButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../constants';
import ProfilePageButton from './ProfilePageButton';
import libarterLogo from '../assets/libarterLogo.png';

const Topbar = ({onMenuClick}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const resetPasswordPattern = /^\/reset-password\/[^\/]*$/;
    const requestRegisterPattern = /^\/register-token\/[^\/]*$/;

    if(location.pathname === routes.register || 
       location.pathname === routes.forgotPassword ||
       location.pathname === routes.login ||
       location.pathname === routes.checkEmail ||
       requestRegisterPattern.test(location.pathname) ||
       resetPasswordPattern.test(location.pathname))
    {
        return null;
    }

    return ( 
        <header className='sticky top-0 z-50 h-16 bg-customColors-primary text-white p-4 flex justify-between items-center shadow-md'>
            <HomeButton onMenuClick={onMenuClick}/>
            <button
            onClick={()=>{navigate(routes.search)}}
            >
                <img src={libarterLogo} alt="" className='h-16'/>
            </button>
            
            <ProfilePageButton/>
        </header>
    );
}
 
export default Topbar;