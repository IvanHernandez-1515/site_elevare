import {Link} from "react-router-dom";

//assets
import GoogleIcon from "@/assets/images/pages/icons/Auth/Login/logo-google.svg";

//layouts
import { AuthLayout } from "../../components";

//components
import { ContainerCustom } from "../../components";

const RegisterForm = () => {
    return(
        <AuthLayout>
            <ContainerCustom>
                <div className="px-3 my-10">
                    <div className="grid items-center gap-10 lg:grid-cols-2 max-w-6xl w-full">
                        <div className="flex flex-col gap-6">
                            <div>
                                <p className="font-sans font-semibold text-sm text-elevare-primary">
                                    Primer paso
                                </p>
                                <h1 id="auth-heading" className="font-sans font-bold text-4xl leading-tight tracking-tight text-elevare-text-main sm:text-5xl mt-2">
                                    Crea tu perfil en minutos
                                </h1>
                                <p className="font-sans text-base leading-7 text-elevare-text-muted sm:text-lg mt-3">
                                    Empieza con una base sólida y crea versiones para cada oportunidad, sin rehacerlo todo.
                                </p>
                                <p className="font-sans text-sm text-elevare-text-muted mt-3">
                                    Sin tarjeta. Puedes cambiar todo después.
                                </p>
                            </div>
                            <div className="bg-white/70 ring-1 ring-black/5 p-6 rounded-3xl">
                                <div className="flex items-center justify-between">
                                    <p className="font-sans text-sm font-semibold text-elevare-text-main">
                                        Versión: Vacante Marketing
                                    </p>
                                    <span className="inline-flex items-center rounded-full px-2.5 py-1 font-sans text-xs text-elevare-primary bg-elevare-primary/10">
                                        Lista para enviar
                                    </span>
                                </div>
                                <p className="font-sans text-sm text-elevare-text-muted mt-2">
                                    Enfocada a resultados, claridad y impacto en el primer vistazo.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="rounded-full px-3 py-1 font-sans text-xs text-elevare-text-main bg-elevare-neutral-dark/5">
                                        Comunicación
                                    </span>
                                    <span className="rounded-full px-3 py-1 font-sans text-xs text-elevare-text-main bg-elevare-neutral-dark/5">
                                        Análisis
                                    </span>
                                    <span className="rounded-full px-3 py-1 font-sans text-xs text-elevare-text-main bg-elevare-neutral-dark/5">
                                        Gestión
                                    </span>
                                </div>
                                <p className="mt-4 font-sans text-xs text-elevare-text-muted">
                                    Última edición: hace 2 min
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="bg-white/80 p-6 rounded-3xl shadow-xl ring-1 ring-black/5 sm:p-8">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h2 className="font-sans font-semibold text-xl text-elevare-text-main">
                                            Crear cuenta
                                        </h2>
                                        <p className="font-sans text-sm text-elevare-text-muted mt-1">
                                            Crea tu cuenta y empieza tu perfil base.
                                        </p>
                                    </div>
                                    <span className="bg-elevare-secondary/10 px-3 py-1 shrink-0 rounded-full font-sans text-xs text-elevare-secondary">
                                        Elevare CV
                                    </span>
                                </div>
                                <form className="mt-6 flex flex-col gap-y-4"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    <div>
                                        <label htmlFor="name" className="font-sans text-sm font-medium text-elevare-text-main">
                                            Nombre
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            placeholder="Tu nombre"
                                            className="block w-full mt-2 px-4 py-3 font-sans text-base text-elevare-text-main bg-white rounded-xl ring-1 ring-black/10 placeholder:text-elevare-text-muted/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="font-sans font-medium text-sm text-elevare-text-main">
                                            Correo electrónico
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            placeholder="tucorreo@ejemplo.com"
                                            required
                                            className="bg-white rounded-xl ring-1 ring-black/10 block w-full mt-2 px-4 py-3 font-sans text-base text-elevare-text-main placeholder:text-elevare-text-muted/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40"
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
                                            autoComplete="new-password"
                                            placeholder="••••••••"
                                            required
                                            className="block w-full mt-2 px-4 py-3 font-sans text-base text-elevare-text-main bg-white rounded-xl ring-1 ring-black/10 placeholder:text-elevare-text-muted/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="confirmPassword" className="font-sans text-sm font-medium text-elevare-text-main">
                                            Confirmar contraseña
                                        </label>
                                        <input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            autoComplete="new-password"
                                            placeholder="••••••••"
                                            required
                                            className="block w-full mt-2 px-4 py-3 font-sans text-base text-elevare-text-main bg-white rounded-xl ring-1 ring-black/10 placeholder:text-elevare-text-muted/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full mt-2 px-4 py-3 font-sans font-semibold text-base text-white bg-elevare-primary rounded-xl transition-colors duration-300 hover:bg-elevare-primary-light active:bg-elevare-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                                        aria-label="Iniciar sesión"
                                    >
                                        Entrar
                                    </button>
                                    <div className="flex items-center gap-3">
                                        <span className="h-px flex-1 bg-elevare-neutral-dark/10" aria-hidden="true" />
                                        <span className="font-sans text-xs text-elevare-text-muted">Ó</span>
                                        <span className="h-px flex-1 bg-elevare-neutral-dark/10" aria-hidden="true" />
                                    </div>
                                    <button
                                        type="button"
                                        className="font-sans font-semibold text-sm text-elevare-text-main bg-white rounded-xl ring-1 ring-black/10 inline-flex items-center justify-center w-full px-4 py-3 transition-colors duration-300 hover:bg-elevare-neutral-dark/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                                        aria-label="Continuar con Google"
                                        onClick={() => {
                                            // TODO: tu OAuth
                                        }}
                                    >
                                        <img src={GoogleIcon} alt="Iniciar sesión con Google" className="mr-3 h-5 w-5" />
                                        Continuar con Google
                                    </button>
                                    <div className="pt-2">
                                        <p className="font-sans text-sm text-elevare-text-muted">
                                            ¿Ya tienes cuenta?{" "}
                                            <Link
                                                to="/iniciar-sesion"
                                                className="font-sans font-semibold text-elevare-primary hover:text-elevare-primary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
                                            >
                                                Iniciar sesión
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                                <p className="sr-only">
                                    Este formulario es accesible por teclado. Usa Tab para navegar y Enter para enviar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerCustom>
        </AuthLayout>
    );
}
export default RegisterForm;