//hooks
import { useMemo, useState } from "react";
//utilities
import { validateRegister } from "../schema/register.schema";
import { registerService } from "../service/register.service";

//estado inicial del formulario
const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export const useRegisterForm = ({ onSuccess } = {}) => {
    const [values, setValues] = useState(initialValues);//guarda valores de inputs
    const [errors, setErrors] = useState({});//guarda errores por campo
    const [apiError, setApiError] = useState("");//guarda error general del backend
    const [isSubmitting, setIsSubmitting] = useState(false);//marca si esta enviando

    //calcula si hay errores para deshabilitar submit
    const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

    const setField = (field) => (e) => {
        const v = e.target.value;//lee el valor del input
        setValues((prev) => ({ ...prev, [field]: v }));//actualiza solo el campo editado

        setErrors((prev) => {
            if (!prev[field]) return prev//si no hay error en ese campo no hace nada
            const copy = { ...prev }//copia errores actuales
            delete copy[field]//quita el error del campo al teclear
            return copy
        })

        setApiError("")//limpia error general al empezar a corregir
    };

    const submit = async (e) => {
        e.preventDefault()//evita recarga del navegador
        setApiError("")//limpia error general antes de validar

        const nextErrors = validateRegister(values)//valida valores actuales
        setErrors(nextErrors)//guarda errores si existen
        if (Object.keys(nextErrors).length > 0) return//si hay errores no llama al backend

        setIsSubmitting(true)//marca envio en proceso
        try {
            const payload = {
                name: values.name.trim(),
                email: values.email.trim(),
                password: values.password,
            }//crea payload limpio para backend

            const data = await registerService(payload)//llama a la api para registrar usuario

            setValues(initialValues)//reinicia formulario
            onSuccess?.(data)//ejecuta callback si fue proporcionado
        } catch (err) {
            setApiError(err?.message || "Ocurrio un error inesperado.")//guarda mensaje para UI
        } finally {
            setIsSubmitting(false)//quita estado de envio pase lo que pase
        }
    }

    //expone estado y acciones para el componente UI
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