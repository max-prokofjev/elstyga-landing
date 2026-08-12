'use client'

import { useEffect } from 'react'

/**
 * Progressive-enhancement scroll reveal.
 *
 * Content is fully visible by default. Only once this component mounts (JS is
 * running) do we add the `reveal-js` class, which lets the initial hidden state
 * in style.css apply. If JS never runs or throws, nothing is ever hidden, so a
 * failed load can never leave sections blank the way AOS did.
 */
export default function ScrollReveal() {
    useEffect(() => {
        const root = document.documentElement
        root.classList.add('reveal-js')

        const elements = Array.from(
            document.querySelectorAll<HTMLElement>('[data-reveal]')
        )

        const prefersReduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches

        if (prefersReduced || !('IntersectionObserver' in window)) {
            elements.forEach((el) => el.classList.add('is-visible'))
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
        )

        elements.forEach((el) => {
            // Anything already on screen at load reveals instantly (no jump).
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add('is-visible')
            } else {
                observer.observe(el)
            }
        })

        return () => observer.disconnect()
    }, [])

    return null
}
