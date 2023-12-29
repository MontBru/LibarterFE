import React from 'react';
import CenteredBox from "../components/CenteredBox";
import { useState } from "react";
import { routes } from "../constants";
import SubmitButton from "../components/SubmitButton";
import { Link, useNavigate } from 'react-router-dom';
import FormInputComponent from "../components/FormInputComponent";
import register from '../service/public/register';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNum] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        sessionStorage.removeItem("JWT");

        const handleRegister = async () => {
            const user={username,email,password, phoneNumber};
            const registeredSuccesfully = await register(user);
                if(registeredSuccesfully)
                    navigate(routes.search);
                else
                    setIsError(true);
        }

        handleRegister();
    };

    

    return ( 
        <main className=' bg-customColors-accent w-screen h-screen overflow-y-scrollaxiosInstance'>
            <CenteredBox>
                <div className='flex flex-col'>
                    <h1 className="text-2xl font-bold mb-4 text-customColors-secondary">
                        Register
                    </h1>
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
                            <Link to={routes.login} className="text-customColors-primary">
                                Log in instead
                            </Link>
                        </div>
                    </form>
                </div>
                
            </CenteredBox>
        </main>
     );
}
 
export default Register;