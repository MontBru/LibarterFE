import React from "react";

const CenteredBox = ({ children }) => {
    return (
        <div className="min-h-screen my-4 bg-white p-8 shadow-xl rounded-md flex items-center justify-center">
            {children}
        </div>
    );
};

export default CenteredBox;