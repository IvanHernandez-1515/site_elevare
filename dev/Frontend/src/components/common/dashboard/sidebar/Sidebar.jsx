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
                // SPACING
                "",
                // TYPO
                "font-sans",
                // COLOR
                "bg-elevare-neutral-light text-elevare-text-main",
                // EFFECT
                "shadow-sm",
                // BORDER
                "border-r border-black/10",
                // MISC
                "overflow-hidden",
                // RESPONSIVE
                "",
                className,
            ].join(" ")}
        >
            {/* Brand */}
            <div
                className={[
                    "flex items-center",
                    "relative",
                    "h-16",
                    "px-4",
                    "font-heading",
                    "bg-white",
                    "",
                    "border-b border-black/10",
                    "",
                    "",
                ].join(" ")}
            >
                <div className="flex items-center gap-3">
                    <div
                        className={[
                            "grid place-items-center",
                            "relative",
                            "h-10 w-10",
                            "",
                            "",
                            "bg-elevare-primary/10 text-elevare-primary",
                            "",
                            "rounded-xl",
                            "",
                            "",
                        ].join(" ")}
                        aria-hidden="true"
                    >
                        <span className="text-sm font-semibold">EV</span>
                    </div>

                    <div className="leading-tight">
                        <div className="text-sm font-semibold text-elevare-text-main">
                            Elevare CV
                        </div>
                        <div className="text-xs text-elevare-text-muted">Dashboard</div>
                    </div>
                </div>
            </div>

            {/* Nav */}
            <nav
                className={[
                    "block",
                    "relative",
                    "",
                    "p-3",
                    "",
                    "",
                    "",
                    "",
                    "overflow-auto",
                    "",
                ].join(" ")}
            >
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
            <div
                className={[
                    "mt-auto",
                    "relative",
                    "",
                    "p-3",
                    "",
                    "",
                    "",
                    "",
                    "border-t border-black/10",
                    "",
                ].join(" ")}
            >
                <button
                    type="button"
                    className={[
                        "inline-flex items-center justify-center",
                        "relative",
                        "w-full h-10",
                        "px-3",
                        "text-sm font-medium",
                        "text-elevare-text-main bg-white hover:bg-black/5",
                        "transition-colors duration-300",
                        "rounded-xl border border-black/10",
                        "focus-visible:outline-2 focus-visible:outline-elevare-primary focus-visible:outline-offset-2",
                        "",
                        "",
                    ].join(" ")}
                    onClick={() => console.log("logout")}
                >
                    Cerrar sesion
                </button>
            </div>
        </aside>
    );
};