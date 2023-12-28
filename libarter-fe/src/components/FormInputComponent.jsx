import React from 'react';

const FormInputComponent = ({field, type, value, setValue, isError, setIsError, showLabel = true}) => {
   
    return (
    <div className="mb-2">
        {
        showLabel &&
        <label htmlFor="email" className="block mb-1 text-customColors-secondary">
            {field}
        </label>
        }
        {type==="description"?
            <textarea 
                rows={"5"}
                name={field}
                placeholder={"Enter your " + field}
                className={`w-full border-2 border-gray-300 text-customColors-secondary focus:border-customColors-complementary focus:outline-none rounded-md px-3 ${isError ? 'border-red-500' : ''}`}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    setIsError(false); // Reset the error state on input change
                }}
            />:
            <input
                type={type}
                id={field}
                name={field}
                placeholder={"Enter your " + field}
                required
                className={`w-full h-11 border-2 border-gray-300 text-customColors-secondary focus:border-customColors-complementary focus:outline-none rounded-md px-3 ${type !== "password"? 'py-2':''} ${isError ? 'border-red-500' : ''}`}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    setIsError(false); // Reset the error state on input change
                }}
            />
        }
        
    </div> );
}
 
export default FormInputComponent;