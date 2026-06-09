import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

// assets
import logov1 from "@/assets/images/pages/icons/ElevareLogo-horizontal.svg";

// components
import { Container } from "../../ui/containers/Container";
import { LanguageSwitcher } from "../language/LanguageSwitcher";

const MOBILE_MENU_ID = "mobile-navigation";

export const Header = () => {
    const { t } = useTranslation("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        {
            href: "#how-it-works",
            label: t("navbar.links.howItWorks"),
        },
        {
            href: "#templates",
            label: t("navbar.links.templates"),
        },
        {
            href: "#pricing",
            label: t("navbar.links.pricing"),
        },
        {
            href: "#login",
            label: t("navbar.links.login"),
        },
    ];

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen((currentValue) => !currentValue);
    };

    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        };

        document.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, []);

    return (
        <header className="">
            <Container>
                <div className="flex min-h-20 items-center justify-between gap-4">
                    <Link
                        to="/"
                        aria-label={t("navbar.homeLabel")}
                        onClick={closeMenu}
                        className="inline-flex shrink-0 items-center rounded-xl"
                    >
                        <img
                            src={logov1}
                            alt=""
                            aria-hidden="true"
                            className="h-10 w-auto"
                        />
                    </Link>

                    <nav
                        className="hidden md:block"
                        aria-label={t("navbar.navLabel")}
                    >
                        <ul className="flex items-center gap-10">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className={[
                                            "rounded-lg px-1 py-2 text-sm font-medium text-elevare-ink transition",
                                            "hover:text-elevare-primary",
                                        ].join(" ")}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="hidden items-center gap-4 md:flex">
                        

                        <a
                            href="#create-cv"
                            className={[
                                "inline-flex min-h-11 items-center justify-center rounded-xl bg-elevare-primary px-6 text-sm font-semibold text-white",
                                "shadow-md shadow-blue-900/20 transition",
                                "hover:bg-elevare-primary-hover",
                            ].join(" ")}
                        >
                            {t("navbar.cta")}
                        </a>
                    </div>

                    <div className="flex items-center gap-3 md:hidden">
                        <LanguageSwitcher />

                        <button
                            type="button"
                            onClick={toggleMenu}
                            aria-expanded={isMenuOpen}
                            aria-controls={MOBILE_MENU_ID}
                            aria-label={
                                isMenuOpen
                                    ? t("navbar.mobileMenu.close")
                                    : t("navbar.mobileMenu.open")
                            }
                            className={[
                                "inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl",
                                "border border-elevare-border bg-white text-elevare-ink transition",
                                "hover:bg-elevare-primary-soft hover:text-elevare-primary-deep",
                            ].join(" ")}
                        >
                            {isMenuOpen ? (
                                <X className="h-5 w-5" aria-hidden="true" />
                            ) : (
                                <Menu className="h-5 w-5" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </Container>

            <div
                id={MOBILE_MENU_ID}
                className={`${isMenuOpen ? "block" : "hidden"} border-t border-elevare-border bg-white md:hidden`}
            >
                <Container className="py-4">
                    <nav aria-label={t("navbar.navLabel")}>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={closeMenu}
                                        className={[
                                            "flex min-h-11 items-center rounded-xl px-4 text-sm font-semibold text-elevare-ink transition",
                                            "hover:bg-elevare-primary-soft hover:text-elevare-primary-deep",
                                        ].join(" ")}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}

                            <li className="pt-2">
                                <a
                                    href="#create-cv"
                                    onClick={closeMenu}
                                    className={[
                                        "flex min-h-11 items-center justify-center rounded-xl bg-elevare-primary px-4 text-sm font-semibold text-white transition",
                                        "hover:bg-elevare-primary-hover",
                                    ].join(" ")}
                                >
                                    {t("navbar.cta")}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </Container>
            </div>
        </header>
    );
};