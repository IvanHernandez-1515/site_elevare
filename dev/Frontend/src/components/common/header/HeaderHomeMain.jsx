import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

// assets
import logov1 from "@/assets/images/pages/icons/ElevareLogo-horizontal.svg";

// components
import { Container } from "../../ui/containers/Container";

const navLinks = [
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
];

export const HeaderHomeMain = () => {
    const { t } = useTranslation("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuButtonRef = useRef(null);

    const mobileMenuId = "home-mobile-menu";

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
    };

    const handleMobileMenuKeyDown = (event) => {
        if (event.key !== "Escape") return;

        closeMobileMenu();
        menuButtonRef.current?.focus();
    };

    const renderNavLink = (link, className) => {
        const label = t(`navbar.links.${link.id}`);

        if (link.href) {
            return (
                <a
                    href={link.href}
                    className={className}
                    onClick={closeMobileMenu}
                >
                    {label}
                </a>
            );
        }

        return (
            <Link
                to={link.to}
                className={className}
                onClick={closeMobileMenu}
            >
                {label}
            </Link>
        );
    };

    return (
        <div className="bg-elevare-surface">
            <Container>
                <div className="flex items-center justify-between min-h-16 gap-4 py-4 font-sans">
                    <Link
                        to="/"
                        aria-label={t("navbar.homeLabel")}
                        className="inline-flex items-center transition-opacity hover:opacity-90 rounded-md"
                    >
                        <img
                            src={logov1}
                            alt=""
                            aria-hidden="true"
                            className="h-9 w-auto"
                        />
                    </Link>

                    <nav
                        aria-label={t("navbar.navLabel")}
                        className="hidden md:block"
                    >
                        <ul className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    {renderNavLink(
                                        link,
                                        [
                                            "inline-flex items-center",
                                            "min-h-11",
                                            "px-2",
                                            "text-sm font-medium",
                                            "text-elevare-muted",
                                            "transition-colors hover:text-elevare-primary-hover focus-visible:text-elevare-primary-deep",
                                            "rounded-md",
                                        ].join(" ")
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="hidden items-center gap-3 md:flex">
                        <Link
                            to="/crear-cv"
                            className={[
                                "inline-flex items-center justify-center",
                                "min-h-11",
                                "px-5",
                                "font-display text-sm font-semibold text-white",
                                "bg-elevare-primary",
                                "transition-colors hover:bg-elevare-primary-hover focus-visible:bg-elevare-primary-deep",
                                "rounded-xl",
                            ].join(" ")}
                        >
                            {t("navbar.cta")}
                        </Link>
                    </div>

                    <button
                        ref={menuButtonRef}
                        type="button"
                        aria-label={
                            isMenuOpen
                                ? t("navbar.mobileMenu.close")
                                : t("navbar.mobileMenu.open")
                        }
                        aria-expanded={isMenuOpen}
                        aria-controls={mobileMenuId}
                        onClick={() => setIsMenuOpen((currentState) => !currentState)}
                        className={[
                            "inline-flex items-center justify-center",
                            "min-h-11 min-w-11",
                            "text-elevare-ink",
                            "bg-elevare-bg",
                            "transition-colors hover:bg-elevare-primary-soft hover:text-elevare-primary-deep focus-visible:bg-elevare-primary-soft focus-visible:text-elevare-primary-deep",
                            "rounded-xl",
                            "md:hidden",
                        ].join(" ")}
                    >
                        {isMenuOpen ? (
                            <X aria-hidden="true" focusable="false" className="h-6 w-6" />
                        ) : (
                            <Menu aria-hidden="true" focusable="false" className="h-6 w-6" />
                        )}
                    </button>
                </div>

                <nav
                    id={mobileMenuId}
                    aria-label={t("navbar.navLabel")}
                    hidden={!isMenuOpen}
                    onKeyDown={handleMobileMenuKeyDown}
                    className="pb-4 font-sans md:hidden"
                >
                    <ul className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                {renderNavLink(
                                    link,
                                    [
                                        "flex items-center",
                                        "min-h-11",
                                        "px-4 py-3",
                                        "text-base font-medium",
                                        "text-elevare-muted",
                                        "transition-colors hover:bg-elevare-bg hover:text-elevare-primary-hover focus-visible:bg-elevare-primary-soft focus-visible:text-elevare-primary-deep",
                                        "rounded-xl",
                                    ].join(" ")
                                )}
                            </li>
                        ))}
                    </ul>

                    <Link
                        to="/crear-cv"
                        onClick={closeMobileMenu}
                        className={[
                            "flex items-center justify-center",
                            "min-h-11 w-full",
                            "mt-3 px-5",
                            "font-display text-sm font-semibold text-white",
                            "bg-elevare-primary",
                            "transition-colors hover:bg-elevare-primary-hover focus-visible:bg-elevare-primary-deep",
                            "rounded-xl",
                        ].join(" ")}
                    >
                        {t("navbar.cta")}
                    </Link>
                </nav>
            </Container>
        </div>
    );
};