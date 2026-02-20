import { http } from "@/shared/lib/http";

export async function registerService(payload) {
    // /api/auth/register en backend (ver abajo)
    return http.post("/auth/register", payload);
}