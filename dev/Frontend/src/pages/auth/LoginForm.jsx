const LoginForm = () => {
    return (
        <main className="grid place-items-center min-h-dvh p-4 bg-elevare-neutral-light">
            <section
                aria-labelledby="auth-heading"
                className="grid items-center w-full max-w-6xl gap-10 md:grid-cols-2"
            >
                {/* Left: Copy / Brand */}
                <div className="flex flex-col gap-6 order-2 md:order-1">
                    <div>
                        <p className="font-sans text-sm font-semibold text-elevare-primary">
                            Bienvenido de vuelta
                        </p>

                        <h1
                            id="auth-heading"
                            className="mt-2 font-sans font-bold text-4xl leading-tight tracking-tight text-elevare-text-main sm:text-5xl"
                        >
                            Tu próximo empleo empieza aquí
                        </h1>

                        <p className="mt-3 font-sans text-base leading-7 text-elevare-text-muted sm:text-lg">
                            Entra y retoma tu CV justo donde lo dejaste: claro, ordenado y listo para enviar.
                        </p>

                        <p className="mt-3 font-sans text-sm text-elevare-text-muted">
                            Tu información se mantiene privada y segura.
                        </p>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="order-1 md:order-2">
                    <div className="rounded-3xl p-6 sm:p-8 bg-white/80 shadow-xl ring-1 ring-black/5">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h2 className="font-sans font-semibold text-xl text-elevare-text-main">
                                    Iniciar sesión
                                </h2>
                                <p className="mt-1 font-sans text-sm text-elevare-text-muted">
                                    Accede a tu cuenta para seguir editando tu perfil.
                                </p>
                            </div>

                            {/* Chip pequeño de contexto */}
                            <span className="shrink-0 rounded-full px-3 py-1 font-sans text-xs text-elevare-secondary bg-elevare-secondary/10">
                                Elevare CV
                            </span>
                        </div>

                        <form
                            className="mt-6 flex flex-col gap-4"
                            onSubmit={(e) => {
                                e.preventDefault();
                                // TODO: tu lógica
                            }}
                        >
                            <div>
                                <label htmlFor="email" className="font-sans text-sm font-medium text-elevare-text-main">
                                    Correo electrónico
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="tucorreo@ejemplo.com"
                                    required
                                    className="block w-full mt-2 px-4 py-3 font-sans text-base text-elevare-text-main bg-white rounded-xl ring-1 ring-black/10
                                    placeholder:text-elevare-text-muted/70
                                    focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="font-sans text-sm font-medium text-elevare-text-main">
                                    Contraseña
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    placeholder="••••••••"
                                    required
                                    className="block w-full mt-2 px-4 py-3 font-sans text-base text-elevare-text-main bg-white rounded-xl ring-1 ring-black/10
                                    placeholder:text-elevare-text-muted/70
                                    focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40"
                                />
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <label className="inline-flex items-center gap-2 font-sans text-sm text-elevare-text-muted">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        className="h-4 w-4 rounded border-black/20 text-elevare-primary
                                        focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40"
                                    />
                                    Recordarme
                                </label>
                                <a
                                    href="/forgot-password"
                                    className="font-sans text-sm font-semibold text-elevare-primary hover:text-elevare-primary-light
                                    focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
                                >
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center w-full mt-2 px-4 py-3 font-sans text-base font-semibold text-white
                                bg-elevare-primary rounded-xl
                                transition-colors duration-300
                                hover:bg-elevare-primary-light active:bg-elevare-primary-dark
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                                aria-label="Iniciar sesión"
                            >
                                Entrar
                            </button>

                            
                            <div className="flex items-center gap-3">
                                <span className="h-px flex-1 bg-elevare-neutral-dark/10" aria-hidden="true" />
                                <span className="font-sans text-xs text-elevare-text-muted">o</span>
                                <span className="h-px flex-1 bg-elevare-neutral-dark/10" aria-hidden="true" />
                            </div>

                            <button
                                type="button"
                                className="inline-flex items-center justify-center w-full px-4 py-3 font-sans text-sm font-semibold text-elevare-text-main
                                bg-white rounded-xl ring-1 ring-black/10
                                transition-colors duration-300
                                hover:bg-elevare-neutral-dark/5
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                                aria-label="Continuar con Google"
                                onClick={() => {
                                    // TODO: tu OAuth
                                }}
                            >
                                <svg aria-hidden="true" viewBox="0 0 48 48" className="mr-3 h-5 w-5">
                                    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.67 32.659 29.197 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.957 3.043l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917Z" />
                                    <path fill="#FF3D00" d="M6.306 14.691 12.873 19.51C14.655 15.108 18.959 12 24 12c3.059 0 5.842 1.154 7.957 3.043l5.657-5.657C34.046 6.053 29.268 4 24 4c-7.682 0-14.354 4.337-17.694 10.691Z" />
                                    <path fill="#4CAF50" d="M24 44c5.094 0 9.783-1.953 13.293-5.121l-6.131-5.188C29.109 35.091 26.683 36 24 36c-5.176 0-9.64-3.318-11.283-7.946l-6.52 5.02C9.504 39.556 16.227 44 24 44Z" />
                                    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.141 5.691l.003-.002 6.131 5.188C36.863 39.274 44 34 44 24c0-1.341-.138-2.651-.389-3.917Z" />
                                </svg>
                                Continuar con Google
                            </button>

                            <div className="pt-2">
                                <p className="font-sans text-sm text-elevare-text-muted">
                                    ¿No tienes cuenta?{" "}
                                    <a
                                        href="/register"
                                        className="font-sans font-semibold text-elevare-primary hover:text-elevare-primary-light
                                            focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
                                    >
                                        Crear una
                                    </a>
                                </p>
                            </div>
                        </form>

                        {/* Nota accesible */}
                        <p className="sr-only">
                            Este formulario es accesible por teclado. Usa Tab para navegar y Enter para enviar.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};
export default LoginForm;