import React, { useEffect } from 'react';
import CenteredBox from '../components/CenteredBox';
import FormInputComponent from "../components/FormInputComponent";
import { useState } from 'react';
import SubmitButton from '../components/SubmitButton';
import forgotPassword from '../service/forgotPassword';
import { useNavigate } from 'react-router-dom';
import { routes } from '../constants';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        
        const sendRequest = async () => {
            const res = await forgotPassword(email);
            if(res === true)
                navigate(routes.checkEmail);
            else 
                setIsError(true);
        }
        
        sendRequest();
    }

    return ( 
        <main className=' bg-customColors-lightBrown w-screen h-full overflow-y-scroll'>
            <CenteredBox>
                <div>
                    <h1 className="text-2xl font-bold mb-4 text-customColors-darkBrown">
                        Forgot Password
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <FormInputComponent field="Email" type="text" value={email} setValue={setEmail} isError={isError} setIsError={setIsError}/>
                        
                        <div className="mb-4">
                            {/* doesn't work with form because the form doesn't wait for axios to fetch */}
                            <button
                            type='button'
                            onClick={handleSubmit}
                            className="w-full bg-customColors-darkBrown text-white py-2 px-4 rounded-md cursor-pointer"
                            >
                                Send Email
                                
                            </button>
                            {/* <SubmitButton value="Send Email" /> */}
                        </div>
                        {isError && (
                            <div className="text-red-500">
                                Invalid credentials. Please try again.
                            </div>
                        )}
                    </form>
                </div>
                
            </CenteredBox>
        </main>
     );
}
 
export default ForgotPassword;