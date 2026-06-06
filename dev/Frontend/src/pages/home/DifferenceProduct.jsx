import { Container } from "../../components"

const DifferenceProduct = () => {
    return (
        <>
            <section aria-labelledby="principles-heading" className="my-16">
                <Container>
                    <div className="px-3">
                        <div className="mx-auto max-w-3xl text-center">
                            <h3 className="font-sans text-sm font-semibold text-elevare-primary mb-2">
                                Nuestra filosofía
                            </h3>
                            <h2
                                id="principles-heading"
                                className="font-sans font-semibold text-3xl tracking-tight text-elevare-text-main sm:text-4xl"
                            >
                                Diseñado para decisiones reales.
                            </h2>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                            <div className="rounded-2xl bg-white/70 p-8 ring-1 ring-black/5">
                                <p className="font-sans text-lg font-semibold text-elevare-text-main">
                                    Modular
                                </p>
                                <p className="mt-2 font-sans text-sm text-elevare-text-muted">
                                    Activa, desactiva y reorganiza secciones según la oportunidad.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white/70 p-8 ring-1 ring-black/5">
                                <p className="font-sans text-lg font-semibold text-elevare-text-main">
                                    Adaptable
                                </p>
                                <p className="mt-2 font-sans text-sm text-elevare-text-muted">
                                    Un perfil base, múltiples versiones estratégicas.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white/70 p-8 ring-1 ring-black/5">
                                <p className="font-sans text-lg font-semibold text-elevare-text-main">
                                    Intuitivo
                                </p>
                                <p className="mt-2 font-sans text-sm text-elevare-text-muted">
                                    Menos fricción. Más claridad.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

        </>
    )
}
export default DifferenceProduct