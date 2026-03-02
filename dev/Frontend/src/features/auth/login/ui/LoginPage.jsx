import { Link } from "react-router-dom";
//commons
import { PageMeta } from "../../../../components";
//layouts
import { AuthLayout } from "../../../../components";
//components
import { ContainerCustom } from "../../../../components";

import LoginForm from "./LoginForm";
const LoginPage = () => {
    return (
        <>
            <PageMeta
                title="Iniciar sesion"
                description="Accede a tu cuenta en Elevare"
                canonicalPath="/iniciar-sesion"
                noIndex
            />
            <AuthLayout>
                <ContainerCustom>
                    <div className="px-3 my-10">
                        <div className="grid items-center gap-10 lg:grid-cols-2 max-w-6xl w-full">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <p className="font-sans font-semibold text-sm text-elevare-primary">
                                        Bienvenido de vuelta
                                    </p>
                                    <h1 id="auth-heading" className="font-sans font-bold text-4xl leading-tight tracking-tight text-elevare-text-main sm:text-5xl mt-2">
                                        Tu próximo empleo empieza aquí
                                    </h1>
                                    <p className="font-sans text-base leading-7 text-elevare-text-muted sm:text-lg mt-3">
                                        Entra y retoma tu CV justo donde lo dejaste: claro, ordenado y listo para enviar.
                                    </p>
                                    <p className="font-sans text-sm text-elevare-text-muted mt-3">
                                        Tu información se mantiene privada y segura.
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
                                                Iniciar sesión
                                            </h2>
                                            <p className="font-sans text-sm text-elevare-text-muted mt-1">
                                                Accede a tu cuenta para seguir editando tu perfil.
                                            </p>
                                        </div>
                                        <span className="bg-elevare-secondary/10 px-3 py-1 shrink-0 rounded-full font-sans text-xs text-elevare-secondary">
                                            Elevare CV
                                        </span>
                                    </div>
                                    <LoginForm />
                                    <div className="pt-2">
                                        <p className="font-sans text-sm text-elevare-text-muted">
                                            ¿No tienes cuenta?{" "}
                                            <Link
                                                to="/registrarse"
                                                className="font-sans font-semibold text-elevare-primary hover:text-elevare-primary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
                                            >
                                                Crear una
                                            </Link>
                                        </p>
                                    </div>
                                    <p className="sr-only">
                                        Este formulario es accesible por teclado. Usa Tab para navegar y Enter para enviar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerCustom>
            </AuthLayout>
        </>
    );
};
export default LoginPage