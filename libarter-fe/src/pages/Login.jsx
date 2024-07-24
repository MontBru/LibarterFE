import React, { useRef } from 'react';
import CenteredBox from "../components/CenteredBox";
import { useState } from "react";
import { routes } from "../constants";
import SubmitButton from "../components/SubmitButton";
import { Link, useNavigate } from 'react-router-dom';
import FormInputComponent from "../components/FormInputComponent";
import login from '../service/public/login';
import ReCAPTCHA from 'react-google-recaptcha';
import languageStore from '../zustand/languageStore';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();
    const recaptcha = useRef();
    const {language, setLanguage} = languageStore();
    let text = language === "EN"?['Please verify that you are not a robot!', "Login", "Username", "Password", "Forgot password?", "Don't have an account?", "Invalid credentials. Please try again."]:["Моля потвърдете, че не сте робот!", "Логин","Потребител", "Парола", "Забравена парола?", "Нямате профил?", "Невалидни данни, опитайте отново"];

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!recaptcha.current.getValue())
            alert(text[0])
        else
        {
            sessionStorage.removeItem("JWT");
            const loginDTO = {username, password}
            const handleLogin = async () => {
                const result = await login(loginDTO);
                if(result)
                    navigate(routes.search);
                else
                    setIsError(true);
            }

            handleLogin();
        }

        
    };

    

    return ( 
        <main className=' bg-customColors-accent w-screen h-full overflow-y-scroll'>
            <CenteredBox>
                <div>
                    <h1 className="text-2xl font-bold mb-4 text-customColors-secondary">
                        {text[1]}
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <FormInputComponent field={text[2]} type="text" value={username} setValue={setUsername} isError={isError} setIsError={setIsError}/>
                        <FormInputComponent field={text[3]} type="password" value={password} setValue={setPassword} isError={isError} setIsError={setIsError}/>
                        <div className="container flex justify-end mb-4">
                            <Link to={routes.forgotPassword} className="text-customColors-primary">
                                {text[4]}
                            </Link>
                        </div>


                        <ReCAPTCHA ref={recaptcha} sitekey={process.env.REACT_APP_SITE_KEY}/>

                        <div className="my-4">
                            <SubmitButton value={text[1]} />
                        </div>

                        {isError && (
                            <div className="text-red-500">
                                {text[6]}
                            </div>
                        )}
                        <div className="container flex justify-center">
                            <Link to = {routes.register} className="text-customColors-primary">
                                {text[5]}
                            </Link>
                        </div>
                    </form>
                </div>
                
            </CenteredBox>
        </main>
     );
}
 
export default Login;