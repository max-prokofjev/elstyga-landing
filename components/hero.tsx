'use client'

import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

export default function Hero() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            // @ts-ignore
            videoRef.current.play();
        }
    }, [videoRef]);

    return (
        <section>
            <Helmet>
                <title>Elektros Montavimo Darbai - Elstyga</title>
                <meta name="description"
                      content="Ieškote patikimo elektriko Vilniuje? Saugi elektros instaliacija Jūsų namams. Susisiekite dėl nemokamo įvertinimo šiandien."/>
                <meta property="og:title" content="Elstyga"/>
                <meta property="og:description" content="Elektros Montavimo Darbai - Elstyga"/>
            </Helmet>
            <div className="relative w-full h-screen">
                {/* Video Background */}
                <video 
                    className="w-full h-full object-cover" 
                    autoPlay={true} 
                    ref={videoRef} 
                    loop 
                    controls={false}
                    muted={true}
                    width="100%" 
                    height={1920}
                >
                    <source src="/videos/video.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/70 to-blue-900/90"></div>

                {/* Hero content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                        {/* Section header */}
                        <div className="max-w-3xl mx-auto text-center">
                            {/* Animated lightning icon */}
                            <div className="mb-6 animate-bounce">
                                <svg className="w-12 h-12 mx-auto text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100" 
                                data-aos="fade-up">
                                Elektros montavimo darbai
                                <span className="block text-3xl md:text-4xl mt-2 text-orange-400 font-normal">
                                    greitai, efektyviai, be rūpesčių
                                </span>
                            </h1>

                            <p className="text-xl text-blue-200 mb-12" 
                               data-aos="fade-up" 
                               data-aos-delay="200">
                                Profesionalūs sprendimai Jūsų namams ir verslui. 
                                <span className="block mt-2 text-blue-300">
                                    Patirtis. Kokybė. Patikimumas.
                                </span>
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-16 md:mb-24" 
                                 data-aos="fade-up" 
                                 data-aos-delay="400">
                                <a className="btn px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl hover:from-orange-400 hover:to-orange-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
                                   href="#contacts">
                                    Susisiekti
                                </a>
                                <a className="btn px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 inline-flex items-center"
                                   href="#zigzag">
                                    Sužinoti daugiau
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </a>
                            </div>

                            {/* Scroll indicator - repositioned */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block"
                                 style={{ bottom: '2rem' }}>
                                <svg className="w-6 h-6 text-blue-300/70 hover:text-blue-300 transition-colors duration-300" 
                                     fill="none" 
                                     stroke="currentColor" 
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
