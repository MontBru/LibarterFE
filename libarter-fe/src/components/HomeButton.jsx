import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HomeButton = ({onMenuClick}) => {
    return ( 
        <button className="text-white p-2 hover:bg-orange-200 hover:bg-opacity-50 h-9 w-9 rounded-full" onClick={onMenuClick}>
            <FontAwesomeIcon icon={faBars} className='text-xl'/>
        </button>
     );
}
 
export default HomeButton;