import { serviceCategories } from '@/lib/services-data'
import { serviceIcons } from '@/components/service-icons'
import ServiceCard from '@/components/service-card'

export default function Zigzag() {
  return (
    <section id="zigzag" className="relative bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-blue-600 bg-blue-100 rounded-full mb-4">
              Taupykite laiką ir nervus – rinkitės mus!
            </div>
            <h2 className="h2 mb-4 text-slate-800">
              Mūsų siūlomos paslaugos
            </h2>
            <p className="text-xl text-slate-500">
              Platus elektros paslaugų spektras Jūsų verslui ir namams
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-16">
            {serviceCategories.map((category) => (
              <div key={category.id}>
                {/* Category header */}
                <div className="max-w-3xl mx-auto text-center mb-8">
                  <div className="font-semibold text-xl text-blue-500 mb-2">{category.tagline}</div>
                  <h3 className="h3 mb-3 text-slate-800">{category.title}</h3>
                  <p className="text-xl text-slate-500">{category.subtitle}</p>
                </div>

                {/* Card grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
                  {category.services.map((service, index) => (
                    <ServiceCard
                      key={service.id}
                      icon={serviceIcons[service.iconKey]}
                      title={service.title}
                      description={service.description}
                      aosDelay={Math.min(index * 50, 400)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
