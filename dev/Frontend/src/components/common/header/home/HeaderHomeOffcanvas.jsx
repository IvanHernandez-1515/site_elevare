import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

// components
import { LanguageSwitcher } from "../../language/LanguageSwitcher";

// data
import { HEADER_NAV_LINKS } from "@/config/siteNavigation.config";

const focusableSelector = [
    "a[href]",
    "button:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "input:not([disabled])",
    '[tabindex]:not([tabindex="-1"])',
].join(",");

export const HeaderHomeOffcanvas = ({ id, isOpen, onClose }) => {
    const { t } = useTranslation("home");
    const dialogRef = useRef(null);
    const closeButtonRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return undefined;

        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";
        closeButtonRef.current?.focus();

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [isOpen]);

    const handleDialogKeyDown = (event) => {
        if (!isOpen) return;

        if (event.key === "Escape") {
            onClose();
            return;
        }

        if (event.key !== "Tab") return;

        const focusableElements = Array.from(
            dialogRef.current?.querySelectorAll(focusableSelector) ?? []
        );

        if (!focusableElements.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
            return;
        }

        if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    };

    const renderNavLink = (link, className) => {
        const label = t(`navbar.links.${link.id}`);

        if (link.href) {
            return (
                <a href={link.href} className={className} onClick={onClose}>
                    {label}
                </a>
            );
        }

        return (
            <Link to={link.to} className={className} onClick={onClose}>
                {label}
            </Link>
        );
    };

    return (
        <div
            aria-hidden={!isOpen}
            data-state={isOpen ? "open" : "closed"}
            className="fixed inset-0 z-[80] offcanvas-root md:hidden"
        >
            <button
                type="button"
                aria-label={t("navbar.mobileMenu.close")}
                tabIndex={isOpen ? 0 : -1}
                onClick={onClose}
                className={[
                    "absolute inset-0",
                    "h-full w-full",
                    "bg-elevare-ink/50",
                    "cursor-default",
                    "offcanvas-backdrop",
                ].join(" ")}
            />

            <aside
                ref={dialogRef}
                id={id}
                role="dialog"
                aria-modal={isOpen ? "true" : undefined}
                aria-labelledby={`${id}-title`}
                onKeyDown={handleDialogKeyDown}
                className={[
                    "fixed inset-y-0 right-0 flex flex-col",
                    "h-full w-full max-w-xs",
                    "bg-elevare-surface text-elevare-ink",
                    "shadow-elevare-header",
                    "border-l border-elevare-border",
                    "offcanvas-panel",
                ].join(" ")}
            >
                <div className="flex items-center justify-end min-h-16 px-5 py-4 border-b border-elevare-border">
                    <h2 id={`${id}-title`} className="sr-only">
                        {t("navbar.navLabel")}
                    </h2>

                    <button
                        ref={closeButtonRef}
                        type="button"
                        aria-label={t("navbar.mobileMenu.close")}
                        tabIndex={isOpen ? 0 : -1}
                        onClick={onClose}
                        className={[
                            "inline-flex items-center justify-center",
                            "min-h-10 min-w-10",
                            "text-elevare-ink",
                            "bg-elevare-bg",
                            "transition-colors hover:bg-elevare-primary-soft hover:text-elevare-primary-deep focus-visible:bg-elevare-primary-soft focus-visible:text-elevare-primary-deep",
                            "rounded-full",
                        ].join(" ")}
                    >
                        <X
                            aria-hidden="true"
                            focusable="false"
                            className="h-5 w-5"
                        />
                    </button>
                </div>

                <div className="flex flex-1 flex-col px-5 py-5 font-sans">
                    <nav aria-label={t("navbar.navLabel")}>
                        <ul className="flex flex-col gap-1">
                            {HEADER_NAV_LINKS.map((link) => (
                                <li key={link.id}>
                                    {renderNavLink(
                                        link,
                                        [
                                            "flex items-center",
                                            "min-h-11",
                                            "px-3 py-3",
                                            "text-sm font-semibold",
                                            "text-elevare-muted",
                                            "transition-colors hover:bg-elevare-bg hover:text-elevare-primary-hover focus-visible:bg-elevare-primary-soft focus-visible:text-elevare-primary-deep",
                                            "rounded-xl",
                                        ].join(" ")
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="mt-6 pt-5 border-t border-elevare-border">
                        <p className="mb-3 font-sans text-xs font-semibold text-elevare-muted">
                            {t("language.label")}
                        </p>

                        <LanguageSwitcher
                            className="w-full"
                            buttonClassName="w-full"
                            dropdownClassName="left-0 right-0 w-full"
                        />
                    </div>

                    <Link
                        to="/crear-cv"
                        tabIndex={isOpen ? 0 : -1}
                        onClick={onClose}
                        className={[
                            "flex items-center justify-center",
                            "min-h-11 w-full",
                            "mt-5 px-5",
                            "font-display text-sm font-semibold text-white",
                            "bg-elevare-primary",
                            "transition-colors hover:bg-elevare-primary-hover focus-visible:bg-elevare-primary-deep",
                            "rounded-xl",
                        ].join(" ")}
                    >
                        {t("navbar.cta")}
                    </Link>
                </div>
            </aside>
        </div>
    );
};