import React from "react";

export const FeatureCard = ({
    ariaLabel,
    title,
    description,
    icon,
    className = "",
    onClick,
    type = "button",
}) => {
    return (
        <button
            type={type}
            aria-label={ariaLabel}
            onClick={onClick}
            className={[
                // LAYOUT → POSITION → SIZE → SPACING → TYPO → COLOR → EFFECT → BORDER → MISC
                "group flex flex-col text-left w-full h-full",
                "p-4",
                "font-sans",
                "bg-white/70 opacity-90",
                "shadow-sm transition-all duration-300",
                "rounded-2xl",
                "hover:opacity-100 hover:shadow-md hover:-translate-y-0.5",
                "active:opacity-100 active:shadow-md active:-translate-y-0.5",
                "focus:opacity-100 focus:shadow-md focus:-translate-y-0.5",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-secondary/50",
                className,
            ].join(" ")}
        >
            <div
                className={[
                    "grid place-items-center",
                    "w-10 h-10",
                    "bg-elevare-neutral-dark/10",
                    "transition-colors duration-300",
                    "rounded-xl",
                    "group-hover:bg-elevare-primary",
                    "group-active:bg-elevare-primary",
                    "group-focus:bg-elevare-primary",
                    "group-focus-visible:bg-elevare-primary",
                ].join(" ")}
            >
                {/* El icono ya viene como <svg .../> */}
                {icon}
            </div>

            <p className="mt-3 text-lg font-semibold leading-snug text-elevare-text-main">
                {title}
            </p>

            <p className="mt-1 text-sm text-elevare-text-muted">
                {description}
            </p>
        </button>
    );
}
