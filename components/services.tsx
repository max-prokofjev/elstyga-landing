import React from 'react'
import Script from 'next/script'

export default function Services() {
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Elektros montavimo paslaugos",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Elstyga"
    },
    "areaServed": {
      "@type": "City",
      "name": "Vilnius"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Elektros paslaugos",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Elektros instaliacija",
            "description": "Elektros instaliacijos montavimo darbai"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Elektros gedimų šalinimas",
            "description": "Operatyvus elektros gedimų šalinimas"
          }
        }
      ]
    }
  }

  return (
    <>
      <Script id="services-structured-data" type="application/ld+json">
        {JSON.stringify(servicesStructuredData)}
      </Script>
      <section className="relative py-16 md:py-24 bg-gray-50" id="apie-mus">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

          {/* Section header — left aligned to break the centered rhythm */}
          <div className="max-w-3xl pb-12 md:pb-16" data-reveal>
            <h2 className="h2 mb-5 text-slate-800">
              Ilgametė patirtis ir aukšta kvalifikacija
              <span className="block text-blue-500 mt-2">jūsų elektros rūpesčių sprendimas</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl">
              Užtikrinkite savo namų ar verslo elektros saugumą ir efektyvumą su mūsų profesionalų pagalba.
            </p>
          </div>

          {/* Differentiators */}
          <div className="grid gap-6 md:grid-cols-3 items-start">

            {/* 1st item */}
            <div className="group flex flex-col p-7 bg-white rounded-2xl border border-slate-200 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.15)] hover:shadow-[0_18px_40px_-14px_rgba(15,23,42,0.22)] hover:-translate-y-1 transition-all duration-300"
                 data-reveal style={{ '--reveal-delay': '0ms' } as React.CSSProperties}>
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-md shadow-blue-500/25">
                <svg className="w-14 h-14 text-white" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                    <path className="stroke-current" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
                    <path className="stroke-current" d="M22 30h4v12h-4z" />
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-poppins mb-3 text-slate-800 group-hover:text-blue-500 transition-colors">Jūsų patikimas elektros partneris</h3>
              <p className="text-slate-500 leading-relaxed">
                Elektros energetikos sektoriuje pasižymime patikimumu ir lankstumu. Sėkmingai dirbame tiek su įmonėmis, tiek su privačiais užsakovais.
              </p>
            </div>

            {/* 2nd item */}
            <div className="group flex flex-col p-7 bg-white rounded-2xl border border-slate-200 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.15)] hover:shadow-[0_18px_40px_-14px_rgba(15,23,42,0.22)] hover:-translate-y-1 transition-all duration-300"
                 data-reveal style={{ '--reveal-delay': '90ms' } as React.CSSProperties}>
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-md shadow-blue-500/25">
                <svg className="w-14 h-14 text-white" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <path className="stroke-current" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                  <path className="stroke-current" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-poppins mb-3 text-slate-800 group-hover:text-blue-500 transition-colors">Sertifikuoti elektros sprendimai</h3>
              <p className="text-slate-500 leading-relaxed">
                Sertifikuoti elektros įrenginių įrengimo ir eksploatavimo paslaugoms. Suteikta teisė būti statinio statybos rangovu. Garantuojame aukščiausią kokybę.
              </p>
            </div>

            {/* 3rd item */}
            <div className="group flex flex-col p-7 bg-white rounded-2xl border border-slate-200 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.15)] hover:shadow-[0_18px_40px_-14px_rgba(15,23,42,0.22)] hover:-translate-y-1 transition-all duration-300"
                 data-reveal style={{ '--reveal-delay': '180ms' } as React.CSSProperties}>
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-md shadow-blue-500/25">
                <svg className="w-14 h-14 text-white" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                    <path className="stroke-current" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                    <circle className="stroke-current" cx="17" cy="5" r="3" />
                    <path className="stroke-current" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-poppins mb-3 text-slate-800 group-hover:text-blue-500 transition-colors">Profesionali elektros instaliacija</h3>
              <p className="text-slate-500 leading-relaxed">
                Jūsų projektas, mūsų profesionalumas. Aukščiausios kokybės elektros darbai, atliekami pagal visus saugos standartus.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}
