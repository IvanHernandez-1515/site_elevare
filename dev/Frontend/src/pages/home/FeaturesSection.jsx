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
                                <div class="mt-20 sm:mt-24 md:mx-auto md:max-w-[42rem] lg:w-screen lg:mt-0 lg:mx-0">
                                    {/* <div class="
                                        absolute inset-y-0 right-1/2
                                        -z-10
                                        w-[200%]
                                        -skew-x-[30deg]
                                        -mr-10
                                        bg-[oklab(27.8%_-0.0075_-0.0321_/_0.3)]
                                        ring-1 ring-[oklab(100%_0_0_/_0.05)]
                                        shadow-xl shadow-[#7d87ff1a]
                                        md:-mr-20
                                        lg:-mr-36">
                                    </div> */}
                                    <div class="shadow-lg md:rounded-3xl">
                                        <div class="
                                        bg-[oklch(58.5%_.233_277.117)]
                                        [clip-path:inset(0)]
                                        md:[clip-path:inset(0_round_1.5rem)]">
                                            <div class="
                                            absolute
                                            left-1/2
                                            -inset-y-px
                                            -z-10
                                            ml-10
                                            md:ml-20
                                            lg:ml-36
                                            w-[200%] 
                                            -skew-x-[30deg] 
                                            bg-[oklch(93%_.034_272.788)]
                                            opacity-20 
                                            ring-inset 
                                            ring-1 
                                            ring-white"></div>
                                            <div className="
                                            relative
                                            px-6
                                            pt-8
                                            sm:pt-16
                                            md:pl-16
                                            md:pr-0">
                                                
                                            </div>
                                        </div>
                                    </div>
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