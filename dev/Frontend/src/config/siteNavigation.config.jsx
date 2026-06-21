const FooterLinkedInIcon = ({ className = "" }) => (
    <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
    >
        <path d="M6.94 8.98H3.75v10.27h3.19V8.98ZM5.35 4.75a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7ZM20.25 13.36c0-3.08-1.64-4.51-3.83-4.51a3.3 3.3 0 0 0-3 1.65h-.04V8.98h-3.06v10.27h3.19v-5.08c0-1.34.25-2.64 1.91-2.64 1.64 0 1.66 1.53 1.66 2.72v5h3.17v-5.89Z" />
    </svg>
);

const FooterXIcon = ({ className = "" }) => (
    <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
    >
        <path d="M13.74 10.63 20.17 3h-1.52l-5.59 6.63L8.6 3H3.45l6.75 10.03L3.45 21h1.53l5.9-6.99L15.6 21h5.15l-7.01-10.37Zm-2.09 2.48-.68-.99L5.53 4.17h2.34l4.39 6.42.68.99 5.72 8.36h-2.34l-4.67-6.83Z" />
    </svg>
);

const FooterInstagramIcon = ({ className = "" }) => (
    <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
    >
        <path d="M7.8 2.75h8.4A5.06 5.06 0 0 1 21.25 7.8v8.4a5.06 5.06 0 0 1-5.05 5.05H7.8a5.06 5.06 0 0 1-5.05-5.05V7.8A5.06 5.06 0 0 1 7.8 2.75Zm0 1.8A3.26 3.26 0 0 0 4.55 7.8v8.4a3.26 3.26 0 0 0 3.25 3.25h8.4a3.26 3.26 0 0 0 3.25-3.25V7.8a3.26 3.26 0 0 0-3.25-3.25H7.8Zm4.2 3.05a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm0 1.8a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Zm4.62-2.33a1.03 1.03 0 1 1 0 2.06 1.03 1.03 0 0 1 0-2.06Z" />
    </svg>
);

/*
    Header
*/
export const HEADER_NAV_LINKS = Object.freeze([
    {
        id: "howItWorks",
        href: "#how-it-works",
    },
    {
        id: "templates",
        href: "#templates",
    },
    {
        id: "pricing",
        href: "#pricing",
    },
    {
        id: "login",
        to: "/login",
    },
]);

/*
    Footer
*/
export const FOOTER_COLUMNS = Object.freeze([
    {
        id: "product",
        links: [
            {
                id: "howItWorks",
                href: "#how-it-works",
            },
            {
                id: "templates",
                href: "#templates",
            },
            {
                id: "pricing",
                href: "#pricing",
            },
            {
                id: "myResumes",
                to: "/mis-cvs",
            },
        ],
    },
    {
        id: "resources",
        links: [
            {
                id: "guides",
                to: "/guias",
            },
            {
                id: "blog",
                to: "/blog",
            },
            {
                id: "helpCenter",
                to: "/ayuda",
            },
            {
                id: "faq",
                to: "/preguntas-frecuentes",
            },
        ],
    },
    {
        id: "company",
        links: [
            {
                id: "about",
                to: "/sobre-nosotros",
            },
            {
                id: "contact",
                to: "/contacto",
            },
            {
                id: "terms",
                to: "/terminos-y-condiciones",
            },
            {
                id: "privacy",
                to: "/politica-de-privacidad",
            },
        ],
    },
]);

/*
    Footer social
*/
export const FOOTER_SOCIAL_LINKS = Object.freeze([
    {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com",
        Icon: FooterLinkedInIcon,
    },
    {
        id: "x",
        label: "X",
        href: "https://x.com",
        Icon: FooterXIcon,
    },
    {
        id: "instagram",
        label: "Instagram",
        href: "https://www.instagram.com",
        Icon: FooterInstagramIcon,
    },
]);