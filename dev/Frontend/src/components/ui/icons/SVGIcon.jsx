export const SvgIcon = ({ src, className = "" }) => {
    return (
        <span
            aria-hidden="true"
            className={["icon-mask", className].join(" ")}
            style={{
                "--icon-url": `url("${src}")`,
            }}
        />
    );
};