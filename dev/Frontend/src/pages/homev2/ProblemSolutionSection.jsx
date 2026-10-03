import { useTranslation } from "react-i18next";
//components
import { ContainerSmall } from "../../components";
//icons
import { ArrowRight } from "lucide-react";

const ProblemSolutionSection = () => {
    const { t } = useTranslation("home");

    const problemItems = t("problemSolution.problem.items", {
        returnObjects: true,
    });

    const solutionItems = t("problemSolution.solution.items", {
        returnObjects: true,
    });

    return (
        <section aria-labelledby="problem-solution-title" className="font-sans text-elevare-ink">
            <h2 id="problem-solution-title" className="sr-only">
                {t("problemSolution.problem.title")} / {t("problemSolution.solution.title")}
            </h2>
            <ContainerSmall>
                <div className="relative">
                    <div className="grid md:grid-cols-2 gap-2 md:gap-6">
                        <div
                            aria-labelledby="problem-title"
                            className="h-full p-6 bg-elevare-problem-soft shadow-sm border border-elevare-problem/20 rounded-2xl sm:p-8"
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    aria-hidden="true"
                                    className="grid size-10 shrink-0 place-items-center text-elevare-problem bg-elevare-surface border border-elevare-problem/20 rounded-xl"
                                />
                                <h3 id="problem-title" className="font-display text-lg font-semibold text-elevare-problem">
                                    {t("problemSolution.problem.title")}
                                </h3>
                            </div>
                            <ul className="flex flex-col mt-6 gap-4">
                                {problemItems.map((item, index) => (
                                    <li key={`${index}-${item}`} className="flex items-center gap-3">
                                        <span
                                            aria-hidden="true"
                                            className="grid size-7 shrink-0 place-items-center text-elevare-problem bg-elevare-surface border border-elevare-problem/20 rounded-full"
                                        />
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
                                />
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
                                        key={`${index}-${item}`}
                                        className="flex items-center gap-3"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="grid size-7 shrink-0 place-items-center text-elevare-accent bg-elevare-surface border border-elevare-accent rounded-full"
                                        />

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