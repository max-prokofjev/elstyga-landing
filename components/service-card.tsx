import React from 'react'

interface ServiceCardProps {
  icon: JSX.Element
  title: string
  description?: string
  revealDelay?: number
}

export default function ServiceCard({ icon, title, description, revealDelay = 0 }: ServiceCardProps) {
  return (
    <div
      className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-[0_6px_20px_-10px_rgba(15,23,42,0.15)] hover:shadow-[0_12px_28px_-12px_rgba(15,23,42,0.22)] hover:-translate-y-0.5 transition-all duration-300"
      data-reveal
      style={{ '--reveal-delay': `${revealDelay}ms` } as React.CSSProperties}
    >
      <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-slate-800 group-hover:text-blue-500 transition-colors">
          {title}
        </h4>
        {description && (
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  )
}
