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
                                            <svg
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                data-slot="icon"
                                                aria-hidden="true"
                                                className="size-7 text-elevare-secondary shrink-0">
                                                <path
                                                    d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" 
                                                    clipRule="evenodd" 
                                                    fillRule="evenodd"
                                                ></path>
                                            </svg>
                                            <div className="inline">
                                                <dt className="font-sans font-semibold text-elevare-text-main">
                                                    Push to deploy. {" "}
                                                </dt>
                                                <dd className="font-sans text-elevare-text-muted">
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
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
                                    <div className="relative isolate overflow-hidden bg-elevare-primary-dark px-6 py-8 shadow-2xl sm:rounded-3xl sm:px-16 sm:py-16 md:px-15 md:py-15">
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