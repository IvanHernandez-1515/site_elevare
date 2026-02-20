const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

async function request(path, { method = "GET", headers = {}, body } = {}) {
    const res = await fetch(`${API_BASE_URL}${path}`, {
        method,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
        credentials: "include",
    });

    const contentType = res.headers.get("content-type") || "";
    const data = contentType.includes("application/json") ? await res.json() : await res.text();

    if (!res.ok) {
        // Normaliza error para UI
        const message = (data && data.message) ? data.message : `HTTP ${res.status}`;
        const details = data && data.errors ? data.errors : undefined;
        const err = new Error(message);
        err.status = res.status;
        err.details = details;
        throw err;
    }

    return data;
}

export const http = {
    get: (path, opts) => request(path, { ...opts, method: "GET" }),
    post: (path, body, opts) => request(path, { ...opts, method: "POST", body }),
    put: (path, body, opts) => request(path, { ...opts, method: "PUT", body }),
    del: (path, opts) => request(path, { ...opts, method: "DELETE" }),
};
