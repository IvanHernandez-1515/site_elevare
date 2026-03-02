import { useMemo } from "react";
import { navConfig } from "./nav.config";
import { SidebarItem } from "./SidebarItem";

function hasAnyRole(userRoles = [], allowedRoles = []) {
    if (!allowedRoles?.length) return true;
    const set = new Set(userRoles);
    return allowedRoles.some((r) => set.has(r));
}

function hasAllPermissions(userPerms = [], requiredPerms = []) {
    if (!requiredPerms?.length) return true;
    const set = new Set(userPerms);
    return requiredPerms.every((p) => set.has(p));
}

function canShowItem(item, { roles = [], permissions = [] }) {
    if (item.any) return true;
    if (item.roles?.length && !hasAnyRole(roles, item.roles)) return false;
    if (item.permissions?.length && !hasAllPermissions(permissions, item.permissions)) return false;
    return true;
}

export const Sidebar = ({ roles = [], permissions = [], className = "" }) => {
    const items = useMemo(() => {
        const filtered = navConfig.filter((item) => {
            if (item.type === "divider") return true;
            return canShowItem(item, { roles, permissions });
        });

        const cleaned = [];
        for (const it of filtered) {
            const prev = cleaned[cleaned.length - 1];
            if (it.type === "divider" && (!prev || prev.type === "divider")) continue;
            cleaned.push(it);
        }
        while (cleaned[0]?.type === "divider") cleaned.shift();
        while (cleaned[cleaned.length - 1]?.type === "divider") cleaned.pop();

        return cleaned;
    }, [roles, permissions]);

    return (
        <aside
            className={[
                // LAYOUT
                "fixed flex flex-col",
                // POSITION
                "inset-y-0 left-0 z-40",
                // SIZE
                "h-screen w-64 shrink-0",
                // TYPO
                "font-sans",
                // COLOR
                "bg-elevare-neutral-light text-elevare-text-main",
                // BORDER + EFFECT
                "border-r border-black/10 shadow-sm",
                // MISC
                "overflow-hidden",
                className,
            ].join(" ")}
        >
            {/* Brand / Header */}
            <div className="relative">
                {/* Banda institucional */}
                <div className="h-1 w-full bg-gradient-to-r from-elevare-primary to-elevare-secondary" />

                <div
                    className={[
                        "flex items-center gap-3",
                        "h-16 px-4",
                        "bg-white",
                        "border-b border-black/10",
                    ].join(" ")}
                >
                    {/* Logo mark */}
                    <div className="grid place-items-center h-10 w-10 rounded-xl bg-elevare-primary/10 text-elevare-primary">
                        <span className="text-sm font-semibold">EV</span>
                    </div>

                    <div className="min-w-0 leading-tight">
                        <div className="flex items-center justify-between">
                            <div className="truncate text-sm font-semibold text-elevare-text-main">
                                Elevare CV
                            </div>
                            <div>
                                {/* “pill” sutil para dar feel premium */}
                                <span className="shrink-0 rounded-full bg-elevare-secondary/10 px-2 py-0.5 text-[11px] font-medium text-elevare-secondary">
                                    Dashboard
                                </span>
                            </div>
                        </div>
                        {/* <div className="truncate text-xs text-elevare-text-muted">
                            CVs dinámicos • modulares • personalizables
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Nav */}
            <nav className="relative p-3 overflow-auto">
                <ul className="space-y-1">
                    {items.map((item) => {
                        if (item.type === "divider") {
                            return (
                                <li key={item.key} className="py-2">
                                    <div className="h-px bg-black/10" />
                                </li>
                            );
                        }

                        return (
                            <li key={item.key}>
                                <SidebarItem item={item} />
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Footer */}
            <div className="mt-auto p-3 border-t border-black/10 bg-white">
                <button
                    type="button"
                    className={[
                        "inline-flex items-center justify-center gap-2",
                        "w-full h-10 px-3",
                        "text-sm font-medium",
                        "rounded-xl",
                        "border border-black/10",
                        "bg-elevare-primary text-white",
                        "hover:bg-elevare-primary/90",
                        "transition-colors duration-300",
                        "focus-visible:outline-2 focus-visible:outline-elevare-primary focus-visible:outline-offset-2",
                    ].join(" ")}
                    onClick={() => console.log("logout")}
                >
                    Cerrar sesión
                </button>

                {/* <div className="mt-2 text-center text-xs text-elevare-text-muted">
                    Tu CV, listo para cada oportunidad.
                </div> */}
            </div>
        </aside>
    );
};