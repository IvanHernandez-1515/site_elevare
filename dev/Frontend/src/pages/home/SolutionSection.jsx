import React from "react";
import { Container } from "../../components";

const SolutionSection = () => {
    return (
        <section aria-labelledby="solutions-heading" className="bg-elevare-neutral-light my-12">
            <Container>
                <div className="px-3">
                    <div className="text-center">
                        <h2
                            id="solutions-heading"
                            className="font-sans font-semibold text-3xl tracking-tight text-elevare-text-main sm:text-4xl"
                        >
                            Hacer un buen currículum <span className="text-elevare-accent">no</span> debería ser complicado
                        </h2>
                        <p className="mt-3 text-base text-elevare-text-muted sm:text-lg">
                            En Elevare CV, lo profesional y lo simple van juntos: organiza, adapta y presenta tu perfil con claridad.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 items-stretch gap-4 my-10 md:grid-cols-4">
                        <button
                            type="button"
                            aria-label="Un CV diferente para cada vacante"
                            className="
                            group flex flex-col text-left
                            w-full h-full
                            p-4
                            opacity-90
                            font-sans
                            bg-white/70
                            shadow-sm hover:shadow-md
                            transition-all duration-300
                            focus:outline-none
                            rounded-2xl
                            hover:opacity-100 focus:opacity-100 active:opacity-100
                            hover:-translate-y-0.5
                            focus-visible:ring-2 focus-visible:ring-elevare-primary/50"
                        >
                            <div
                                className="
                                grid place-items-center
                                w-10 h-10
                                bg-elevare-neutral-dark/10
                                transition-colors duration-300
                                rounded-xl
                                group-hover:bg-elevare-primary group-focus:bg-elevare-primary group-active:bg-elevare-primary"
                            >
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="w-6 h-6
                                    stroke-elevare-neutral-dark
                                    transition-colors duration-300
                                    group-hover:stroke-white group-focus:stroke-white group-active:stroke-white"
                                >
                                    <path d="M7 7h10M7 11h6M7 15h10" strokeWidth="2" strokeLinecap="round" />
                                    <path
                                        d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                                        strokeWidth="2"
                                        opacity=".55"
                                    />
                                </svg>
                            </div>
                            <p className="mt-3 text-lg font-semibold leading-snug text-elevare-text-main">
                                Un CV diferente para cada vacante
                            </p>
                            <p className="mt-1 text-sm text-elevare-text-muted">
                                Crea variaciones en segundos y mantén tu información siempre consistente.
                            </p>
                        </button>
                        <button
                            type="button"
                            aria-label="Cambiar diseño sin perder contenido"
                            className="
                            group flex flex-col text-left
                            w-full h-full
                            p-4
                            opacity-90
                            font-sans
                            bg-white/70
                            shadow-sm hover:shadow-md
                            transition-all duration-300
                            focus:outline-none
                            rounded-2xl
                            hover:opacity-100 focus:opacity-100 active:opacity-100
                            hover:-translate-y-0.5
                            focus-visible:ring-2 focus-visible:ring-elevare-primary/50"
                        >
                            <div
                                className="
                                grid place-items-center
                                w-10 h-10
                                bg-elevare-neutral-dark/10
                                transition-colors duration-300
                                rounded-xl
                                group-hover:bg-elevare-primary group-focus:bg-elevare-primary group-active:bg-elevare-primary"
                            >
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="w-6 h-6
                                    stroke-elevare-neutral-dark
                                    transition-colors duration-300
                                    group-hover:stroke-white group-focus:stroke-white group-active:stroke-white"
                                >
                                    <path d="M5 7h14M5 12h10M5 17h14" strokeWidth="2" strokeLinecap="round" />
                                    <path
                                        d="M16 12l3 3m0 0-3 3m3-3H12"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        opacity=".55"
                                    />
                                </svg>
                            </div>
                            <p className="mt-3 text-lg font-semibold leading-snug text-elevare-text-main">
                                Cambiar diseño sin perder contenido
                            </p>
                            <p className="mt-1 text-sm text-elevare-text-muted">
                                Cambia de plantilla sin romper formatos ni perder secciones importantes.
                            </p>
                        </button>
                        <button
                            type="button"
                            aria-label="Versiones ordenadas y controladas"
                            className="
                            group flex flex-col text-left
                            w-full h-full
                            p-4
                            opacity-90
                            font-sans
                            bg-white/70
                            shadow-sm hover:shadow-md
                            transition-all duration-300
                            focus:outline-none
                            rounded-2xl
                            hover:opacity-100 focus:opacity-100 active:opacity-100
                            hover:-translate-y-0.5
                            focus-visible:ring-2 focus-visible:ring-elevare-primary/50"
                        >
                            <div
                                className="
                                grid place-items-center
                                w-10 h-10
                                bg-elevare-neutral-dark/10
                                transition-colors duration-300
                                rounded-xl
                                group-hover:bg-elevare-primary group-focus:bg-elevare-primary group-active:bg-elevare-primary"
                            >
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="
                                    w-6 h-6
                                    stroke-elevare-neutral-dark
                                    transition-colors duration-300
                                    group-hover:stroke-white group-focus:stroke-white group-active:stroke-white"
                                >
                                    <path d="M7 8h10M7 12h10M7 16h7" strokeWidth="2" strokeLinecap="round" />
                                    <path
                                        d="M6 4h8l4 4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
                                        strokeWidth="2"
                                        opacity=".55"
                                    />
                                </svg>
                            </div>
                            <p className="mt-3 text-lg font-semibold leading-snug text-elevare-text-main">
                                Control total de lo que envías
                            </p>
                            <p className="mt-1 text-sm text-elevare-text-muted">
                                Centraliza tu historial: qué enviaste, a quién y cuándo.
                            </p>
                        </button>
                        <button
                            type="button"
                            aria-label="Menos tiempo ajustando formato"
                            className="
                            group flex flex-col text-left
                            w-full h-full
                            p-4
                            opacity-90
                            font-sans
                            bg-white/70
                            shadow-sm hover:shadow-md
                            transition-all duration-300
                            focus:outline-none
                            rounded-2xl
                            hover:opacity-100 focus:opacity-100 active:opacity-100
                            hover:-translate-y-0.5
                            focus-visible:ring-2 focus-visible:ring-elevare-primary/50"
                        >
                            <div
                                className="
                                grid place-items-center
                                w-10 h-10
                                bg-elevare-neutral-dark/10
                                transition-colors duration-300
                                rounded-xl
                                group-hover:bg-elevare-primary group-focus:bg-elevare-primary group-active:bg-elevare-primary"
                            >
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="w-6 h-6
                                    stroke-elevare-neutral-dark
                                    transition-colors duration-300
                                    group-hover:stroke-white group-focus:stroke-white group-active:stroke-white"
                                >
                                    <path d="M12 8v5l3 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
                                        strokeWidth="2"
                                        opacity=".55"
                                    />
                                </svg>
                            </div>
                            <p className="mt-3 text-lg font-semibold leading-snug text-elevare-text-main">
                                Listo para enviar, sin desgaste
                            </p>
                            <p className="mt-1 text-sm text-elevare-text-muted">
                                Elevare CV te guía para que el reclutador vea lo importante, rápido.
                            </p>
                        </button>
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