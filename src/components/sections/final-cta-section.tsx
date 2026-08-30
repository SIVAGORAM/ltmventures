import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionContainer } from "@/components/common/section-container"
import { AnimatedSection } from "@/components/common/animated-section"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function FinalCtaSection() {
  return (
    <SectionContainer paddingY="default" className="bg-lime-accent relative overflow-hidden">
      <AnimatedSection className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-navy mb-6 leading-tight">
          Ready to Build Your Financial Future?
        </h2>
        
        <p className="text-xl md:text-2xl text-primary-navy/80 mb-10 max-w-2xl mx-auto">
          Connect with LTM Ventures today to explore how WealthyStep can provide the guidance you need.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/contact" 
            className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto bg-primary-navy text-white hover:bg-primary-navy/90 rounded-full font-medium h-14 px-8 text-lg group")}
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link 
            href="/#about" 
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto bg-transparent border-primary-navy/20 text-primary-navy hover:bg-primary-navy/5 hover:text-primary-navy rounded-full font-medium h-14 px-8 text-lg")}
          >
            Learn More
          </Link>
        </div>
      </AnimatedSection>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cta-green/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
    </SectionContainer>
  )
}

