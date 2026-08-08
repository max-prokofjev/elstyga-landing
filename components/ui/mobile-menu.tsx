'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { PHONE, PHONE_DISPLAY } from '@/lib/site'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden ml-2">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-slate-500 hover:text-slate-700 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="fixed top-28 left-0 right-0 z-20 px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <ul className="bg-white rounded-lg shadow-lg px-4 py-4 space-y-2">
            <li>
              <Link
                href="/#apie-mus"
                className="block px-4 py-2 text-slate-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
                onClick={() => setMobileNavOpen(false)}
              >
                Apie Mus
              </Link>
            </li>
            <li>
              <Link
                href="/#paslaugos"
                className="block px-4 py-2 text-slate-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
                onClick={() => setMobileNavOpen(false)}
              >
                Paslaugos
              </Link>
            </li>
            <li>
              <Link
                href="/#kontaktai"
                className="block px-4 py-2 text-slate-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
                onClick={() => setMobileNavOpen(false)}
              >
                Kontaktai
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block px-4 py-2 text-slate-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
                onClick={() => setMobileNavOpen(false)}
              >
                Blogas
              </Link>
            </li>
            <li className="pt-2 border-t border-slate-100">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-colors duration-200"
                onClick={() => setMobileNavOpen(false)}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                {PHONE_DISPLAY}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
