import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";

// assets
import logov1 from "@/assets/images/pages/icons/ElevareLogo-horizontal.svg";

// components
import { Container } from "../../../ui/containers/Container";

// data
import { HEADER_NAV_LINKS } from "@/config/siteNavigation.config";

export const HeaderHomeMain = ({
    isMenuOpen,
    menuButtonRef,
    mobileMenuId,
    onOpenMobileMenu,
}) => {
    const { t } = useTranslation("home");

    const renderNavLink = (link, className) => {
        const label = t(`navbar.links.${link.id}`);

        if (link.href) {
            return (
                <a href={link.href} className={className}>
                    {label}
                </a>
            );
        }

        return (
            <Link to={link.to} className={className}>
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
                        className={[
                            "inline-flex items-center",
                            "transition-opacity hover:opacity-90",
                            "rounded-md",
                        ].join(" ")}
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
                            {HEADER_NAV_LINKS.map((link) => (
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
                                "rounded-lg",
                            ].join(" ")}
                        >
                            {t("navbar.cta")}
                        </Link>
                    </div>

                    <button
                        ref={menuButtonRef}
                        type="button"
                        aria-label={t("navbar.mobileMenu.open")}
                        aria-expanded={isMenuOpen}
                        aria-controls={mobileMenuId}
                        onClick={onOpenMobileMenu}
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
                        <Menu
                            aria-hidden="true"
                            focusable="false"
                            className="h-6 w-6"
                        />
                    </button>
                </div>
            </Container>
        </div>
    );
};