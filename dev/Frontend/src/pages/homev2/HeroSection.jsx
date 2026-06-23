import React from 'react'
import { useTranslation } from "react-i18next";

const HeroSection = () => {
    const { t } = useTranslation("home");

    const features = [
        t("hero.features.reusableProfile"),
        t("hero.features.realTimePreview"),
        t("hero.features.pdfExport"),
    ];
    return (
        <section className="relative overflow-hidden">
            <div
                aria-hidden="true"
                className="hero-background pointer-events-none absolute inset-0"
            />

            <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
                <div className="max-w-2xl">
                    <h1 className="font-display text-4xl font-semibold tracking-tight text-elevare-heading sm:text-5xl lg:text-6xl">
                        <span className="block">{t("hero.title.line1")}</span>
                        <span className="block text-elevare-primary">
                            {t("hero.title.line2")}
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-elevare-body sm:text-lg">
                        {t("hero.description")}
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-xl bg-elevare-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-elevare-primary-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary focus-visible:ring-offset-2"
                        >
                            {t("hero.primaryCta")}
                        </a>

                        <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-xl border border-elevare-primary px-6 py-3 text-sm font-semibold text-elevare-primary transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary focus-visible:ring-offset-2"
                        >
                            {t("hero.secondaryCta")}
                        </a>
                    </div>

                    <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                        {features.map((feature) => (
                            <li
                                key={feature}
                                className="flex items-center gap-2 text-sm text-elevare-body"
                            >
                                <span
                                    aria-hidden="true"
                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-elevare-primary"
                                >
                                    •
                                </span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative">
                    {/* Aquí va tu preview/mockup */}
                </div>
            </div>
        </section>
    )
}

export default HeroSection