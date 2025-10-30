import React from "react";

export const ContainerLarge = ({ children, className = "" }) => {
    return (
        <div className={`mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
};
