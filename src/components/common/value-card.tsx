import * as React from "react"

interface ValueCardProps {
  number: string
  title: string
  description: string
}

export function ValueCard({ number, title, description }: ValueCardProps) {
  return (
    <div className="bg-white p-8 rounded-[16px] border border-border shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-full bg-light-surface flex items-center justify-center font-heading font-bold text-xl text-primary-navy mb-6">
        {number}
      </div>
      <h3 className="font-heading font-semibold text-xl text-primary-navy mb-4">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  )
}

