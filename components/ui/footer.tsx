import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="relative bg-slate-800" role="contentinfo">
            <div className="relative py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    {/* Bottom area */}
                    <div className="md:flex md:items-center md:justify-between">
                        {/* Social links */}
                        <ul className="flex items-center justify-center mb-4 md:order-1 md:mb-0 space-x-4">
                            <li>
                                <Link
                                    href="tel:+37068712334"
                                    className="flex justify-center items-center w-10 h-10 bg-slate-700 hover:bg-blue-500 text-slate-300 hover:text-white rounded-full transition-all duration-300 group"
                                    aria-label="mobile-phone"
                                >
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="mailto:elstyga@gmail.com"
                                    className="flex justify-center items-center w-10 h-10 bg-slate-700 hover:bg-blue-500 text-slate-300 hover:text-white rounded-full transition-all duration-300 group"
                                    aria-label="email"
                                >
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                                        <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    target="_blank"
                                    href="https://rekvizitai.vz.lt/imone/elstyga/"
                                    className="flex justify-center items-center w-10 h-10 bg-slate-700 hover:bg-blue-500 text-slate-300 hover:text-white rounded-full transition-all duration-300 group"
                                    aria-label="rekvizitai"
                                >
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                        <polyline points="9 22 9 12 15 12 15 22"/>
                                    </svg>
                                </Link>
                            </li>
                        </ul>

                        {/* Contact info and copyright */}
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-8">
                            <address className="not-italic">
                                <Link
                                    href="tel:+37068712334"
                                    className="text-lg font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300"
                                    aria-label="Skambinti telefonu"
                                >
                                    +370 687 12334
                                </Link>
                            </address>
                            <div className="text-sm text-slate-400">
                                &copy; {new Date().getFullYear()} Elstyga | Visos teisės saugomos
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
