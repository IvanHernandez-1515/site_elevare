//assets
import GoogleIcon from "@/assets/images/pages/icons/Auth/Login/logo-google.svg";

const GoogleButton = ({ onClick, disabled }) => {
    return (
        <button
            type="button"
            disabled={disabled}
            className="font-sans font-semibold text-sm text-elevare-text-main bg-white rounded-xl ring-1 ring-black/10 inline-flex items-center justify-center w-full px-4 py-3 transition-colors duration-300 hover:bg-elevare-neutral-dark/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            aria-label="Continuar con Google"
            onClick={onClick}
        >
            <img src={GoogleIcon} alt="Iniciar sesión con Google" className="mr-3 h-5 w-5" />
            Continuar con Google
        </button>
    );
};
export default GoogleButton;