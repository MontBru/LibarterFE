import React from 'react';

const SubmitButton = ({value}) => {
    return ( <input
        type="submit"
        value={value}
        className="w-full bg-customColors-darkBrown text-white py-2 px-4 rounded-md cursor-pointer"
    /> );
}
 
export default SubmitButton;