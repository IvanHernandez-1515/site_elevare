export const isEmail = (value = "") =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());

export const minLength = (value = "", n = 8) =>
    String(value).length >= n;

export const hasUpper = (value = "") => /[A-Z]/.test(value);
export const hasLower = (value = "") => /[a-z]/.test(value);
export const hasNumber = (value = "") => /\d/.test(value);

export const passwordStrength = (value = "") => {
    const v = String(value);
    return {
        min: minLength(v, 8),
        upper: hasUpper(v),
        lower: hasLower(v),
        number: hasNumber(v),
    };
};
