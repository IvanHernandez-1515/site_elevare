import React from "react";
import logo from "@/assets/images/pages/icons/logo-app.svg"

export const Header = () => {
    return (
        <header className="py-10 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <nav className="relative z-50 flex justify-between">
                    <div className="flex items-center md:gap-x-12">
                        <a href="#" aria-label="Ir al inicio">
                            <img
                                src={logo}
                                alt="Elevare CV logo"
                                className="h-10 w-auto"
                            />
                        </a>
                        <div className="hidden md:flex md:gap-x-6">
                            <a
                                href="#features"
                                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                            >
                                Features
                            </a>
                            <a
                                href="#testimonials"
                                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                            >
                                Testimonials
                            </a>
                            <a
                                href="#pricing"
                                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                            >
                                Pricing
                            </a>
                        </div>
                    </div>

                    {/* CTA + mobile toggle */}
                    <div className="flex items-center gap-x-5 md:gap-x-8">
                        {/* Login (escritorio) */}
                        <div className="hidden md:block">
                            <a
                                href="/login"
                                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                            >
                                Sign in
                            </a>
                        </div>

                        {/* Botón "Get started" */}
                        <a
                            href="/register"
                            className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
                        >
                            <span>
                                Get started <span className="hidden lg:inline">today</span>
                            </span>
                        </a>

                        {/* Botón hamburguesa (mobile) */}
                        <div className="-mr-1 md:hidden">
                            <button
                                type="button"
                                aria-label="Toggle Navigation"
                                aria-expanded="false"
                                className="relative z-10 flex h-8 w-8 items-center justify-center focus:outline-none"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
                                    fill="none"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                >
                                    <path
                                        d="M0 1H14M0 7H14M0 13H14"
                                        className="origin-center transition"
                                    />
                                    <path
                                        d="M2 2L12 12M12 2L2 12"
                                        className="origin-center transition scale-90 opacity-0"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};
