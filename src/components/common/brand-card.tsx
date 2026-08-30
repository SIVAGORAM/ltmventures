import * as React from "react"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface BrandCardProps {
  category: string
  title: string
  description: string
  features: string[]
  ctaLabel: string
  ctaUrl: string
  accentColor: string
}

export function BrandCard({
  category,
  title,
  description,
  features,
  ctaLabel,
  ctaUrl,
  accentColor,
}: BrandCardProps) {
  return (
    <div className="bg-white border border-border rounded-[20px] p-8 md:p-12 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md">
      <div 
        className="text-xs font-semibold tracking-wider uppercase mb-4"
        style={{ color: accentColor }}
      >
        {category}
      </div>
      <h3 className="font-heading font-bold text-2xl md:text-[28px] text-primary-navy leading-tight mb-4">
        {title}
      </h3>
      <p className="text-muted-foreground mb-8 line-clamp-3">
        {description}
      </p>
      
      <ul className="flex flex-col gap-3 mb-10 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check 
              className="h-5 w-5 shrink-0 mt-0.5" 
              style={{ color: accentColor }} 
            />
            <span className="text-primary-navy font-medium">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link 
        href={ctaUrl}
        className="inline-flex items-center text-primary-navy font-semibold group mt-auto"
      >
        {ctaLabel}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}

