import { Container } from "../../components";

const FeatureSection = () => {
    return(
        <>
            <section>
                <Container>
                    <div className="px-3">
                        <div className="grid md:grid-cols-2 gap-8 justify-center">
                            <div>
                                <h3 className="text-sans font-semibold text-base text-elevare-primary mb-1">
                                    Deploy faster
                                </h3>
                                <h2 className="font-sans font-semibold text-4xl tracking-tight text-pretty text-elevare-text-main mb-5">
                                    A better workflow
                                </h2>
                                <p className="font-sans text-lg text-elevare-text-main">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                </p>
                                <dl className="mt-10">
                                    <div className="flex flex-row gap-x-3">
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
                            <div>
                                <div className="relative isolate bg-elevare-secondary">
                                    <div className="absolute -inset-y-px -left-1 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-home opacity-20 ring ring-inset ring-white"></div>
                                    <div className="max-w-2xl">
                                        <img 
                                            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png" 
                                            alt="Product Screenshot"  
                                            className="w-4xl max-w-none rounded-tl-xl "
                                        />
                                    </div>
                                    <div className="pointer-events-none absolute inset-0 bg-home ring-inset"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
export default FeatureSection;