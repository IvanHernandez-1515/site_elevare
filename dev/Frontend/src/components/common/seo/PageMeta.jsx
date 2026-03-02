export const PageMeta = ({
    title,
    description,
    canonicalPath,
    noIndex = false,
}) => {
    //construccion del titulo del head
    const baseTitle = "ElevareCV";
    const finalTitle = title ? `${title} | ${baseTitle}` : baseTitle;

    /*
        ruta oficial de la pagina, evita duplicados
        /iniciar-sesion #canonical indica la legitimidad
        /iniciar-sesion/
        /iniciar-sesion?ref=facebook
    */
    const canonicalUrl = canonicalPath
        ? `${window.location.origin}${canonicalPath.startsWith("/") ? "" : "/"}${canonicalPath}`
        : null;

    return (
        <>
            <title>{finalTitle}</title>
            {description ? <meta name="description" content={description} /> : null}
            {noIndex ? <meta name="robots" content="noindex,nofollow" /> : null}
            {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
        </>
    );
}