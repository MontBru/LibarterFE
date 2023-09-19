import React from 'react';
import CenteredBox from "../components/CenteredBox";
import { useState } from "react";
import { routes } from "../constants";
import SubmitButton from "../components/SubmitButton";
import { Link, useNavigate } from 'react-router-dom';
import FormInputComponent from "../components/FormInputComponent";
import { dbAdress } from "../constants";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const loginDTO = {username, password}
        fetch(dbAdress+"auth/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(loginDTO)
            }
        
        ).then(async (response)=> {
            if(response.ok)
            {
                const data = await response.json();

                localStorage.removeItem("JWT")
                localStorage.removeItem("UID")

                localStorage.setItem("JWT", data.jwt)
                localStorage.setItem("UID", data.uid)
                navigate(routes.search);
            }
            else{
                setIsError(true);
            }
        })
    };

    

    return ( 
        <div className=' bg-customColors-lightBrown w-screen h-full overflow-y-scroll'>
            <CenteredBox>
                <div className="text-2xl font-bold mb-4 text-customColors-darkBrown">
                    Log In
                </div>
                <form onSubmit={handleSubmit}>
                    <FormInputComponent field="Username" type="text" value={username} setValue={setUsername} isError={isError} setIsError={setIsError}/>
                    <FormInputComponent field="Password" type="password" value={password} setValue={setPassword} isError={isError} setIsError={setIsError}/>
                    <div className="container flex justify-end mb-4">
                        <Link to={routes.forgotPassword} className="text-customColors-lightBrown">
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
                        <Link to = {routes.register} className="text-customColors-lightBrown">
                            Don't have an account?
                        </Link>
                    </div>
                </form>
            </CenteredBox>
        </div>
     );
}
 
export default Login;