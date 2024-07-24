import React from 'react';
import languageStore from '../zustand/languageStore';

const FormInputComponent = ({field, type, value, setValue, isError, setIsError, showLabel = true}) => {
   
    const {language, setLanguage} = languageStore();
    let text = language === "EN"?["Enter your "]:["Въведи "];

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
                placeholder={text[0] + field}
                className={`w-full border-2 border-gray-300 text-customColors-secondary focus:border-customColors-secondary focus:outline-none rounded-md px-3 ${isError ? 'border-red-500' : ''}`}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    setIsError(false); 
                }}
            />:
            <input
                type={type}
                id={field}
                name={field}
                placeholder={text[0] + field}
                required
                className={`w-full h-11 border-2 border-gray-300 text-customColors-secondary focus:border-customColors-secondary focus:outline-none rounded-md px-3 ${type !== "password"? 'py-2':''} ${isError ? 'border-red-500' : ''}`}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    setIsError(false);
                }}
            />
        }
        
    </div> );
}
 
export default FormInputComponent;