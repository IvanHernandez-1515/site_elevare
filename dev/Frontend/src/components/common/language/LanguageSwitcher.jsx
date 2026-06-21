import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { useLanguageOptions } from "../../../i18n/useLanguageOptions";

export const LanguageSwitcher = ({
    className = "",
    buttonClassName = "",
    dropdownClassName = "",
}) => {
    const { t, i18n } = useTranslation("home");
    const languages = useLanguageOptions();

    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    const currentLanguage = (i18n.resolvedLanguage || i18n.language || "es").split("-")[0];

    const currentLanguageData =
        languages.find((language) => language.code === currentLanguage) || languages[0];

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen((currentValue) => !currentValue);
    };

    const handleChangeLanguage = (languageCode) => {
        if (languageCode !== currentLanguage) {
            i18n.changeLanguage(languageCode);
        }

        closeDropdown();
        buttonRef.current?.focus();
    };

    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key !== "Escape") return;

            closeDropdown();
            buttonRef.current?.focus();
        };

        const handleClickOutside = (event) => {
            const clickedButton = buttonRef.current?.contains(event.target);
            const clickedDropdown = dropdownRef.current?.contains(event.target);

            if (!clickedButton && !clickedDropdown) {
                closeDropdown();
            }
        };

        document.addEventListener("keydown", handleEscapeKey);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("keydown", handleEscapeKey);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    if (!currentLanguageData) {
        return null;
    }

    return (
        <div className={["relative inline-flex", className].join(" ")}>
            <button
                ref={buttonRef}
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-label={`${t("language.label")}: ${currentLanguageData.nativeLabel}`}
                onClick={toggleDropdown}
                className={[
                    "inline-flex items-center justify-between",
                    "min-h-10",
                    "gap-2 px-3",
                    "font-sans text-xs font-semibold",
                    "text-elevare-ink bg-elevare-surface",
                    "transition-colors hover:border-elevare-primary hover:bg-elevare-bg focus-visible:bg-elevare-primary-soft",
                    "border border-elevare-border rounded-lg",
                    "shadow-sm",
                    buttonClassName,
                ].join(" ")}
            >
                <span className="inline-flex items-center gap-2">
                    <img
                        src={currentLanguageData.iconSrc}
                        alt=""
                        aria-hidden="true"
                        className="h-4 w-4 rounded-full"
                    />

                    <span>{currentLanguageData.short}</span>
                </span>

                <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className={[
                        "h-4 w-4",
                        "text-elevare-muted",
                        "transition-transform",
                        isOpen ? "rotate-180" : "",
                    ].join(" ")}
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {isOpen ? (
                <div
                    ref={dropdownRef}
                    role="listbox"
                    aria-label={t("language.label")}
                    className={[
                        "absolute right-0 top-12",
                        "z-[100]",
                        "w-48",
                        "p-2",
                        "bg-elevare-surface",
                        "border border-elevare-border rounded-xl",
                        "shadow-xl",
                        dropdownClassName,
                    ].join(" ")}
                >
                    <ul className="flex flex-col gap-1">
                        {languages.map((language) => {
                            const isSelected = language.code === currentLanguage;

                            return (
                                <li key={language.code}>
                                    <button
                                        type="button"
                                        role="option"
                                        aria-selected={isSelected}
                                        aria-label={
                                            isSelected
                                                ? `${language.nativeLabel}, ${t("language.current")}`
                                                : `${t("language.changeTo")} ${language.nativeLabel}`
                                        }
                                        onClick={() => handleChangeLanguage(language.code)}
                                        className={[
                                            "flex items-center justify-between",
                                            "min-h-10 w-full",
                                            "gap-3 px-3 py-2",
                                            "font-sans text-sm font-medium",
                                            isSelected
                                                ? "text-elevare-primary-deep bg-elevare-primary-soft"
                                                : "text-elevare-muted bg-transparent",
                                            "transition-colors hover:bg-elevare-bg hover:text-elevare-primary-deep focus-visible:bg-elevare-primary-soft focus-visible:text-elevare-primary-deep",
                                            "rounded-lg",
                                        ].join(" ")}
                                    >
                                        <span className="inline-flex items-center gap-2">
                                            <img
                                                src={language.iconSrc}
                                                alt=""
                                                aria-hidden="true"
                                                className="h-4 w-4 rounded-full"
                                            />

                                            <span>{language.nativeLabel}</span>
                                        </span>

                                        {isSelected ? (
                                            <svg
                                                aria-hidden="true"
                                                viewBox="0 0 20 20"
                                                className="h-4 w-4 text-elevare-primary"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.32a1 1 0 0 1-1.42.003L3.29 9.237a1 1 0 1 1 1.42-1.41l4.04 4.073 6.54-6.604a1 1 0 0 1 1.414-.006Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ) : null}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ) : null}
        </div>
    );
};