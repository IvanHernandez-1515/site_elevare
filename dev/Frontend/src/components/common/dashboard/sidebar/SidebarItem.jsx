import { NavLink } from "react-router-dom";

export const SidebarItem = ({ item }) => {
    return (
        <NavLink 
            to={item.to} 
            end={item.end}>
            {({ isActive }) => (
                <div
                    className={[
                        "group flex items-center relative",
                        "w-full h-10 px-3 gap-3 rounded-xl",
                        isActive
                            ? "bg-elevare-primary/10 text-elevare-primary"
                            : "text-elevare-text-main hover:bg-elevare-secondary/10 hover:text-elevare-primary",
                    ].join(" ")}
                >
                    <span
                        className={[
                            "absolute left-0 top-1/2 -translate-y-1/2",
                            "h-6 w-1 rounded-r-full",
                            isActive
                                ? "bg-elevare-primary"
                                : "bg-transparent group-hover:bg-elevare-primary/40",
                        ].join(" ")}
                        aria-hidden="true"
                    />
                    {item.icon ? (
                        <span
                            className={[
                                "text-elevare-primary",
                                "group-hover:text-elevare-secondary",
                                "group-[.active]:bg-elevare-primary/15",
                                "group-[.active]:text-elevare-primary",
                                "transition-colors duration-300",
                            ].join(" ")}
                            aria-hidden="true"
                        >
                            <item.icon size={18} strokeWidth={1.8} />
                        </span>
                    ) : null}
                    <span className="truncate">{item.label}</span>
                </div>
            )}
        </NavLink>
    );
};