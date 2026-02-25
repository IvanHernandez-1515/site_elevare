import { http } from "../../../../shared/lib/http";

export const googleAuthService = (credential) => {
    return http.post("/v1/auth/google", { credential });
};