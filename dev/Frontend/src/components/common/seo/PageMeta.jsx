import { useEffect } from "react";

const getAbsoluteUrl = (path) => {
    if (!path) return null;

    const normalizedPath = path.startsWith("/") ? path : `/${path}`;

    return `${window.location.origin}${normalizedPath}`;
};

const upsertMetaByName = (name, content) => {
    let element = document.querySelector(`meta[name="${name}"]`);

    if (!content) {
        element?.remove();
        return;
    }

    if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
    }

    element.setAttribute("content", content);
};

const upsertCanonical = (href) => {
    let element = document.querySelector('link[rel="canonical"]');

    if (!href) {
        element?.remove();
        return;
    }

    if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", "canonical");
        document.head.appendChild(element);
    }

    element.setAttribute("href", href);
};

const removePageAlternates = () => {
    document
        .querySelectorAll('link[rel="alternate"][data-page-meta="hreflang"]')
        .forEach((element) => element.remove());
};

const addHreflang = ({ hreflang, href }) => {
    const element = document.createElement("link");

    element.setAttribute("rel", "alternate");
    element.setAttribute("hreflang", hreflang);
    element.setAttribute("href", href);
    element.setAttribute("data-page-meta", "hreflang");

    document.head.appendChild(element);
};

export const PageMeta = ({
    title,
    description,
    canonicalPath,
    noIndex = false,
    alternates = [],
}) => {
    useEffect(() => {
        if (title) {
            document.title = title;
        }

        upsertMetaByName("description", description);

        if (noIndex) {
            upsertMetaByName("robots", "noindex,nofollow");
        } else {
            upsertMetaByName("robots", null);
        }

        const canonicalUrl = getAbsoluteUrl(canonicalPath);
        upsertCanonical(canonicalUrl);

        removePageAlternates();

        alternates.forEach((alternate) => {
            addHreflang({
                hreflang: alternate.hreflang,
                href: getAbsoluteUrl(alternate.path),
            });
        });
    }, [title, description, canonicalPath, noIndex, alternates]);

    return null;
};