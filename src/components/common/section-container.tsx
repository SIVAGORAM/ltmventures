import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  paddingY?: "default" | "none" | "small";
}

export function SectionContainer({ 
  className, 
  children, 
  paddingY = "default",
  ...props 
}: SectionContainerProps) {
  return (
    <section
      className={cn(
        "w-full max-w-[1200px] mx-auto px-5 md:px-6 lg:px-10",
        paddingY === "default" && "py-16 md:py-24 lg:py-32",
        paddingY === "small" && "py-8 md:py-12 lg:py-16",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
