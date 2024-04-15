export default function Services() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Ilgametė patirtis ir aukšta kvalifikacija – jūsų elektros energijos rūpesčių sprendimas</h2>
            <p className="text-xl text-blue-400">Užtikrinkite savo namų ar verslo elektros saugumą ir efektyvumą su mūsų profesionalų pagalba.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-orange-600" width="64" height="64" rx="32" />
                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-orange-100" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
                  <path className="stroke-current text-orange-300" d="M22 30h4v12h-4z" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Jūsų patikimas elektros partneris</h4>
              <p className="text-lg text-blue-400 text-center">Elektros energetikos sektoriuje pasižymime patikimumu ir lankstumu – sėkmingai dirbame tiek su įmonėmis, tiek su privačiais užsakovais.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-orange-600" cx="32" cy="32" r="32" />
                <path className="stroke-current text-orange-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-orange-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2">Sertifikuoti elektros sprendimai</h4>
              <p className="text-lg text-blue-400 text-center">Sertifikuoti elektros įrenginių iki 10 kV instaliacijos ir eksploatavimo paslaugoms.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-orange-600" width="64" height="64" rx="32" />
                <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-orange-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                  <circle className="stroke-current text-orange-300" cx="17" cy="5" r="3" />
                  <path className="stroke-current text-orange-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Profesionali elektros instaliacija</h4>
              <p className="text-lg text-blue-400 text-center">Jūsų projektas, mūsų profesionalumas. Aukščiausios kokybės elektros darbai.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
