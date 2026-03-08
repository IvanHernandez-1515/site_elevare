import { Bell, ChevronDown, Menu, Search } from "lucide-react";

export const Topbar = () => {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white font-sans">
            <nav
                className="mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 lg:pl-72"
                aria-label="Barra superior principal"
            >
                <section className="flex min-w-0 items-center gap-3" aria-label="Identidad y navegación">

                    <a
                        href="#"
                        className="flex items-center gap-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                        aria-label="Ir al inicio del dashboard de Elevare CV"
                    >
                        <span
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-base font-semibold text-blue-700"
                            aria-hidden="true"
                        >
                            E
                        </span>

                        <span className="min-w-0">
                            <span className="block truncate text-sm font-semibold text-slate-900">
                                Elevare CV
                            </span>
                        </span>
                    </a>
                </section>

                <section
                    className="hidden flex-1 justify-center md:flex"
                    aria-label="Búsqueda global"
                >
                    <div className="relative w-full max-w-2xl">
                        <label htmlFor="dashboard-search" className="sr-only">
                            Buscar currículums, plantillas o acciones
                        </label>

                        <Search
                            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                            aria-hidden="true"
                        />

                        <input
                            id="dashboard-search"
                            name="dashboard-search"
                            type="search"
                            placeholder="Buscar CV, plantilla o acción..."
                            className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-10 pr-16 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                        />

                        <span
                            className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-slate-200 bg-white px-2 py-1 text-xs text-slate-500 lg:inline-flex"
                            aria-hidden="true"
                        >
                            Ctrl K
                        </span>
                    </div>
                </section>

                <section
                    className="flex items-center gap-2 sm:gap-3"
                    aria-label="Acciones de usuario"
                >
                    <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 md:hidden"
                        aria-label="Abrir búsqueda"
                    >
                        <Search className="h-5 w-5" aria-hidden="true" />
                    </button>

                    <button
                        type="button"
                        className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                        aria-label="Ver notificaciones"
                    >
                        <Bell className="h-5 w-5" aria-hidden="true" />
                        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500" aria-hidden="true" />
                    </button>

                    <button
                        type="button"
                        className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-2 py-1.5 text-left transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                        aria-label="Abrir menú de cuenta"
                        aria-haspopup="menu"
                        aria-expanded="false"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                            alt={`Foto de perfil de prueba`}
                            className="h-9 w-9 rounded-xl object-cover"
                        />

                        <span className="hidden min-w-0 md:block">
                            <span className="block truncate text-sm font-medium text-slate-900">
                                Test
                            </span>
                            <span className="block truncate text-xs text-slate-500">
                                Client
                            </span>
                        </span>

                        <ChevronDown
                            className="hidden h-4 w-4 text-slate-500 md:block"
                            aria-hidden="true"
                        />
                    </button>
                </section>
            </nav>
        </header>
    );
};