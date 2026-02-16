import { Link } from 'react-router-dom';

//components
import { Container } from "../../components";

const HeroSection = () => {
    return (
        <>
            <section aria-labelledby="hero-heading" className="overflow-hidden mt-5">
                <Container>
                    <div className="px-3">
                        <div className="md:flex md:gap-x-12 max-w-none items-center">
                            <div className="relative flex shrink-0 flex-col gap-8 w-full md:max-w-xl">
                                <h1 id="hero-heading" className="font-sans text-5xl md:text-7xl font-bold text-elevare-text-main text-pretty">
                                    Tu próximo empleo{" "}
                                    <span className="text-elevare-primary">empieza aquí</span>
                                </h1>
                                <p className="font-sans text-lg md:text-xl leading-7 tracking-tight text-elevare-text-muted text-pretty">
                                    Haz que tu experiencia se lea como una historia ganadora. En minutos, no en horas.
                                </p>
                                <div className="flex flex-wrap items-center gap-4">
                                    <Link
                                        to="/registrarse"
                                        className="
                                        font-sans text-base font-semibold text-white 
                                        bg-elevare-primary 
                                        px-4 py-2 rounded-md 
                                        hover:bg-elevare-primary-light 
                                        transition-color duration-500 ease-out 
                                        focus-visible:outline-2 
                                        focus-visible:outline-offset-2 
                                        focus-visible:outline-elevare-primary"
                                        aria-label="Learn more about how Elevare CV works"
                                    >
                                        Comenzar ahora{" "}
                                        <span aria-hidden="true">→</span>
                                    </Link>
                                    <Link
                                        to="/como-funciona"
                                        className="
                                        font-sans text-base font-semibold text-elevare-primary
                                        px-4 py-2
                                        transition-colors duration-300
                                        rounded-md
                                        hover:bg-elevare-primary/10
                                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-elevare-primary"
                                        aria-label="Ver cómo funciona Elevare CV"
                                    >
                                        Ver cómo funciona
                                    </Link>
                                </div>
                            </div>
                            <div className="flex justify-end sm:justify-center lg:justify-start gap-x-8" aria-hidden="true">
                                <div className="flex shrink-0 w-[11rem] items-center md:order-last">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&h=528&q=80"
                                            alt="Grupo de personas colaborando en proyecto"
                                            className="w-full aspect-2/3 object-cover rounded-2xl shadow-xl"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center shrink-0 w-[11rem] gap-y-8">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=400&h=256&q=80"
                                            alt="Persona usando computadora portátil"
                                            className="w-full aspect-2/3 object-cover rounded-2xl shadow-xl"
                                        />
                                    </div>
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400&h=256&q=80"
                                            alt="Joven revisando documentos sobre una mesa"
                                            className="w-full aspect-2/3 object-cover rounded-2xl shadow-xl"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center shrink-0 w-[11rem] order-3 gap-y-8 pt-30 md:pt-0 md:pb-60">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                                            alt="Persona trabajando con gráficos en pantalla"
                                            className="w-full aspect-2/3 object-cover rounded-2xl shadow-xl"
                                        />
                                    </div>
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                            alt="Oficina moderna con escritorio y planta"
                                            className="w-full aspect-2/3 object-cover rounded-2xl shadow-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
export default HeroSection;