import React from 'react';
import HomeButton from './HomeButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../constants';
import ProfilePageButton from './ProfilePageButton';
const Topbar = ({onMenuClick}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const resetPasswordPattern = /^\/reset-password\/[^\/]*$/;

    if(location.pathname === routes.register || 
       location.pathname === routes.forgotPassword ||
       location.pathname === routes.login ||
       location.pathname === routes.checkEmail ||
       resetPasswordPattern.test(location.pathname))
    {
        return null;
    }

    return ( 
        <header className='sticky top-0 z-50 h-16 bg-customColors-darkBrown text-white p-4 flex justify-between items-center shadow-md shadow-slate-500'>
            <HomeButton onMenuClick={onMenuClick}/>
            <ProfilePageButton/>
        </header>
    );
}
 
export default Topbar;