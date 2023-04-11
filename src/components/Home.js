import React from 'react';
import Lottie from "lottie-react";
import plainFlying from '../lottie/plainFlying.json';

const Home = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-purple-400">
                                Travel Now
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Get ready for
                            <br className="hidden md:block" />
                            Your next {' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                tranvel with us
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            We are a well known travel agency , we provide too many facilities to our customers , we have launched a  <span className='text-purple-500'>ramadan package (20% discount) , </span> in every travel , so what are you waiting for ? plan your next trip wiht us !!!
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row">
                        <a
                            href="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                        >
                            <span className="mr-3">Tranvel Now</span>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4"
                            >
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeMiterlimit="10"
                                    points="4,4 22,4 19,14 4,14 "
                                />
                                <circle
                                    cx="4"
                                    cy="22"
                                    r="2"
                                    strokeLinejoin="miter"
                                    strokeLinecap="square"
                                    stroke="none"
                                    fill="currentColor"
                                />
                                <circle
                                    cx="20"
                                    cy="22"
                                    r="2"
                                    strokeLinejoin="miter"
                                    strokeLinecap="square"
                                    stroke="none"
                                    fill="currentColor"
                                />
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeMiterlimit="10"
                                    points="1,1 4,4 4,14 2,18 23,18 "
                                />
                            </svg>
                        </a>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-purple-700"
                        >
                            Get 20% discount
                        </a>
                    </div>
                </div>
                <div className="relative lg:w-1/2">
                    <Lottie animationData={plainFlying} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Home;