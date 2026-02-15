import React from "react";
import logo from "@/assets/images/pages/icons/header/logo-app.svg";

//components
import { Container } from "../../ui/containers/Container";

export const Header = () => {
    return (
        <header className="py-8">
            <Container>
                <nav className="flex justify-between items-center" role="navigation" aria-label="Menú principal de navegación">
                    <div>
                        <a href="/" aria-label="Ir al inicio">
                            <img src={logo} alt="Logo de Elevare CV" className="w-auto h-10" />
                        </a>
                    </div>
                    <ul className="hidden justify-center gap-x-4 md:flex" role="list">
                        <li>
                            <a
                                href="#features"
                                className="font-sans text-sm md:text-base text-elevare-text-main p-2 hover:bg-elevare-neutral-light hover:text-elevare-primary rounded-lg transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-elevare-primary focus-visible:outline-offset-2"
                            >
                                Features
                            </a>
                        </li>
                        <li>
                            <a
                                href="#testimonials"
                                className="font-sans text-sm md:text-base text-elevare-text-main p-2 hover:bg-elevare-neutral-light hover:text-elevare-primary rounded-lg transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-elevare-primary focus-visible:outline-offset-2"
                            >
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a
                                href="#pricing"
                                className="font-sans text-sm md:text-base text-elevare-text-main p-2 hover:bg-elevare-neutral-light hover:text-elevare-primary rounded-lg transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-elevare-primary focus-visible:outline-offset-2"
                            >
                                Pricing
                            </a>
                        </li>
                    </ul>
                    <div className="flex justify-end items-center gap-x-3">
                        <a
                            href="/login"
                            className="hidden md:inline-block font-sans text-elevare-text-muted p-2 hover:bg-elevare-neutral-light hover:text-elevare-primary rounded-lg transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-elevare-primary focus-visible:outline-offset-2"
                        >
                            Sign in
                        </a>
                        <a 
                            href="/register" 
                            className="px-4 py-2 font-sans font-semibold text-sm md:text-base text-white bg-elevare-primary rounded-full hover:bg-elevare-primary-light transition-color duration-500 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-elevare-primary">
                            Get started <span className="hidden lg:inline">today</span>
                        </a>
                        <button 
                            type="button" 
                            aria-label="Abrir Menú de navegación"
                            className="flex md:hidden items-center justify-center w-7 h-7 focus-visible:outline-2 focus-visible:outline-elevare-primary focus-visible:outline-offset-2"
                        >
                            <svg
                                aria-hidden="true"
                                className="h-4 w-4 stroke-elevare-text-muted"
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