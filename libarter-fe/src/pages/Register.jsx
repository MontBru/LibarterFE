import React from 'react';
import CenteredBox from "../components/CenteredBox";
import { useState } from "react";
import { routes } from "../constants";
import SubmitButton from "../components/SubmitButton";
import { Link, useNavigate } from 'react-router-dom';
import FormInputComponent from "../components/FormInputComponent";
import { dbAdress } from "../constants";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNum] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const user={username,email,password, phoneNumber}
        console.log(user)
        fetch(dbAdress+"auth/register",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
            }
        
        ).then((response)=>{
            if(response.ok)
            {
                console.log("user is registered")
                navigate(routes.login);
            }
            else
            {
                setIsError(true)
            }
        })
        
    };

    

    return ( 
        <div className=' bg-customColors-lightBrown w-screen h-screen'>
            <CenteredBox>
                <div className="text-2xl font-bold mb-4 text-customColors-darkBrown">
                    Register
                </div>
                <form onSubmit={handleSubmit}>
                    <FormInputComponent field="Username" type="text" value={username} setValue={setUsername} isError={isError} setIsError={setIsError}/>
                    <FormInputComponent field="Email" type="text" value={email} setValue={setEmail} isError={isError} setIsError={setIsError}/>
                    <FormInputComponent field="Phone Number" type="tel" value={phoneNumber} setValue={setPhoneNum} isError={isError} setIsError={setIsError}/>
                    <FormInputComponent field="Password" type="password" value={password} setValue={setPassword} isError={isError} setIsError={setIsError}/>
                    <div className="mb-4">
                        <SubmitButton value="Register" />
                    </div>
                    {isError && (
                        <div className="text-red-500">
                            Invalid credentials. Please try again.
                        </div>
                    )}
                    <div className="container flex justify-center">
                        <Link to={routes.login} className="text-customColors-lightBrown">
                            Log in instead
                        </Link>
                    </div>
                </form>
            </CenteredBox>
        </div>
     );
}
 
export default Register;