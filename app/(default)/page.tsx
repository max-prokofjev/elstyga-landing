import React from "react";

import Hero from '@/components/hero'
import Services from '@/components/services'
import Contacts from '@/components/contacts'
import Zigzag from '@/components/zigzag'

export const metadata = {
    title: 'Elstyga',
    description: 'Elektros montavimo darbai',
}

export default function Home() {
    return (<>
            <Hero/>
            <Services/>
            <Zigzag/>
            <Contacts/>
        </>
    )
}
