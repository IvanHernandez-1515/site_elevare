//assets
import eyeicon from "@/assets/images/pages/icons/home/feature/eye.svg";
import versionicon from "@/assets/images/pages/icons/home/feature/versions.svg";
import mosaicoicon from "@/assets/images/pages/icons/home/feature/mosaic.svg";

import { ContainerLarge } from "../../components";

const FeatureSection = () => {
    return(
        <>
            <section aria-labelledby="feature-heading" className="overflow-hidden my-10">
                <ContainerLarge>
                    <div className="grid grid-cols-1 gap-8 lg:items-start lg:grid-cols-2">
                        <div>
                            <div className="px-4">
                                <div className="px-3">
                                    <h3 className="text-sans font-semibold text-base text-elevare-primary mb-1">
                                        Currículums que evolucionan contigo
                                    </h3>
                                    <h2 id="feature-heading" className="font-sans font-semibold text-4xl tracking-tight text-pretty text-elevare-text-main mb-5">
                                        Diseña, personaliza y controla tu perfil profesional
                                    </h2>
                                    <p className="font-sans text-lg text-elevare-text-muted">
                                        Crea múltiples versiones de tu CV, cambia de plantilla en tiempo real y mantén todo en un solo lugar.
                                    </p>
                                    <dl className="mt-10">
                                        <div className="flex gap-x-3">
                                            <img className="size-7" src={eyeicon} alt="Vista previa en tiempo real" />
                                            <div>
                                                <dt className="font-sans font-semibold text-elevare-text-main">
                                                    Vista previa en tiempo real
                                                </dt>
                                                <dd className="font-sans text-elevare-text-muted">
                                                    Observa cómo se verá tu currículum mientras lo editas. Sin sorpresas al exportar.
                                                </dd>
                                            </div>
                                        </div>
                                        <div className="flex gap-x-3 mt-6">
                                            <img className="size-7" src={versionicon} alt="Versiones adaptadas por oportunidad" />
                                            <div>
                                                <dt className="font-sans font-semibold text-elevare-text-main">
                                                    Versiones adaptadas por oportunidad
                                                </dt>
                                                <dd className="font-sans text-elevare-text-muted">
                                                    Crea variaciones específicas sin duplicar archivos ni perder estructura.
                                                </dd>
                                            </div>
                                        </div>
                                        <div className="flex gap-x-3 mt-6">
                                            <img className="size-7" src={mosaicoicon} alt="decide qué mostrar" />
                                            <div>
                                                <dt className="font-sans font-semibold text-elevare-text-main">
                                                    Secciones que se activan o desactivan
                                                </dt>
                                                <dd className="font-sans text-elevare-text-muted">
                                                    Decide qué mostrar según la vacante. Tu perfil se adapta contigo.
                                                </dd>
                                            </div>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="sm:px-4">
                                <div className="sm:px-3">
                                    <div className="relative isolate overflow-hidden bg-elevare-secondary px-6 py-8 shadow-2xl sm:rounded-3xl sm:px-16 sm:py-16 md:px-15 md:py-15">
                                        <div
                                            aria-hidden="true"
                                            className="absolute inset-y-0 -z-10 w-full -left-1 origin-bottom-left -skew-x-30 bg-white/20 ring-inset inset-ring-white">
                                        </div>
                                        <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                                            <img
                                                alt="Vista previa de la interfaz de la aplicación"
                                                src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                                                width={2432}
                                                height={1442}
                                                className="
                                                -mb-32 w-4xl max-w-none 
                                                shadow-xl
                                                ring-1 ring-white/10
                                                rounded-xl"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerLarge>
            </section>
        </>
    );
}
export default FeatureSection;