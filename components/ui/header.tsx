import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './mobile-menu'

export default function Header() {
    return (
        <header className="absolute w-full z-30" role="banner">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20 md:h-24 bg-white/95 backdrop-blur-sm rounded-b-2xl px-3 sm:px-4 md:px-6 shadow-md">
                    {/* Site branding */}
                    <div className="shrink-0 mr-2 md:mr-4">
                        {/* Logo */}
                        <Link href="/" className="flex items-center group" aria-label="Elstyga">
                            <Image
                                src="/logo.png"
                                alt="Elstyga"
                                width={724}
                                height={236}
                                className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex md:grow" role="navigation" aria-label="Main navigation">
                        <ul className="flex grow justify-end flex-wrap items-center gap-8">
                            <li>
                                <Link href="/#services" className="text-slate-600 hover:text-blue-500 font-medium transition-colors duration-300">
                                    Apie Mus
                                </Link>
                            </li>
                            <li>
                                <Link href="/#zigzag" className="text-slate-600 hover:text-blue-500 font-medium transition-colors duration-300">
                                    Paslaugos
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contacts" className="text-slate-600 hover:text-blue-500 font-medium transition-colors duration-300">
                                    Kontaktai
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-slate-600 hover:text-blue-500 font-medium transition-colors duration-300">
                                    Blogas
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Contact button - icon on mobile, full on desktop */}
                    <div className="flex items-center ml-auto md:ml-8">
                        <Link
                            href="mailto:elstyga@gmail.com"
                            className="inline-flex items-center justify-center w-10 h-10 md:w-auto md:h-auto md:px-4 md:py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full md:rounded-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                            aria-label="contact-email">
                            <svg className="w-5 h-5 md:w-4 md:h-4 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <span className="hidden md:inline">elstyga@gmail.com</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <MobileMenu />
                </div>
            </div>
        </header>
    )
}
