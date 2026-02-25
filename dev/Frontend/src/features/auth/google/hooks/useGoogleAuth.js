import { useCallback, useRef } from "react";
import { googleAuthService } from "../service/google.service";

export const useGoogleAuth = ({ onSuccess, onError } = {}) => {
    console.log("CLIENT_ID:", import.meta.env.VITE_GOOGLE_CLIENT_ID);
    console.log("ORIGIN:", window.location.origin);
    const initializedRef = useRef(false);

    const startGoogle = useCallback(() => {
        if (!window.google?.accounts?.id) {
            onError?.("Google SDK no cargó. Revisa index.html.");
            return;
        }

        // Evita re-inicializar en cada click
        if (!initializedRef.current) {
            window.google.accounts.id.initialize({
                client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
                callback: async (resp) => {
                    try {
                        const data = await googleAuthService(resp.credential);
                        onSuccess?.(data);
                    } catch (err) {
                        onError?.(err?.message || "Error autenticando con Google.");
                    }
                },
            });

            initializedRef.current = true;
        }

        // Dispara el prompt
        window.google.accounts.id.prompt((notification) => {
            // opcional: debug si no se muestra
            console.log("GIS notification:", notification);
        });
    }, [onSuccess, onError]);

    return { startGoogle };
};