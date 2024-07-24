import { useEffect } from "react";
import { useState } from "react";
import getLoggedUser from "../service/getLoggedUser";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants";
import Background from "../components/Background";
import userImg from '../assets/user.png';
import languageStore from '../zustand/languageStore';


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

    const {language, setLanguage} = languageStore();
    let text = language === "EN"?["Loading...","Couldn't load your account", "Login", "Hello,", "Logout"]:["Зарежда...", "Не сте влезли в акаунта си", "Логин", "Здравей,", "Излез от профил"];

    
    return ( 
        <Background>
            <div className="min-h-screen">
            {user === 1 ? (
                <div className="p-12 text-customColors-primary text-xl overflow-scroll">{text[0]}</div>
            ) : user === null ? (
                <div className="p-12 text-customColors-primary text-xl overflow-scroll">
                    <p>
                        {text[1]}
                    </p>
                    <button
                    className="w-full bg-customColors-secondary text-white py-2 px-4 rounded-md cursor-pointer"
                    onClick={() => {
                        navigate(routes.login);
                    }}
                    >
                    {text[2]}
                    </button>
                </div>
            ) : (
                <div>
                    <div className="flex justify-center p-6">
                        <img 
                        src={userImg} 
                        alt="user default image" 
                        className=" w-5/6 max-w-xl"
                        />
                    </div>
                    
                    <h1 className="flex justify-center font-extrabold text-customColors-primary text-xl">
                        {`${text[3]} ${user.username}`}
                    </h1>

                    <div className="flex justify-center p-6">
                        <button 
                        className="bg-red-600 text-red-300 hover:bg-red-300 hover:text-red-600 font-bold py-2 px-4 rounded"
                        onClick={()=>{logout()}}
                        >
                            {text[4]}
                        </button>

                    </div>

                </div>
            )}
            </div>
        </Background>
     );
}
 
export default ProfilePage;