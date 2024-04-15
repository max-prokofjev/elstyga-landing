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
    }, [ videoRef ]);

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
                <video className="w-full h-full object-cover" autoPlay={true} ref={videoRef} loop controls={false}
                       muted={true}
                       width="100%" height={1920}>
                    <source src="/videos/video.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-blue-900"></div>
                {/* Hero content */}
                <div className="absolute top-0 left-0 w-full h-full pt-32 pb-10 md:pt-40 md:pb-2">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h1 mb-4" data-aos="fade-up">Elektros montavimo darbai: greitai, efektyviai, be
                            rūpesčių</h1>
                        <p className="text-xl text-blue-400 mb-8" data-aos="fade-up" data-aos-delay="200">Elektros
                            montavimas be rūpesčių - tai įmanoma!</p>
                        <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                            <div data-aos="fade-up" data-aos-delay="400">
                                <a className="btn text-white bg-orange-600 hover:bg-orange-700 w-full mb-4 sm:w-auto sm:mb-0"
                                   href="#contacts">Susisiekti</a>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="600">
                                <a className="btn text-white bg-blue-700 hover:bg-blue-800 w-full sm:w-auto sm:ml-4"
                                   href="#zigzag">Sužinoti daugiau</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
