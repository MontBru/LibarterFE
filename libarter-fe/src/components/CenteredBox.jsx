import React from "react";

const CenteredBox = ({ children }) => {
    return (
        <div className="min-h-screen w-screen my-4 flex items-center justify-center">
            <div className="h-fit w-fit bg-white p-8 shadow-xl rounded-md">
                {children}
            </div>
        </div>
        
    );
};

export default CenteredBox;