'use client'

import React, { useEffect, useRef } from "react";
import { PHONE, PHONE_DISPLAY } from '@/lib/site'

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
            <div className="relative w-full h-screen">
                {/* Video Background */}
                <video
                    className="w-full h-full object-cover"
                    autoPlay={true}
                    ref={videoRef}
                    loop
                    controls={false}
                    muted={true}
                >
                    <source src="/videos/video.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

                {/* Gradient Overlay - lighter for light theme */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/70"></div>

                {/* Hero content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                        {/* Section header */}
                        <div className="max-w-3xl mx-auto text-center">
                            {/* Animated lightning icon */}
                            <div className="mb-6 animate-bounce">
                                <svg className="w-12 h-12 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white"
                                data-aos="fade-up">
                                Elektros montavimo darbai
                                <span className="block text-3xl md:text-4xl mt-2 text-blue-400 font-normal">
                                    greitai, efektyviai, be rūpesčių
                                </span>
                            </h1>

                            <p className="text-xl text-white/80 mb-12"
                               data-aos="fade-up"
                               data-aos-delay="200">
                                Profesionalūs sprendimai Jūsų namams ir verslui.
                                <span className="block mt-2 text-white/70">
                                    Patirtis. Kokybė. Patikimumas.
                                </span>
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-16 md:mb-24"
                                 data-aos="fade-up"
                                 data-aos-delay="400">
                                <a className="btn px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-500 hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 inline-flex items-center justify-center"
                                   href={`tel:${PHONE}`}>
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                    {PHONE_DISPLAY}
                                </a>
                                <a className="btn px-8 py-4 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/30 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center"
                                   href="#kontaktai">
                                    Rašyti užklausą
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </a>
                            </div>

                            {/* Scroll indicator */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block"
                                 style={{ bottom: '2rem' }}>
                                <svg className="w-6 h-6 text-white/50 hover:text-white/70 transition-colors duration-300"
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
