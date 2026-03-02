import {
    LayoutDashboard,
    FileText,
    User,
    Users,
    ShieldCheck,
    Gavel,
} from "lucide-react";

export const navConfig = [
    {
        key: "dashboard",
        label: "Dashboard",
        to: "/app",
        any: true,
        icon: LayoutDashboard,
    },
    {
        key: "cvs",
        label: "Mis CVs",
        to: "/app/cv",
        permissions: ["cv:read"],
        icon: FileText,
    },
    {
        key: "profile",
        label: "Perfil",
        to: "/app/profile",
        any: true,
        icon: User,
    },

    { type: "divider", key: "div-admin" },

    {
        key: "admin-users",
        label: "Usuarios",
        to: "/app/admin/users",
        roles: ["superuser"],
        icon: Users,
    },
    {
        key: "admin-roles",
        label: "Roles y permisos",
        to: "/app/admin/roles",
        roles: ["superuser"],
        icon: ShieldCheck,
    },

    { type: "divider", key: "div-mod" },

    {
        key: "moderation",
        label: "Moderacion",
        to: "/app/moderation",
        roles: ["moderator", "superuser"],
        icon: Gavel,
    },
];