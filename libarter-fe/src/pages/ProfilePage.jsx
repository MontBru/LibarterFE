import { useEffect } from "react";
import { useState } from "react";
import getLoggedUser from "../service/getLoggedUser";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants";
import Background from "../components/Background";

const ProfilePage = () => {
    const [user, setUser] = useState(1);
    const navigate = useNavigate();

    useEffect(()=>{

        const fetchData = async () =>{
            const data = await getLoggedUser();
            setUser(data);
        }

        fetchData();
    },[]);

    const logout = () =>{

        sessionStorage.removeItem("JWT");
        navigate(routes.search);

    }

    
    return ( 
        <Background>
            <div className="min-h-screen">
            {user === 1 ? (
                <div className="p-12 text-white text-xl overflow-scroll">Loading...</div>
            ) : user === null ? (
                <div className="p-12 text-white text-xl overflow-scroll">Couldn't load your account</div>
            ) : (
                <div>
                    <div className="flex justify-center p-6">
                        <img 
                        src="/user.png" 
                        alt="user default image" 
                        className=" w-5/6 max-w-xl"
                        />
                    </div>
                    
                    <h1 className="flex justify-center font-extrabold text-white text-xl overflow-scroll">
                        Hello, {user.username}
                    </h1>

                    <div className="flex justify-center p-6">
                        <button 
                        className="bg-red-600 text-red-300 hover:bg-red-300 hover:text-red-600 font-bold py-2 px-4 rounded"
                        onClick={()=>{logout()}}
                        >
                            Logout
                        </button>

                    </div>

                </div>
            )}
            </div>
        </Background>
     );
}
 
export default ProfilePage;