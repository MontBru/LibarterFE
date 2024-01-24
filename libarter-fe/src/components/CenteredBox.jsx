import React from "react";

const CenteredBox = ({ children }) => {
    return (
        <div id="centered-box" className="min-h-screen w-screen my-4 flex items-center justify-center">
            <div className="h-fit w-fit max-w-3xl bg-white p-8 shadow-customColors-complementary shadow-lg rounded-md">
                {children}
            </div>
        </div>
        
    );
};

export default CenteredBox;