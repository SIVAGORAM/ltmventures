import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string
  title: string
  description?: React.ReactNode
  alignment?: "left" | "center"
  theme?: "light" | "dark"
}

export function SectionHeading({ 
  eyebrow, 
  title, 
  description, 
  alignment = "left", 
  theme = "light",
  className,
  ...props 
}: SectionHeadingProps) {
  return (
    <div 
      className={cn(
        "flex flex-col gap-4",
        alignment === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span className={cn(
          "text-sm md:text-base font-semibold tracking-[0.12em] uppercase",
          theme === "dark" ? "text-lime-accent" : "text-primary-navy"
        )}>
          {eyebrow}
        </span>
      )}
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-[48px] leading-tight font-bold",
        theme === "dark" ? "text-white" : "text-primary-navy"
      )}>
        {title}
      </h2>
      {description && (
        <div className={cn(
          "text-base md:text-lg max-w-[700px]",
          theme === "dark" ? "text-white/80" : "text-muted-foreground"
        )}>
          {description}
        </div>
      )}
    </div>
  )
}

