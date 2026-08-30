import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { AnimatedSection } from "@/components/common/animated-section"

export function CareersCtaSection() {
  return (
    <section className="bg-[#102448] py-14 sm:py-16 md:py-20 relative overflow-hidden select-none">
      {/* Subtle Background Graphics */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4F8A10]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
      
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 relative z-10 text-center">
        <AnimatedSection className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Build the Future With Us.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed mb-8 sm:mb-10 max-w-2xl">
            Join a team focused on innovation, meaningful experiences, and building better financial solutions for the future.
          </p>
          <Link 
            href="/careers" 
            className={cn(buttonVariants({ size: "lg" }), "bg-[#4F8A10] text-white hover:bg-[#4F8A10]/90 rounded-xl font-medium h-12 sm:h-14 px-8 sm:px-10 text-base sm:text-lg border-0 group")}
          >
            Explore Careers <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
