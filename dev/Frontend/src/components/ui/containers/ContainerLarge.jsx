import React from "react";

export const ContainerLarge = ({ children, className = "" }) => {
    return (
        <div className={`mx-auto max-w-7xl sm:px-7 md:px-10 ${className}`}>
            {children}
        </div>
    );
};
