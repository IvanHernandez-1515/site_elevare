import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { useLanguageOptions } from "../../../i18n/useLanguageOptions";

export const LanguageSwitcher = ({ className = "" }) => {
    const { t, i18n } = useTranslation("home");

    //opciones_de_idioma
    const languages = useLanguageOptions();

    //referencias_del_dropdown
    const dropdownId = useId();
    const buttonRef = useRef(null);
    const dropdownRef = useRef(null);

    //estado_del_menu
    const [isOpen, setIsOpen] = useState(false);

    //idioma_actual_normalizado
    const currentLanguage = (i18n.resolvedLanguage || i18n.language || "es")
        .split("-")[0];

    //datos_del_idioma_actual
    const currentLanguageData =
        languages.find((language) => language.code === currentLanguage) ||
        languages[0];

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
        //cierra_con_escape
        const handleEscapeKey = (event) => {
            if (event.key === "Escape") {
                closeDropdown();
                buttonRef.current?.focus();
            }
        };

        //cierra_al_hacer_click_fuera
        const handleClickOutside = (event) => {
            const clickedButton = buttonRef.current?.contains(event.target);
            const clickedDropdown = dropdownRef.current?.contains(event.target);

            if (!clickedButton && !clickedDropdown) {
                closeDropdown();
            }
        };

        document.addEventListener("keydown", handleEscapeKey);
        document.addEventListener("mousedown", handleClickOutside);

        //limpia_eventos_al_desmontar
        return () => {
            document.removeEventListener("keydown", handleEscapeKey);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    if (!currentLanguageData) {
        return null;
    }

    return (
        <div
            className={[
                "inline-flex relative",
                className,
            ].filter(Boolean).join(" ")}
        >
            <button
                ref={buttonRef}
                type="button"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-controls={dropdownId}
                aria-label={`${t("language.currentLanguage")}: ${currentLanguageData.nativeLabel}`}
                className={[
                    "inline-flex items-center",
                    "h-8",
                    "gap-2 px-3",
                    "text-xs font-semibold",
                    "bg-elevare-surface text-elevare-ink hover:bg-white hover:text-elevare-primary-deep",
                    "shadow-sm transition-colors duration-200",
                    "rounded-lg border border-elevare-border hover:border-elevare-primary",
                    "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-elevare-primary",
                ].join(" ")}
            >
                <img
                    src={currentLanguageData.iconSrc}
                    alt=""
                    aria-hidden="true"
                    className="w-4 h-4 rounded-full object-cover"
                />
                <span>{currentLanguageData.short}</span>
                <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className={[
                        "w-4 h-4",
                        "text-elevare-muted",
                        "transition-transform duration-200",
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

            {isOpen && (
                <div
                    ref={dropdownRef}
                    id={dropdownId}
                    className={[
                        "absolute top-10 right-0 z-50",
                        "w-48",
                        "p-2",
                        "bg-elevare-surface",
                        "shadow-xl shadow-slate-900/10",
                        "rounded-xl border border-elevare-border",
                    ].join(" ")}
                >
                    <ul
                        className="space-y-1"
                        aria-label={t("language.label")}
                    >
                        {languages.map((language) => {
                            const isSelected = language.code === currentLanguage;

                            return (
                                <li key={language.code}>
                                    <button
                                        type="button"
                                        onClick={() => handleChangeLanguage(language.code)}
                                        aria-current={isSelected ? "true" : undefined}
                                        aria-label={
                                            isSelected
                                                ? `${language.nativeLabel}, ${t("language.current")}`
                                                : `${t("language.changeTo")} ${language.nativeLabel}`
                                        }
                                        className={[
                                            "flex items-center",
                                            "w-full min-h-10",
                                            "gap-3 px-3",
                                            "text-left text-sm font-medium",
                                            isSelected
                                                ? "bg-elevare-primary-soft text-elevare-primary-deep"
                                                : "text-elevare-muted hover:bg-elevare-bg hover:text-elevare-ink",
                                            "transition-colors duration-200",
                                            "rounded-lg",
                                            "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-elevare-primary",
                                        ].join(" ")}
                                    >
                                        <img
                                            src={language.iconSrc}
                                            alt=""
                                            aria-hidden="true"
                                            className="w-4 h-4 rounded-full object-cover"
                                        />

                                        <span className="flex flex-col leading-tight">
                                            <span className="font-semibold">
                                                {language.nativeLabel}
                                            </span>

                                            <span className="text-xs text-inherit opacity-75">
                                                {language.short}
                                            </span>
                                        </span>

                                        {isSelected && (
                                            <svg
                                                aria-hidden="true"
                                                viewBox="0 0 20 20"
                                                className="w-4 h-4 ml-auto text-elevare-primary"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.32a1 1 0 0 1-1.42.003L3.29 9.237a1 1 0 1 1 1.42-1.41l4.04 4.073 6.54-6.604a1 1 0 0 1 1.414-.006Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};