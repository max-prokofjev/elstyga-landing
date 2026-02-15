interface ServiceCardProps {
  icon: JSX.Element
  title: string
  description?: string
  aosDelay?: number
}

export default function ServiceCard({ icon, title, description, aosDelay = 0 }: ServiceCardProps) {
  return (
    <div
      className="group flex flex-col items-center p-4 rounded-xl border border-slate-200 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm">
        {icon}
      </div>
      <h4 className="text-sm font-semibold text-slate-800 text-center group-hover:text-blue-500 transition-colors">
        {title}
      </h4>
      {description && (
        <p className="text-xs text-slate-500 text-center mt-1">{description}</p>
      )}
    </div>
  )
}
