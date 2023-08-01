import CenteredBox from "../components/CenteredBox";
import { useState } from "react";
import { routes } from "../constants";
import SubmitButton from "../components/SubmitButton";
import { Link, useNavigate } from 'react-router-dom';

const FormInputComponent = ({field, type, value, setValue, isError, setIsError}) => {
        return (
        <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-customColors-darkBrown">
                {field}
            </label>
            <input
                type={type}
                id={field}
                name={field}
                placeholder={"Enter your " + field}
                required
                className={`w-full border-2 border-gray-300 text-customColors-darkBrown focus:border-customColors-lightBrown focus:outline-none rounded-md px-3 py-2 ${isError ? 'border-red-500' : ''}`}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    setIsError(false); // Reset the error state on input change
                }}
            />
        </div> );
}

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate(routes.home);
    };

    

    return ( 
        <div className=' bg-customColors-lightBrown w-screen h-screen'>
            <CenteredBox>
                <div className="text-2xl font-bold mb-4 text-customColors-darkBrown">
                    Sign In
                </div>
                <form onSubmit={handleSubmit}>
                <FormInputComponent field="Username" type="text" value={username} setValue={setUsername} isError={isError} setIsError={setIsError}/>
                <FormInputComponent field="Email" type="text" value={email} setValue={setEmail} isError={isError} setIsError={setIsError}/>
                <FormInputComponent field="Password" type="password" value={password} setValue={setPassword} isError={isError} setIsError={setIsError}/>
                <div className="mb-4">
                    <SubmitButton value="Register" />
                </div>
                {isError && (
                    <div className="text-red-500">
                        Invalid credentials. Please try again.
                    </div>
                )}
                <div className="container flex justify-end">
                    <Link to={routes.forgotPassword} className="text-customColors-lightBrown">
                        Forgot password?
                    </Link>
                </div>
            </form>
            </CenteredBox>
        </div>
     );
}
 
export default Register;