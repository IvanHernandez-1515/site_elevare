import { useTranslation } from "react-i18next";

//components
import { Container, SvgIcon } from "../../components";

//assets
import profileVersionsIcon from "@/assets/images/pages/imagenes/home/featuresection/profile-versions.svg";
import changeDesignIcon from "@/assets/images/pages/imagenes/home/featuresection/change-design.svg";
import sectionControlIcon from "@/assets/images/pages/imagenes/home/featuresection/section-control.svg";
import exportReadyIcon from "@/assets/images/pages/imagenes/home/featuresection/export-ready.svg";

//configuration
const FEATURE_ICONS = [
    {
        id: "profileVersions",
        icon: profileVersionsIcon,
        color: "bg-elevare-primary-soft text-elevare-primary",
    },
    {
        id: "changeDesign",
        icon: changeDesignIcon,
        color: "bg-elevare-accent-soft text-elevare-accent",
    },
    {
        id: "sectionControl",
        icon: sectionControlIcon,
        color: "bg-elevare-primary-soft text-elevare-primary",
    },
    {
        id: "exportReady",
        icon: exportReadyIcon,
        color: "bg-elevare-accent-soft text-elevare-accent",
    },
];

const FeatureSection = () => {
    const { t } = useTranslation("home");

    const benefitItems = t("benefits.items", {
        returnObjects: true,
    });

    return (
        <section
            aria-labelledby="benefits-title"
            className="py-5 font-sans text-elevare-ink"
        >
            <h2 id="benefits-title" className="sr-only">
                {t("benefits.title")}
            </h2>

            <Container>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {benefitItems.map((benefit, index) => {
                        const feature = FEATURE_ICONS[index];
                        const titleId = `benefit-${feature.id}-title`;

                        return (
                            <article
                                key={feature.id}
                                aria-labelledby={titleId}
                                className="z-10 flex flex-col h-full p-6 bg-elevare-surface shadow-sm border border-elevare-border rounded-2xl"
                            >
                                <span
                                    aria-hidden="true"
                                    className={`grid size-12 shrink-0 place-items-center ${feature.color} rounded-xl`}
                                >
                                    <SvgIcon
                                        src={feature.icon}
                                        className="size-8"
                                    />
                                </span>
                                <h3
                                    id={titleId}
                                    className="mt-5 font-display text-lg font-semibold leading-7 text-elevare-ink"
                                >
                                    {benefit.title}
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-elevare-muted sm:text-base">
                                    {benefit.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};
export default FeatureSection;