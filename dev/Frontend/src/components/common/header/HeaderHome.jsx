import React from "react";
import logo from "@/assets/images/pages/icons/logo-app.svg";

//components
import { Container } from "../../ui/containers/Container";

export const Header = () => {
    return (
        <header className="py-8 bg-white">
            <Container>
                <nav className="flex justify-between items-center">
                    <div>
                        <a href="/" aria-label="Ir al inicio">
                            <img src={logo} alt="Elevare CV logo" className="w-auto h-10"/>
                        </a>
                    </div>
                    <div className="hidden justify-center gap-x-4 md:flex">
                        <a href="#features" className="font-sans text-sm md:text-base text-elevare-text-main">
                            <span className="p-2 rounded-lg hover:bg-elevare-neutral-light hover:text-slate-900 transition-colors duration-500 ease-in-out">
                                Features
                            </span>
                        </a>
                        <a href="#testimonials" className="font-sans text-sm md:text-base text-elevare-text-main">
                            <span className="p-2 rounded-lg hover:bg-elevare-neutral-light hover:text-slate-900 transition-colors duration-500 ease-out">
                                Testimonials
                            </span>
                        </a>
                        <a href="#pricing" className="font-sans text-sm md:text-base text-elevare-text-main">
                            <span className="p-2 rounded-lg hover:bg-elevare-neutral-light hover:text-slate-900 transition-color duration-500 ease-out">
                                Pricing
                            </span>
                        </a>
                    </div>
                    <div className="flex justify-end items-center gap-x-3">
                        <a href="/login" className="hidden md:inline-block font-sans text-slate-700">
                            <span className="p-2 rounded-lg hover:bg-elevare-neutral-light transition-colors duration-500 ease-out">
                                Sign in
                            </span>
                        </a>
                        <a href="/register" className="px-4 py-2 rounded-full font-sans font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-color duration-500 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                            Get started <span className="hidden lg:inline">today</span>
                        </a>
                        <button type="button" aria-label="Toggle Navigation" className="flex md:hidden items-center justify-center w-7 h-7">
                            <svg
                                aria-hidden="true"
                                className="h-4 w-4 stroke-slate-700"
                                fill="none"
                                strokeWidth={2}
                                strokeLinecap="round"
                            >
                                <path d="M0 1H14M0 7H14M0 13H14" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </Container>
        </header>
    );
};