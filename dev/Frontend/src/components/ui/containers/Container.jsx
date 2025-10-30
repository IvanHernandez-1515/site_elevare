import React from "react";

export const Container = ({children, className=""}) => {
    return(
        <div className={`mx-auto max-w-7xl px-4 sm:px-7 md:px-10 ${className}`}>
            {children}
        </div>
    );
};