import { Link } from 'react-router-dom';

//assets
import logo from "@/assets/images/pages/icons/general/logo-appv1.svg";
import logoFace from "@/assets/images/pages/icons/general/logo-facebook.svg";
import logoInsta from "@/assets/images/pages/icons/general/logo-instagram.svg";
import logoX from "@/assets/images/pages/icons/general/logo-x.svg";
import logoGit from "@/assets/images/pages/icons/general/logo-git.svg";

//components
import { Container } from "../../ui/containers/Container";

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-400/10" aria-labelledby="footer-title">
            <Container>
                <div className="px-3 py-10">
                    <h2 id="footer-title" className="sr-only">
                        Pie de página
                    </h2>
                    <div className="flex flex-col items-center">
                        <Link
                            to="/"
                            className="inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary focus-visible:ring-offset-2 focus-visible:ring-offset-elevare-neutral-light"
                            aria-label="Ir al inicio de Elevare CV"
                        >
                            <img
                                src={logo}
                                alt="Elevare CV"
                                className="h-10 w-auto"
                                loading="lazy"
                                decoding="async"
                            />
                        </Link>
                    </div>
                    <div className="mt-10 flex flex-col items-center gap-6 border-t border-slate-400/10 pt-10 sm:flex-row-reverse sm:justify-between sm:gap-4">
                        <nav aria-label="Redes sociales" className="flex items-center gap-x-3">
                            <a
                                href="https://facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-lg transition hover:bg-elevare-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary focus-visible:ring-offset-2 focus-visible:ring-offset-elevare-neutral-light"
                                aria-label="Abrir Facebook en una pestaña nueva"
                            >
                                <img
                                    src={logoFace}
                                    alt="Logo de Facebook"
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </a>
                            <a
                                href="https://instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-lg transition hover:bg-elevare-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary focus-visible:ring-offset-2 focus-visible:ring-offset-elevare-neutral-light"
                                aria-label="Abrir Instagram en una pestaña nueva"
                            >
                                <img
                                    src={logoInsta}
                                    alt="Logo de Insta"
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </a>
                            <a
                                href="https://x.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-lg transition hover:bg-elevare-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-elevare-primary focus-visible:ring-offset-2 focus-visible:ring-offset-elevare-neutral-light"
                                aria-label="Abrir X en una pestaña nueva"
                            >
                                <img
                                    src={logoX}
                                    alt="Logo de X"
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </a>
                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-lg transition hover:bg-elevare-secondary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-elevare-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-elevare-neutral-light"
                                aria-label="Abrir GitHub en una pestaña nueva"
                            >
                                <img
                                    src={logoGit}
                                    alt="Logo de Github"
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </a>
                        </nav>
                        <p className="text-sm text-elevare-text-muted">
                            <span className="sr-only">Derechos de autor.</span>© {year} Elevare CV. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
