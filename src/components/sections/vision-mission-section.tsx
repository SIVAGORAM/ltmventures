import { SectionContainer } from "@/components/common/section-container"
import { AnimatedSection } from "@/components/common/animated-section"

export function VisionMissionSection() {
  return (
    <section className="bg-primary-navy" id="vision-mission">
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 relative">
          
          {/* Vertical Divider (Desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-white/10"></div>
          
          {/* Vision */}
          <AnimatedSection className="md:pr-16 lg:pr-24">
            <div className="text-sm font-semibold tracking-[0.12em] uppercase text-lime-accent mb-6">
              OUR VISION
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight text-white mb-6">
              A Future of Financial Confidence.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              To empower individuals with the knowledge, solutions, and confidence they need to make better financial decisions and build a more secure financial future.
            </p>
          </AnimatedSection>

          {/* Horizontal Divider (Mobile) */}
          <div className="md:hidden w-full h-px bg-white/10"></div>

          {/* Mission */}
          <AnimatedSection className="md:pl-16 lg:pl-24" transition={{ delay: 0.2 }}>
            <div className="text-sm font-semibold tracking-[0.12em] uppercase text-lime-accent mb-6">
              OUR MISSION
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight text-white mb-6">
              Making Financial Decisions Simpler.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              To deliver specialized wealth management and protection solutions through our core brands, providing intuitive and transparent financial experiences for everyone.
            </p>
          </AnimatedSection>
          
        </div>
      </SectionContainer>
    </section>
  )
}

