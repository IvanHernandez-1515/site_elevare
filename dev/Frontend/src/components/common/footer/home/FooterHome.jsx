import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
    FOOTER_COLUMNS,
    FOOTER_SOCIAL_LINKS,
} from "@/config/siteNavigation.config";

// assets
import logov1 from "@/assets/images/pages/icons/ElevareLogo-horizontal.svg";

// components
import { Container } from "../../../ui/containers/Container";

const footerLinkClassName = [
    "inline-flex",
    "text-sm leading-5",
    "text-elevare-muted",
    "transition-colors hover:text-elevare-primary-hover focus-visible:text-elevare-primary-deep",
    "rounded-md",
].join(" ");

const renderFooterLink = ({ link, label }) => {
    if (link.href) {
        return (
            <a href={link.href} className={footerLinkClassName}>
                {label}
            </a>
        );
    }

    return (
        <Link to={link.to} className={footerLinkClassName}>
            {label}
        </Link>
    );
};

export const Footer = () => {
    const { t } = useTranslation("home");
    const year = new Date().getFullYear();

    return (
        <div className="bg-elevare-surface">
            <Container>
                <div className="grid gap-10 px-3 py-10 font-sans md:grid-cols-[1.4fr_2fr_1fr] md:items-start md:gap-12">
                    <div>
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
                                className="h-10 w-auto"
                            />
                        </Link>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-elevare-muted">
                            {t("footer.description")}
                        </p>

                        <nav
                            aria-label={t("footer.social.label")}
                            className="mt-5"
                        >
                            <ul className="flex items-center gap-3">
                                {FOOTER_SOCIAL_LINKS.map(({ id, label, href, Icon }) => (
                                    <li key={id}>
                                        <a
                                            href={href}
                                            aria-label={t("footer.social.linkLabel", {
                                                network: label,
                                            })}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={[
                                                "inline-flex items-center justify-center",
                                                "h-9 w-9",
                                                "text-white",
                                                "bg-elevare-ink",
                                                "transition-colors hover:bg-elevare-primary focus-visible:bg-elevare-primary-deep",
                                                "rounded-full",
                                            ].join(" ")}
                                        >
                                            <Icon className="h-4 w-4" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <nav
                        aria-label={t("footer.linksLabel")}
                        className="grid grid-cols-3 gap-6"
                    >
                        {FOOTER_COLUMNS.map((column) => (
                            <section
                                key={column.id}
                                aria-labelledby={`footer-${column.id}-title`}
                            >
                                <h2
                                    id={`footer-${column.id}-title`}
                                    className="font-display text-sm font-bold text-elevare-ink"
                                >
                                    {t(`footer.columns.${column.id}.title`)}
                                </h2>

                                <ul className="mt-4 flex flex-col gap-2">
                                    {column.links.map((link) => (
                                        <li key={link.id}>
                                            {renderFooterLink({
                                                link,
                                                label: t(
                                                    `footer.columns.${column.id}.links.${link.id}`
                                                ),
                                            })}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </nav>

                    <div className="text-sm leading-6 text-elevare-muted md:text-right">
                        <p>
                            © {year} {t("footer.brand")}
                        </p>

                        <p>{t("footer.rights")}</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};