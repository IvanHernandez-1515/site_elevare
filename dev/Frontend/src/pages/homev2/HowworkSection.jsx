import { useTranslation } from 'react-i18next';
//components
import { Container, SvgIcon } from "../../components";
//assets
import createProfile from "@/assets/images/pages/imagenes/home/howtoworksection/create-profile.svg";
import chooseTemplate from "@/assets/images/pages/imagenes/home/howtoworksection/choose-template.svg";
import customizeVersion from "@/assets/images/pages/imagenes/home/howtoworksection/customize-version.svg";
import exportApply from "@/assets/images/pages/imagenes/home/howtoworksection/export-apply.svg";

//configuracioniconos
const HOWITWORKS_ICONS = [
    {
        id: "createProfile",
        icon: createProfile,
        color: "bg-elevare-primary-soft text-elevare-primary"
    },
    {
        id: "chooseTemplate",
        icon: chooseTemplate,
        color: "bg-elevare-primary-soft text-elevare-primary",
    },
    {
        id: "customizeVersion",
        icon: customizeVersion,
        color: "bg-elevare-primary-soft text-elevare-primary",
    },
    {
        id: "exportApply",
        icon: exportApply,
        color: "bg-elevare-primary-soft text-elevare-primary"
    }
];

const HowtoWorkSection = () => {
    const { t } = useTranslation("home");

    const howitWorkItems = t("howItWorks.steps", {
        returnObjects: true,
    });

    return(
        <section aria-labelledby="howork-title" className="py-5 font-sans text-elevare-ink">
            <Container>
                <h2 id="howitwork-title" className="font-bold text-2xl sm:text-3xl text-center mb-4">
                    {t("howItWorks.title")}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {howitWorkItems.map((works, index) => {
                        const feature = HOWITWORKS_ICONS[index];
                        const titleId = `work-${feature.id}-title`;

                        return(
                            <div 
                                key={feature.id}
                                aria-labelledby={titleId}
                                className="flex gap-x-2"
                            >
                                <span 
                                    aria-hidden="true"
                                    className={`grid size-12 shrink-0 place-items-center ${feature.color} rounded-xl`}
                                >
                                    <SvgIcon src={feature.icon} className="size-8"></SvgIcon>
                                </span>
                                <div>
                                    <h3 id={titleId} className="text-lg font-semibold leading-7 text-elevare-ink">{works.title}</h3>
                                    <p className="text-sm text-elevare-muted sm:text-base">{works.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
export default HowtoWorkSection;