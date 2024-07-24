import React, { useEffect, useRef } from 'react';
import CenteredBox from '../components/CenteredBox';
import FormInputComponent from "../components/FormInputComponent";
import { useState } from 'react';
import SubmitButton from '../components/SubmitButton';
import forgotPassword from '../service/public/forgotPassword';
import { useNavigate } from 'react-router-dom';
import { routes } from '../constants';
import ReCAPTCHA from 'react-google-recaptcha';
import languageStore from '../zustand/languageStore';


const SendEmail = ({service, title}) => {
    const [email, setEmail] = useState("");
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();
    const recaptcha = useRef();
    const {language, setLanguage} = languageStore();
    let text = language === "EN"?['Please verify that you are not a robot!', "Email", "Send Email", "Invalid credentials. Please try again."]:["Потвърдете, че не сте робот!", "Имейл", "Изпрати имейл", "Невалидни данни, опитай отново"];

    const handleSubmit = () => {
        
        if(!recaptcha.current.getValue())
            alert(text[0]);
        else{
            const sendRequest = async () => {
                const res = await service(email);
                if(res === true)
                    navigate(routes.checkEmail);
                else 
                    setIsError(true);
            }
            
            sendRequest();
        }

        
    }

    return ( 
        <main className=' bg-customColors-accent w-screen h-full overflow-y-scroll'>
            <CenteredBox>
                <div>
                    <h1 className="text-2xl font-bold mb-4 text-customColors-secondary">
                        {title}
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <FormInputComponent field={text[1]} type="text" value={email} setValue={setEmail} isError={isError} setIsError={setIsError}/>
                        
                        <ReCAPTCHA ref={recaptcha} sitekey={process.env.REACT_APP_SITE_KEY}/>

                        <div className="my-4">
                            <button
                            type='button'
                            onClick={handleSubmit}
                            className="w-full bg-customColors-secondary text-white py-2 px-4 rounded-md cursor-pointer"
                            >
                                {text[2]}
                                
                            </button>
                        </div>
                        {isError && (
                            <div className="text-red-500">
                                {text[3]}
                            </div>
                        )}
                    </form>
                </div>
                
            </CenteredBox>
        </main>
     );
}
 
export default SendEmail;