import React from 'react';
import CenteredBox from "../components/CenteredBox";
import { useState } from "react";
import { routes } from "../constants";
import SubmitButton from "../components/SubmitButton";
import { Link, useNavigate } from 'react-router-dom';
import FormInputComponent from "../components/FormInputComponent";
import login from '../service/public/login';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
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
    };

    

    return ( 
        <main className=' bg-customColors-accent w-screen h-full overflow-y-scroll'>
            <CenteredBox>
                <div>
                    <h1 className="text-2xl font-bold mb-4 text-customColors-secondary">
                        Log In
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <FormInputComponent field="Username" type="text" value={username} setValue={setUsername} isError={isError} setIsError={setIsError}/>
                        <FormInputComponent field="Password" type="password" value={password} setValue={setPassword} isError={isError} setIsError={setIsError}/>
                        <div className="container flex justify-end mb-4">
                            <Link to={routes.forgotPassword} className="text-customColors-primary">
                                Forgot password?
                            </Link>
                        </div>
                        <div className="mb-4">
                            <SubmitButton value="Log in" />
                        </div>
                        {isError && (
                            <div className="text-red-500">
                                Invalid credentials. Please try again.
                            </div>
                        )}
                        <div className="container flex justify-center">
                            <Link to = {routes.register} className="text-customColors-primary">
                                Don't have an account?
                            </Link>
                        </div>
                    </form>
                </div>
                
            </CenteredBox>
        </main>
     );
}
 
export default Login;