import React from 'react';
import { routes } from "../constants";
import { Link } from "react-router-dom";

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
            className={`w-full h-11 border-2 border-gray-300 text-customColors-darkBrown focus:border-customColors-lightBrown focus:outline-none rounded-md px-3 ${type !== "password"? 'py-2':''} ${isError ? 'border-red-500' : ''}`}
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
                setIsError(false); // Reset the error state on input change
            }}
        />
        {type === "password"?
         <div className="container flex justify-end">
            <Link to={routes.forgotPassword} className="text-customColors-lightBrown">
                Forgot password?
            </Link>
        </div> : 
        null}
    </div> );
}
 
export default FormInputComponent;