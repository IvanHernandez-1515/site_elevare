import { useMemo, useState } from "react";
import { validateRegister } from "../schema/register.schema";
import { registerService } from "../service/register.service";
//assets
import GoogleIcon from "@/assets/images/pages/icons/Auth/Login/logo-google.svg";

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const RegisterForm = () => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

    const setField = (field) => (e) => {
        const v = e.target.value;
        setValues((prev) => ({ ...prev, [field]: v }));
        // si ya había error en ese campo, lo limpiamos al teclear
        setErrors((prev) => {
            if (!prev[field]) return prev;
            const copy = { ...prev };
            delete copy[field];
            return copy;
        });
        setApiError("");
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setApiError("");

        const nextErrors = validateRegister(values);
        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) return;

        setIsSubmitting(true);
        try {
            const payload = {
                name: values.name.trim(),
                email: values.email.trim(),
                password: values.password,
            };

            const data = await registerService(payload);

            // TODO: aquí decides qué hacer:
            // - guardar token en store
            // - redirigir a login
            // - mostrar toast
            console.log("REGISTER OK:", data);

            // ejemplo: limpia form
            setValues(initialValues);
        } catch (err) {
            setApiError(err?.message || "Ocurrió un error inesperado.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="mt-6 flex flex-col gap-y-4" onSubmit={onSubmit}>
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
                    value={values.name}
                    onChange={setField("name")}
                    className="block w-full mt-2 px-4 py-3 font-sans text-base text-elevare-text-main bg-white rounded-xl ring-1 ring-black/10 placeholder:text-elevare-text-muted/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40"
                />
                {errors.name && <p className="mt-2 font-sans text-xs text-red-600">{errors.name}</p>}
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
                    value={values.email}
                    onChange={setField("email")}
                    className="bg-white rounded-xl ring-1 ring-black/10 block w-full mt-2 px-4 py-3 font-sans text-base text-elevare-text-main placeholder:text-elevare-text-muted/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40"
                />
                {errors.email && <p className="mt-2 font-sans text-xs text-red-600">{errors.email}</p>}
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
                    value={values.password}
                    onChange={setField("password")}
                    className="block w-full mt-2 px-4 py-3 font-sans text-base text-elevare-text-main bg-white rounded-xl ring-1 ring-black/10 placeholder:text-elevare-text-muted/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40"
                />
                {errors.password && <p className="mt-2 font-sans text-xs text-red-600">{errors.password}</p>}
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
                    value={values.confirmPassword}
                    onChange={setField("confirmPassword")}
                    className="block w-full mt-2 px-4 py-3 font-sans text-base text-elevare-text-main bg-white rounded-xl ring-1 ring-black/10 placeholder:text-elevare-text-muted/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40"
                />
                {errors.confirmPassword && (
                    <p className="mt-2 font-sans text-xs text-red-600">{errors.confirmPassword}</p>
                )}
            </div>

            {apiError && (
                <div className="rounded-xl bg-red-50 ring-1 ring-red-200 px-4 py-3">
                    <p className="font-sans text-sm text-red-700">{apiError}</p>
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting || hasErrors}
                className="w-full mt-2 px-4 py-3 font-sans font-semibold text-base text-white bg-elevare-primary rounded-xl transition-colors duration-300 hover:bg-elevare-primary-light active:bg-elevare-primary-dark disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-label="Crear cuenta"
            >
                {isSubmitting ? "Creando cuenta..." : "Crear cuenta"}
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

export default RegisterForm;
