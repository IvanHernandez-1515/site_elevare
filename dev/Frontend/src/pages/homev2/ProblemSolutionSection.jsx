import { useTranslation } from "react-i18next";
//components
import { ContainerSmall, SvgIcon } from "../../components";
//icons
import { ArrowRight } from "lucide-react";
//assets
import problemBadgeIcon from "@/assets/images/pages/imagenes/home/problemsection/problem-badge.svg";
import problemRepeatIcon from "@/assets/images/pages/imagenes/home/problemsection/problem-repeat.svg";
import problemTimeIcon from "@/assets/images/pages/imagenes/home/problemsection/problem-time.svg";
import problemTargetIcon from "@/assets/images/pages/imagenes/home/problemsection/problem-target.svg";
import solutionShieldIcon from "@/assets/images/pages/imagenes/home/problemsection/solution-shield.svg";
import solutionProfileIcon from "@/assets/images/pages/imagenes/home/problemsection/solution-profile.svg";
import solutionVersionsIcon from "@/assets/images/pages/imagenes/home/problemsection/solution-versions.svg";
import solutionShieldCheckIcon from "@/assets/images/pages/imagenes/home/problemsection/solution-shield-check.svg";

const PROBLEM_ICONS = [
    problemRepeatIcon,
    problemTimeIcon,
    problemTargetIcon,
];

const SOLUTION_ICONS = [
    solutionProfileIcon,
    solutionVersionsIcon,
    solutionShieldCheckIcon,
];

const ProblemSolutionSection = () => {
    const { t } = useTranslation("home");

    const problemItems = t("problemSolution.problem.items", {
        returnObjects: true,
    });

    const solutionItems = t("problemSolution.solution.items", {
        returnObjects: true,
    });

    return (
        <section
            aria-labelledby="problem-solution-title"
            className="py-5 font-sans text-elevare-ink"
        >
            <h2 id="problem-solution-title" className="sr-only">
                {t("problemSolution.problem.title")} / {t("problemSolution.solution.title")}
            </h2>
            <ContainerSmall>
                <div className="relative">
                    <div className="grid gap-2 md:grid-cols-2 md:gap-6">
                        <div
                            aria-labelledby="problem-title"
                            className="h-full p-6 bg-elevare-problem-soft shadow-sm border border-elevare-problem/20 rounded-2xl sm:p-8"
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    aria-hidden="true"
                                    className="grid size-10 shrink-0 place-items-center text-elevare-problem bg-elevare-surface border border-elevare-problem/20 rounded-xl"
                                >
                                    <SvgIcon
                                        src={problemBadgeIcon}
                                        className="size-6"
                                    />
                                </span>

                                <h3
                                    id="problem-title"
                                    className="font-display text-lg font-semibold text-elevare-problem"
                                >
                                    {t("problemSolution.problem.title")}
                                </h3>
                            </div>

                            <ul className="flex flex-col mt-6 gap-4">
                                {problemItems.map((item, index) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-3"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="grid size-8 shrink-0 place-items-center text-elevare-problem bg-elevare-surface border border-elevare-problem/20 rounded-full"
                                        >
                                            <SvgIcon
                                                src={PROBLEM_ICONS[index]}
                                                className="size-4"
                                            />
                                        </span>

                                        <span className="text-sm leading-6 text-elevare-muted sm:text-base">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div
                            aria-hidden="true"
                            className="flex justify-center relative z-10 -my-4 md:absolute md:left-1/2 md:top-1/2 md:m-0 md:-translate-x-1/2 md:-translate-y-1/2"
                        >
                            <span className="grid size-12 place-items-center text-elevare-ink bg-elevare-surface shadow-elevare-header border border-elevare-border rounded-full">
                                <ArrowRight className="size-5 rotate-90 md:rotate-0" />
                            </span>
                        </div>
                        <div
                            aria-labelledby="solution-title"
                            className="h-full p-6 bg-elevare-accent-soft shadow-sm border border-elevare-accent rounded-2xl sm:p-8"
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    aria-hidden="true"
                                    className="grid size-10 shrink-0 place-items-center text-elevare-accent bg-elevare-surface border border-elevare-accent rounded-xl"
                                >
                                    <SvgIcon
                                        src={solutionShieldIcon}
                                        className="size-6"
                                    />
                                </span>

                                <h3
                                    id="solution-title"
                                    className="font-display text-lg font-semibold text-elevare-accent"
                                >
                                    {t("problemSolution.solution.title")}
                                </h3>
                            </div>
                            <ul className="flex flex-col mt-6 gap-4">
                                {solutionItems.map((item, index) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-3"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="grid size-8 shrink-0 place-items-center text-elevare-accent bg-elevare-surface border border-elevare-accent rounded-full"
                                        >
                                            <SvgIcon
                                                src={SOLUTION_ICONS[index]}
                                                className="size-4"
                                            />
                                        </span>
                                        <span className="text-sm leading-6 text-elevare-muted sm:text-base">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </ContainerSmall>
        </section>
    );
};
export default ProblemSolutionSection;