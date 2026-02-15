import React from 'react'

//components
import { Container } from "../../components";

const ProblemSection = () => {
    return (
        <>
            <section aria-labelledby="problem-heading" className="my-15 md:my-0">
                <Container>
                    <div className="px-3">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 id="problem-heading" className="font-sans font-semibold text-3xl tracking-tight text-elevare-text-main sm:text-4xl">
                                El problema{" "}
                                <span className="relative whitespace-nowrap text-blue-600">
                                    <svg
                                        aria-hidden="true"
                                        viewBox="0 0 418 42"
                                        className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                                        preserveAspectRatio="none">
                                        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                                    </svg>
                                    <span className="relative">no es tu perfil</span>
                                </span>
                            </h2>
                            <p className="mt-3 font-sans text-base text-elevare-text-muted sm:text-lg">
                                El sistema tradicional de currículums te obliga a rehacer lo mismo una y otra vez.
                            </p>
                        </div>
                        <ol className="mx-auto mt-10 max-w-4xl">
                            <li className="relative pl-16">
                                <span
                                    aria-hidden="true"
                                    className="absolute left-6 top-12 h-[calc(100%-1.5rem)] w-px bg-elevare-neutral-dark/10"
                                />
                                <span
                                    className="absolute left-0 top-0 grid h-12 w-12 place-items-center rounded-2xl bg-elevare-accent/10 font-sans text-base font-bold text-elevare-accent ring-1 ring-black/5"
                                    aria-hidden="true"
                                >
                                    1
                                </span>
                                <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-black/5">
                                    <p className="font-sans text-lg font-semibold text-elevare-text-main">
                                        Empiezas con ganas…
                                    </p>
                                    <p className="mt-1 font-sans text-sm text-elevare-text-muted">
                                        pero te topas con secciones interminables y decisiones que te frenan.
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <span className="rounded-full bg-elevare-neutral-dark/5 px-3 py-1 font-sans text-sm text-elevare-text-main">
                                            ¿Qué pongo aquí?
                                        </span>
                                        <span className="rounded-full bg-elevare-neutral-dark/5 px-3 py-1 font-sans text-sm text-elevare-text-main">
                                            ¿Me falta algo?
                                        </span>
                                    </div>
                                </div>
                            </li>

                            <div className="h-6" aria-hidden="true" />
                            <li className="relative pl-16">
                                <span
                                    aria-hidden="true"
                                    className="absolute left-6 top-12 h-[calc(100%-1.5rem)] w-px bg-elevare-neutral-dark/10"
                                />
                                <span
                                    className="absolute left-0 top-0 grid h-12 w-12 place-items-center rounded-2xl bg-elevare-secondary/10 font-sans text-base font-bold text-elevare-secondary ring-1 ring-black/5"
                                    aria-hidden="true"
                                >
                                    2
                                </span>
                                <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-black/5">
                                    <p className="font-sans text-lg font-semibold text-elevare-text-main">
                                        Creas “otra versión”
                                    </p>
                                    <p className="mt-1 font-sans text-sm text-elevare-text-muted">
                                        porque cada vacante pide un enfoque distinto… y empiezan los duplicados.
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <span className="rounded-full bg-elevare-neutral-dark/5 px-3 py-1 font-sans text-sm text-elevare-text-main">
                                            CV_final.pdf
                                        </span>
                                        <span className="rounded-full bg-elevare-neutral-dark/5 px-3 py-1 font-sans text-sm text-elevare-text-main">
                                            CV_final_final.pdf
                                        </span>
                                        <span className="rounded-full bg-elevare-neutral-dark/5 px-3 py-1 font-sans text-sm text-elevare-text-main">
                                            CV_ahora_si.pdf
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <div className="h-6" aria-hidden="true" />
                            <li className="relative pl-16">
                                <span
                                    className="absolute left-0 top-0 grid h-12 w-12 place-items-center rounded-2xl bg-elevare-primary/10 font-sans text-base font-bold text-elevare-primary ring-1 ring-black/5"
                                    aria-hidden="true"
                                >
                                    3
                                </span>
                                <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-black/5">
                                    <p className="font-sans text-lg font-semibold text-elevare-text-main">
                                        Terminas con caos
                                    </p>
                                    <p className="mt-1 font-sans text-sm text-elevare-text-muted">
                                        y sin seguridad de estar enviando la mejor versión de tu perfil.
                                    </p>
                                    <div className="mt-4 rounded-xl bg-elevare-primary/5 p-4 ring-1 ring-elevare-primary/10">
                                        <p className="font-sans text-sm font-semibold text-elevare-text-main">
                                            Resultado:
                                        </p>
                                        <p className="mt-1 font-sans text-sm text-elevare-text-muted">
                                            mucha energía invertida… y poca claridad al momento de postular.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </Container>
            </section>
        </>
    )
}
export default ProblemSection;