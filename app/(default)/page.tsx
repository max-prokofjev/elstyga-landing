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
    '@type': 'Electrician',
    '@id': 'https://elstyga.lt',
    name: 'Elstyga',
    description: 'Profesionalios elektros instaliacijos paslaugos namams ir verslui Vilniuje.',
    url: 'https://elstyga.lt',
    telephone: '+37068712334',
    email: 'elstyga@gmail.com',
    image: 'https://elstyga.lt/logo.png',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Vilnius',
        addressCountry: 'LT',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: '54.68916',
        longitude: '25.27989',
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
    },
    areaServed: {
        '@type': 'City',
        name: 'Vilnius',
    },
    sameAs: [
        'https://rekvizitai.vz.lt/imone/elstyga/',
    ],
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
