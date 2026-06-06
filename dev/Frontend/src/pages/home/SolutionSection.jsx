import React from "react";
import { Container, FeatureCard } from "../../components";

const SolutionSection = () => {
    return (
        <section aria-labelledby="solutions-heading" className="bg-elevare-neutral-light my-10">
            <Container>
                <div className="px-3 py-10">
                    <div className="text-center">
                        <h3 className="text-sans font-semibold text-base text-elevare-primary mb-1">
                            Una experiencia diferente
                        </h3>
                        <h2
                            id="solutions-heading"
                            className="font-sans font-semibold text-3xl tracking-tight text-elevare-text-main sm:text-4xl"
                        >
                            Crear un currículum debería sentirse simple.
                        </h2>
                        <p className="mt-3 text-base text-elevare-text-muted sm:text-lg">
                            Diseñado para adaptarse a ti, no al revés.
                        </p>
                    </div>

                    <div className="grid items-stretch gap-4 my-10 lg:grid-cols-4">
                        <FeatureCard
                            ariaLabel="Un CV diferente para cada vacante"
                            title="Un CV diferente para cada vacante"
                            description="Crea variaciones en segundos y mantén tu información siempre consistente."
                            icon={
                            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-elevare-neutral-dark transition-colors duration-300 group-hover:stroke-white group-active:stroke-white group-focus:stroke-white group-focus-visible:stroke-white">
                                <path d="M7 7h10M7 11h6M7 15h10" strokeWidth="2" strokeLinecap="round" />
                                <path
                                d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                                strokeWidth="2"
                                opacity=".55"
                                />
                            </svg>}
                        />
                        <FeatureCard
                            ariaLabel="Cambiar diseño sin perder contenido"
                            title="Cambiar diseño sin perder contenido"
                            description="Cambia de plantilla sin romper formatos ni perder secciones importantes."
                            icon={
                            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-elevare-neutral-dark transition-colors duration-300 group-hover:stroke-white group-active:stroke-white group-focus:stroke-white group-focus-visible:stroke-white">
                                <path d="M5 7h14M5 12h10M5 17h14" strokeWidth="2" strokeLinecap="round" />
                                <path
                                    d="M16 12l3 3m0 0-3 3m3-3H12"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    opacity=".55"
                                />
                            </svg>}
                        />
                        <FeatureCard
                            ariaLabel="Versiones ordenadas y controladas"
                            title="Control total de lo que envías"
                            description="Centraliza tu historial: qué enviaste, a quién y cuándo."
                            icon={
                            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-elevare-neutral-dark transition-colors duration-300 group-hover:stroke-white group-active:stroke-white group-focus:stroke-white group-focus-visible:stroke-white">
                                <path d="M7 8h10M7 12h10M7 16h7" strokeWidth="2" strokeLinecap="round" />
                                <path
                                    d="M6 4h8l4 4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
                                    strokeWidth="2"
                                    opacity=".55"
                                />
                            </svg>}
                        />
                        <FeatureCard
                            ariaLabel="Menos tiempo ajustando formato"
                            title="Listo para enviar, sin desgaste"
                            description="Elevare CV te guía para que el reclutador vea lo importante, rápido."
                            icon={
                            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-elevare-neutral-dark transition-colors duration-300 group-hover:stroke-white group-active:stroke-white group-focus:stroke-white group-focus-visible:stroke-white">
                                <path d="M12 8v5l3 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
                                    strokeWidth="2"
                                    opacity=".55"
                                />
                            </svg>}
                        />
                    </div>
                    <div className="text-center">
                        <p className="mt-2 text-lg tracking-tight text-elevare-text-muted">
                            Elevare CV simplifica todo con una experiencia flexible, moderna y accesible.
                        </p>
                    </div>
                    <p className="sr-only">
                        Esta sección presenta cuatro beneficios de Elevare CV. Cada tarjeta es interactiva y puede activarse con teclado o toque.
                    </p>
                </div>
            </Container>
        </section>
    );
};
export default SolutionSection;