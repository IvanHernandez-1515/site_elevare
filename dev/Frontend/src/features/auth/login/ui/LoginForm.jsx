import { Link } from "react-router-dom";

//assets
import GoogleIcon from "@/assets/images/pages/icons/Auth/Login/logo-google.svg";

const LoginForm = () => {
    return (
        <form className="mt-6 flex flex-col gap-y-4"
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
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
                <label htmlFor="password" className="font-sans font-medium text-sm text-elevare-text-main">
                    Contraseña
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="••••••••"
                    required
                    className="bg-white rounded-xl ring-1 ring-black/10 block w-full mt-2 px-4 py-3 font-sans text-base text-elevare-text-main placeholder:text-elevare-text-muted/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40"
                />
            </div>
            <div className="flex justify-between">
                <label className="font-sans text-sm text-elevare-text-muted inline-flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="remember"
                        className="text-elevare-primary h-4 w-4 rounded border-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40"
                    />
                    Recordarme
                </label>
                <Link
                    to="/recuperar"
                    className="font-sans font-semibold text-sm text-elevare-primary hover:text-elevare-primary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
                >
                    ¿Olvidaste tu contraseña?
                </Link>
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
        </form>
    );
};
export default LoginForm;