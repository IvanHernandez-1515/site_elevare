import { useEffect } from "react";

const palette = {
    success: {
        wrap: "border-emerald-200 bg-emerald-50 text-emerald-800",
        icon: "text-emerald-600",
        title: "Éxito",
    },
    error: {
        wrap: "border-red-200 bg-red-50 text-red-800",
        icon: "text-red-600",
        title: "Error",
    },
    warning: {
        wrap: "border-amber-200 bg-amber-50 text-amber-800",
        icon: "text-amber-600",
        title: "Aviso",
    },
    info: {
        wrap: "border-sky-200 bg-sky-50 text-sky-800",
        icon: "text-sky-600",
        title: "Info",
    },
};

const Icon = ({ type, className }) => {
    // Iconos sencillos (estilo toast)
    if (type === "success")
        return (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22a10 10 0 100-20 10 10 0 000 20z" />
            </svg>
        );

    if (type === "error")
        return (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22a10 10 0 100-20 10 10 0 000 20z" />
            </svg>
        );

    if (type === "warning")
        return (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.29 3.86l-7.17 12A1 1 0 004 18h16a1 1 0 00.88-1.5l-7.17-12a1 1 0 00-1.76 0z" />
            </svg>
        );

    // info
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0-4h.01" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 22a10 10 0 100-20 10 10 0 000 20z" />
        </svg>
    );
};

export default function AlertToast({
    open,
    type = "info",
    message,
    title,
    duration = 4500,
    onClose,
    position = "top-right", // top-right | top-left | bottom-right | bottom-left
}) {
    useEffect(() => {
        if (!open) return;
        if (!duration) return;

        const t = setTimeout(() => onClose?.(), duration);
        return () => clearTimeout(t);
    }, [open, duration, onClose]);

    if (!open) return null;

    const p = palette[type] || palette.info;

    const pos =
        position === "top-left"
            ? "top-5 left-5"
            : position === "bottom-right"
                ? "bottom-5 right-5"
                : position === "bottom-left"
                    ? "bottom-5 left-5"
                    : "top-5 right-5";

    return (
        <div className={`fixed ${pos} z-[9999]`}>
            <div
                className={`flex items-start gap-3 rounded-xl border px-4 py-3 shadow-lg min-w-[260px] max-w-sm ${p.wrap} animate-[toast-in_.25s_ease-out]`}
                role="alert"
                aria-live="polite"
            >
                <Icon type={type} className={`mt-0.5 h-5 w-5 ${p.icon}`} />

                <div className="flex-1">
                    <p className="text-sm font-semibold leading-5">{title || p.title}</p>
                    <p className="text-sm leading-5">{message}</p>
                </div>

                <button
                    type="button"
                    onClick={onClose}
                    className="text-black/40 hover:text-black/70 transition"
                    aria-label="Cerrar alerta"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}