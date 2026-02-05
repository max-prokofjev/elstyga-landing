import React from "react";

import Hero from '@/components/hero'
import Services from '@/components/services'
import Contacts from '@/components/contacts'
import Zigzag from '@/components/zigzag'
import BlogPreview from '@/components/blog-preview'

export const metadata = {
    title: 'Elstyga | Profesionalios Elektros Paslaugos Vilniuje',
    description: 'Profesionalios elektros instaliacijos paslaugos namams ir verslui Vilniuje. Elektros montavimas, gedimų šalinimas, apšvietimo sprendimai.',
}

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Elstyga',
    description: 'Profesionalios elektros instaliacijos paslaugos namams ir verslui Vilniuje.',
    url: 'https://elstyga.lt',
    telephone: '+37060000000',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Vilnius',
        addressCountry: 'LT',
    },
    areaServed: {
        '@type': 'City',
        name: 'Vilnius',
    },
    serviceType: [
        'Elektros instaliacija',
        'Elektros montavimas',
        'Elektros gedimų šalinimas',
        'Apšvietimo sprendimai',
    ],
}

export default function Home() {
    return (<>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero/>
            <Services/>
            <Zigzag/>
            <BlogPreview/>
            <Contacts/>
        </>
    )
}
