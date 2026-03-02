
export const navConfig = [
    // --- seccion general
    {
        key: "dashboard",
        label: "Dashboard",
        to: "/app",
        match: ["/app"],
        any: true,
    },
    {
        key: "cvs",
        label: "Mis CVs",
        to: "/app/cv",
        match: ["/app/cv"],
        permissions: ["cv:read"],
    },
    {
        key: "profile",
        label: "Perfil",
        to: "/app/profile",
        match: ["/app/profile"],
        any: true,
    },

    // --- separador
    { type: "divider", key: "div-admin" },

    // --- admin
    {
        key: "admin-users",
        label: "Usuarios",
        to: "/app/admin/users",
        match: ["/app/admin/users"],
        roles: ["superuser"],
    },
    {
        key: "admin-roles",
        label: "Roles y permisos",
        to: "/app/admin/roles",
        match: ["/app/admin/roles"],
        roles: ["superuser"],
    },

    // --- separador
    { type: "divider", key: "div-mod" },

    // --- moderacion (placeholder)
    {
        key: "moderation",
        label: "Moderacion",
        to: "/app/moderation",
        match: ["/app/moderation"],
        roles: ["moderator", "superuser"],
    },
];