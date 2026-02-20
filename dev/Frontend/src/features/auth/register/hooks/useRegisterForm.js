import { useMemo, useState } from "react";
import { validateRegister } from "../schema/register.schema";
import { registerService } from "../service/register.service";

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export function useRegisterForm({ onSuccess } = {}) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

    const setField = (field) => (e) => {
        const v = e.target.value;
        setValues((prev) => ({ ...prev, [field]: v }));
        setErrors((prev) => {
            if (!prev[field]) return prev;
            const copy = { ...prev };
            delete copy[field];
            return copy;
        });
        setApiError("");
    };

    const submit = async (e) => {
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

            setValues(initialValues);
            onSuccess?.(data);
        } catch (err) {
            setApiError(err?.message || "Ocurrió un error inesperado.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        values,
        errors,
        apiError,
        isSubmitting,
        hasErrors,
        setField,
        submit,
    };
}