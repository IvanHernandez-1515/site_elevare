import { useState } from "react";
import { useRegisterForm } from "../hooks/useRegisterForm";
import AlertToast from "../../../../components/ui/alerts/Alert";

import { useGoogleAuth } from "../../google/hooks/useGoogleAuth";
import GoogleButton from "../../google/ui/GoogleButton";

const RegisterForm = () => {
    const [toast, setToast] = useState({ open: false, type: "info", message: "", title: "" });
    const { values, errors, apiError, isSubmitting, hasErrors, setField, submit } =
    useRegisterForm({
        onSuccess: (data) => {
            setToast({
            open: true,
            type: "info", // o "success" si quieres
            title: "Verifica tu cuenta",
            message: data?.message || "Revisa tu correo para verificar tu cuenta.",
            });

            console.log("REGISTER OK:", data);
        },
    });//obtiene estado validaciones y acciones desde el hook

    const { startGoogle } = useGoogleAuth({
        onSuccess: (data) => {
        console.log("GOOGLE OK:", data);
        // aquí tu toast success
        setToast({ 
            open: true, 
            type:"success", 
            title: "Bienvenido",
            message: data.message
        })
        // y redirigir:
        // navigate("/dashboard");
        },
        onError: (msg) => {
        console.error("GOOGLE ERROR:", msg);
        setToast({ 
            open: true, 
            type:"error", 
            title: "Algo Falló",
            message: message
        })
        },
    });
    return (
        <form className="mt-6 flex flex-col gap-y-4" onSubmit={submit}>
            <AlertToast
                open={toast.open}
                type={toast.type}
                title={toast.title}
                message={toast.message}
                duration={5000}
                position="top-right"
                onClose={() => setToast((t) => ({ ...t, open: false }))}
            />
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
            <GoogleButton onClick={startGoogle} disabled={isSubmitting} />
        </form>
    );
};
export default RegisterForm;