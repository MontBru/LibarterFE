import React from "react";

const CenteredBox = ({ children }) => {
    return (
        <div className="min-h-screen w-screen my-4 flex items-center justify-center">
            <div style={{minWidth: '320px', width:'80vw'}} className="h-fit w-fit max-w-3xl bg-white p-8 shadow-customColors-complementary shadow-lg rounded-md">
                {children}
            </div>
        </div>
        
    );
};

export default CenteredBox;