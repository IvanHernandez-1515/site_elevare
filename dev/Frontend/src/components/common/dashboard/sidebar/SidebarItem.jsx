import { NavLink } from "react-router-dom";

export const SidebarItem = ({ item }) => {
    return (
        <NavLink
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
                [
                    // LAYOUT
                    "flex items-center",
                    // POSITION
                    "relative",
                    // SIZE
                    "w-full h-10",
                    // SPACING
                    "px-3 gap-3",
                    // TYPO
                    "font-sans text-sm",
                    // COLOR
                    isActive
                        ? "text-elevare-primary bg-elevare-primary/10"
                        : "text-elevare-text-main hover:bg-black/5 hover:text-elevare-primary",
                    // EFFECT
                    "transition-colors duration-300",
                    // BORDER
                    "rounded-lg",
                    // MISC
                    "focus-visible:outline-2 focus-visible:outline-elevare-primary focus-visible:outline-offset-2",
                    // RESPONSIVE
                    "md:text-base",
                ].join(" ")
            }
        >
            {item.icon ? (
                <span className="grid place-items-center h-5 w-5 text-current" aria-hidden="true">
                    {item.icon}
                </span>
            ) : null}

            <span className="truncate">{item.label}</span>
        </NavLink>
    );
};