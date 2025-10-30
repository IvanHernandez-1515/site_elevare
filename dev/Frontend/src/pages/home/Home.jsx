import React from 'react';
import { HomeLayout } from '../../components';
import { Container } from '../../components';

const HomePage = () => {
    return (
        <>
            <HomeLayout>
                <Container>
                    <div className="my-10">
                        <div className="px-3">
                            <div className="md:flex md:flex-row md:gap-x-12 items-center">
                                <div className="relative flex flex-col gap-8">
                                    <h1 className="font-sans text-5xl md:text-7xl font-bold text-slate-900 text-pretty">
                                        We’re changing the way{" "}
                                        <span className="text-slate-700">people connect</span>
                                    </h1>
                                    <p className="font-sans text-lg md:text-xl leading-7 tracking-tight text-slate-700 text-pretty">
                                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
                                    </p>
                                    <div className="flex gap-x-4">
                                        <button className="font-sans text-base font-semibold text-white bg-slate-700 px-4 py-2 rounded-md">
                                            Learn more{" "}<span aria-hidden="true">→</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="flex justify-center md:justify-start gap-x-8">
                                    <div className="flex shrink-0 w-[11rem] items-center md:order-4 lg:order-1">
                                        <div className="relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&h=528&q=80"
                                                alt=""
                                                className="w-full aspect-2/3 object-cover rounded-2xl shadow-xl"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center shrink-0 w-[11rem] order-2 gap-y-8">
                                        <div className="relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=400&h=256&q=80"
                                                alt=""
                                                className="w-full aspect-2/3 object-cover rounded-2xl shadow-xl"
                                            />
                                        </div>  
                                        <div className="relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400&h=256&q=80"
                                                alt=""
                                                className="w-full aspect-2/3 object-cover rounded-2xl shadow-xl"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center shrink-0 w-[11rem] order-3 gap-y-8 pt-30 md:pt-0 md:pb-60">
                                        <div className="relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                                                alt=""
                                                className="w-full aspect-2/3 object-cover rounded-2xl shadow-xl"
                                            />
                                        </div>
                                        <div className="relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                                alt=""
                                                className="w-full aspect-2/3 object-cover rounded-2xl shadow-xl"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </HomeLayout>
        </>
    );
}
export default HomePage;