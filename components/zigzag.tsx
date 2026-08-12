import { serviceCategories } from '@/lib/services-data'
import { serviceIcons } from '@/components/service-icons'
import ServiceCard from '@/components/service-card'

export default function Zigzag() {
  return (
    <section id="paslaugos" className="relative bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Section header */}
        <div className="max-w-3xl pb-12 md:pb-16" data-reveal>
          <h2 className="h2 mb-4 text-slate-800">
            Mūsų siūlomos paslaugos
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl">
            Platus elektros paslaugų spektras Jūsų verslui ir namams
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-14 md:space-y-20">
          {serviceCategories.map((category) => (
            <div key={category.id} className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Category header — sticky sidebar on large screens */}
              <div className="lg:col-span-4 lg:sticky lg:top-28" data-reveal>
                <div className="font-semibold text-blue-500 mb-2">{category.tagline}</div>
                <h3 className="h3 mb-3 text-slate-800">{category.title}</h3>
                <p className="text-lg text-slate-500">{category.subtitle}</p>
              </div>

              {/* Card grid */}
              <div className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
                {category.services.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    icon={serviceIcons[service.iconKey]}
                    title={service.title}
                    description={service.description}
                    revealDelay={Math.min(index * 50, 300)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
