import React from 'react';
import CenteredBox from '../components/CenteredBox';
import FormInputComponent from "../components/FormInputComponent";
import { useState } from 'react';
import SubmitButton from '../components/SubmitButton';
import resetPassword from '../service/public/resetPassword';
import { useNavigate, useParams } from 'react-router-dom';
import { routes } from '../constants';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const {token} = useParams();
    const navigate = useNavigate();

    const handleSubmit = () => {
        if(newPassword !== confirmPassword)
        {
            setIsError(true);
            return;
        }

        const asyncHandleSubmit = async () => {
            const res = await resetPassword({newPassword, token});
            if (res === false)
                setIsError(true);
            else
                navigate(routes.login);
        }

        asyncHandleSubmit();
    }

    return ( 
        <main className=' bg-customColors-accent w-screen h-full overflow-y-scroll'>
            <CenteredBox>
                <div>
                    <h1 className="text-2xl font-bold mb-4 text-customColors-secondary">
                        Reset Password
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <FormInputComponent field="New Password" type="password" value={newPassword} setValue={setNewPassword} isError={isError} setIsError={setIsError}/>
                        <FormInputComponent field="Confirm New Password" type="password" value={confirmPassword} setValue={setConfirmPassword} isError={isError} setIsError={setIsError}/>

                        <div className="mb-4">
                            <button
                                type='button'
                                onClick={handleSubmit}
                                className="w-full bg-customColors-secondary text-white py-2 px-4 rounded-md cursor-pointer"
                                >
                                    Reset Password
                                    
                            </button>    
                        </div>
                        {isError && (
                            <div className="text-red-500">
                                Session expired try getting another email
                            </div>
                        )}
                    </form>
                </div>
                
            </CenteredBox>
        </main>
     );
}
 
export default ResetPassword;