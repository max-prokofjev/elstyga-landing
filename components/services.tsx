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
        // Add more services as needed
      ]
    }
  }

  return (
    <>
      <Script id="services-structured-data" type="application/ld+json">
        {JSON.stringify(servicesStructuredData)}
      </Script>
      <section className="relative py-20 bg-gradient-to-b from-blue-900 to-blue-800" id="services">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]" />
        <div className="absolute right-0 top-0 -mt-8 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-0 -mb-8 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="py-12 md:py-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
                Ilgametė patirtis ir aukšta kvalifikacija
                <span className="block text-white mt-2">jūsų elektros energijos rūpesčių sprendimas</span>
              </h2>
              <p className="text-xl text-blue-200">
                Užtikrinkite savo namų ar verslo elektros saugumą ir efektyvumą su mūsų profesionalų pagalba.
              </p>
            </div>

            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

              {/* 1st item */}
              <div className="relative flex flex-col items-center p-6 bg-gradient-to-br from-blue-900/50 to-blue-800/50 rounded-2xl border border-blue-700/10 shadow-2xl group hover:scale-105 transition-transform duration-300" 
                   data-aos="fade-up" 
                   data-aos-delay="100">
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-shadow">
                  <svg className="w-16 h-16 text-white" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                      <path className="stroke-current" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
                      <path className="stroke-current" d="M22 30h4v12h-4z" />
                    </g>
                  </svg>
                </div>
                <h4 className="h4 mb-3 text-white group-hover:text-orange-400 transition-colors">Jūsų patikimas elektros partneris</h4>
                <p className="text-lg text-blue-200 group-hover:text-blue-100 transition-colors">
                  Elektros energetikos sektoriuje pasižymime patikimumu ir lankstumu – sėkmingai dirbame tiek su įmonėmis, tiek su privačiais užsakovais.
                </p>
              </div>

              {/* 2nd item */}
              <div className="relative flex flex-col items-center p-6 bg-gradient-to-br from-blue-900/50 to-blue-800/50 rounded-2xl border border-blue-700/10 shadow-2xl group hover:scale-105 transition-transform duration-300" 
                   data-aos="fade-up" 
                   data-aos-delay="200">
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-shadow">
                  <svg className="w-16 h-16 text-white" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <path className="stroke-current" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                    <path className="stroke-current" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
                  </svg>
                </div>
                <h4 className="h4 mb-3 text-white group-hover:text-orange-400 transition-colors">Sertifikuoti elektros sprendimai</h4>
                <p className="text-lg text-blue-200 group-hover:text-blue-100 transition-colors">
                  Sertifikuoti elektros įrenginių iki 10 kV instaliacijos ir eksploatavimo paslaugoms. Garantuojame aukščiausią kokybę.
                </p>
              </div>

              {/* 3rd item */}
              <div className="relative flex flex-col items-center p-6 bg-gradient-to-br from-blue-900/50 to-blue-800/50 rounded-2xl border border-blue-700/10 shadow-2xl group hover:scale-105 transition-transform duration-300" 
                   data-aos="fade-up" 
                   data-aos-delay="300">
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-shadow">
                  <svg className="w-16 h-16 text-white" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                      <path className="stroke-current" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                      <circle className="stroke-current" cx="17" cy="5" r="3" />
                      <path className="stroke-current" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                    </g>
                  </svg>
                </div>
                <h4 className="h4 mb-3 text-white group-hover:text-orange-400 transition-colors">Profesionali elektros instaliacija</h4>
                <p className="text-lg text-blue-200 group-hover:text-blue-100 transition-colors">
                  Jūsų projektas, mūsų profesionalumas. Aukščiausios kokybės elektros darbai, atliekami pagal visus saugos standartus.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}
