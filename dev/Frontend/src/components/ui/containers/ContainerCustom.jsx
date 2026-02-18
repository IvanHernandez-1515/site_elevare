export const ContainerCustom = ({children, className = ""}) => {
    return (
        <div className={`grid place-items-center min-h-dvh p-4 ${className}`}>
            {children}
        </div>
    );
};
