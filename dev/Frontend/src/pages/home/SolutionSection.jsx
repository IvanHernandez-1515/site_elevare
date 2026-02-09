import React from 'react'
import { Container } from '../../components'

const SolutionSection = () => {
    return (
        <>
            <section aria-labelledby="solutions-heading" className="my-10">
                <Container>
                    <div className="px-3">
                        <div className="text-center">
                            <h2 className="font-sans text-3xl tracking-tight text-elevare-text-main sm:text-4xl">
                                Hacer un buen currículum <span className="text-elevare-accent">no</span> debería ser complicado
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 my-auto">
                            <div className="group opacity-75 hover:opacity-100 transition-opacity duration-300">
                                <div className="w-9 rounded-lg bg-slate-500 group-hover:bg-elevare-primary transition-colors duration-300">    
                                    <svg
                                    aria-hidden="true"
                                    className="h-9 w-9"
                                    fill="none"
                                    >
                                        <defs>
                                            <linearGradient
                                            id="icon-gradient"
                                            x1="11.5"
                                            y1="18"
                                            x2="36"
                                            y2="15.5"
                                            gradientUnits="userSpaceOnUse"
                                            >
                                                {/* color normal */}
                                                <stop offset=".194" stopColor="#ffffff" />
                                                {/* color hover */}
                                                <stop offset="1" stopColor="#6692F1" className="group-hover:stop-[#2563eb]" />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
                                            stroke="url(#icon-gradient)"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="mt-2 text-xl text-slate-900">Un CV diferente para cada vacante</p>
                                </div>
                            </div>
                            <div className="">

                            </div>
                            <div className="">

                            </div>
                            <div className="">

                            </div>
                        </div>
                        <div className="text-center">
                            <p className="font-sans mt-4 text-lg tracking-tight text-slate-700">Elevare CV simplifica todo con una plataforma flexible y moderna.</p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
export default SolutionSection