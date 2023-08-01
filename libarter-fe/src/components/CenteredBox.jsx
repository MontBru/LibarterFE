import React from "react";

const CenteredBox = ({ children }) => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 shadow-xl rounded-md">
                {children}
            </div>
        </div>
    );
};

export default CenteredBox;