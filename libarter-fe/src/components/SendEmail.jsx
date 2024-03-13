import React, { useEffect } from 'react';
import CenteredBox from '../components/CenteredBox';
import FormInputComponent from "../components/FormInputComponent";
import { useState } from 'react';
import SubmitButton from '../components/SubmitButton';
import forgotPassword from '../service/public/forgotPassword';
import { useNavigate } from 'react-router-dom';
import { routes } from '../constants';

const SendEmail = ({service, title}) => {
    const [email, setEmail] = useState("");
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        
        const sendRequest = async () => {
            const res = await service(email);
            console.log(res)
            if(res === true)
                navigate(routes.checkEmail);
            else 
                setIsError(true);
        }
        
        sendRequest();
    }

    return ( 
        <main className=' bg-customColors-accent w-screen h-full overflow-y-scroll'>
            <CenteredBox>
                <div>
                    <h1 className="text-2xl font-bold mb-4 text-customColors-secondary">
                        {title}
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <FormInputComponent field="Email" type="text" value={email} setValue={setEmail} isError={isError} setIsError={setIsError}/>
                        
                        <div className="mb-4">
                            <button
                            type='button'
                            onClick={handleSubmit}
                            className="w-full bg-customColors-secondary text-white py-2 px-4 rounded-md cursor-pointer"
                            >
                                Send Email
                                
                            </button>
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
 
export default SendEmail;