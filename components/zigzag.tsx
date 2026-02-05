import Image from 'next/image'

import Image1 from '@/public/images/image-01.jpg'
import Image2 from '@/public/images/image-02.jpg'
import Image3 from '@/public/images/image-03.jpg'

// List item component - consistent sizing
const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full bg-gradient-to-tr from-orange-500 to-orange-600 flex items-center justify-center shadow-sm">
      <svg className="w-3 h-3 fill-current text-white" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
      </svg>
    </div>
    <span className="ml-3">{children}</span>
  </li>
);

export default function Zigzag() {
  return (
    <section id="zigzag" className="relative bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-orange-600 bg-orange-100 rounded-full mb-4">
              Taupykite laiką ir nervus – rinkitės mus!
            </div>
            <h1 className="h2 mb-4 text-slate-800">
              Mūsų siūlomos paslaugos
            </h1>
            <p className="text-xl text-slate-500">
              Platus elektros paslaugų spektras Jūsų verslui ir namams
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <div className="relative">
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto rounded-xl shadow-lg"
                    src={Image1}
                    width={540}
                    height={405}
                    alt="Elektros Instaliacija"
                    priority
                  />
                </div>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-semibold text-xl text-orange-500 mb-2">Greitai, patikimai, be vargo!</div>
                  <h3 className="h3 mb-3 text-slate-800">Elektros Instaliacija ir Remontas</h3>
                  <p className="text-xl text-slate-500 mb-4">Nuo kabelių tiesimo iki gedimų šalinimo</p>
                  <ul className="text-lg text-slate-600 space-y-3">
                    <ListItem>Suteikta teisė būti ESO rangovų ir vykdyti darbus ESO elektros tinkle</ListItem>
                    <ListItem>ESO rangovo akto parengimas, pridavimas</ListItem>
                    <ListItem>Elektros kabelių tiesimas</ListItem>
                    <ListItem>Įžeminimo, žaibosaugos įrengimas</ListItem>
                    <ListItem>Gyvenamųjų daugiabučių namų elektros instaliacijos atnaujinimas, modernizavimas</ListItem>
                    <ListItem>Pramoninių, administracinių ir kitų pastatų elektros instaliacijos įrengimas</ListItem>
                    <ListItem>Statybinės technikos nuoma</ListItem>
                    <ListItem>Mini ekskavatoriaus nuoma su operatoriumi</ListItem>
                    <ListItem>Tranšėjos elektros kabeliams, vandentiekiui kasimas</ListItem>
                    <ListItem>Skylių gręžimas tvorai, pamatui iki 2m, grąžtų diametras 20, 30cm.</ListItem>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <div className="relative">
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto rounded-xl shadow-lg"
                    src={Image2}
                    width={540}
                    height={405}
                    alt="Elektros Tinklo Priežiūra"
                    priority
                  />
                </div>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-semibold text-xl text-orange-500 mb-2">Elektra be galvos skausmo!</div>
                  <h3 className="h3 mb-3 text-slate-800">Elektros Tinklo Priežiūra ir Dokumentacija</h3>
                  <p className="text-xl text-slate-500 mb-4">Užtikriname saugumą ir atitiktį standartams</p>
                  <ul className="text-lg text-slate-600 space-y-3">
                    <ListItem>Techninės dokumentacijos rengimas</ListItem>
                    <ListItem>Eksploatuoti vartotojo elektros įrenginius</ListItem>
                    <ListItem>Būti atsakingam už vartotojo elektros ūkį</ListItem>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <div className="relative">
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto rounded-xl shadow-lg"
                    src={Image3}
                    width={540}
                    height={405}
                    alt="Elektros Įrenginių Testavimas"
                    priority
                  />
                </div>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-semibold text-xl text-orange-500 mb-2">Su mumis - paprasta!</div>
                  <h3 className="h3 mb-3 text-slate-800">Elektros Įrenginių Testavimas</h3>
                  <p className="text-xl text-slate-500 mb-4">Identifikuojame problemas ir užtikriname kokybę</p>
                  <ul className="text-lg text-slate-600 space-y-3">
                    <ListItem>Elektros įrenginių bandymai ir matavimai</ListItem>
                    <ListItem>Kabelių izoliacijos, pereinamų kontaktų varžos matavimas</ListItem>
                    <ListItem>Įžeminimo įrenginių, žaibosaugos varžos matavimas</ListItem>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
