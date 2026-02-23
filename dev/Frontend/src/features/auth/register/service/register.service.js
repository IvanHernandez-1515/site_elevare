import {http} from "../../../../shared/lib/http";

export const registerService = async(payload) => {
    //envia post al backend
    //http agrega el prefijo api por medio de VITE_API_BASE_URL
    //en dev se resuelve por el proxy de vite y en prod lo resuelve traefik
    return http.post("/auth/register", payload);
}