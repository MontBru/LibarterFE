import React, { useRef } from 'react';
import CenteredBox from "../components/CenteredBox";
import { useState } from "react";
import { routes } from "../constants";
import SubmitButton from "../components/SubmitButton";
import { Link, useNavigate } from 'react-router-dom';
import FormInputComponent from "../components/FormInputComponent";
import register from '../service/public/register';
import { useParams } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import languageStore from '../zustand/languageStore';

const Register = () => {
    const {token} = useParams();

    const {language, setLanguage} = languageStore();
    let text = language === "EN"?['Please verify that you are not a robot!', "Register", "Username", "Phone Number", "Password", "Invalid credentials. Please try again.", "Log in instead"]:["Потвърдете, че не сте робот!", "Регистрация", "Потребител", "Телефон", "Парола", "Невалидни данни, пробвайте отново", "Към Логин"];

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNum] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const recaptcha = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!recaptcha.current.getValue())
            alert(text[0]);
        else
        {
            sessionStorage.removeItem("JWT");

            const handleRegister = async () => {
                const user={username,password, phoneNumber, token};
                const registeredSuccesfully = await register(user);
                    if(registeredSuccesfully)
                        navigate(routes.search);
                    else
                        setIsError(true);
            }

            handleRegister();
        }

        
    };

    

    return ( 
        <main className=' bg-customColors-accent w-screen h-screen overflow-y-scrollaxiosInstance'>
            <CenteredBox>
                <div className='flex flex-col'>
                    <h1 className="text-2xl font-bold mb-4 text-customColors-secondary">
                        {text[1]}
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <FormInputComponent field={text[2]} type="text" value={username} setValue={setUsername} isError={isError} setIsError={setIsError}/>
                        <FormInputComponent field={text[3]} type="tel" value={phoneNumber} setValue={setPhoneNum} isError={isError} setIsError={setIsError}/>
                        <FormInputComponent field={text[4]} type="password" value={password} setValue={setPassword} isError={isError} setIsError={setIsError}/>
                        <ReCAPTCHA ref={recaptcha} sitekey={process.env.REACT_APP_SITE_KEY}/>
                        <div className="my-4">
                            <SubmitButton value={text[1]} />
                        </div>
                        
                        

                        {isError && (
                            <div className="text-red-500">
                                {text[5]}
                            </div>
                        )}
                        
                        <div className="container flex justify-center">
                            <Link to={routes.login} className="text-customColors-primary">
                                {text[6]}
                            </Link>
                        </div>
                    </form>
                </div>
                
            </CenteredBox>
        </main>
     );
}
 
export default Register;