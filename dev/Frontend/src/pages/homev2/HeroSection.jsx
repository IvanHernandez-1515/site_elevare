import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
//components
import { Container, SvgIcon } from "../../components";
//icons
import arrowRightIcon from "@/assets/images/pages/imagenes/home/icons/hero/arrow-right.svg";
import playCircleIcon from "@/assets/images/pages/imagenes/home/icons/hero/play-circle.svg";
import exportPdfIcon from "@/assets/images/pages/imagenes/home/icons/hero/icon-exportacion-pdf.svg";
import reusableProfileIcon from "@/assets/images/pages/imagenes/home/icons/hero/icon-perfil-reutilizable.svg";
//assets
import previewIcon from "@/assets/images/pages/imagenes/home/icons/hero/icon-vista-previa.svg";
import heroPreviewPc from "@/assets/images/pages/imagenes/home/hero/hero-preview-pc.png";
import heroPreviewMobile from "@/assets/images/pages/imagenes/home/hero/hero-preview-movil.png";

const HERO_FEATURES = [
    {
        id: "reusableProfile",
        translationKey: "hero.features.reusableProfile",
        icon: reusableProfileIcon,
    },
    {
        id: "realTimePreview",
        translationKey: "hero.features.realTimePreview",
        icon: previewIcon,
    },
    {
        id: "pdfExport",
        translationKey: "hero.features.pdfExport",
        icon: exportPdfIcon,
    },
];

const CTA_BASE_CLASSES = "group inline-flex items-center justify-center min-h-12 w-full gap-3 px-6 py-3 font-display text-sm font-semibold transition-colors rounded-xl lg:w-auto";

const HeroSection = () => {
    const { t } = useTranslation("home");

    return (
        <section aria-labelledby="hero-title" className="overflow-hidden font-sans text-elevare-ink">
            <Container>
                <div className="relative z-10 py-10 md:py-16 lg:flex lg:items-center lg:py-20">
                    <div className="flex flex-col w-full lg:w-1/2 lg:shrink-0">
                        <h1 id="hero-title" className="w-full font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="block">{t("hero.title.line1")}</span>
                            <span className="block text-elevare-primary">{t("hero.title.line2")}</span>
                        </h1>
                        <p className="w-full mt-6 text-base leading-7 text-elevare-muted sm:text-lg">
                            {t("hero.description")}
                        </p>
                        <div className="grid w-full mt-7 gap-3 sm:grid-cols-2 lg:flex">
                            <Link
                                to="/crear-cv"
                                className={`${CTA_BASE_CLASSES} bg-elevare-primary text-white hover:bg-elevare-primary-hover focus-visible:bg-elevare-primary-deep`}
                            >
                                <span>{t("hero.primaryCta")}</span>
                                <SvgIcon
                                    src={arrowRightIcon}
                                    className="size-5 transition-transform group-hover:translate-x-1"
                                />
                            </Link>
                            <a
                                href="#how-it-works"
                                className={`${CTA_BASE_CLASSES} bg-elevare-surface text-elevare-primary hover:bg-elevare-primary-soft hover:text-elevare-primary-deep focus-visible:bg-elevare-primary-soft focus-visible:text-elevare-primary-deep border border-elevare-primary`}
                            >
                                <SvgIcon
                                    src={playCircleIcon}
                                    className="size-5"
                                />
                                <span>{t("hero.secondaryCta")}</span>
                            </a>
                        </div>
                        <ul className="flex flex-wrap justify-center w-full mt-7 gap-y-4 text-xs sm:text-sm">
                            {HERO_FEATURES.map((feature) => (
                                <li key={feature.id} className="flex min-w-0 basis-1/2 justify-center px-1 sm:basis-1/3">
                                    <div className="flex items-center justify-center min-w-0 gap-2">
                                        <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center bg-elevare-primary-soft text-elevare-primary rounded-full sm:size-10">
                                            <SvgIcon src={feature.icon} className="size-4 sm:size-5" />
                                        </span>
                                        <span className="min-w-0 text-center leading-tight">
                                            {t(feature.translationKey)}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative min-w-0 mt-10 md:mt-12 lg:min-h-96 lg:mt-0 lg:flex-1">
                        <picture className="block w-full max-w-xl mx-auto lg:absolute lg:left-0 lg:top-1/2 lg:w-2xl lg:max-w-none lg:-translate-y-1/2 xl:w-3xl">
                            <source
                                media="(min-width: 1024px)"
                                srcSet={heroPreviewPc}
                            />
                            <img
                                src={heroPreviewMobile}
                                alt={t("hero.media.previewAlt")}
                                loading="eager"
                                fetchPriority="high"
                                decoding="async"
                                className="block h-auto w-full"
                            />
                        </picture>
                    </div>
                </div>
            </Container>
        </section>
    );
};
export default HeroSection;