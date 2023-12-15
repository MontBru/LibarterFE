import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { routes } from "../constants";

const ProfilePageButton = () => {
    const navigate = useNavigate();
    return ( 
        <button 
        className='text-white p-2 hover:bg-orange-200 hover:bg-opacity-50 h-9 w-9 rounded-full'
        onClick={()=>{navigate(routes.profilePage)}}
        >
            <FontAwesomeIcon icon={faUser}/>
        </button>
    );
}
 
export default ProfilePageButton;